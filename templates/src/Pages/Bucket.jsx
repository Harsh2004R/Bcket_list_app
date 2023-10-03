
import React, { useState } from 'react';
import BucketItem from '../Components/BucketItem';

function Bucket() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');


  const addItem = () => {
    if (newItem.trim() !== '') {
      const currentDate = new Date(); // Here i am getting current date and time.......
      const formattedDate = currentDate.toLocaleString(); // Here i am Formating the date and time.......
      const newItemWithDate = `${newItem} (<span style="color: #3aa16e">${formattedDate}</span>)`; // Combine item and date
      setItems([...items, newItemWithDate]);
      setNewItem('');
    }
  };


  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

// const updateItem = (index, newTargetDate) => {
//   const updatedItems = [...items];
//   const currentDate = new Date(); // Get the current date and time
//   const formattedDate = currentDate.toLocaleString(); // Format the date and time
//   const currentItem = updatedItems[index];
//   // Extract the item text without the existing date
//   const itemText = currentItem.replace(/<span style="color: #3aa16e">.*<\/span>/, '');
//   const newItemWithUpdatedDate = `${itemText} (<span style="color: #3aa16e">Target: ${newTargetDate}</span> <span style="color: #3aa16e"> ${formattedDate}</span> )`;
//   updatedItems[index] = newItemWithUpdatedDate;
//   setItems(updatedItems);
// }

const updateItem = (index, newTargetDate) => {
  const updatedItems = [...items];
  const currentItem = updatedItems[index];
  
  const itemTextWithoutDate = currentItem.replace(/<span style="color: #3aa16e">Target: .*?<\/span>/, '');

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString();
  
  const newItemWithUpdatedDate = `${itemTextWithoutDate} (<span style="color: #3aa16e">Target: ${newTargetDate}</span> <span style="color: #3aa16e">${formattedDate}</span>)`;
  
  updatedItems[index] = newItemWithUpdatedDate;
  setItems(updatedItems);
}


return (
    <div className="w-full h-screen" style={{ backgroundColor: "#232323" }}>
      <div className="container mx-auto " style={{ backgroundColor: "#232323", padding: "2%", boxShadow: "inset 5em 1em #009ce0" }}>
        <h1 className="text-3xl font-semibold mb-4" style={{ color: "#FFFFFF" }}>My Bucket List</h1>
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
  );
}

export default Bucket;


