import React from "react";
import { Modal, View, Image, Text, Button, StyleSheet } from "react-native";

const DishDetail = props => {
  let modalContent = null;

  if (props.selectedDish) {
    modalContent = (
      <View>
        <Image style={styles.dishImage} source={props.selectedDish.image} />
        <Text style={styles.reviewLayout}>{props.selectedDish.review}</Text>
      </View>
    );
  }
  return (
    <Modal visible={props.selectedDish !== null} animationType="slide">
      <View style={styles.modalContainer}>{modalContent}</View>
      <View>
        <Button title="Delete" color="red" />
        <Button title="Close" />
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
  }
});

export default DishDetail;
