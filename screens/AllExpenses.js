import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { ExpensesOutput } from "../components";
import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/expenses-context";

export default function AllExpenses() {
  const { expenses, setExpenses } = useContext(ExpensesContext);
  console.log(expenses);
  return (
    <View style={styles.container}>
      <ExpensesOutput receivedExpnese={expenses} expensesPeriod={"Total"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor:GlobalStyles.colors.primary700,
    flex:1
  },
});
