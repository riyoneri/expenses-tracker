import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { StyleSheet } from "react-native";

import { StackParameterList, TabParameterList } from "../app";
import ExpensesList from "../components/expense-list/expenses-list";
import ScreenWrapper from "../components/screen-wrapper";
import TotalContainer from "../components/total-container";
import EXPENSES from "../data/expenses";

type AllExpensesScreenProperties = CompositeScreenProps<
  BottomTabScreenProps<TabParameterList, "AllExpenses">,
  StackScreenProps<StackParameterList>
>;

export default function AllExpensesScreen({}: AllExpensesScreenProperties) {
  const total = EXPENSES.reduce(
    (totalPrice, expense) => totalPrice + expense.budget,
    0,
  );

  return (
    <ScreenWrapper style={styles.root}>
      <TotalContainer label="Total" total={total} />
      <ExpensesList expenses={EXPENSES} />
    </ScreenWrapper>
  );
}
const styles = StyleSheet.create({
  root: {
    rowGap: 15,
  },
});
