export default function appReducer(state, action) {
  switch (action.type) {
    case "FETCH_WORDS":
      return { ...state, words: action.payload };
    default:
      return state;
  }
}
