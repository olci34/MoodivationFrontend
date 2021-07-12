export default function deleteWord(wordId) {
  return new Promise((resolve) => {
    fetch(`http://localhost:3001/words/${wordId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ word_id: wordId }),
    })
      .then((resp) => resp.json())
      .then((word) => resolve({type: "DELETE_WORD", payload: word}))
  })
}
