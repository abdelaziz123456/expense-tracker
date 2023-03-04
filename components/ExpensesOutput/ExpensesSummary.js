import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/styles";

export default function ExpensesSummary({ expensesList, preiodName }) {
  const expensesSum = expensesList.reduce((sum, expense) => {
    return Number(expense?.amount) + sum;
  }, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{preiodName}</Text>
      <Text style={styles.value}>${Number(expensesSum).toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 5,
  },
  title: {
    color: GlobalStyles.colors.primary400,
  },
  value: {
    color: GlobalStyles.colors.primary400,
    fontWeight: "900",
  },
});
