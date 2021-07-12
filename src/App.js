import { Route, Switch } from "react-router-dom";
import "./App.css";
import UserForm from "./users/UserForm";
import WordsContainer from "./words/WordsContainer";
import NavBar from "./layout/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/signup">
          <UserForm />
        </Route>
        <Route path="/words">
          
          <WordsContainer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
