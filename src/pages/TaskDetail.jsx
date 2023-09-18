import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { setTaskDetail } from "../store/slices/task.slice";
import { getTaskDetail } from "../store/selectors/task.selector";

const TaskDetail = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const dispatch = useDispatch();

  const task = useSelector(getTaskDetail);

  useEffect(() => {
    dispatch(setTaskDetail(Number(id)))
  }, [id, dispatch]);

  const goToUpdateScreen = () => {
    navigate(`/update-task/${task.id}`);
  }

  if (!task) {
    return <>
      <h1>404 | Task not found with id {id}</h1>
      <Link to={'/task'}>Back to task list</Link>
    </>;
  }

  return (
    // Fragment: 1 component đặc biệt, sử dụng để render component mà không cần render root element
    <>
      <Link to="/task">Back to  task list</Link>
      <h1>{task.title}</h1>
      <button onClick={goToUpdateScreen}>Update</button>
      <p><b>ID:</b> {task.id}</p>
      <p><b>Description:</b></p>
      <p>{task.description}</p>
      <p><b>Status:</b> {task.status}</p>
    </>
  );
}

export default TaskDetail;