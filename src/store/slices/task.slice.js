import { createSlice } from "@reduxjs/toolkit";
import Task from "../../models/task";

// Tính năng của slice là cho phép dev tạo reducer function, và đồng thời lấy chính tên reducer function mà dev tạo để tự động tạo action
const taskSlice = createSlice({
  name: "task",
  initialState: {
    allTasks: [],
    taskDetail: null,
  },
  reducers: {
    // action: action type, action payload
    // Lưu ý: ACTION PAYLOAD KHÔNG ĐƯỢC PHÉP LÀ INSTANCE CỦA 1 CLASS
    addTask: function (state, action) {
      const taskFormData = action.payload;
      const task = new Task(taskFormData.title, taskFormData.description);
      state.allTasks.push({ ...task });
    },

    updateStatus: function (state, action) {
      const { id, targetStatus } = action.payload;
      const index = state.allTasks.findIndex(
        (task) => task.id === id && !task.isDeleted
      );
      state.allTasks[index].status = targetStatus;
    },

    softDeleteTask: function (state, action) {
      const id = action.payload;
      const index = state.allTasks.findIndex(
        (task) => task.id === id && !task.isDeleted
      );
      state.allTasks[index].isDeleted = true;
    },

    setTaskDetail: function (state, action) {
      const id = action.payload;
      const taskDetail = state.allTasks.find((task) => {
        return task.id === id && !task.isDeleted;
      });
      state.taskDetail = taskDetail;
    },

    updateTask: function (state, action) {
      // update cái gì: tìm task có id giống input
      // update như thế nào: lấy thông tin từ formdata để thay đổi cho task tìm được

      // Lấy thông tin được gửi từ component
      const { id, taskFormData } = action.payload;

      // Tìm index của task
      const index = state.allTasks.findIndex(
        (task) => task.id === id && !task.isDeleted
      );

      // Sử dụng index vừa tìm được, truy cập vào task bên trong allTasks
      state.allTasks[index] = {
        // Spread những data cũ của task đó
        ...state.allTasks[index],

        // Dùng thông tin mới để ghi đè, thay đổi cho thông tin cũ
        title: taskFormData.title,
        description: taskFormData.description,
      }; // Spread operator ES6
    },

    hardDeleteTask(state, action) {
      const id = action.payload;
      const index = state.allTasks.findIndex(
        (task) => task.id === id && task.isDeleted
      );
      
      // Found
      if (index !== -1) {
        // Delete
        state.allTasks = state.allTasks.filter(task => task.id !== id);
      }
    },
  },
});

// Action: export ra cho component dispatch
export const {
  addTask,
  updateStatus,
  softDeleteTask,
  setTaskDetail,
  updateTask,
  hardDeleteTask
} = taskSlice.actions;

// Reducer: export ra để đăng ký vào store
export const taskReducer = taskSlice.reducer;
