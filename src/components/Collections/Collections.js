import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Picker,
  StyleSheet,
  Button
} from "react-native";
import { Actions } from "react-native-router-flux";

class Collections extends Component {
  state = {
    collection: ""
  };

  collectionChangeHandler = value => {
    this.setState({ collection: value });
  };

  addNewCollection = collection => {
    if (this.state.collection.trim() === "") {
      return alert("Please input your collection");
    }
    {
      let selectedData = {
        collectionName: this.state.collection,
        selectedKey: this.props.data
      };
      Actions.replace("main", selectedData);
    }
  };

  render() {
    return (
      <View>
        {/* {console.log(this.state.collection, this.state.key)} */}
        <View style={styles.newContainer}>
          <Text style={styles.textAddNewCollection}>Add new collection</Text>
          <TextInput
            style={styles.textInputContainer}
            label="newCollection"
            placeholder="Enter here..."
            onChangeText={this.collectionChangeHandler}
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
            style={styles.pickerStyle}
            itemStyle={styles.pickerItemStyle}
            selectedValue={this.state.collection}
            onValueChange={itemValue =>
              this.setState({ collection: itemValue })
            }
          >
            <Picker.Item label="Vegan" value="Vegan" />
            <Picker.Item label="Vegetarian" value="Vegetarian" />
            <Picker.Item label="Halal" value="Halal" />
          </Picker>
          <View style={styles.addCollectionBtn}>
            <Button
              title="Select"
              color="coral"
              onPress={this.addNewCollection}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  newContainer: {
    backgroundColor: "#fff"
  },
  textAddNewCollection: {
    padding: 20,
    fontSize: 18
  },
  textInputContainer: {
    height: 30,
    width: "90%",
    alignSelf: "center",
    paddingLeft: 10,
    borderRadius: 5,
    borderWidth: 0.5,
    marginBottom: 20
  },
  addCollectionBtn: {
    backgroundColor: "antiquewhite",
    marginBottom: 20,
    borderRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    alignSelf: "center",
    width: "50%"
  },
  addContainer: {
    backgroundColor: "#fff",
    height: "100%"
  },
  pickerStyle: {
    width: "70%",
    alignSelf: "center",
    marginBottom: 20
  },
  pickerItemStyle: {
    backgroundColor: "whitesmoke",
    borderWidth: 0.5,
    borderColor: "gray",
    borderRadius: 3
  }
});

export default Collections;
