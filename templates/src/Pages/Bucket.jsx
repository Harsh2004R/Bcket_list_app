

import React, { useState, useEffect } from 'react';
import moment from "moment";
import axios from 'axios';
import { FaTrash, FaLockOpen, FaLock } from 'react-icons/fa';
const Bucket = () => {
  const [bucketItem, setBucketItem] = useState('');
  const [bucketList, setBucketList] = useState([]);
  const [targetDate, setTargetDate] = useState("")
  const [targetDates, setTargetDates] = useState({});
  const [alertMessage, setAlertMessage] = useState('');
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const searchParams = new URLSearchParams(location.search);
  const spect = searchParams.get('action') || '';





  const handleInputChange = (e) => {
    setBucketItem(e.target.value);
  };

  const handleAddItem = () => {
    if (bucketItem.trim() === '') {
      setAlertMessage("Please add an item.");
      return;
    }

    if (targetDate.trim() === '') {
      setAlertMessage("Please select a target date.");
      return;
    }
    if (bucketItem.trim() !== '' && moment(targetDate, 'YYYY-MM-DD', true).isValid()) {
      const newItem = {
        text: bucketItem,
        dateAdded: moment().format('DD-MM-YYYY'),
        timeAdded: moment().format('HH:mm:ss'),
        targetDate: moment(targetDate, 'YYYY-MM-DD').format('DD-MM-YYYY'),
      };
      setBucketList([...bucketList, newItem]);
      setTargetDates({ ...targetDates, [bucketItem]: targetDate });
      setBucketItem('');
      setTargetDate('');
      setIsButtonClicked(false)
      setAlertMessage("New item has been added😊but not saved😥!")

    }
  };


  const handleRemoveItem = (item) => {
    const updatedList = bucketList.filter((el) => el !== item);
    setBucketList(updatedList);
    // Make a DELETE request to remove the item from the server
    const userId = spect;
    const endpointUrl = `https://harsh-bucket.onrender.com/users/${userId}`;
    axios.get(endpointUrl)
      .then((response) => {
        const existingUser = response.data;
        const updatedUser = {
          ...existingUser,
          bucket: updatedList,
        };
        return axios.put(endpointUrl, updatedUser);
      })
      .then((response) => {
        // console.log('Deleted List:-', response.data.bucket);
      })
      .catch((error) => {
        console.error('Error updating bucket list after item removal:', error);
      });
  };

  const postBucketList = () => {
    setIsButtonClicked(true);
    const userId = spect;
    const endpointUrl = `https://harsh-bucket.onrender.com/users/${userId}`;
    axios.get(endpointUrl).then((response) => {
      const existingUser = response.data;
      // Create the updated user object
      const updatedUser = {
        ...existingUser, // Copy the existing user properties
        bucket: bucketList, // Update the bucket property with the new list

      };

      // Make a PUT request to update the user's data
      return axios.put(endpointUrl, updatedUser);

    })
      .then((response) => {
        // console.log('Bucket list updated successfully:', response.data.bucket);
      })
      .catch((error) => {
        // Handle error
        console.error('Error updating bucket list:', error);
      });
    setAlertMessage("Item data sent to the server ✔")
  };


  useEffect(() => {
    let ID = spect;
    axios.get(`https://harsh-bucket.onrender.com/users/${ID}`).then((response) => {
      const currentDate = moment().format('DD-MM-YYYY'); // Current date in your format
      const updatedBucketList = response.data.bucket.map((item) => {
        const isTargetDateExpired = moment(item.targetDate, 'MM-DD-YYYY').isBefore(currentDate);

        // Apply different CSS classes based on the comparison
        const itemStyle = {
          border: isTargetDateExpired ? '0.5px solid #FF0000' : '0.5px solid #FFFFFF',
          color: isTargetDateExpired ? '#FFFFFF' : '#000000',
          borderRadius: "8px",
        };
        return {
          ...item,
          itemStyle,
          isTargetDateExpired,
        };

      });
      setBucketList(updatedBucketList)



    })
      .catch((error) => {
        // Handle error
        console.error('Error updating bucket list:', error);
      });



  }, []);


  const handleAlertClose = () => {
    setAlertMessage('');
  };


  return (
    <>

      <div className="flex h-screen flex-col">
        <div className="flex h-auto" style={{ backgroundColor: "#58c991" }}>
          {/* Header content */}
          <div
            className="xs:w-65% sm:w-65% md:w-60% lg:w-45% xl:w-40% p-4"
            style={{ backgroundColor: "rgb(0, 156, 224)" }}
          >
            <h1 className="text-white xs:text-3xl md:text-6xl font-bold">My Bucket List</h1>
          </div>
        </div>

        <div className="p-4 w-full mx-auto shadow-md" style={{ backgroundColor: "#58c991" }}>
          {/* Select dropdown */}
          <div className="relative">

          </div>
        </div>

        <div className="w-full flex-grow" style={{ backgroundColor: "#232323" }}>
          <div
            className="container mx-auto p-4"
            style={{
              backgroundColor: "#232323",
              padding: "2%",
              boxShadow: "inset 5em 1em #009ce0",
            }}
          >
            <div className="flex items-center mb-2" >
              <div className="text-center mt-10">
                <h1 className="xs:text-xl xl:text-4xl font-semibold mb-4" style={{ color: "#FFFFFF" }}>
                  Make your bucket here...

                </h1>

              </div>
            </div>
            <div className="flex items-center space-x-2 mb-4" >
              <input
                type="text"
                className="border p-2 rounded-lg flex-grow"
                placeholder="Add a new item..."
                value={bucketItem}
                onChange={handleInputChange}
              />

              <button
                className="text-white px-4 py-2 rounded-lg"
                style={{
                  backgroundColor: "#009ce0",
                }}
                onClick={handleAddItem}
              >
                Add
              </button>
              <button
                style={{ textAlign: "left", display: "block" }}
                title="This is a save button"
                onClick={postBucketList}>
                {isButtonClicked ? <FaLock color='#58c991' size={"25px"} /> : <FaLockOpen color='rgb(239 68 68 )' size={"25px"} />}
              </button>
              <br />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3 style={{ color: "#fff" }} className="text-red-500 xs:text-sm xl:text-xl">Select taget date <span>:-</span></h3>
              <input
                type="date"
                style={{ borderRadius: "5px", padding: "3px" }}
                title="DD/MM/YYYY"
                placeholder="DD/MM/YYYY"
                value={targetDate}
                onChange={(e) => setTargetDate(e.target.value)}
              />
            </div>

            <ul className='xs:p-0 xl:p-12' style={{ marginTop: "20px" }}>
              {bucketList.map((item, index) => (






                <li className="xs:p-5 xl:p-10 flex items-center justify-between mb-2" key={item.text} style={item.itemStyle}>
                  <div>
                    <span className='xs:text-2xl xl:text-4xl' style={{ color: "#fff" }} dangerouslySetInnerHTML={{ __html: item.text }} />
                    <br />
                    <small className='' style={{ color: "#fff", fontSize: "10px" }} >Date Added: <span style={{ color: "#58c991" }}>{item.dateAdded}</span><span> ; </span><span><small className='' style={{ color: "#fff", fontSize: "10px" }} >Time Added: <span style={{ color: "#58c991" }}>{item.timeAdded}</span></small></span></small>
                    <br />
                    <small className='' style={{ color: "#fff", fontSize: "10px" }} >Target Date: <span style={{ color: "#58c991" }}>{moment(item.targetDate, 'DD-MM-YYYY').format('DD-MM-YYYY')}</span></small>
                  </div>
                  <div className="flex items-center">

                    <button onClick={() => handleRemoveItem(item)} className="text-red-500">
                      <FaTrash />
                    </button>

                  </div>
                </li>

              ))}

            </ul>
          </div>
        </div>
      </div>


      {/* conditional alert message starting here ------>*/}

      {alertMessage && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-opacity-50 bg-black z-50">
          <div className="p-4 rounded-md shadow-lg" style={{ backgroundColor: "#666666" }}>
            <p style={{ color: "#fff" }}>{alertMessage}</p>
            <button onClick={handleAlertClose} className="mt-2 text-white py-1 px-2 rounded-md " style={{ backgroundColor: "#4085bf" }}>
              Close
            </button>
          </div>
        </div>
      )}


    </>
  );
};

export default Bucket;