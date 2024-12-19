import Expense from "../models/expense";

const EXPENSES = [
  new Expense("1", "Groceries", new Date(2024, 10, 15), 150),
  new Expense("2", "Rent", new Date(2024, 9, 1), 1200),
  new Expense("3", "Utilities", new Date(2024, 10, 5), 200),
  new Expense("4", "Internet", new Date(2024, 10, 10), 60),
  new Expense("5", "Transportation", new Date(2024, 10, 20), 100),
  new Expense("6", "Dining Out", new Date(2024, 10, 25), 80),
  new Expense("7", "Entertainment", new Date(2024, 10, 30), 50),
  new Expense("8", "Gym Membership", new Date(2024, 9, 15), 40),
  new Expense("9", "Medical", new Date(2024, 10, 12), 300),
  new Expense("10", "Insurance", new Date(2024, 9, 20), 250),
];

export default EXPENSES;
