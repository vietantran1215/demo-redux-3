import { useDispatch } from "react-redux";
import TaskForm from "../components/TaskForm";
import { addTask } from "../store/slices/task.slice";
import { Link, useNavigate } from "react-router-dom";

const CreateTask = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (taskFormData) => {
    dispatch(addTask(taskFormData));
    navigate('/task');
  }
  return (
    // Fragment: 1 component đặc biệt, sử dụng để render component mà không cần render root element
    <>
      <Link to="/task">Back to  task list</Link>
      <TaskForm title="Create task" submitBtnText='Create' onSubmit={handleSubmit} />
    </>
  );
}

export default CreateTask;