export default function postWord(word) {
    return (dispatch) => {
        fetch("http://localhost:3001/words", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
            },
            body: JSON.stringify({ word: word }),
          }).then(resp => resp.json())
            .then(word => dispatch({type: "ADD_WORD", payload: word}))
    }
}