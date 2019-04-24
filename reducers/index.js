import {
  RECEIVE_DECKS,
  ADD_DECK,
  ADD_CARD,
  REMOVE_DECK
} from "../actions/index";

export default function flashcards(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.payload
      };
    case ADD_DECK:
      console.log("action:", action);
      return {
        ...state,
        [action.title]: {
          title: action.title,
          questions: [{}]
        }
      };
    case ADD_CARD:
      const { title, question, answer } = action.payload;
      return {
        ...state,
        [title]: {
          ...questions,
          questions: [...new Set({ answer: answer, question: question })]
        }
      };
    case REMOVE_DECK:
      console.log("actionT:", action.title);
      return {
        ...state.filter(() => action.title)
      };
    default:
      return state;
  }
}
