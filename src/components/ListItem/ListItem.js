import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ListItem = props => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listReviewContainer}>
      <Text>{props.reviewItem}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listReviewContainer: {
    padding: 10,
    marginBottom: 5,
    backgroundColor: "#eee"
  }
});

export default ListItem;
