import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { hardDeleteTask, updateStatus } from "../store/slices/task.slice";
import { getAllDeletedTasks } from "../store/selectors/task.selector";

const Trash = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(getAllDeletedTasks);

  const handleSoftDelete = (taskId) => {
    // HARD DELETE
    const isConfirmed = window.confirm('Are you sure you want to delete? This action cannot be undone.');

    if (isConfirmed) {
      dispatch(hardDeleteTask(taskId));
    }

  }

  const handleUpdateStatus = (id, targetStatus) => {
    dispatch(updateStatus({ id, targetStatus }));
  }

  return (
    // Fragment: 1 component đặc biệt, sử dụng để render component mà không cần render root element
    <>
      <h1>Task list</h1>

      <nav style={{
        display: 'flex',
        gap: '10px'
      }}>
        <Link to="/task">Back to task list</Link>
      </nav>

      <table border="1" className="text-center" style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
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

export default Trash;