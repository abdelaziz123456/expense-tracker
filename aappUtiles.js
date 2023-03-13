import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";


const logoutHandler = (setToken, setIsAuth) => {
  setToken("");
  setIsAuth(false);
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
