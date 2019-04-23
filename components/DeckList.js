import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
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
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Deck")}
        >
          <View style={{ padding: 12 }}>
            <Text style={styles.title}>Deck #</Text>
            <Text style={styles.subtitle}># of Cards</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    decks: state
  };
};

export default connect(mapStateToProps)(DeckList);
