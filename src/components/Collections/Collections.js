import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Picker,
  StyleSheet,
  Button
} from "react-native";

class Collections extends Component {
  state = { collection: "" };

  collectionChangeHandler = value => {
    this.setState({ collection: value });
    console.log(this.state.collection);
  };

  addNewCollection = collection => {
    if (this.state.collection.trim() === "") {
      return;
    }
    {
      this.setState({ collection: collection });
      console.log(this.state.collection);
    }
  };

  render() {
    return (
      <View>
        <View style={styles.newContainer}>
          <Text style={styles.textAddNewCollection}>Add new collection</Text>
          <TextInput
            style={styles.textInputContainer}
            label="newCollection"
            placeholder="Enter here..."
            onChangeText={value => this.collectionChangeHandler}
          />
          <View style={styles.addCollectionBtn}>
            <Button title="Add" color="coral" onPress={this.addNewCollection} />
          </View>
        </View>
        <View style={styles.addContainer}>
          <Text style={styles.textAddNewCollection}>
            Select existing collection
          </Text>
          <Picker
            style={{
              height: "100%",
              width: "70%",
              alignSelf: "center"
            }}
            itemStyle={{
              backgroundColor: "whitesmoke",
              borderWidth: 0.5,
              borderColor: "gray",
              borderRadius: 3
            }}
            selectedValue={this.state.collection}
            onValueChange={itemValue =>
              this.setState({ collection: itemValue })
            }
          >
            <Picker.Item label="Vegan" value="Vegan" />
            <Picker.Item label="Vegetarian" value="Vegetarian" />
            <Picker.Item label="Halal" value="Halal" />
            {/* <Picker.Item
              label={this.state.collection}
              value={this.state.collection}
            /> */}
          </Picker>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  newContainer: {
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  textAddNewCollection: {
    padding: 10,
    fontSize: 18,
    marginBottom: 10
  },
  addCollectionBtn: {
    backgroundColor: "antiquewhite",
    marginBottom: 20,
    borderRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 1
  },
  textInputContainer: {
    height: 30,
    width: "95%",
    paddingLeft: 10,
    marginLeft: 10,
    borderRadius: 5,
    borderWidth: 0.5,
    marginBottom: 10
  },
  addContainer: {
    backgroundColor: "#fff",
    height: "100%"
  },
  pickerStyle: {
    padding: 20
  }
});

export default Collections;
