import { Route, Switch } from "react-router-dom";
import "./App.css";
import UserForm from "./users/UserForm";
import WordsContainer from "./words/WordsContainer";
import NavBar from "./layout/NavBar";
import CategoriesContainer from "./categories/CategoriesContainer";

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
        <Route path="/categories">
          <CategoriesContainer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
