import { View, Text } from "react-native";
import React from "react";
import { styles } from "./SignUp.styles";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { AuthButton } from "../../components";
export default function SuccessComponent() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.succMessContainer}>
        <Text style={styles.succText}>User Created Successfully</Text>
        <View style={styles.succIcon}>
          <Ionicons name="checkmark-circle" size={60} color="green" />
        </View>

        <AuthButton
          style={styles.button}
          onPress={() => navigation.replace("Login")}
        >
          <Text style={styles.buttonText}>Go to Login Screen</Text>
        </AuthButton>
      </View>
    </View>
  );
}
