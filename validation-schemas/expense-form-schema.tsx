import { z } from "zod";

export const expenseFormSchema = z.object({
  name: z
    .string({ message: "Name must be a valid string" })
    .min(1, "Name must be atleast 3 characters"),
  budget: z.number({ message: "Budget must be a valid number" }),
  date: z
    .string({ message: "Name must be a valid string" })
    .date("Date must be a valid date"),
});

export type ExpenseFormSchema = z.infer<typeof expenseFormSchema>;
