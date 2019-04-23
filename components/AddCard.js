import React, { Component } from "react";
import { View, Text, TextInput, Button } from "react-native";

import styles from "../utils/theme";
import { blue } from "../utils/colors";

class AddCard extends Component {
  static navigationOptions = {
    title: "Add Card"
  };

  constructor(props) {
    super(props);
    this.state = {
      question: "Whats the Question?",
      answer: "Enter the Answer here!"
    };
  }

  onPress = () => {};

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bigTitle}>Add Card</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              width: "100%",
              marginBottom: 10
            }}
            onChangeText={question => this.setState({ question })}
            value={this.state.question}
          />
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              width: "100%",
              marginBottom: 10
            }}
            onChangeText={answer => this.setState({ answer })}
            value={this.state.answer}
          />
          <Button
            onPress={this.onClick}
            title="Submit"
            color={blue}
            accessibilityLabel="Click to add a Question"
            style={{ width: "100%" }}
          />
        </View>
      </View>
    );
  }
}

export default AddCard;
