import AsyncStorage from "@react-native-async-storage/async-storage";
import { logIn } from "../../utils/http";

export function validation(enteredData, setModalMessage, setShowModal) {
  if (!enteredData.email.includes("@")) {
    setModalMessage("email should contains '@'");
    setShowModal(true);
    return false;
  }
  if (!enteredData.email || !enteredData.password) {
    setModalMessage("you should fill all fields !");
    setShowModal(true);
    return false;
  }

  return true;
}

export async function loginHandler(
  enteredData,
  setModalMessage,
  setShowModal,
  setIsAuth
) {
  const isValide = validation(enteredData, setModalMessage, setShowModal);
  if (isValide) {
    try {
      const response = await logIn(enteredData.email, enteredData.password);

      if (response.status == 200) {
        setIsAuth(true);
        AsyncStorage.setItem("token", response?.data?.idToken);
      }
    } catch (err) {
      if (err?.response?.data?.error?.message == "EMAIL_NOT_FOUND") {
        setModalMessage("email doesn't exists");
      } else if (err?.response?.data?.error?.message == "INVALID_PASSWORD") {
        setModalMessage("password is incorrect , please try again");
      } else {
        setModalMessage("something went wrong");
      }

      setShowModal(true);

      setIsAuth(false);
    }
  }
}
