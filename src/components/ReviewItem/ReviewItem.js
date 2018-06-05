import React from "react";
import { View, StyleSheet } from "react-native";
import ListItem from "../ListItem/ListItem";

const ReviewItem = props => {
  const reviewsOutput = props.reviews.map((review, i) => (
    <ListItem key={i} reviewItem={review} />
  ));
  return <View style={styles.listReviewContainer}>{reviewsOutput}</View>;
};

const styles = StyleSheet.create({
  listReviewContainer: {
    width: "80%"
  }
});

export default ReviewItem;
