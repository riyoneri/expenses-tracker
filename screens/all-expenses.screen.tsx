import { StyleSheet } from "react-native";

import ExpensesList from "../components/expense-list/expenses-list";
import ScreenWrapper from "../components/screen-wrapper";
import TotalContainer from "../components/total-container";
import { useAppSelector } from "../hooks/store-hooks";

export default function AllExpensesScreen() {
  const expenses = useAppSelector((state) => state.expenses);

  let total = 0;
  for (const expense of expenses) total += expense.budget;

  return (
    <ScreenWrapper style={styles.root}>
      <TotalContainer label="Total" total={total} />
      <ExpensesList
        expenses={expenses}
        fallbackText="No registered expenses found"
      />
    </ScreenWrapper>
  );
}
const styles = StyleSheet.create({
  root: {
    rowGap: 15,
  },
});
