import { Alert } from "react-native";

const logoutHandler = (setToken, setIsAuth) => {
  setToken("");
  setIsAuth(false);
  console.log("logged out done ");
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
