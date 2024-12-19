import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { StackParameterList } from "../../app";
import { GlobalStyles } from "../../constants/styles";
import Expense from "../../models/expense";
import getFormattedDate from "../../util/date";

export default function ExpenseListItem({ name, budget, date }: Expense) {
  const navigation = useNavigation<NavigationProp<StackParameterList>>();

  return (
    <Pressable
      onPress={() => {
        navigation.navigate("ManageExpense");
      }}
      style={({ pressed }) => [styles.rootContainer, pressed && styles.pressed]}
    >
      <View style={styles.innerContainer}>
        <Text style={[styles.name, styles.whiteText]}>{name}</Text>
        <Text style={styles.whiteText}>{getFormattedDate(date)}</Text>
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.total}>{budget.toFixed(2)}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
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
