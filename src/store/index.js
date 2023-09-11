import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./slices/task.slice";

export const store = configureStore({
  reducer: {
    task: taskReducer
  }
})