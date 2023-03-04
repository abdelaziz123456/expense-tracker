import { View, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { ErrorOverlay, ExpensesOutput, LoadingOverlay } from "../components";
import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/expenses-context";
import { getExpenses } from "../utils/http";

export default function AllExpenses() {
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
        setError("Couldn't fetch Expenses");
      }

      setIsLoading(false);
    }
    fetchExpesnes();
  }, []);
  function errorHandler() {
    setError("");
  }
  if (error && !loading) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />;
  }
  if (loading) {
    return <LoadingOverlay />;
  }
  return (
    <View style={styles.container}>
      <ExpensesOutput receivedExpnese={expenses} expensesPeriod={"Total"} />
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
