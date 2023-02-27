import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../utils/date";
import { useNavigation } from "@react-navigation/native";

export default function ExpenseListItem({ expense }) {
  const navigation = useNavigation();
  function expensePressHandler() {
    navigation.navigate("ManageExpense", {
      type: "edit",
      expesneId: expense?.id,
    });
  }
  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <View style={styles.details}>
          <Text style={styles.title}>{expense.description}</Text>
          <Text style={styles.date}>{getFormattedDate(expense.date)}</Text>
        </View>
        <View style={styles.price}>
          <Text
            style={{
              textAlign: "center",
              color: GlobalStyles.colors.primary500,
              fontWeight: "bold",
            }}
          >
            {expense.amount}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  container: {
    backgroundColor: GlobalStyles.colors.primary500,
    marginVertical: 8,
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
  },
  details: {},
  title: {
    color: "white",
    fontWeight: "bold",
  },
  date: {
    color: "white",
    fontWeight: "400",
    marginTop: 5,
  },
  price: {
    backgroundColor: GlobalStyles.colors.primary50,
    height: 35,
    minWidth: 70,
    justifyContent: "center",
    borderRadius: 5,
  },
});
