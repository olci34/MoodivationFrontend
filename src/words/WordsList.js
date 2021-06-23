import Word from "./Word";
import { useSelector } from "react-redux";

export default function WordsList() {
  const words = useSelector((state) => state.words || []);

  return (
    <div id="words-list">
      <ul>
        {words.map((word) => (
          <li key={`words-list-item-${word.id}`}>
            {" "}
            <Word word={word} />{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
