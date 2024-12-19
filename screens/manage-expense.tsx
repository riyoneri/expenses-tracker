import { StackScreenProps } from "@react-navigation/stack";
import { useLayoutEffect } from "react";
import { Text } from "react-native";

import { StackParameterList } from "../app";

type ManageExpenseScreenProperties = StackScreenProps<
  StackParameterList,
  "ManageExpense"
>;

export default function ManageExpense({
  navigation,
  route,
}: ManageExpenseScreenProperties) {
  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;

  useLayoutEffect(() => {
    navigation.setOptions({ title: `${isEditing ? "Edit" : "Add"} Expense` });
  }, [isEditing, navigation]);

  return <Text>Lion</Text>;
}
