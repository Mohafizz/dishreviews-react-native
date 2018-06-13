import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../ListItem/ListItem";

const ReviewItem = props => {
  var renderFrom = null;
  console.log(props.reviews, props.collections);
  if (props.reviews) {
    renderFrom = (
      <FlatList
        data={props.reviews}
        renderItem={info => (
          <ListItem
            categoryID={info.item.key}
            reviewItem={info.item.review}
            dishImage={info.item.image}
            collectionName={info.item.collection}
            onItemPressed={() => props.onItemSelected(info.item.key)}
          />
        )}
      />
    );
  } else {
    renderFrom = (
      <FlatList
        data={props.collections}
        renderItem={info => (
          <ListItem
            categoryID={info.item.key}
            reviewItem={info.item.review}
            dishImage={info.item.image}
            collectionName={info.item.collection}
            onItemPressed={alert(
              "Viewing only, please go back to main page for details."
            )}
          />
        )}
      />
    );
  }

  return <View style={styles.listReviewContainer}>{renderFrom}</View>;
};

const styles = StyleSheet.create({
  listReviewContainer: {
    width: "95%"
  }
});

export default ReviewItem;
