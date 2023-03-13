import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

async function clearToken() {
  await AsyncStorage.removeItem("token");
}
const logoutHandler = (setToken, setIsAuth) => {
  setToken("");
  setIsAuth(false);
  clearToken()
};

export const showAlert = (setToken, setIsAuth) => {
  Alert.alert(
    "",
    "Are you sure you want to log out ",
    [
      {
        text: "Confirm",
        onPress: () => logoutHandler(setToken, setIsAuth),
        style: "destructive",
      },
      {
        text: "Cancel",
        onPress: () => {},
        style: "cancel",
      },
    ],
    {
      cancelable: true,
    }
  );
};
