import { View, Text } from "react-native";
import React from "react";

export default function ExpensesSummary({ expenses, preiodName }) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return expense.amount + sum;
  }, 0);
  return (
    <View>
      <Text>{preiodName}</Text>
      <Text>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}
