export default function appReducer(state, action) {
  switch (action.type) {
    case "FETCH_WORDS":
      return { ...state, words: action.payload };
    case "FETCH_AUTHORS":
      return {...state, authors: action.payload}
    case "FETCH_CATEGORIES":
      debugger
      return {...state, categories: action.payload}
    case "ADD_WORD":
      const updatedWords = state.words
      updatedWords.push(action.payload)
      if (!(state.authors.map(a => a.id).includes(action.payload.author.id))) {
        const updatedAuthors = state.authors
        updatedAuthors.push(action.payload.author)
        return {...state, words: updatedWords, authors: updatedAuthors} 
      } else {
        return { ...state, words: updatedWords}
      }
    case "PATCH_WORD":
      const words = state.words
      const oldWordIndex = words.findIndex(w => w.id === action.payload.id)
      words.splice(oldWordIndex, 1, action.payload)
      return {...state, words: words}
    case "DELETE_WORD":
      const allWords = state.words
      const deletedItemIndex = allWords.findIndex(w => w.id === action.payload.id)
      allWords.splice(deletedItemIndex, 1)
      return {...state, words: allWords}
    default:
      return state;
  }
}
