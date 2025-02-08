import React, { useState } from "react";
import "../TodoList.css"; 

const TodoList = ({ initialTasks = [] }) => {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState("");
  const [priority, setPriority] = useState("Moyenne");
  const [search, setSearch] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      const task = { name: newTask, priority, completed: false };
      setTasks([...tasks, task]);
      setNewTask("");
      setPriority("Moyenne");
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="todo-container">
      <h2>Tâches</h2>

      <div className="task-list">
        {filteredTasks.map((task, index) => (
          <div key={index} className={`task-item ${task.completed ? "completed" : ""}`}>
            <span className="task-name">{task.name}</span>
            <span className="task-priority"> - {task.priority}</span>
            <button onClick={() => toggleTaskCompletion(index)} className={task.completed ? "non-termine" : "termine"}>
              {task.completed ? "Non terminé" : "Terminé"}
            </button>
            <button onClick={() => deleteTask(index)} className="supprimer">Supprimer</button>
          </div>
        ))}
      </div>


      <div className="task-summary">
        <h4>Total des tâches : {tasks.length}</h4>
        <h4>Tâches terminées : {tasks.filter(task => task.completed).length}</h4>
      </div>
      
      <input
        type="text"
        placeholder="Rechercher une tâche"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      
      
      
      <div className="add-task">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nom de la tâche"
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="Haute">Haute</option>
          <option value="Moyenne">Moyenne</option>
          <option value="Basse">Basse</option>
        </select>
        <button onClick={addTask} className="ajouter">Ajouter</button>
      </div>
    </div>
  );
};

export default TodoList;
