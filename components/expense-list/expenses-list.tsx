import { FlatList, StyleSheet, Text } from "react-native";

import { Expense } from "../../api";
import ExpenseListItem from "./expense-list-item";

interface ExpensesListProperties {
  expenses: Expense[];
  fallbackText: string;
}

export default function ExpensesList({
  expenses,
  fallbackText,
}: ExpensesListProperties) {
  if (expenses.length === 0)
    return <Text style={styles.infoText}>{fallbackText}</Text>;

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
  infoText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});
