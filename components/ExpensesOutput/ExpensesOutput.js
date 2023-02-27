import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

export default function ExpensesOutput({ receivedExpnese, expensesPeriod }) {
  let Content =
    receivedExpnese.length > 0 ? (
      <ExpensesList expensesList={receivedExpnese} />
    ) : (
      <Text style={styles.warningText}>
        {expensesPeriod == "Last 7 Days"
          ? "No  expenses registered for the last 7 days "
          : "No expenses registered  found "}
      </Text>
    );
  return (
    <View style={styles.container}>
      <ExpensesSummary
        expensesList={receivedExpnese}
        preiodName={expensesPeriod}
      />

      {Content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.primary700,
    //  flex:1
  },
  warningText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});
