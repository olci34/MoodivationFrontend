import React, { useEffect } from "react";
import WordsList from "./WordsList";
import { useDispatch } from "react-redux";
import fetchWords from "../actions/fetchWords";

export default function WordsContainer() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchWords()));

  return (
    <>
      <WordsList />
    </>
  );
}
