export default function fetchWords() {
  console.log("words fetched")
  return (dispatch) => {
    fetch("http://localhost:3001/words")
      .then((resp) => resp.json())
      .then((words) => dispatch({ type: "FETCH_WORDS", payload: words }));
  };
}
