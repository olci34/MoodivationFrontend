export default function appReducer(state, action) {
  switch (action.type) {
    case "FETCH_WORDS":
      return { ...state, words: action.payload };
    case "FETCH_AUTHORS":
      return {...state, authors: action.payload}
    case "ADD_WORD":
      const updatedWords = state.words
      updatedWords.push(action.payload)
      return { ...state, words: updatedWords}
    default:
      return state;
  }
}
