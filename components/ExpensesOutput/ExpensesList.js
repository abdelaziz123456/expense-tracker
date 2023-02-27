import { FlatList} from "react-native";
import React from "react";
import ExpenseListItem from "./ExpenseListItem";

function renderExpenseItem(itemData) {
  return <ExpenseListItem expense={itemData.item}/>;
}
export default function ExpensesList({ expensesList }) {
  return <FlatList data={expensesList} renderItem={renderExpenseItem}  keyExtractor={(item)=>item.id}/>;
}
