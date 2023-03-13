import { View, Text, Pressable, ActivityIndicator } from "react-native";
import React, { useState } from "react";

import {
  AuthButton,
  ErrorOverlay,
  InputComponent,
  MyModal,
} from "../../components";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./SignUp.styles";
import { signUphandler } from "./SignUpUtiles";
import SuccessComponent from "./SuccessComponent";
export default function SignUp() {
  const [enteredData, setEnteredData] = useState({
    email: "",
    emailConfirmed: "",
    password: "",
    passwordConfirmed: "",
  });

  function onChangehandler(key, value) {
    setEnteredData({
      ...enteredData,
      [key]: value,
    });
  }

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState();
  const navigation = useNavigation();
  const [isSigning, setIsSigning] = useState(false);
  const [err, setError] = useState("");
  const [isAuth, setIsAuth] = useState(false);

  if (err) {
    return <ErrorOverlay message={err} onConfirm={() => setError("")} />;
  }

  if (isAuth) {
    return <SuccessComponent />;
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
          label={"Confirm Email Address"}
          textInputConfig={{
            keyboardType: "email-address",
            autoCapitalize: "none",
            onChangeText: (value) => onChangehandler("emailConfirmed", value),
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
        <InputComponent
          label={"Confirm Password"}
          textInputConfig={{
            secureTextEntry: true,
            keyboardType: "number-pad",
            autoCapitalize: "none",
            onChangeText: (value) =>
              onChangehandler("passwordConfirmed", value),
          }}
          inputStyle={styles.inputStyle}
        />

        <AuthButton
          style={styles.button}
          onPress={() =>
            signUphandler(
              enteredData,
              setModalMessage,
              setShowModal,
              setIsSigning,
              setError,
              setIsAuth
            )
          }
        >
          {isSigning ? (
            <ActivityIndicator size={"small"} color={"white"} />
          ) : (
            <Text style={styles.buttonText}>Sign up</Text>
          )}
        </AuthButton>

        <Pressable
          style={styles.linkContainer}
          onPress={() => navigation.replace("Login")}
        >
          <Text style={styles.buttonText}>Log in instead</Text>
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
