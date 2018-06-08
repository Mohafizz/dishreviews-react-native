import React from "react";
import { Modal, View, Image, Text, Button, StyleSheet } from "react-native";

const DishDetail = props => {
  let modalContent = null;

  if (props.selectedDish) {
    modalContent = (
      <View>
        <Text style={styles.textID}>ID:123456</Text>
        <Image style={styles.dishImage} source={props.selectedDish.image} />
        <Text style={styles.reviewLayout}>{props.selectedDish.review}</Text>
      </View>
    );
  }
  return (
    <Modal visible={props.selectedDish !== null} animationType="slide">
      <View style={styles.modalContainer}>{modalContent}</View>
      <View>
        <Button title="Delete" color="red" onPress={props.onItemDeleted} />
        <Button title="Close" onPress={props.onModalClosed} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  dishImage: {
    height: 200,
    width: "100%",
    marginBottom: 20
  },
  reviewLayout: {
    fontSize: 16,
    fontStyle: "italic",
    fontWeight: "600",
    color: "gray"
  },
  textID: {
    fontSize: 12,
    fontWeight: "bold",
    paddingBottom: 5
  }
});

export default DishDetail;
