import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";

import { Expense } from "../../api";
import { GlobalStyles } from "../../constants/styles";
import {
  ExpenseFormSchema,
  expenseFormSchema,
} from "../../validation-schemas/expense-form-schema";
import Button from "../ui/button";
import Input from "./input";

interface ExpenseFormProperties {
  onCancel: () => void;
  submitButtonLabel: string;
  onSubmit: (expenseData: Omit<Expense, "id">) => void;
  editingExpense?: Expense;
}

export default function ExpenseForm({
  onCancel,
  onSubmit,
  submitButtonLabel,
  editingExpense,
}: ExpenseFormProperties) {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitted },
  } = useForm<ExpenseFormSchema>({
    resolver: zodResolver(expenseFormSchema),
    defaultValues: editingExpense ?? {},
    delayError: 300,
    mode: "onChange",
  });

  function confirmHandler(data: ExpenseFormSchema) {
    onSubmit(data);
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <Input<ExpenseFormSchema>
        control={control}
        label="Name"
        name="name"
        textInputConfig={{ keyboardType: "default" }}
        invalid={!!errors.name}
      />

      <Input<ExpenseFormSchema>
        label="Budget"
        control={control}
        name="budget"
        isNumeric
        textInputConfig={{ keyboardType: "decimal-pad" }}
        invalid={!!errors.budget}
      />

      <Input<ExpenseFormSchema>
        label="Date"
        control={control}
        name="date"
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
        }}
        invalid={!!errors.date}
      />

      {!isValid && isSubmitted && (
        <Text style={styles.errorText}>
          Invalid input values - please check your entered data!
        </Text>
      )}

      <View style={styles.buttons}>
        <Button style={styles.button} onPress={onCancel} mode="flat">
          Cancel
        </Button>
        <Button style={styles.button} onPress={handleSubmit(confirmHandler)}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    gap: 16,
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginVertical: 24,
    textAlign: "center",
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
  errorText: {
    textAlign: "center",
    color: GlobalStyles.colors.error500,
    margin: 8,
  },
});
