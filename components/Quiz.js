import React, { Component } from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";

import styles from "../utils/theme";
import { green, red } from "../utils/colors";

class Quiz extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ padding: 12 }}>
          <Text style={styles.bigTitle}>Question</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.button}>
            <Button
              onPress={() => this.props.navigation.navigate("AddCard")}
              title="Correct"
              color={green}
              accessibilityLabel="Click here for true"
              style={styles.button}
            />
          </View>
          <View style={styles.button}>
            <Button
              onPress={this.onClick}
              title="False"
              color={red}
              accessibilityLabel="Click here for false"
              style={styles.button}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("AddCard")}
        />
      </View>
    );
  }
}

export default Quiz;
