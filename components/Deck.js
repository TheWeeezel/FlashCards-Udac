import React, { Component } from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import { setData } from "../utils/api";

import { blue } from "../utils/colors";
import styles from "../utils/theme";

class Deck extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ padding: 12 }}>
          <Text style={styles.title}>Deck #</Text>
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
          <Text style={styles.deleteText}>Delete Deck</Text>
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("AddCard")}
        />
      </View>
    );
  }
}

export default Deck;
