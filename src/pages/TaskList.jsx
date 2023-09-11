import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { softDeleteTask, updateStatus } from "../store/slices/task.slice";
import { getAllTasks } from "../store/selectors/task.selector";

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(getAllTasks);

  const handleSoftDelete = (taskId) => {
    // SOFT DELETE
    const isConfirmed = window.confirm('Are you sure you want to delete?');

    if (isConfirmed) {
      dispatch(softDeleteTask(taskId));
    }

  }

  const handleUpdateStatus = (id, targetStatus) => {
    dispatch(updateStatus({ id, targetStatus }));
  }

  return (
    // Fragment: 1 component đặc biệt, sử dụng để render component mà không cần render root element
    <>
      <h1>Task list</h1>

      <Link to="/create-task">Add a new task</Link>

      <table className="text-center" style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>
                <select value={task.status} onChange={(e) => handleUpdateStatus(task.id, e.target.value)}>
                  <option value="to-do">To do</option>
                  <option value="in progress">In progress</option>
                  <option value="completed">Completed</option>
                </select>
              </td>
              <td>
                <Link to={`/task-detail/${task.id}`}>Detail</Link>
              </td>
              <td>
                <button onClick={() => handleSoftDelete(task.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table >
    </>
  );
}

export default TaskList;