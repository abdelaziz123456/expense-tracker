import { View, Text, Pressable } from "react-native";
import React from "react";

import { AuthButton, Button, InputComponent } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./Login.styles";

export default function Login() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.loginForm}>
        <InputComponent
          label={"Email Address"}
          textInputConfig={{
            keyboardType: "email-address",
            autoCapitalize: "none",
            onChangeText: (value) => console.log(value),
          }}
          inputStyle={styles.inputStyle}
        />
        <InputComponent
          label={"Password"}
          textInputConfig={{
            keyboardType: "number-pad",
            autoCapitalize: "none",
            onChangeText: (value) => console.log(value),
          }}
          inputStyle={styles.inputStyle}
        />

        <AuthButton style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </AuthButton>

        <Pressable
          style={styles.linkContainer}
          onPress={() => navigation.replace("SignUp")}
        >
          <Text style={styles.buttonText}>Create a new user</Text>
        </Pressable>
      </View>
    </View>
  );
}
