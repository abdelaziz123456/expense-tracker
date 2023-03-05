import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";
let loginForm = {
  marginTop: 50,
  marginHorizontal: 30,
  borderRadius: 10,

  backgroundColor: GlobalStyles.colors.primary500,
  paddingHorizontal: 15,
};
export const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1,
  },
  loginForm,
  inputStyle: {
    minHeight: 38,
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
    marginBottom: 15,
  },
  linkContainer: {
    textAlign: "center",
  },

  succMessContainer: {
    ...loginForm,
    alignItems: "center",
  },
  succText: {
    marginVertical:30,
    fontSize: 26,
    color:'white'
  },
  succIcon:{
    marginBottom:20
  }
});
