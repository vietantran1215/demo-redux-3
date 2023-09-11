import { useState } from "react";

// Dùng chung cho Create Task | Update Task
const TaskForm = ({ title, submitBtnText, onSubmit: submit }) => {
  const [taskFormData, setTaskFormData] = useState({
    title: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Conflict
    // Mình hiểu: Arrow function return 1 object
    // JS hiểu: đây không phải return object mà là block của function
    setTaskFormData(prev => ({
      ...prev,
      // Computed property name (ES6)
      [name]: value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(taskFormData);
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <h1>{title}</h1>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea type="text" name="description" id="description" onChange={handleChange} />
      </div>
      <div>
        <button>{submitBtnText}</button>
      </div>
    </form>
  );
}

export default TaskForm;