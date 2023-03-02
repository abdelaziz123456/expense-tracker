import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import { GlobalStyles } from "../constants/styles";
import { Button, ExpenseForm, IconButton } from "../components";
import { useNavigation } from "@react-navigation/native";
import { ExpensesContext } from "../store/expenses-context";

export default function ManageExpense(props) {
  const type = props.route.params.type;
  const expesneId = props.route.params?.expesneId;
  const navigation = useNavigation();
  const { deleteExpense, addExpense } = useContext(ExpensesContext);
  const [inputData, setInputData] = useState({
    date: "",
    description: "",
    amount: "",
  });

  const onChangeTexthandler = (key, value) => {
    setInputData({ ...inputData, [key]: value });
    console.log("this is input data", inputData);
  };
  const deleteHandler = () => {
    console.log(expesneId, "deleted");
    deleteExpense(expesneId);
    navigation.goBack();
  };
  const cancelHandler = () => {
    console.log("canelled");
    navigation.goBack();
  };
  const updateHandler = () => {
    console.log("updated", inputData);
    navigation.goBack();
  };

  const addHandler = () => {
    console.log("added ");
    addExpense(inputData.description, Number(inputData.amount), inputData.date);
    setInputData({ date: "", description: "", amount: "" });
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <ExpenseForm
        onChangeTexthandler={onChangeTexthandler}
        inputData={inputData}
      />

      <View style={styles.buttonsContainer}>
        <Button style={styles.button} mode={"flat"} onPress={cancelHandler}>
          Cancel
        </Button>
        <Button
          style={styles.button}
          onPress={expesneId ? updateHandler : addHandler}
        >
          {expesneId ? "Update" : "Add"}
        </Button>
      </View>
      <View style={styles.seperator}></View>
      {expesneId && (
        <View style={styles.iconContainer}>
          <IconButton
            icon="trash"
            size={36}
            color={GlobalStyles.colors.error500}
            onPress={deleteHandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1,
    paddingHorizontal: 20,
  },
  seperator: {
    marginVertical: 15,
  },
  iconContainer: {
    borderTopWidth: 1,
    borderColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
