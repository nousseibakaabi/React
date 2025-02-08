import React, { useState } from "react";
import "../Note.css"; 

const Note = ({ initialNotes = [] }) => {
  const [notes, setNotes] = useState(initialNotes);
  const [newNote, setNewNote] = useState("");

  const addNote = () => {
    const noteValue = parseFloat(newNote);
    if (!isNaN(noteValue) && noteValue >= 0 && noteValue <= 20) {
      setNotes([...notes, noteValue]);
      setNewNote("");
    } else {
      alert("Veuillez entrer une note entre 0 et 20.");
    }
  };

  const removeNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  const calculateAverage = () => {
    if (notes.length === 0) return 0;
    const sum = notes.reduce((acc, note) => acc + note, 0);
    return (sum / notes.length).toFixed(2);
  };

  return (
    <div className="note-container">
      <ul className="note-items">
        {notes.map((note, index) => (
          <li key={index} className="note-item">
            {note} 
            <button className="delete-button" onClick={() => removeNote(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <p className="average">Moyenne des notes : {calculateAverage()}</p>
      <div className="input-container">
        <input
          type="number"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Ajouter une note (0-20)"
          className="input-field"
        />
        <button className="add-button" onClick={addNote}>Ajouter</button>
      </div>
    </div>
  );
};

export default Note;
