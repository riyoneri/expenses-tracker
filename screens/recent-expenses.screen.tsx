import { StyleSheet } from "react-native";

import ExpensesList from "../components/expense-list/expenses-list";
import ScreenWrapper from "../components/screen-wrapper";
import TotalContainer from "../components/total-container";
import EXPENSES from "../data/expenses";

export default function RecentExpensesScreen() {
  return (
    <ScreenWrapper style={styles.root}>
      <TotalContainer label="Last 7 Days" total={67.16} />
      <ExpensesList expenses={EXPENSES} />
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  root: {
    rowGap: 15,
  },
});
