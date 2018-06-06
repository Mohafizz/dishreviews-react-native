import React from "react";
import { FlatList, StyleSheet } from "react-native";
import ListItem from "../ListItem/ListItem";

const ReviewItem = props => {
  return (
    <FlatList
      style={styles.listReviewContainer}
      data={props.reviews}
      renderItem={info => (
        <ListItem
          reviewItem={info.item.review}
          dishImage={info.item.image}
          onItemPressed={() => props.onItemSelected(info.item.key)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listReviewContainer: {
    width: "90%"
  }
});

export default ReviewItem;
