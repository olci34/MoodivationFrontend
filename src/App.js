import { Route } from "react-router-dom";
import "./App.css";
import UserForm from "./users/UserForm";
import WordsContainer from "./words/WordsContainer";

function App() {
  return (
    <div className="App">
      <Route path="/signup">
        <UserForm />
      </Route>
      <Route path="/words">
        <WordsContainer />
      </Route>
    </div>
  );
}

export default App;
