import React, { Component } from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import { connect } from "react-redux";

import { setData } from "../utils/api";
import { handleRemoveDeck } from "../actions";
import { blue } from "../utils/colors";
import styles from "../utils/theme";

class Deck extends Component {
  render() {
    const { decks } = this.props;
    const { navigation } = this.props;
    const title = navigation.getParam("title", "React");
    const deck = decks[title];

    console.log(deck);
    return (
      <View style={styles.container}>
        <View style={{ padding: 12 }}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}># of Cards</Text>
        </View>
        <View
          style={{
            padding: 12,
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "stretch"
          }}
        >
          <View style={styles.button}>
            <Button
              onPress={() => this.props.navigation.navigate("AddCard")}
              title="Add Card"
              accessibilityLabel="Click to Add Card"
              color={blue}
            />
          </View>
          <View style={styles.button}>
            <Button
              onPress={() => this.props.navigation.navigate("Quiz")}
              title="Start Quiz"
              accessibilityLabel="Click to Start Quiz!"
              color={blue}
            />
          </View>
          <View style={styles.button}>
            <Button
              onPress={setData}
              title="Set Data"
              accessibilityLabel="Click to Start Quiz!"
              color={blue}
            />
          </View>
          <TouchableOpacity onPress={() => handleRemoveDeck(title)}>
            <Text style={styles.deleteText}>Delete Deck</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("AddCard")}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    decks: state
  };
};

export default connect(mapStateToProps)(Deck);
