


// import React, { useState } from 'react';
// import BucketItem from '../Components/BucketItem';
// import { FaPencilAlt, FaCheck } from 'react-icons/fa';

// function Bucket() {
//   const initialBucketData = {
//     Travel: [],
//     'Friends and Family': [],
//     Love: [],
//     Entertainment: [],
//     'Self Improvement': [],
//     'Taste & Treats': [],
//   };

//   const [bucketData, setBucketData] = useState(initialBucketData);
//   const [listName, setListName] = useState('Travel');
//   const [newItem, setNewItem] = useState('');
//   const [targetDate, setTargetDate] = useState('');
//   const [isEditingListName, setIsEditingListName] = useState(false);

//   const addItem = () => {
//     if (newItem.trim() !== '') {
//       const currentDate = new Date().toLocaleString();
//       const newItemWithDate = `${newItem} (Added: ${currentDate}, Target: ${targetDate})`;

//       setBucketData((prevData) => ({
//         ...prevData,
//         [listName]: [...prevData[listName], newItemWithDate],
//       }));

//       setNewItem('');
//       setTargetDate('');
//     }
//   };

//   const removeItem = (category, index) => {
//     setBucketData((prevData) => ({
//       ...prevData,
//       [category]: prevData[category].filter((_, i) => i !== index),
//     }));
//   };

//   const updateTargetDate = (category, index, newTargetDate) => {
//     setBucketData((prevData) => {
//       const updatedData = { ...prevData };
//       const item = updatedData[category][index];
//       const regex = /Target: .*?(?=\))/;
//       const updatedItem = item.replace(regex, `Target: ${newTargetDate}`);
//       updatedData[category][index] = updatedItem;
//       return updatedData;
//     });
//   };

//   const handleListNameEdit = () => {
//     setIsEditingListName(true);
//   };

//   const handleListNameChange = (e) => {
//     setListName(e.target.value);
//   };

//   const handleListNameSave = () => {
//     setIsEditingListName(false);
//   };

//   const handleTargetDateChange = (e) => {
//     setTargetDate(e.target.value);
//   };

//   const allData = JSON.stringify(bucketData, null, 2);

//   console.log(allData);

//   return (
//     <>
//       <div className="flex h-auto" style={{ backgroundColor: "#58c991" }}>
//         {/*header content */}
//         <div className="xs:w-65% sm:w-65% md:w-60% lg:w-45% xl:w-40% p-4" style={{ backgroundColor: "rgb(0, 156, 224)" }}>

//           <h1 className="text-white xs:text-3xl md:text-6xl font-bold">My Bucket List</h1>
//           <h5></h5>
//         </div>



//       </div>

//       <div className=" p-4 w-1/1 mx-auto  shadow-md" style={{ backgroundColor: "#58c991" }}>
//         {/*select dropdown */}
//         <div className="relative">

//           <select
//             className="appearance-none w-full rounded border-none text-gray-700 py-3 px-4 pr-8  leading-tight focus:outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-900"
//             id="select"
//             style={{ backgroundColor: "#fff", fontWeight: "bold", boxShadow: "10px 10px 15px #555555" }}
//             value={listName}
//             onChange={handleListNameChange}
//           >

//             <option value="Travel">Travel</option>
//             <option value="Friends and Family">Friends and Family</option>
//             <option value="Love">Love</option>
//             <option value="Entertainment">Entertainment</option>
//             <option value="Self Improvement">Self Improvement</option>
//             <option value="Taste & Treats">Taste & Treats</option>
//           </select>
//           <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700" >
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


//       <div className="w-full h-screen" style={{ backgroundColor: "#232323" }}>
//         <div className="container mx-auto " style={{ backgroundColor: "#232323", padding: "2%", boxShadow: "inset 5em 1em #009ce0" }}>
//           {isEditingListName ? (
//             <div className="flex items-center space-x-2 mb-4">
//               <input
//                 type="text"
//                 className="border p-2 rounded-lg flex-grow"
//                 placeholder="Edit list name..."
//                 value={listName}
//                 onChange={handleListNameChange}
//               />
//               <button
//                 className="text-white px-5 py-3 rounded-lg"
//                 style={{ backgroundColor: "#38b46c" }}
//                 onClick={handleListNameSave}
//               >
//                 <FaCheck />
//               </button>
//             </div>
//           ) : (
//             <div className="flex items-center mb-4">
//               <h1 className="text-3xl font-semibold mb-4" style={{ color: "#FFFFFF" }}>
//                 {listName}
//                 <button
//                   className="ml-2 text-white"
//                 // onClick={handleListNameEdit}
//                 >
//                   <FaPencilAlt size={"20px"} />
//                 </button>
//               </h1>
//             </div>
//           )}
//           <div className="flex items-center space-x-2 mb-4">
//             <input
//               type="text"
//               className="border p-2 rounded-lg flex-grow"
//               placeholder="Add a new item..."
//               value={newItem}
//               onChange={(e) => setNewItem(e.target.value)}
//             />
           
//             <button
//               className="text-white px-4 py-2 rounded-lg"
//               style={{
//                 backgroundColor: "#009ce0",
//               }}
//               onClick={addItem}
//             >
//               Add
//             </button>
//           </div>
//           <input
//               type="text"
//               style={{borderRadius:"5px",padding:"3px"}}
//               placeholder="Target date..."
//               value={targetDate}
//               onChange={handleTargetDateChange}
//             />
//           <ul style={{marginTop:"20px"}}>
//             {bucketData[listName].map((item, index) => (
//               <BucketItem
//                 key={index}
//                 item={item}
//                 onRemove={() => removeItem(listName, index)}
//                 onUpdate={(newTargetDate) => updateTargetDate(listName, index, newTargetDate)}
//               />
//             ))}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Bucket;











































import React, { useState } from 'react';
import BucketItem from '../Components/BucketItem';
import { FaPencilAlt, FaCheck } from 'react-icons/fa';

function Bucket() {
  const initialBucketData = {
    Travel: [],
    'Friends and Family': [],
    Love: [],
    Entertainment: [],
    'Self Improvement': [],
    'Taste & Treats': [],
  };

  const [bucketData, setBucketData] = useState(initialBucketData);
  const [listName, setListName] = useState('Travel');
  const [newItem, setNewItem] = useState('');
  const [targetDate, setTargetDate] = useState('');
  const [isEditingListName, setIsEditingListName] = useState(false);

  const addItem = () => {
    if (newItem.trim() !== '') {
      const currentDate = new Date().toLocaleString();
      const newItemWithDate = `${newItem} (Added: ${currentDate}, Target: ${targetDate})`;

      setBucketData((prevData) => ({
        ...prevData,
        [listName]: [...prevData[listName], newItemWithDate],
      }));

      setNewItem('');
      setTargetDate('');
    }
  };

  const removeItem = (category, index) => {
    setBucketData((prevData) => ({
      ...prevData,
      [category]: prevData[category].filter((_, i) => i !== index),
    }));
  };

  const updateTargetDate = (category, index, newTargetDate) => {
    setBucketData((prevData) => {
      const updatedData = { ...prevData };
      const item = updatedData[category][index];
      const regex = /Target: .*?(?=\))/;
      const updatedItem = item.replace(regex, `Target: ${newTargetDate}`);
      updatedData[category][index] = updatedItem;
      return updatedData;
    });
  };

  const handleListNameEdit = () => {
    setIsEditingListName(true);
  };

  const handleListNameChange = (e) => {
    setListName(e.target.value);
  };

  const handleListNameSave = () => {
    setIsEditingListName(false);
  };

  const handleTargetDateChange = (e) => {
    setTargetDate(e.target.value);
  };

  const allData = JSON.stringify(bucketData, null, 2);

  console.log(allData);

  return (
    <>
      <div className="flex h-auto" style={{ backgroundColor: "#58c991" }}>
        {/*header content */}
        <div className="xs:w-65% sm:w-65% md:w-60% lg:w-45% xl:w-40% p-4" style={{ backgroundColor: "rgb(0, 156, 224)" }}>

          <h1 className="text-white xs:text-3xl md:text-6xl font-bold">My Bucket List</h1>
          <h5></h5>
        </div>



      </div>

      <div className=" p-4 w-1/1 mx-auto  shadow-md" style={{ backgroundColor: "#58c991" }}>
        {/*select dropdown */}
        <div className="relative">

          <select
            className="appearance-none w-full rounded border-none text-gray-700 py-3 px-4 pr-8  leading-tight focus:outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-900"
            id="select"
            style={{ backgroundColor: "#fff", fontWeight: "bold", boxShadow: "10px 10px 15px #555555" }}
            value={listName}
            onChange={handleListNameChange}
          >

            <option value="Travel">Travel</option>
            <option value="Friends and Family">Friends and Family</option>
            <option value="Love">Love</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Self Improvement">Self Improvement</option>
            <option value="Taste & Treats">Taste & Treats</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700" >
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>


      <div className="w-full h-screen" style={{ backgroundColor: "#232323" }}>
        <div className="container mx-auto " style={{ backgroundColor: "#232323", padding: "2%", boxShadow: "inset 5em 1em #009ce0" }}>
          {isEditingListName ? (
            <div className="flex items-center space-x-2 mb-4">
              <input
                type="text"
                className="border p-2 rounded-lg flex-grow"
                placeholder="Edit list name..."
                value={listName}
                onChange={handleListNameChange}
              />
              <button
                className="text-white px-5 py-3 rounded-lg"
                style={{ backgroundColor: "#38b46c" }}
                onClick={handleListNameSave}
              >
                <FaCheck />
              </button>
            </div>
          ) : (
            <div className="flex items-center mb-4">
              <h1 className="text-3xl font-semibold mb-4" style={{ color: "#FFFFFF" }}>
                {listName}
                <button
                  className="ml-2 text-white"
                // onClick={handleListNameEdit}
                >
                  <FaPencilAlt size={"20px"} />
                </button>
              </h1>
            </div>
          )}
          <div className="flex items-center space-x-2 mb-4">
            <input
              type="text"
              className="border p-2 rounded-lg flex-grow"
              placeholder="Add a new item..."
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
            />
           
            <button
              className="text-white px-4 py-2 rounded-lg"
              style={{
                backgroundColor: "#009ce0",
              }}
              onClick={addItem}
            >
              Add
            </button>
          </div>
          <input
              type="text"
              style={{borderRadius:"5px",padding:"3px"}}
              placeholder="Target date..."
              value={targetDate}
              onChange={handleTargetDateChange}
            />
          <ul style={{marginTop:"20px"}}>
            {bucketData[listName].map((item, index) => (
              <BucketItem
                key={index}
                item={item}
                onRemove={() => removeItem(listName, index)}
                onUpdate={(newTargetDate) => updateTargetDate(listName, index, newTargetDate)}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Bucket;
