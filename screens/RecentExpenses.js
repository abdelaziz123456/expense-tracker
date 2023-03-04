import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { ErrorOverlay, ExpensesOutput, LoadingOverlay } from "../components";
import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../utils/date";
import { getExpenses } from "../utils/http";

export default function RecentExpenses() {
  const { expenses, setExpenses } = useContext(ExpensesContext);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    async function fetchExpesnes() {
      setIsLoading(true);
      try {
        const expensess = await getExpenses();
        setExpenses(expensess);
      } catch (error) {
        setError("Couldn't fetch recent Expenses");
      }

      setIsLoading(false);
    }
    fetchExpesnes();
  }, []);
  const recentExpenses = expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date > date7DaysAgo;
  });

  function errorhandler() {
    setError("");
  }
  if (error && !loading) {
    return <ErrorOverlay message={error} onConfirm={errorhandler} />;
  }
  if (loading) {
    return <LoadingOverlay />;
  }
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
