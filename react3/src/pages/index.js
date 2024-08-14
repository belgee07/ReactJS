import { useState } from "react";
import { Button } from "@/Components/Button";
import { Input } from "@/Components/Input";

export default function Home() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (text.trim()) {
      setTasks([...tasks, text]);
      setText("");
    }
  };

  return (
    <div className="todo">
      <h1>ToDo List</h1>
      <div className="check">
        <Input placeholder="New Task" value={text} onChange={setText} />
        <Button onClick={handleAddTask} />
      </div>

      <div className="task-list">
        {tasks.map((task, index) => (
          <h3 key={index}>{task}</h3>
        ))}
      </div>
    </div>
  );
}
