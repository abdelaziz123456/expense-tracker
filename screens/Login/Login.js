import { View, Text, Pressable } from "react-native";
import React, { useContext, useState } from "react";

import { AuthButton,InputComponent, MyModal } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./Login.styles";
import { ExpensesContext } from "../../store/expenses-context";
import { loginHandler } from "./LoginUtilities";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
  const navigation = useNavigation();
  const { setIsAuth, setToken } = useContext(ExpensesContext);

  const [enteredData, setEnteredData] = useState({
    email: "",
    password: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState();

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
            secureTextEntry: true,
            keyboardType: "number-pad",
            autoCapitalize: "none",
            onChangeText: (value) => onChangehandler("password", value),
          }}
          inputStyle={styles.inputStyle}
        />

        <AuthButton
          style={styles.button}
          onPress={() =>
            loginHandler(
              enteredData,
              setModalMessage,
              setShowModal,
              setIsAuth,
              setToken,
            )
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
