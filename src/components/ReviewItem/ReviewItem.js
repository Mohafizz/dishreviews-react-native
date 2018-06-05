import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import ListItem from "../ListItem/ListItem";

const ReviewItem = props => {
  const reviewsOutput = props.reviews.map((review, i) => (
    <ListItem
      key={i}
      reviewItem={review}
      onItemPressed={() => alert("Item pressed - ID: " + parseInt(i + 1))}
    />
  ));
  return (
    <ScrollView style={styles.listReviewContainer}>{reviewsOutput}</ScrollView>
  );
};

const styles = StyleSheet.create({
  listReviewContainer: {
    width: "80%"
  }
});

export default ReviewItem;
