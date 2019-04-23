import { AsyncStorage } from "react-native";
import { initialData } from "./_DATA";

export const DECK_STORAGE_KEY = "FlashCards:deck";

export function setData() {
  AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(initialData));
  return JSON.stringify(initialData);
}

export function getDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(results => {
    console.log("results", JSON.parse(results));
    return JSON.parse(results);
  });
}

export function addDeck(deck) {
  console.log(deck);
  AsyncStorage.mergeItem(
    DECK_STORAGE_KEY,
    JSON.stringify({
      [deck.id]: deck
    })
  );
}
