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
      <View style={styles.titleContainer}>
        <Text style={styles.titleID}>Review Details</Text>
      </View>
      <View style={styles.modalContainer}>
        {modalContent}
        <View style={styles.addCollectionBtn}>
          <Button
            title="Add to collection"
            color="coral"
            onPress={() => props.navigateToCollection(props.selectedDish.key)}
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
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F8F8F8",
    height: 65,
    paddingTop: 15,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 5
  },
  titleID: {
    fontSize: 17,
    fontWeight: "700"
  },
  modalContainer: {
    margin: 10,
    marginTop: 15
  },
  dishImage: {
    height: 200,
    width: "100%",
    marginBottom: 10
  },
  reviewLayout: {
    padding: 10,
    fontSize: 15,
    fontWeight: "200",
    color: "darkslategrey",
    marginBottom: 20
  },
  textID: {
    fontSize: 12,
    fontWeight: "bold",
    color: "green",
    paddingBottom: 15
  },
  addCollectionBtn: {
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
