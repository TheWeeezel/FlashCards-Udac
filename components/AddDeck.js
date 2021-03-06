import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  KeyboardAvoidingView
} from "react-native";
import { connect } from "react-redux";

import { white, blue } from "../utils/colors";
import styles from "../utils/theme";
import { handleAddDeck } from "../actions";

class AddDeck extends Component {
  static navigationOptions = {
    title: "Add Deck"
  };

  constructor(props) {
    super(props);
    this.state = { text: "Useless Placeholder" };
  }

  handleClick = () => {
    const { dispatch } = this.props;
    dispatch(handleAddDeck(this.state.text));
    this.props.navigation.navigate("Deck", {
      title: this.state.text
    });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Text style={styles.bigTitle}>Specify the name of your new deck!</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              width: "100%",
              marginBottom: 10
            }}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
          <Button
            onPress={this.handleClick}
            title="Add Deck"
            color={blue}
            accessibilityLabel="Click to Add Deck"
            style={{ width: "100%" }}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default connect()(AddDeck);
