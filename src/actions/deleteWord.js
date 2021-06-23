export default function deleteWord(wordId) {
  fetch(`http://localhost:3001/words/${wordId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ word_id: wordId }),
  })
    .then((resp) => resp.json())
    .then((word) => word);
}
