export default function fetchAuthors() {
  return (dispatch) => {
    fetch("http://localhost:3001/authors")
      .then((resp) => resp.json())
      .then((authors) => dispatch({ type: "FETCH_AUTHORS", payload: authors }));
  };
}
