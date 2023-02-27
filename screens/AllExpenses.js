import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ExpensesOutput } from "../components";
import { GlobalStyles } from "../constants/styles";

export default function AllExpenses() {
  return (
    <View style={styles.container}>
      <ExpensesOutput expensesPeriod={"Total"} />
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
