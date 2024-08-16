import React, { useState } from "react";
import { Button } from "@/Components/Button";
import { Input } from "@/Components/Input";
import { FaTrash } from "react-icons/fa6";
import { MdOutlineModeEdit } from "react-icons/md";
import { Edit } from "@/Components/Edit";

export default function Home() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddTask = () => {
    if (text.trim()) {
      setTasks([...tasks, text]);
      setText("");
    }
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setModalVisible(true);
  };

  const handleSaveEdit = (newText) => {
    setTasks(tasks.map((task, i) => (i === editingIndex ? newText : task)));
    setEditingIndex(null);
    setModalVisible(false);
  };

  const handleCloseModal = () => {
    setEditingIndex(null);
    setModalVisible(false);
  };

  return (
    <div className="todo">
      <h1>ToDo List</h1>
      <div className="check">
        <Input
          placeholder="New Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button onClick={handleAddTask} />
      </div>

      <div className="lists">
        {tasks.map((task, index) => (
          <div className="list" key={index}>
            {task}
            <div className="rightSides">
              <MdOutlineModeEdit onClick={() => handleEditClick(index)} />
              <FaTrash onClick={() => handleDeleteTask(index)} />
            </div>
          </div>
        ))}
      </div>

      {modalVisible && (
        <Edit
          task={tasks[editingIndex]}
          onSave={handleSaveEdit}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
