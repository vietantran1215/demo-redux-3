import { createSlice } from "@reduxjs/toolkit";
import Task from "../../models/task";

// Tính năng của slice là cho phép dev tạo reducer function, và đồng thời lấy chính tên reducer function mà dev tạo để tự động tạo action
const taskSlice = createSlice({
  name: 'task',
  initialState: {
    allTasks: []
  },
  reducers: {
    // action: action type, action payload
    // Lưu ý: ACTION PAYLOAD KHÔNG ĐƯỢC PHÉP LÀ INSTANCE CỦA 1 CLASS
    addTask: function (state, action) {
      const taskFormData = action.payload;
      const task = new Task(taskFormData.title, taskFormData.description);
      state.allTasks.push({...task});
    },

    updateStatus: function (state, action) {
      const { id, targetStatus } = action.payload;
      const index = state.allTasks.findIndex(task => task.id === id);
      state.allTasks[index].status = targetStatus;
    },

    softDeleteTask: function (state, action) {
      const id = action.payload;
      const index = state.allTasks.findIndex(task => task.id === id);
      state.allTasks[index].isDeleted = true;
    }
  }
});

// Action: export ra cho component dispatch
export const { addTask, updateStatus, softDeleteTask } = taskSlice.actions;

// Reducer: export ra để đăng ký vào store
export const taskReducer = taskSlice.reducer;