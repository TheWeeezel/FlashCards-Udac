import { AsyncStorage } from "react-native";
import { DECK_STORAGE_KEY } from "../utils/api";

export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const ADD_DECK = "ADD_DECK";
export const REMOVE_DECK = "REMOVE_DECK";
export const ADD_CARD = "ADD_CARD";

export function receiveDecks(payload) {
  return {
    type: RECEIVE_DECKS,
    payload
  };
}

export function addDeck(title) {
  return {
    type: ADD_DECK,
    title
  };
}

export function removeDeck(title) {
  return {
    type: REMOVE_DECK,
    title
  };
}

export function addCard(payload) {
  return {
    type: ADD_CARD,
    payload
  };
}

export function handleAddDeck(title) {
  return dispatch => {
    return AsyncStorage.mergeItem(
      DECK_STORAGE_KEY,
      JSON.stringify({
        [title]: {
          title: title,
          questions: []
        }
      })
    )
      .then(() => dispatch(addDeck(title)))
      .catch(() => dispatch(console.log("Something went wrong")));
  };
}

export function handleRemoveDeck(title) {
  return dispatch => {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
      .then(results => {
        const data = JSON.parse(results);
        data[title] = undefined;
        delete data[title];
        AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data));
      })
      .then(() => dispatch(removeDeck(title)))
      .catch(() => dispatch(console.log("Something went wrong")));
  };
}

export function getDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(results => {
    return JSON.parse(results);
  });
}

export function handleAddCard(title, question, answer) {
  return dispatch => {
    const payload = {
      title: title,
      question: question,
      answer: answer
    };

    return AsyncStorage.mergeItem(
      DECK_STORAGE_KEY,
      JSON.stringify({
        [title]: {
          questions: [
            {
              question: question,
              answer: answer
            }
          ]
        }
      })
    )
      .then(() => dispatch(addCard(payload)))
      .catch(() => dispatch(console.log("Something went wrong")));
  };
}
