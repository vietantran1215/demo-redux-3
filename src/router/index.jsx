import { createBrowserRouter, redirect } from "react-router-dom";
import TaskList from "../pages/TaskList";
import TaskDetail from "../pages/TaskDetail";
import CreateTask from "../pages/CreateTask";
import UpdateTask from "../pages/UpdateTask";
import PageNotFound from "../pages/PageNotFound";

const router = createBrowserRouter([
  {
    path: '/',
    loader: () => {
      return redirect('/task')
    }
  },
  {
    path: '/task',
    element: <TaskList />
  },
  {
    path: '/task-detail/:id',
    element: <TaskDetail />
  },
  {
    path: '/create-task',
    element: <CreateTask />
  },
  {
    path: '/update-task/:id',
    element: <UpdateTask />
  },
  {
    path: '*',
    element: <PageNotFound />
  },
]);

export default router;