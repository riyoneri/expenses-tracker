import { FlatList, StyleSheet } from "react-native";

import Expense from "../../models/expense";
import ExpenseListItem from "./expense-list-item";

interface ExpensesListProperties {
  expenses: Expense[];
}

export default function ExpensesList({ expenses }: ExpensesListProperties) {
  return (
    <FlatList
      style={styles.rootContainer}
      data={expenses}
      contentContainerStyle={styles.contentStyles}
      renderItem={({ item }) => <ExpenseListItem {...item} />}
      keyExtractor={(expense) => expense.id}
    />
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    gap: 10,
  },
  contentStyles: {
    gap: 15,
  },
});
