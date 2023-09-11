import { useDispatch } from "react-redux";
import TaskForm from "../components/TaskForm";
import { addTask } from "../store/slices/task.slice";
import { useNavigate } from "react-router-dom";

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
      <TaskForm title="Create task" submitBtnText='Create' onSubmit={handleSubmit} />
    </>
  );
}

export default CreateTask;