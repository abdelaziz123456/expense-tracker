import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { ExpensesOutput } from "../components";
import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../utils/date";

export default function RecentExpenses() {
  const { expenses } = useContext(ExpensesContext);

  const recentExpenses = expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date > date7DaysAgo;
  });
  console.log(recentExpenses)
  return (
    <View style={styles.container}>
      <ExpensesOutput
        receivedExpnese={recentExpenses}
        expensesPeriod={"Last 7 Days"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1,
  },
});
