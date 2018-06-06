import React, { Component } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

class ReviewInput extends Component {
  state = {
    review: ""
  };

  reviewChangeHandler = value => {
    this.setState({ review: value });
  };

  addInputHandler = () => {
    if (this.state.review.trim() === "") {
      return;
    }
    this.props.onAddReview(this.state.review);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textInputContainer}>
          <TextInput
            value={this.value}
            onChangeText={this.reviewChangeHandler}
            placeholder="Enter review here...(max 300 words)"
            editable={true}
            multiline={true}
            // numberOfLines={1}
            maxLength={300}
          />
        </View>
        <Button title="Add" onPress={this.addInputHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInputContainer: {
    height: 130,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    borderWidth: 0.5,
    marginBottom: 10
  },
  container: {
    padding: 50,
    width: "100%"
  }
});

export default ReviewInput;
