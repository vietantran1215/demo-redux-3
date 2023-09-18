// Root state --> Reducer name --> property
// E.g: state -->      task    --> allTasks

export const getAllTasks = (state) => state.task.allTasks.filter(t => !t.isDeleted);

export const getAllDeletedTasks = (state) => state.task.allTasks.filter(t => t.isDeleted);

export const getTaskDetail = (state) => state.task.taskDetail;