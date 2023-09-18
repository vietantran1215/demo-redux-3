import { Link, useNavigate, useParams } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTaskDetail, updateTask } from "../store/slices/task.slice";
import { getTaskDetail } from "../store/selectors/task.selector";

const UpdateTask = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const task = useSelector(getTaskDetail);

  useEffect(() => {
    dispatch(setTaskDetail(Number(id)));
  }, [dispatch, id]);

  if (!task) {
    return <>
      <h1>404 | Task not found with id {id}</h1>
      <Link to={'/task'}>Back to task list</Link>
    </>;
  }

  const handleSubmit = (taskFormData) => {
    dispatch(updateTask({ id: Number(id), taskFormData }));
    navigate(`/task-detail/${id}`);
  }

  return (
    // Fragment: 1 component đặc biệt, sử dụng để render component mà không cần render root element
    <>
      <Link to={`/task-detail/${id}`}>Back to  task detail</Link>
      <TaskForm title="Update task" submitBtnText="Save" taskInfo={task} onSubmit={handleSubmit} />
    </>
  );
}

export default UpdateTask;