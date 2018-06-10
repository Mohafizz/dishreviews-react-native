import React from "react";
import { Modal, View, Image, Text, Button, StyleSheet } from "react-native";

const DishDetail = props => {
  let modalContent = null;

  if (props.selectedDish) {
    modalContent = (
      <View>
        <Image style={styles.dishImage} source={props.selectedDish.image} />
        <Text style={styles.textID}>UID: {props.selectedDish.key}</Text>
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
    margin: 10,
    marginTop: 22
  },
  dishImage: {
    height: 200,
    width: "100%",
    marginBottom: 5
  },
  reviewLayout: {
    padding: 10,
    borderWidth: 0.5,
    borderColor: "gray",
    borderRadius: 3,
    fontSize: 16,
    fontStyle: "italic",
    fontWeight: "600",
    color: "gray",
    marginBottom: 20
  },
  textID: {
    fontSize: 12,
    fontWeight: "bold",
    paddingBottom: 10
  },
  addCollectionBtn: {
    backgroundColor: "beige",
    marginBottom: 20,
    borderRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 1
  },
  newCollectionBtn: {
    backgroundColor: "antiquewhite",
    marginBottom: 20,
    borderRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 1
  },
  buttonLayout: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    paddingBottom: 15,
    justifyContent: "space-around"
  }
});

export default DishDetail;
