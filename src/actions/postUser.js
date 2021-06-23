export default function postUser(user) {
  fetch("http://localhost:3001/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ user: user }),
  })
    .then((resp) => resp.json())
    .then((user) => {
      if (user.error) {
        alert(user.error);
        return null;
      }
    });
}
