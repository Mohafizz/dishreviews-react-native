import React from "react";
import { StyleSheet, View } from "react-native";
import ReviewItem from "../ReviewItem/ReviewItem";

const CollectionsList = props => {
  let collections = props.reviewLists.filter(collection => {
    return collection.collection === props.collectionName;
  });
  return (
    <View style={styles.container}>
      {console.log(props.reviewLists)}
      <ReviewItem collections={collections} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

export default CollectionsList;
