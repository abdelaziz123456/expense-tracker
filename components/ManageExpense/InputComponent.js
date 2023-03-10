import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/styles";

export default function InputComponent({ label, textInputConfig, inputStyle }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={{
          ...styles.textInput,
          textAlignVertical: textInputConfig.multiline && "top",
          ...inputStyle,
        }}
        {...textInputConfig}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: GlobalStyles.colors.primary100,
    marginVertical: 5,
  },
  textInput: {
    backgroundColor: GlobalStyles.colors.primary100,
    minHeight: 35,
    borderRadius: 10,
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 4,
    minWidth: 150,
  },
  container: {
    marginVertical: 10,
  },
});
