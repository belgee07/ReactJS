import React, { useState } from "react";

export const Edit = ({ task, onSave, onClose }) => {
  const [newText, setNewText] = useState(task);

  const handleSave = () => {
    onSave(newText);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Task</h2>
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
        <div className="rights">
          <button onClick={handleSave}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};
