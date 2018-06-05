import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ListItem = props => (
  <View style={styles.listReviewContainer}>
    <Text>{props.reviewItem}</Text>
  </View>
);

const styles = StyleSheet.create({
  listReviewContainer: {
    padding: 10,
    marginBottom: 5,
    backgroundColor: "#eee"
  }
});

export default ListItem;
