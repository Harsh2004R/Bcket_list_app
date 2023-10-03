




import React, { useState } from 'react';

function BucketItem({ item, onRemove, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTargetDate, setNewTargetDate] = useState('');

  const handleEditClick = () => {
    setIsEditing(true);
    setNewTargetDate('');
  };

  const handleUpdateClick = () => {
    if (newTargetDate.trim() !== '') {
      onUpdate(newTargetDate);
      setIsEditing(false);
      setNewTargetDate('');
    }
  };

  return (
    <li className="flex items-center justify-between mb-2" style={{color:"#fff"}}>
      <div>
        <span dangerouslySetInnerHTML={{ __html: item }} />
      </div>
      <div className="flex items-center">
        {isEditing ? (
          <>
            <input
              type="text"
              placeholder="Set target date..."
              value={newTargetDate}
              onChange={(e) => setNewTargetDate(e.target.value)}
              className="border p-2 rounded-lg mr-2"
              style={{color:"#000000"}}
            />
            <button
              onClick={handleUpdateClick}
              className="text-white bg-blue-500 px-2 py-1 rounded-lg"
            >
              Update
            </button>
          </>
        ) : (
          <>
            <button onClick={handleEditClick} className="text-blue-500 mr-2">
              Edit
            </button>
            <button onClick={onRemove} className="text-red-500">
              Remove
            </button>
          </>
        )}
      </div>
    </li>
  );
}

export default BucketItem;








