import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import EXPENSES from "../data/expenses";
import Expense from "../models/expense";

interface InitialState {
  expenses: Expense[];
}

const initialState: InitialState = {
  expenses: EXPENSES,
};

const expenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<Omit<Expense, "id">>) => {
      state.expenses.push({ ...action.payload, id: `${Date.now()}` });
    },
    deleteExpense: (state, action: PayloadAction<string>) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload,
      );
    },
    updateExpense: (
      state,
      action: PayloadAction<{ id: string; updates: Omit<Expense, "id"> }>,
    ) => {
      const expenseIndex = state.expenses.findIndex(
        (expense) => expense.id === action.payload.id,
      );

      state.expenses[expenseIndex] = {
        id: action.payload.id,
        ...action.payload.updates,
      };
    },
  },
});

export default expenseSlice.reducer;

export const expenseActions = expenseSlice.actions;
