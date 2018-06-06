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
      <Text>{props.reviewItem}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listReviewContainer: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#eee",
    flexDirection: "row",
    alignItems: "center"
  },
  dishImage: {
    marginRight: 10,
    height: 50,
    width: 50
  }
});

export default ListItem;
