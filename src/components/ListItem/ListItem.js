import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const ListItem = props => {
  let collectionTag = null;
  if (props.collectionName) {
    collectionTag = (
      <View style={styles.collectionContainer}>
        <Text style={styles.textCollection}>{props.collectionName}</Text>
      </View>
    );
  }
  return (
    <TouchableOpacity onPress={props.onItemPressed}>
      <View style={styles.listReviewContainer}>
        <Image
          resizeMode="cover"
          style={styles.dishImage}
          source={props.dishImage}
        />
        <View style={styles.textLayout}>
          <Text style={styles.textID}>UID: {props.categoryID}</Text>
          <Text style={styles.textBody}>{props.reviewItem}</Text>
          {collectionTag}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listReviewContainer: {
    padding: 10,
    marginBottom: 15,
    marginRight: 5,
    marginLeft: 5,
    backgroundColor: "#eee",
    flexDirection: "row",
    alignItems: "center",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 1
  },
  dishImage: {
    marginRight: 10,
    height: 50,
    width: 50,
    marginBottom: 5
  },
  collectionContainer: {
    borderRadius: 10,
    backgroundColor: "violet",
    alignSelf: "flex-end"
  },
  textCollection: {
    fontSize: 10,
    fontWeight: "bold",
    color: "white",
    padding: 5
  },
  textLayout: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 5
  },
  textID: {
    fontSize: 8,
    fontWeight: "bold",
    paddingBottom: 5
  },
  textBody: {
    fontSize: 12,
    fontWeight: "100",
    paddingBottom: 5
  }
});

export default ListItem;
