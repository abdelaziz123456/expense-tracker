import { FlatList} from "react-native";
import React from "react";
import ExpenseListItem from "./ExpenseListItem";

function renderExpenseItem(itemData) {
  return <ExpenseListItem expense={itemData.item}/>;
}
export default function ExpensesList({ expenses }) {
  return <FlatList data={expenses} renderItem={renderExpenseItem}  keyExtractor={(item)=>item.id}/>;
}
