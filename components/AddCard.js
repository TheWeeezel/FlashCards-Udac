import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  KeyboardAvoidingView
} from "react-native";
import { connect } from "react-redux";

import { handleAddCard } from "../actions";
import styles from "../utils/theme";
import { blue } from "../utils/colors";

class AddCard extends Component {
  static navigationOptions = {
    title: "Add Card"
  };

  state = {
    question: "Whats the Question?",
    answer: "Enter the Answer here!"
  };

  handleClick = title => {
    const { dispatch } = this.props;
    dispatch(handleAddCard(title, this.state.question, this.state.answer));
  };

  render() {
    const { navigation } = this.props;
    const title = navigation.getParam("title", "React");
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
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
            onPress={() => this.handleClick(title)}
            title="Submit"
            color={blue}
            accessibilityLabel="Click to add a Question"
            style={{ width: "100%" }}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default connect()(AddCard);
