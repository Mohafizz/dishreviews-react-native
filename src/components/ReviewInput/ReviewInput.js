import React, { Component } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

class ReviewInput extends Component {
  state = {
    review: ""
  };

  reviewChangeHandler = value => {
    this.setState({ review: value });
    // this.value = "";
  };

  addInputHandler = () => {
    if (this.state.review.trim() === "") {
      return;
    }
    this.props.onAddReview(this.state.review);
    alert(`Your review has been added!`);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textInputContainer}>
          <TextInput
            onChangeText={this.reviewChangeHandler}
            placeholder="Please enter your review here...(max 300 words)"
            editable={true}
            multiline={true}
            maxLength={300}
          />
        </View>
        <View style={styles.addReviewBtn}>
          <Button
            disabled={!this.state.review}
            title="Add"
            color="coral"
            onPress={this.addInputHandler}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInputContainer: {
    height: 120,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    borderWidth: 0.5,
    marginBottom: 20
  },
  container: {
    paddingTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
    width: "100%"
  },
  addReviewBtn: {
    backgroundColor: "antiquewhite",
    marginBottom: 20,
    borderRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    alignSelf: "center",
    width: "50%"
  }
});

export default ReviewInput;
