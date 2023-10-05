import React, { useEffect, useState } from 'react';
import BucketItem from '../Components/BucketItem';
import { FaPencilAlt, FaTrash, FaCheck, FaDropbox} from 'react-icons/fa';

function Bucket() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [listName, setListName] = useState('Love'); // Initialize with your default list name
  const [isEditingListName, setIsEditingListName] = useState(false);
  const urlParams = new URLSearchParams(window.location.search);
  const emailParam = urlParams.get('email');
  const decodedEmail = decodeURIComponent(emailParam);

  const addItem = () => {
    if (newItem.trim() !== '') {
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleString();
      const newItemWithDate = `${newItem} (<span style="color: #3aa16e">${formattedDate}</span>)`;
      setItems([...items, newItemWithDate]);
      setNewItem('');
    }
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const updateItem = (index, newTargetDate) => {
    const updatedItems = [...items];
    const currentItem = updatedItems[index];

    const itemTextWithoutDate = currentItem.replace(
      /<span style="color: #3aa16e">Target: .*?<\/span>/,
      ''
    );

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString();

    const newItemWithUpdatedDate = `${itemTextWithoutDate} (<span style="color: #3aa16e">Target: ${newTargetDate}</span> <span style="color: #3aa16e">${formattedDate}</span>)`;

    updatedItems[index] = newItemWithUpdatedDate;
    setItems(updatedItems);
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

  return (

    <>
<div className="flex h-auto" style={{backgroundColor:"#58c991"}}>
  <div className="xs:w-65% sm:w-65% md:w-60% lg:w-45% xl:w-40% p-4" style={{backgroundColor:"rgb(0, 156, 224)"}}>

    <h1 className="text-white xs:text-3xl md:text-6xl font-bold">My Bucket List</h1>
    <h5></h5>
  </div>

  
</div>


      <div className=" p-4 w-1/1 mx-auto  shadow-md"  style={{ backgroundColor: "#58c991" }}>
        <div className="relative">
        
          <select
            className="appearance-none w-full  border-none text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-900"
            id="select"
            style={{ backgroundColor: "#fff",fontWeight:"bold", boxShadow:"10px 5px 5px #555555" }}

          >
            
            <option value="text1">Self Improvement</option>
            <option value="text2">Friends and Family</option>
            <option value="text3">Love</option>
            <option value="text4">Entertainment</option>
            <option value="text5">Travel</option>
            <option value="text6">Taste & Treats</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
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
                  onClick={handleListNameEdit}
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
              onClick={() => addItem(`${newItem} (<span style="color: #3aa16e"></span>)`)}
            >
              Add
            </button>
          </div>
          <ul>
            {items.map((item, index) => (
              <BucketItem
                key={index}
                item={item}
                onRemove={() => removeItem(index)}
                onUpdate={(newTargetDate) => updateItem(index, newTargetDate)}
              />
            ))}
          </ul>
        </div>
      </div>

    </>
  );
}

export default Bucket;
