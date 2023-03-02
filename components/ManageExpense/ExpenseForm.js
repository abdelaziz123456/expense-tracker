import { View, Text, TextInput, StyleSheet, Modal } from "react-native";
import React, { useContext, useState } from "react";
import InputComponent from "./InputComponent";
import { GlobalStyles } from "../../constants/styles";
import DateTimePicker from "@react-native-community/datetimepicker";
import Button from "../uI/Button";
import { fromMilliSecToDate } from "../../utils/date";
import { Ionicons } from "@expo/vector-icons";
import { ExpensesContext } from "../../store/expenses-context";

export default function ExpenseForm({
  onChangeTexthandler,
  inputData,
  expesneId,
}) {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const { expenses } = useContext(ExpensesContext);
  let selectedExpense = expesneId
    ? expenses.find((exp) => exp.id == expesneId)
    : null;
    console.log('selected is',selectedExpense)
  return (
    <View>
      <InputComponent
        label={"Amount"}
        textInputConfig={{
          keyboardType: "decimal-pad",
          defaultValue:selectedExpense?.amount ? `${selectedExpense?.amount}` :null,
          onChangeText: (value) => onChangeTexthandler("amount", value),
        }}
      />

      <View style={styles.buttonContainer}>
        <Button
          onPress={() => setShowDatePicker(!showDatePicker)}
          style={{ width: 220 }}
        >
          <View style={styles.iconContainer}>
            <Text style={{ color: "white" }}>
              {inputData.date ? "Time is picked" : "Pick a date"}
            </Text>

            <Ionicons
              name={inputData.date ? "md-checkmark-circle" : "add-circle"}
              size={30}
              color="green"
            />
          </View>
        </Button>
      </View>

      {showDatePicker && (
        <DateTimePicker
          value={selectedExpense?.date ? selectedExpense?.date : new Date()}
          minimumDate={new Date(2020, 0, 1)}
          maximumDate={new Date()}
          onChange={(value) => {
            setShowDatePicker(false);

            onChangeTexthandler(
              "date",
              fromMilliSecToDate(value.nativeEvent.timestamp)
            );
          }}
        />
      )}

      <InputComponent
        label={"Description"}
        textInputConfig={{
          autoCorrect: false,
          maxLength: 20,
          value: selectedExpense?.description && selectedExpense?.description,
          onChangeText: (value) => onChangeTexthandler("description", value),
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: GlobalStyles.colors.primary100,
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  iconContainer: {
    flexDirection: "row",
    color: "white",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonContainer: {
    marginTop: 15,
    alignItems: "center",
  },
});
