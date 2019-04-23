export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";

export function receiveDecks(payload) {
  return {
    type: RECEIVE_DECKS,
    payload
  };
}

export function addDeck(payload) {
  return {
    type: ADD_DECK,
    payload
  };
}

export function addCard(payload) {
  return {
    type: ADD_CARD,
    payload
  };
}
