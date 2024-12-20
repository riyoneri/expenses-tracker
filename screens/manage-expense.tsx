import { StackScreenProps } from "@react-navigation/stack";
import { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";

import { StackParameterList } from "../app";
import Button from "../components/ui/button";
import IconButton from "../components/ui/icon-button";
import { GlobalStyles } from "../constants/styles";
import { expenseActions } from "../store/expenses-slice";

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
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({ title: `${isEditing ? "Edit" : "Add"} Expense` });
  }, [isEditing, navigation]);

  function cancelHandler() {
    navigation.goBack();
  }

  function deleteExpenseHandler() {
    if (!expenseId) return;
    dispatch(expenseActions.deleteExpense(expenseId));

    navigation.goBack();
  }

  function confirmHandler() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} onPress={cancelHandler} mode="flat">
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            name="trash"
            color={GlobalStyles.colors.error500}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    paddingHorizontal: 30,
  },
  button: {
    flex: 1,
  },
});
