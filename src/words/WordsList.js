import Word from "./Word";
import { useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { useHistory, Link } from "react-router-dom";

export default function WordsList() {

  const words = useSelector((state) => state.words || []);
  const history = useHistory()
  return (
    <>
    <div id="words-list">
      <ol>
        {words.map((word) => (
          <li key={`words-list-item-${word.id}`}>
            <Link to={`/words/${word.id}`} >{word.title}</Link>
          </li>
        ))}
      </ol>
    </div>
    <Button variant="contained" type="button" onClick={(e) => history.push('/words/new')}>Add Word</Button>
    </>
  );
}
