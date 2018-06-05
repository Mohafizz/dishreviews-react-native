import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import ReviewInput from "./src/components/ReviewInput/ReviewInput";
import ReviewItem from "./src/components/ReviewItem/ReviewItem";

export default class App extends Component {
  state = {
    reviews: []
  };

  onAddReviewHandler = review => {
    this.setState(prevState => {
      return {
        reviews: prevState.reviews.concat(review)
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ReviewInput onAddReview={this.onAddReviewHandler} />
        <ReviewItem reviews={this.state.reviews} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
