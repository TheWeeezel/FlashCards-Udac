import React, { Component } from "react";
import { View, Text, Button, Modal, Alert } from "react-native";
import * as Animatable from "react-native-animatable";
import { connect } from "react-redux";

import { clearLocalNotification, setLocalNotification } from "../utils/helpers";
import styles from "../utils/theme";
import { green, red, blue } from "../utils/colors";

class Quiz extends Component {
  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params;
    return {
      title: `${title} Quiz`
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      questionIndex: 0,
      correctAnswers: 0,
      totalQuestions: 0,
      front: true,
      anim: "",
      modalVisiblity: false
    };
  }

  componentDidMount() {
    const { decks } = this.props;
    const { navigation } = this.props;
    const title = navigation.getParam("title", "React");
    const deck = decks[title];
    this.setState({ totalQuestions: deck.questions.length });
    console.log("CMout", this.state.totalQuestions);
  }

  handleAnswer() {
    const { questionIndex } = this.state;
    if (this.state.questionIndex < this.state.totalQuestions - 1) {
      this.setState({
        questionIndex: questionIndex + 1,
        front: true
      });
    } else {
      this.setState({
        modalVisiblity: true
      });
    }
  }

  questionView(deck) {
    return (
      <View style={{ flex: 1 }}>
        {deck && !deck.questions.length ? (
          <Text style={styles.bigTitle}>
            Unfortunately there is no question to answer because there is no
            card added to this deck
          </Text>
        ) : (
          <View style={{ flex: 1 }}>
            <Text style={styles.bigTitle}>
              {deck && deck.questions[this.state.questionIndex].question}
            </Text>
          </View>
        )}

        <View style={styles.inputContainer}>
          <Button
            onPress={() => this.flipCard()}
            title="Show Answer"
            color={blue}
            accessibilityLabel="Click here for the truth"
            style={styles.button}
          />
        </View>
      </View>
    );
  }

  answerView(deck) {
    const { correctAnswers } = this.state;
    return (
      <View style={{ flex: 1 }}>
        {deck && !deck.questions.length ? (
          <Text style={styles.bigTitle}>
            Unfortunately there is no question to answer because there is no
            card added to this deck
          </Text>
        ) : (
          <View style={{ flex: 1 }}>
            <Text style={styles.bigTitle}>
              {deck && deck.questions[this.state.questionIndex].answer}
            </Text>
          </View>
        )}

        <View style={styles.inputContainer}>
          <Text>
            {this.state.questionIndex} / {this.state.totalQuestions}
          </Text>
          <View style={styles.button}>
            <Button
              onPress={() => {
                this.setState(
                  { correctAnswers: correctAnswers + 1 },
                  this.handleAnswer
                );
              }}
              title="Correct"
              color={green}
              accessibilityLabel="Click here for true"
              style={styles.button}
            />
          </View>
          <View style={styles.button}>
            <Button
              onPress={() => this.handleAnswer()}
              title="False"
              color={red}
              accessibilityLabel="Click here for false"
              style={styles.button}
            />
          </View>
        </View>
      </View>
    );
  }

  flipCard = () => {
    if (this.state.front) {
      this.setState({
        front: false
      });
    } else {
      this.setState({
        front: true
      });
    }
  };

  clearNotifications() {
    clearLocalNotification().then(setLocalNotification);
  }

  render() {
    const { decks } = this.props;
    const { navigation } = this.props;
    const title = navigation.getParam("title", "React");
    const deck = decks[title];
    const { front } = this.state;

    const flippingAnimation = {
      0: {
        rotateY: "0deg"
      },
      1: {
        rotateY: "360deg"
      }
    };
    const reverseFlippingAnimation = {
      0: {
        rotateY: "360deg"
      },
      1: {
        rotateY: "0deg"
      }
    };

    return (
      <View style={styles.container}>
        {this.state.modalVisiblity ? (
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisiblity}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >
            <View style={{ marginTop: 22 }}>
              <View style={{ padding: 30 }}>
                <Text style={styles.bigTitle}>Congratulations!!</Text>
                <Text style={styles.title}>
                  You have answered {this.state.correctAnswers}
                  from the total of {this.state.totalQuestions} correct!
                </Text>
                <Button
                  onPress={() => {
                    navigation.goBack();
                  }}
                  title="Back to Deck"
                  accessibilityLabel="Click to go back to the Current Deck!"
                  color={blue}
                />
                <Button
                  onPress={() => {
                    this.setState({
                      correctAnswers: 0,
                      questionIndex: 0,
                      front: true,
                      modalVisiblity: false
                    });
                  }}
                  title="Restart Quiz"
                  accessibilityLabel="Click to Restart Quiz!"
                  color={blue}
                />
              </View>
            </View>
          </Modal>
        ) : null}
        <Animatable.View
          style={{ flex: 1 }}
          animation={front ? flippingAnimation : reverseFlippingAnimation}
        >
          {front ? this.questionView(deck) : this.answerView(deck)}
        </Animatable.View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    decks: state
  };
};

export default connect(mapStateToProps)(Quiz);
