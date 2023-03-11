import { View, Text, StyleSheet, Modal } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/styles";
import Button from "./Button";

export default function MyModal({
  showModal,
  buttonHandler,
  errorMessage,
  buttonText,
}) {
  let texts = errorMessage?.split(",");

  return (
    <View style={styles.centeredModal}>
      <Modal
        visible={showModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          buttonHandler;
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {texts?.map((text, index) => (
              <Text key={index} style={styles.messageText}>
                {text}
              </Text>
            ))}

            <Button onPress={buttonHandler} style={{ marginTop: 30 }}>
              <Text>{buttonText}</Text>
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    minHeight: 150,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    justifyContent: "space-between",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  messageText: {
    marginVertical: 5,
    fontSize: 18,
    color: GlobalStyles.colors.primary700,
  },
});
