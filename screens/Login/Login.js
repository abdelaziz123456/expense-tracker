import { View, Text, Pressable } from "react-native";
import React, { useContext, useState } from "react";

import { AuthButton, InputComponent, MyModal } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./Login.styles";
import { logIn } from "../../utils/http";
import { ExpensesContext } from "../../store/expenses-context";
import { loginHandler } from "./LoginUtilities";

export default function Login() {
  const navigation = useNavigation();
  const { setIsAuth } = useContext(ExpensesContext);
  const [enteredData, setEnteredData] = useState({
    email: "",
    password: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState();

  // async function loginHandler() {
  //   console.log("entered data", enteredData);
  //   const isValide = validation();
  //   if (isValide) {
  //     console.log("is valid");
  //     try {
  //       const response = await logIn(enteredData.email, enteredData.password);
  //       console.log(response, "if");
  //       if (response.status == 200) {
  //         setIsAuth(true);
  //       }
  //     } catch (err) {
  //       setIsAuth(false);
  //       console.log("this is error", err);
  //     }
  //   }
  // }
  // function validation() {
  //   if (!enteredData.email.includes("@")) {
  //     setModalMessage("email should contains '@'");
  //     setShowModal(true);
  //     return false;
  //   }
  //   if (!enteredData.email || !enteredData.password) {
  //     setModalMessage("you should fill all fields !");
  //     setShowModal(true);
  //     return false;
  //   }

  //   return true;
  // }

  function onChangehandler(key, value) {
    setEnteredData({
      ...enteredData,
      [key]: value,
    });
  }
  return (
    <View style={styles.container}>
      <View style={styles.loginForm}>
        <InputComponent
          label={"Email Address"}
          textInputConfig={{
            keyboardType: "email-address",
            autoCapitalize: "none",
            onChangeText: (value) => onChangehandler("email", value),
          }}
          inputStyle={styles.inputStyle}
        />
        <InputComponent
          label={"Password"}
          textInputConfig={{
            keyboardType: "number-pad",
            autoCapitalize: "none",
            onChangeText: (value) => onChangehandler("password", value),
          }}
          inputStyle={styles.inputStyle}
        />

        <AuthButton
          style={styles.button}
          onPress={() =>
            loginHandler(enteredData, setModalMessage, setShowModal, setIsAuth)
          }
        >
          <Text style={styles.buttonText}>Login</Text>
        </AuthButton>

        <Pressable
          style={styles.linkContainer}
          onPress={() => navigation.replace("SignUp")}
        >
          <Text style={styles.buttonText}>Create a new user</Text>
        </Pressable>
      </View>
      <MyModal
        showModal={showModal}
        errorMessage={modalMessage}
        buttonText={"okay"}
        buttonHandler={() => setShowModal(false)}
      />
    </View>
  );
}
