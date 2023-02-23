import { View } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

export default function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={expenses} preiodName={expensesPeriod} />
      <ExpensesList />
    </View>
  );
}
