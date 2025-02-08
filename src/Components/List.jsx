import React, { useState } from 'react';

const List = ({ initialItems = [], placeholder = "Ajouter un élément" }) => {
  const [items, setItems] = useState(initialItems);
  const [newItem, setNewItem] = useState("");

  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  const handleRemoveItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="list-container">
      <h2 className="list-title">Liste :</h2>
      <ul className="list-items">
        {items.map((item, index) => (
          <li key={index} className="list-item">
            {item} <button className="delete-button" onClick={() => handleRemoveItem(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <div className="input-container">
        <input 
          type="text" 
          value={newItem} 
          onChange={(e) => setNewItem(e.target.value)} 
          placeholder={placeholder} 
          className="input-field"
        />
        <button className="add-button" onClick={handleAddItem}>Ajouter</button>
      </div>
    </div>
  );
};

export default List;