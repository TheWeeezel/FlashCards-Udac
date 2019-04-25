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
      return {
        ...state,
        [action.title]: {
          title: action.title,
          questions: []
        }
      };
    case ADD_CARD:
      const { title, question, answer } = action.payload;
      const questionObject = {
        question: question,
        answer: answer
      };
      return {
        ...state,
        [title]: {
          ...state[title],
          questions: [...state[title].questions, questionObject]
        }
      };
    case REMOVE_DECK:
      console.log("actionT:", action.title);
      return {
        ...state,
        [action.title]: state.action.title.filter(item => item !== action.title)
      };
    default:
      return state;
  }
}
