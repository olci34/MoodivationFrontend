import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import deleteWord from "../actions/deleteWord";

export default function Word(props) {
  const dispatch = useDispatch();

  const handleDeleteWord = (e) => {
    dispatch(deleteWord(props.word.id));
  };

  const history = useHistory();

  return (
    <div className="word">
      <h3>{props.word.title}</h3>
      <h4>{props.word.author.name}</h4>
      <Button
        variant="contained"
        onClick={(e) => history.push(`/words/${props.word.id}/edit`)}
      >
        Edit
      </Button>
      <Button variant="contained" onClick={handleDeleteWord}>
        Delete
      </Button>
    </div>
  );
}
