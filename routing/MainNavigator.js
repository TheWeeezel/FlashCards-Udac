import React from "react";
import { Platform } from "react-native";
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import { Ionicons } from "@expo/vector-icons";

import { yellow, blue, white } from "../utils/colors";
import DeckList from "../components/DeckList";
import AddDeck from "../components/AddDeck";
import AddCard from "../components/AddCard";
import Deck from "../components/Deck";
import Quiz from "../components/Quiz";

const DeckListStack = createStackNavigator({
  App: DeckList,
  Deck: Deck,
  Quiz: Quiz
});

DeckListStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible
  };
};

const AddDeckStack = createStackNavigator({
  AddDeck: AddDeck,
  AddCard: AddCard
});

AddDeckStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible
  };
};

const MainNavigator = createBottomTabNavigator(
  {
    DeckList: {
      screen: DeckListStack,
      navigationOptions: {
        tabBarLabel: "Show Decks",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-bookmarks" size={25} color={tintColor} />
        )
      }
    },
    AddDeck: {
      screen: AddDeckStack,
      navigationOptions: {
        tabBarLabel: "Add Deck",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-bookmarks" size={25} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Platform.OS === "ios" ? blue : yellow,
      inactiveTintColor: white,
      style: {
        height: 55,
        padding: 5,
        backgroundColor: Platform.OS === "ios" ? yellow : blue,
        shadowColor: "rgba(0, 0, 0, 0.24)",
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
);

export default createAppContainer(MainNavigator);
