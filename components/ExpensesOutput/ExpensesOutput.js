import { StyleSheet, View } from "react-native";
import React, { useContext } from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";
import { ExpensesContext } from "../../store/expenses-context";

export default function ExpensesOutput({  expensesPeriod }) {

  const {expenses,setExpenses}=useContext(ExpensesContext)
  return (
    <View style={styles.container}>
      <ExpensesSummary expensesList={expenses} preiodName={expensesPeriod} />
      <ExpensesList expensesList={expenses} />
    </View>
  );
}


const styles=StyleSheet.create({
    container:{
        backgroundColor:GlobalStyles.colors.primary700,
      //  flex:1
    }
})