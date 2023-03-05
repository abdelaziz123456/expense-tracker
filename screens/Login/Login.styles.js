import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1,
  },
  loginForm: {
    marginTop: 50,
    marginHorizontal: 30,
    borderRadius: 10,
    minHeight: 300,
    backgroundColor: GlobalStyles.colors.primary500,
    paddingHorizontal: 15,
  },
  inputStyle: {
    minHeight: 40,
    borderRadius: 5,
  },
  button: {
    marginVertical: 20,
  },
  buttonText: {
    fontWeight: "normal",
    fontSize: 16,
    textAlign: "center",
    color: "white",
  },
  linkContainer: {
    textAlign: "center",
  },
});
