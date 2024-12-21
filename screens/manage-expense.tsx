import { StackScreenProps } from "@react-navigation/stack";
import { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";

import { Expense } from "../api";
import { StackParameterList } from "../app";
import ExpenseForm from "../components/manage-expense/expense-form";
import ScreenWrapper from "../components/screen-wrapper";
import IconButton from "../components/ui/icon-button";
import { GlobalStyles } from "../constants/styles";
import { useAppSelector } from "../hooks/store-hooks";
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
  const expenses = useAppSelector((state) => state.expenses);

  const selectedExpense = expenses.find((expense) => expense.id === expenseId);

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

  function confirmHandler(expenseData: Omit<Expense, "id">) {
    if (isEditing) {
      dispatch(
        expenseActions.updateExpense({
          id: expenseId,
          updates: expenseData,
        }),
      );
    } else {
      dispatch(expenseActions.addExpense(expenseData));
    }
    navigation.goBack();
  }

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <ExpenseForm
          onSubmit={confirmHandler}
          onCancel={cancelHandler}
          submitButtonLabel={isEditing ? "Update" : "Add"}
          editingExpense={selectedExpense}
        />

        {isEditing && (
          <View style={styles.deleteContainer}>
            <IconButton
              name="trash"
              color={GlobalStyles.colors.error500}
              onPress={deleteExpenseHandler}
              size={36}
            />
          </View>
        )}
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
