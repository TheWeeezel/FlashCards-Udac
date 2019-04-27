import React, { Component } from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import { connect } from "react-redux";

import { setData } from "../utils/api";
import { handleRemoveDeck } from "../actions";
import { blue, green } from "../utils/colors";
import styles from "../utils/theme";

class Deck extends Component {
  render() {
    const { decks } = this.props;
    const { navigation } = this.props;
    const title = navigation.getParam("title", "React");
    const deck = decks[title];
    const numberOfQuestions = deck.questions ? deck.questions.length : 0;
    return (
      <View style={styles.container}>
        <View style={{ padding: 12 }}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{numberOfQuestions} Cards</Text>
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
              onPress={() =>
                this.props.navigation.navigate("AddCard", {
                  title: title
                })
              }
              title="Add Card"
              accessibilityLabel="Click to Add Card"
              color={blue}
            />
          </View>
          <View style={styles.button}>
            <Button
              onPress={() =>
                this.props.navigation.navigate("Quiz", {
                  title: title
                })
              }
              title="Start Quiz"
              accessibilityLabel="Click to Start Quiz!"
              color={green}
            />
          </View>
          {/* <View style={styles.button}>
            <Button
              onPress={setData}
              title="Set Data"
              accessibilityLabel="Click to Start Quiz!"
              color={blue}
            />
          </View> */}
          <TouchableOpacity
            onPress={() => this.props.dispatch(handleRemoveDeck(title))}
          >
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
