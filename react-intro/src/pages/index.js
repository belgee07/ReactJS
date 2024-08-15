import { useState } from "react";
import { Button } from "@/Components/Button";
import { Input } from "@/Components/Input";
import { FaTrash } from "react-icons/fa6";
import { MdOutlineModeEdit } from "react-icons/md";

export default function Home() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (text.trim()) {
      setTasks([...tasks, text]);
      setText("");
    }
  };

  const handleIconClick = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
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

      <div className="task-lists">
        {tasks.map((task, index) => (
          <div className="list" key={index}>
            {task}
            <div className="rightSides">
              <MdOutlineModeEdit />
              <FaTrash onClick={() => handleIconClick(index)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
