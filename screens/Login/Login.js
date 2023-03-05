import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";

import { AuthButton, Button, InputComponent, MyModal } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./Login.styles";

export default function Login() {
  const navigation = useNavigation();

  const [enteredData, setEnteredData] = useState({
    email: "",
    password: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState();
  function loginHandler() {
    console.log("entered data", enteredData);
    validation();
  }
  function validation() {
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

        <AuthButton style={styles.button} onPress={loginHandler}>
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
