import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { GlobalStyles } from "../constants/styles";
import { Button, IconButton } from "../components";
import { useNavigation } from "@react-navigation/native";

export default function ManageExpense(props) {
  const type = props.route.params.type;
  const expesneId = props.route.params?.expesneId;
  const navigation = useNavigation();
  const deleteHandler = () => {
    console.log(expesneId, "deleted");
    navigation.goBack()
  };
  const cancelHandler = () => {
    console.log("canelled");
    navigation.goBack()
  };
  const confirmHandler = () => {
    console.log("confirmed");
    navigation.goBack()
  };
  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button style={styles.button} mode={"flat"} onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {expesneId ? "Update" : "Add"}
        </Button>
      </View>
      <View style={styles.seperator}></View>
      {expesneId && (
        <View style={styles.iconContainer}>
          <IconButton
            icon="trash"
            size={36}
            color={GlobalStyles.colors.error500}
            onPress={deleteHandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1,
    paddingHorizontal: 20,
  },
  seperator: {
    marginVertical: 15,
  },
  iconContainer: {
    borderTopWidth: 1,
    borderColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
