import { useSelector } from "react-redux";
import React from "react";
import ListItemLink from "../layout/ListItemLink";

export default function WordsList() {

  const words = useSelector((state) => state.words || []);

  return (
    <div id="words-list">
      <ol>
        {words.map((word) => (
          <ListItemLink to={`/words/${word.id}`} ky={`words-list-item-${word.id}`} primary={Object.values(word.title)[0]} />
        ))}
      </ol>
    </div>
  );
}
