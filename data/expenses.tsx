import { Expense } from "../api";

const EXPENSES: Expense[] = [
  {
    id: "1",
    name: "Groceries",
    date: new Date(2024, 12, 15).toISOString(),
    budget: 150,
  },
  {
    id: "2",
    name: "Rent",
    date: new Date(2024, 9, 1).toISOString(),
    budget: 1200,
  },
  {
    id: "3",
    name: "Utilities",
    date: new Date(2024, 12, 5).toISOString(),
    budget: 200,
  },
  {
    id: "4",
    name: "Internet",
    date: new Date(2024, 12, 10).toISOString(),
    budget: 60,
  },
  {
    id: "5",
    name: "Transportation",
    date: new Date(2024, 12, 20).toISOString(),
    budget: 100,
  },
  {
    id: "6",
    name: "Dining Out",
    date: new Date(2024, 12, 25).toISOString(),
    budget: 80,
  },
  {
    id: "7",
    name: "Entertainment",
    date: new Date(2024, 12, 30).toISOString(),
    budget: 50,
  },
  {
    id: "8",
    name: "Gym Membership",
    date: new Date(2024, 9, 15).toISOString(),
    budget: 40,
  },
  {
    id: "9",
    name: "Medical",
    date: new Date(2024, 12, 12).toISOString(),
    budget: 300,
  },
  {
    id: "10",
    name: "Insurance",
    date: new Date(2024, 9, 20).toISOString(),
    budget: 250,
  },
];

export default EXPENSES;
