import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const ListItem = props => (
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
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listReviewContainer: {
    padding: 10,
    marginBottom: 20,
    backgroundColor: "#eee",
    flexDirection: "row",
    alignItems: "center"
  },
  dishImage: {
    marginRight: 10,
    height: 50,
    width: 50
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
    fontWeight: "100"
  }
});

export default ListItem;
