import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import { GlobalStyles } from "../../constants/styles";
import { Button, ExpenseForm, IconButton } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { ExpensesContext } from "../../store/expenses-context";
import {
  addHandler,
  cancelHandler,
  deleteHandler,
  updateHandler,
} from "./ManageExpenseUtiles";
import MyModal from "../../components/uI/MyModal";

export default function ManageExpense(props) {
  const type = props.route.params.type;
  const expesneId = props.route.params?.expesneId;
  const navigation = useNavigation();
  const { deleteExpense, addExpense, expenses, updateExpense } =
    useContext(ExpensesContext);
  let selectedExpense = expesneId
    ? expenses.find((exp) => exp.id == expesneId)
    : null;
  const [inputData, setInputData] = useState({
    date: selectedExpense?.date ? selectedExpense?.date : "",
    description: selectedExpense?.description
      ? selectedExpense?.description
      : "",
    amount: selectedExpense?.amount ? selectedExpense?.amount : "",
  });

  const [showModal, setShowModal] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [buttonText, setButtonText] = useState("");
  const onChangeTexthandler = (key, value) => {
    setInputData({ ...inputData, [key]: value });
  };

  return (
    <View style={styles.container}>
      <ExpenseForm
        onChangeTexthandler={onChangeTexthandler}
        inputData={inputData}
        setShowModal={setShowModal}
        expesneId={expesneId}
      />

      <View style={styles.buttonsContainer}>
        <Button
          style={styles.button}
          mode={"flat"}
          onPress={() => cancelHandler(navigation)}
        >
          Cancel
        </Button>
        <Button
          style={styles.button}
          onPress={
            expesneId
              ? () =>
                  updateHandler(inputData, navigation, updateExpense, expesneId)
              : () =>
                  addHandler(
                    addExpense,
                    inputData,
                    setInputData,
                    navigation,
                    setShowModal,
                    setErrorMessage,
                    setButtonText
                  )
          }
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
            onPress={() =>
              deleteHandler(
                expesneId,
                deleteExpense,
                navigation,
                setErrorMessage,
                setShowModal,
                setButtonText
              )
            }
          />
        </View>
      )}

      <MyModal
        showModal={showModal}
        buttonHandler={
          buttonText !== "Confirm"
            ? () => setShowModal(false)
            : () => {
                setShowModal(false);
                deleteExpense(expesneId);
                navigation.goBack();
              }
        }
        errorMessage={errorMessage}
        buttonText={buttonText}
      />
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
