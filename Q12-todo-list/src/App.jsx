import { useState } from "react";

function Todo(){
  const [task,setTask] = useState("");
  const [tasks,setTasks] = useState([]);
  const addTask = () => {
    if(task.trim() === "") return ;
    setTasks([...tasks,task]);
    setTask("")
  }
  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_,i) => i !== index);
    setTasks(updatedTasks)
  }
  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter your task" />
      <button onClick={addTask}>Add</button>
      <h3>Tasks.{tasks.length}</h3>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} onClick={() => removeTask(index)}>
            {task}
          </li>
        ))}
      </ul>
    </div>
  )

}

export default Todo;