import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import ReviewInput from "./src/components/ReviewInput/ReviewInput";
import ReviewItem from "./src/components/ReviewItem/ReviewItem";
import dishImage from "./src/assets/salmon-dish-food-meal-46239.jpeg";
import DishDetail from "./src/components/DishDetail/DishDetail";
import reviews from "./src/seedData/seedData";
import { Actions } from "react-native-router-flux";
import Collections from "./src/components/Collections/Collections";

export default class App extends Component {
  state = {
    reviews,
    selectedDish: null,
    addedCollection: null,
    selectedKey: null
  };

  //used by: ReviewInput props: onAddReview. Add new reviews to state.reviews
  onAddReviewHandler = review => {
    this.setState(prevState => {
      return {
        reviews: prevState.reviews.concat({
          key: Math.random()
            .toString(36)
            .substr(2, 9),
          review,
          image: dishImage
        })
      };
    });
  };

  //used by: ReviewItem props: onItemSelected. Returns the key to selectedDish
  itemSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedDish: prevState.reviews.find(review => {
          return review.key === key;
        })
      };
    });
  };

  //used by: DishDetail props: onItemDeleted. Returns the rest of the keys, nullify the selectedDish with the key.
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

  //used by: DishDetail props: onModalClosed
  modalClosedHandler = () => {
    this.setState({
      selectedDish: null
    });
  };

  //used by: DishDetail props: navigateToCollection passing key of selectedDish to Collections.js
  navigateToAddCollection = key => {
    this.setState({
      selectedDish: null
    });
    Actions.collectionsPage(key);
  };

  componentWillReceiveProps = key => {
    this.setState(prevState => {
      return {
        reviews: prevState.reviews.map(review => {
          console.log(review, key.selectedKey);
          if (review.key === key.selectedKey) {
            review.collection = key.collectionName;
          }
          console.log(review);
          return review;
        })
      };
    });
  };

  // onGoToCollection = key => {
  //   this.setState(prevState => {
  //     return {
  //       reviews: prevState.reviews.filter(review => {
  //         console.log(review, key.selectedKey);
  //         return review.collection === key.collectionName;
  //       })
  //     };
  //   });
  // };

  render() {
    return (
      <View style={styles.container}>
        <DishDetail
          selectedDish={this.state.selectedDish}
          onItemDeleted={this.dishDeletedHandler}
          onModalClosed={this.modalClosedHandler}
          collectionName={this.state.addedCollection}
          navigateToCollection={this.navigateToAddCollection}
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
