import { Button } from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import deleteWord from "../actions/deleteWord";
import WordForm from "./WordForm";
export default function Word() {

  const wordID = useParams()
  const words = useSelector((state) => state.words)
  const word = words.find(w => w.id === parseInt(wordID.id))
  const dispatch = useDispatch();

  const handleDeleteWord = (e) => {
    dispatch(deleteWord(word.id));
  };

  return (
    <div className="word">
      <h3><Link to={`/words/${word.id}`}> {word.title} </Link></h3>
      <label>Author: {word.author.name}, Categories: {word.categories.map(c => c.name).join(', ')}</label>
      <br/>
      <Button variant="contained" onClick={handleDeleteWord}>
        Delete
      </Button>
      <WordForm word={word}/>
    </div>
  );
}
