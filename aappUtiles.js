import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const setAsyncItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (err) {
    console.log(err);
  }
};

export const getAsyncItem = async (key) => {
  try {
    const keyValue = await AsyncStorage.getItem(key);
    return keyValue;
  } catch (err) {
    return err;
  }
};

const logoutHandler = (setToken, setIsAuth) => {
  setToken("");
  setIsAuth(false);
  setAsyncItem("token", "");
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
