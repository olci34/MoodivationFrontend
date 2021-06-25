import React, { useEffect } from "react";
import WordsList from "./WordsList";
import { useDispatch } from "react-redux";
import fetchWords from "../actions/fetchWords";
import WordForm from "./WordForm";
import { Switch,Route } from "react-router";

export default function WordsContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWords())
    dispatch(fetchAuthors())
  });

  return (
    <Switch>
      <Route exact path="/words">
        <WordsList />
      </Route>
      <Route path="/words/:id/edit">
        <WordForm />
      </Route>
    </Switch>
  );
}
