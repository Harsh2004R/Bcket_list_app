

// import React, { useState, useEffect } from 'react';
// import BucketItem from "../Components/BucketItem";
// import axios from 'axios'; // Import axios
// import { FaPencilAlt, FaClock, FaTrash, FaRegSave,FaArrowRight } from 'react-icons/fa';
// const Bucket = () => {
//   const [bucketItem, setBucketItem] = useState('');
//   const [bucketList, setBucketList] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [newTargetDate, setNewTargetDate] = useState('');
//   const [targetDate, setTargetDate] = useState("")






//   const handleEditClick = () => {
//     setIsEditing(true);
//     setNewTargetDate('');
//   };

//   const handleUpdateClick = () => {
//     if (newTargetDate.trim() !== '') {
//       onUpdate(newTargetDate);
//       setIsEditing(false);
//       setNewTargetDate('');
//     }
//   };





//   const handleInputChange = (e) => {
//     setBucketItem(e.target.value);
//   };

//   const handleAddItem = () => {
//     if (bucketItem.trim() !== '') {
//       setBucketList([...bucketList, bucketItem]);
//       setBucketItem('');

//     }
//   };

//   const handleRemoveItem = (item) => {
//     const updatedList = bucketList.filter((el) => el !== item);
//     setBucketList(updatedList);
//     // Make a DELETE request to remove the item from the server
//     const userId = 1;
//     const endpointUrl = `http://localhost:8080/users/${userId}`;
//     axios.get(endpointUrl)
//       .then((response) => {
//         const existingUser = response.data;
//         const updatedUser = {
//           ...existingUser,
//           bucket: updatedList,
//         };
//         return axios.put(endpointUrl, updatedUser);
//       })
//       .then((response) => {
//         console.log('Deleted List:-', response.data.bucket);
//       })
//       .catch((error) => {
//         console.error('Error updating bucket list after item removal:', error);
//       });
//   };

//   const postBucketList = () => {
//     const userId = 1;
//     const endpointUrl = `http://localhost:8080/users/${userId}`;
//     axios.get(endpointUrl).then((response) => {
//       const existingUser = response.data;
//       // Create the updated user object
//       const updatedUser = {
//         ...existingUser, // Copy the existing user properties
//         bucket: bucketList, // Update the bucket property with the new list

//       };

//       // Make a PUT request to update the user's data
//       return axios.put(endpointUrl, updatedUser);

//     })
//       .then((response) => {
//         console.log('Bucket list updated successfully:', response.data.bucket);
//       })
//       .catch((error) => {
//         // Handle error
//         console.error('Error updating bucket list:', error);
//       });
//   };


//   useEffect(() => {

//     let ID = 1
//     axios.get(`http://localhost:8080/users/${ID}`).then((response) => {

//       setBucketList(response.data.bucket)
//       // Create the updated user object
//       console.log(response.data.bucket)


//     })
//       .catch((error) => {
//         // Handle error
//         console.error('Error updating bucket list:', error);
//       });
//   }, []);



//   return (
//     <>

//      <div className="flex h-screen flex-col">
//       <div className="flex h-auto" style={{ backgroundColor: "#58c991" }}>
//         {/* Header content */}
//         <div
//           className="xs:w-65% sm:w-65% md:w-60% lg:w-45% xl:w-40% p-4"
//           style={{ backgroundColor: "rgb(0, 156, 224)" }}
//         >
//           <h1 className="text-white xs:text-3xl md:text-6xl font-bold">My Bucket List</h1>
//         </div>
//       </div>

//       <div className="p-4 w-full mx-auto shadow-md" style={{ backgroundColor: "#58c991" }}>
//         {/* Select dropdown */}
//         <div className="relative">
//           <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//             <svg
//               className="fill-current h-4 w-4"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 20 20"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </div>
//         </div>
//       </div>

//       <div className="w-full flex-grow" style={{ backgroundColor: "#232323" }}>
//         <div
//           className="container mx-auto p-4"
//           style={{
//             backgroundColor: "#232323",
//             padding: "2%",
//             boxShadow: "inset 5em 1em #009ce0",
//           }}
//         >
//           <div className="flex items-center mb-2" >
//             <h1 className="text-3xl font-semibold mb-4" style={{ color: "#FFFFFF" }}>
//               Heading
//               <button className="ml-2 text-white">
//                 <FaPencilAlt size={"20px"} />
//               </button>
//             </h1>
//           </div>
//           <div className="flex items-center space-x-2 mb-4" >
//             <input
//               type="text"
//               className="border p-2 rounded-lg flex-grow"
//               placeholder="Add a new item..."
//             value={bucketItem}
//             onChange={handleInputChange}
//             />

//             <button
//               className="text-white px-4 py-2 rounded-lg"
//               style={{
//                 backgroundColor: "#009ce0",
//               }}
//             onClick={handleAddItem}
//             >
//               Add
//             </button>
//             <button
//         style={{ textAlign: "left", display: "block"}}
//         title="This is a save button"
//         onClick={postBucketList}><FaRegSave color='yellow' size={"30px"}/></button>
//       <br />
//           </div>
//           <div style={{display:"flex" ,justifyContent:"space-between"}}>
//           <h3 style={{color:"#fff"}} className="text-red-500">Select taget date <span>:-</span></h3>
//           <input
//             type="date"
//             style={{ borderRadius: "5px", padding: "3px" }}
//             placeholder="Target date..."
//           value={targetDate}
//           onChange={(e) => setTargetDate(e.target.value)}
//           />
//           </div>

//           <ul className='xs:p-0 xl:p-12' style={{ marginTop: "20px"}}>
//             {bucketList.map((item, index) => (






//               <li className="xs:p-5 xl:p-10 flex items-center justify-between mb-2" key={item} style={{color:"#fff",border:"0.5px solid #fff", borderRadius:"5px"}}>
//               <div>
//                 <span dangerouslySetInnerHTML={{ __html: item }} />
//               </div>
//               <div className="flex items-center">
//                 {isEditing ? (
//                   <>
//                     <input
//                       type="text"
//                       placeholder="Set target date..."
//                       value={newTargetDate}
//                       onChange={(e) => setNewTargetDate(e.target.value)}
//                       className="border p-2 rounded-lg mr-2"
//                       style={{color:"#000000"}}
//                     />
//                     <button
//                       onClick={handleUpdateClick}
//                       className="text-white bg-blue-500 px-2 py-1 rounded-lg"
//                     >
//                       Update
//                     </button>
//                   </>
//                 ) : (
//                   <>
//                     <button onClick={handleEditClick} className=" mr-2 " >
//                     <FaClock style={{color:"#009ce0"}}/>
//                     </button>
//                     <button onClick={() => handleRemoveItem(item)} className="text-red-500">
//                     <FaTrash />
//                     </button>
//                   </>
//                 )}
//               </div>
//             </li>

//             ))}

//           </ul>
//         </div>
//       </div>
//     </div>




//     </>
//   );
// };

// export default Bucket;


















import React, { useState, useEffect } from 'react';
import moment from "moment";
import axios from 'axios';
import Typewriter from 'react-typewriter-effect';
import {  FaTrash, FaLockOpen, FaLock } from 'react-icons/fa';
const Bucket = () => {
  const [bucketItem, setBucketItem] = useState('');
  const [bucketList, setBucketList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [targetDate, setTargetDate] = useState("")
  const [targetDates, setTargetDates] = useState({});
  const [isButtonClicked, setIsButtonClicked] = useState(false);





  const handleEditClick = (e) => {
    setIsEditing(true);
  };


  const handleInputChange = (e) => {
    setBucketItem(e.target.value);
  };

  const handleAddItem = () => {
    if (bucketItem.trim() !== '') {
      const newItem = {
        text: bucketItem,
        dateAdded: moment().format('DD-MM-YYYY'),
        timeAdded: moment().format('HH:mm:ss'),
        targetDate: targetDate,
      };
      setBucketList([...bucketList, newItem]);
      setTargetDates({ ...targetDates, [bucketItem]: targetDate });
      setBucketItem('');
      setTargetDate('');
      setIsButtonClicked(false)

    }
  };
  const handleUpdateDate = () => {

  }

  const handleUpdateClick = () => {


  }

  const handleRemoveItem = (item) => {
    const updatedList = bucketList.filter((el) => el !== item);
    setBucketList(updatedList);
    // Make a DELETE request to remove the item from the server
    const userId = 1;
    const endpointUrl = `http://localhost:8080/users/${userId}`;
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
        console.log('Deleted List:-', response.data.bucket);
      })
      .catch((error) => {
        console.error('Error updating bucket list after item removal:', error);
      });
  };

  const postBucketList = () => {
    setIsButtonClicked(true);
    const userId = 1;
    const endpointUrl = `http://localhost:8080/users/${userId}`;
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
        console.log('Bucket list updated successfully:', response.data.bucket);
      })
      .catch((error) => {
        // Handle error
        console.error('Error updating bucket list:', error);
      });
  };


  useEffect(() => {

    let ID = 1
    axios.get(`http://localhost:8080/users/${ID}`).then((response) => {

      setBucketList(response.data.bucket)
      // Create the updated user object
      console.log(response.data.bucket)


    })
      .catch((error) => {
        // Handle error
        console.error('Error updating bucket list:', error);
      });
  }, []);



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
            <h1 className="text-3xl font-semibold mb-4" style={{ color: "#FFFFFF" }}>
               Heading

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
              <h3 style={{ color: "#fff" }} className="text-red-500">Select taget date <span>:-</span></h3>
              <input
                type="date"
                style={{ borderRadius: "5px", padding: "3px" }}
                placeholder="Target date..."
                value={targetDate}
                onChange={(e) => setTargetDate(e.target.value)}
              />
            </div>

            <ul className='xs:p-0 xl:p-12' style={{ marginTop: "20px" }}>
              {bucketList.map((item, index) => (






                <li className="xs:p-5 xl:p-10 flex items-center justify-between mb-2" key={item.text} style={{ color: "#fff", border: "0.5px solid #fff", borderRadius: "8px" }}>
                  <div>
                    <span className='xs:text-xl xl:text-3xl' style={{ color: "#fff" }} dangerouslySetInnerHTML={{ __html: item.text }} />
                    <br />
                    <small className='xs:text-xs xl:text-xs' style={{ color: "#fff" }} >Date Added: <span style={{ color: "#58c991" }}>{item.dateAdded}</span></small>
                    <br />
                    <small className='xs:text-xs xl:text-xs' style={{ color: "#fff" }} >Time Added: <span style={{ color: "#58c991" }}>{item.timeAdded}</span></small>
                    <br />
                    <small className='xs:text-xs xl:text-xs' style={{ color: "#fff" }} >Target Date: <span style={{ color: "#58c991" }}>{item.targetDate}</span></small>
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




    </>
  );
};

export default Bucket;