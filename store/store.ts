import { configureStore } from "@reduxjs/toolkit";

import expenseReducer from "./expenses-slice";

const store = configureStore({
  reducer: expenseReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
