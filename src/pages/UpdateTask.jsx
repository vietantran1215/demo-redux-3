import TaskForm from "../components/TaskForm";

const UpdateTask = () => {
  return (
    // Fragment: 1 component đặc biệt, sử dụng để render component mà không cần render root element
    <>
      <TaskForm title="Update task" submitBtnText="Save" />
    </>
  );
}

export default UpdateTask;