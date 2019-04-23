import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import styles from "../utils/theme";

class DeckList extends Component {
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

export default DeckList;
