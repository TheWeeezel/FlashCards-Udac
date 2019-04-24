import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { connect } from "react-redux";

import { receiveDecks } from "../actions";
import { getDecks } from "../utils/api";
import styles from "../utils/theme";
class DeckList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    getDecks().then(decks => dispatch(receiveDecks(decks)));
  }

  render() {
    const { decks } = this.props;
    return (
      <ScrollView style={{ flex: 1 }}>
        {Object.keys(decks).map(item => {
          const deck = decks[item];
          const numberOfQuestions = deck.questions ? deck.questions.length : 0;
          return (
            <TouchableOpacity
              key={item}
              onPress={() =>
                this.props.navigation.navigate("Deck", {
                  title: item
                })
              }
            >
              <View style={{ padding: 12 }}>
                <Text style={styles.title}>{item}</Text>
                <Text style={styles.subtitle}>
                  {numberOfQuestions} of Cards
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    decks: state
  };
};

export default connect(mapStateToProps)(DeckList);
