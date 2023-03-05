import { View, Text, Pressable } from "react-native";
import React from "react";

import { AuthButton, Button, InputComponent } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./SignUp.styles";

export default function SignUp() {
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
          label={"Confirm Email Address"}
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
        <InputComponent
          label={"Confirm Password"}
          textInputConfig={{
            keyboardType: "number-pad",
            autoCapitalize: "none",
            onChangeText: (value) => console.log(value),
          }}
          inputStyle={styles.inputStyle}
        />

        <AuthButton style={styles.button}>
          <Text style={styles.buttonText}>Signup</Text>
        </AuthButton>

        <Pressable
          style={styles.linkContainer}
          onPress={() => navigation.replace("Login")}
        >
          <Text style={styles.buttonText}>Log in instead</Text>
        </Pressable>
      </View>
    </View>
  );
}
