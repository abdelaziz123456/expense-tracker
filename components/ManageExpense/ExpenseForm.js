import { View, Text, TextInput } from "react-native";
import React from "react";
import InputComponent from "./InputComponent";

export default function ExpenseForm() {
  const onChangeTexthandler = () => {};
  return (
    <View>
      <InputComponent
        label={"Amount"}
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: onChangeTexthandler,
        }}
      />
      <InputComponent
        label={"Date"}
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <InputComponent
        label={"Description"}
        textInputConfig={{
          multiline:true,
          autoCorrect:false
        }}
      />
    </View>
  );
}
