import { Button } from "@material-ui/core";
import { Link, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import deleteWord from "../actions/deleteWord";
import WordForm from "./WordForm";
export default function Word() {

  const wordID = useParams()
  const words = useSelector((state) => state.words)
  const word = words.find(w => w.id === parseInt(wordID.id))
  const dispatch = useDispatch();
  const history = useHistory()
  const handleDeleteWord = async (e) => {
    dispatch(await deleteWord(word.id));
    history.push('/words')
  };

  return (
    <div className="word">
      <h3><Link to={`/words/${word.id}`}> {Object.values(word.title)[0]} </Link></h3>
      <label>Author: {word.author.name}, Categories: {word.categories.map(c => c.name).join(', ')}</label>
      <br/>
      <Button variant="contained" onClick={handleDeleteWord}>
        Delete
      </Button>
      <WordForm word={word}/>
    </div>
  );
}
