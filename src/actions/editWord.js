export default function editWord(word) {
  return new Promise((resolve) => {
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ word: word }),
    })
      .then((resp) => resp.json())
      .then((word) => {
        resolve({type: "PATCH_WORD", payload: word})
      });
  });
}
