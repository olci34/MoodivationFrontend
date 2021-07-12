import React, { useEffect } from "react";
import WordsList from "./WordsList";
import { useDispatch } from "react-redux";
import fetchWords from "../actions/fetchWords";
import WordForm from "./WordForm";
import { Switch,Route } from "react-router";
import fetchAuthors from "../actions/fetchAuthors";
import Word from "./Word"
import fetchCategories from "../actions/fetchCategories";

export default function WordsContainer() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWords())
    dispatch(fetchAuthors())
    dispatch(fetchCategories())
  },[]);

  return (
    <Switch>
      <Route exact path="/words">
        <WordsList />
      </Route>
      <Route path="/words/new">
        <WordForm />
      </Route>
      <Route path="/words/:id">
        <Word />
      </Route>
    </Switch>
  );
}
