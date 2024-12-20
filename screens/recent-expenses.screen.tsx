import { StyleSheet } from "react-native";

import ExpensesList from "../components/expense-list/expenses-list";
import ScreenWrapper from "../components/screen-wrapper";
import TotalContainer from "../components/total-container";
import { useAppSelector } from "../hooks/store-hooks";
import { getDateMinusDays } from "../util/date";

export default function RecentExpensesScreen() {
  const expenses = useAppSelector((state) => state.expenses);

  const recentExpenses = expenses.filter((expense) => {
    const today = new Date();
    const past7days = getDateMinusDays(today, 7);

    return (
      past7days <= new Date(expense.date) && new Date(expense.date) <= today
    );
  });

  let total = 0;
  for (const expense of recentExpenses) total += expense.budget;

  return (
    <ScreenWrapper style={styles.root}>
      <TotalContainer label="Last 7 Days" total={total} />
      <ExpensesList expenses={recentExpenses} />
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  root: {
    rowGap: 15,
  },
});
