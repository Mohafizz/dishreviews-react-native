import React from "react";
import { Modal, View, Image, Text, Button, StyleSheet } from "react-native";

const DishDetail = props => {
  let modalContent = null;

  if (props.selectedDish) {
    modalContent = (
      <View>
        <Text style={styles.textID}>UID: {props.selectedDish.key}</Text>
        <Image style={styles.dishImage} source={props.selectedDish.image} />
        <Text style={styles.reviewLayout}>{props.selectedDish.review}</Text>
      </View>
    );
  }
  return (
    <Modal visible={props.selectedDish !== null} animationType="slide">
      <View style={styles.modalContainer}>
        {modalContent}
        <View style={styles.addCollectionBtn}>
          <Button
            title="Add to collection"
            color="green"
            onPress={props.onAddToCollection}
          />
        </View>
        <View style={styles.newCollectionBtn}>
          <Button
            title="Create new collection"
            color="coral"
            onPress={props.onCreateNewCollection}
          />
        </View>
      </View>

      <View style={styles.buttonLayout}>
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
    color: "gray",
    marginBottom: 20
  },
  textID: {
    fontSize: 12,
    fontWeight: "bold",
    paddingBottom: 5
  },
  addCollectionBtn: {
    backgroundColor: "beige",
    marginBottom: 20
  },
  newCollectionBtn: {
    backgroundColor: "antiquewhite",
    marginBottom: 20
  },
  buttonLayout: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-around",
    marginBottom: 20
  }
});

export default DishDetail;
