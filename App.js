import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import ReviewInput from "./src/components/ReviewInput/ReviewInput";
import ReviewItem from "./src/components/ReviewItem/ReviewItem";
import dishImage from "./src/assets/salmon-dish-food-meal-46239.jpeg";
import DishDetail from "./src/components/DishDetail/DishDetail";
import reviews from "./src/seedData/seedData";

export default class App extends Component {
  state = {
    reviews: reviews,
    selectedDish: null
  };

  onAddReviewHandler = reviews => {
    this.setState(prevState => {
      return {
        reviews: prevState.reviews.concat({
          key: Math.random()
            .toString(36)
            .substr(2, 9),
          review: reviews,
          image: dishImage
        })
      };
    });
  };

  itemSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedDish: prevState.reviews.find(review => {
          return review.key === key;
        })
      };
    });
  };

  dishDeletedHandler = () => {
    this.setState(prevState => {
      return {
        reviews: prevState.reviews.filter(review => {
          return review.key !== prevState.selectedDish.key;
        }),
        selectedDish: null
      };
    });
  };

  modalClosedHandler = () => {
    this.setState({
      selectedDish: null
    });
  };

  navigateToAddCollection = () => {
    alert("Should got to add to an existing collection");
  };

  navigateToNewCollection = () => {
    alert("Should got to add new collection");
  };

  render() {
    return (
      <View style={styles.container}>
        {console.log("here", reviews)}
        <DishDetail
          selectedDish={this.state.selectedDish}
          onItemDeleted={this.dishDeletedHandler}
          onModalClosed={this.modalClosedHandler}
          onAddToCollection={this.navigateToAddCollection}
          onCreateNewCollection={this.navigateToNewCollection}
        />
        <ReviewInput onAddReview={this.onAddReviewHandler} />
        <ReviewItem
          reviews={this.state.reviews}
          onItemSelected={this.itemSelectedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
