import { Pressable, StyleSheet, Text, View } from "react-native";

import { GlobalStyles } from "../../constants/styles";
import Expense from "../../models/expense";

export default function ExpenseListItem({ name, budget, date }: Expense) {
  return (
    <Pressable onPress={() => {}} style={styles.rootContainer}>
      <View style={styles.innerContainer}>
        <Text style={[styles.name, styles.whiteText]}>{name}</Text>
        <Text style={styles.whiteText}>{new Date(date).toISOString()}</Text>
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.total}>{budget}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    padding: 15,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary500,
  },
  innerContainer: {
    gap: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 17,
  },
  whiteText: {
    color: "white",
  },
  totalContainer: {
    backgroundColor: "white",
    minWidth: "20%",
    borderRadius: 5,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
  },
  total: {
    color: GlobalStyles.colors.primary700,
    fontWeight: "bold",
  },
});
