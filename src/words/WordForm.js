import { useState } from "react";
import {
  Button,
  TextField,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useSelector, useDispatch } from "react-redux";
import postWord from "../actions/postWord";
import editWord from "../actions/editWord";
import { useHistory } from "react-router";

export default function WordForm(props) {
  const preState = props.word
    ? { ...props.word, language: "en" }
    : {
        language: "", // for now, just english is supported
        size: "24",
        title: "",
        author: { name: "" },
        categories: [],
      };
  const buttonName = props.word ? "Edit Word" : "Create Word";
  const [state, setState] = useState(preState);
  const history = useHistory();
  const dispatch = useDispatch();
  const authors = useSelector((state) => state.authors);
  const categories = useSelector((state) =>
    state.words.map((w) => w.categories).flat()
  ); // Sorts fetched words categories instead of a categories fetch request
  const categoryOptions = [...new Set(categories.map((c) => c.id))].map(
    (id) => {
      return { id: id, name: categories.find((c) => c.id === id).name };
    }
  ); // eleminates duplicate categories

  const handleChange = (e, newValue = undefined) => {
    if (newValue) {
      const name = e.target.id.split("-")[0] || "categories"; // string is added because when a category removed e.target.id returns ""
      setState({ ...state, [name]: newValue });
    } else if (e.target.name === "title") {
      setState({ ...state, [e.target.name]: e.target.value });
    } else {
      // If new author is entered
      setState({ ...state, [e.target.name]: { name: e.target.value } });
    }
  };

  const handleWordSubmit = async (e) => {
    e.preventDefault();
    const categoryIds = state.categories.map((c) => c.id);
    const word = {
      size: state.size,
      title: { [state.language]: state.title },
      author_id: state.author.id,
      category_ids: categoryIds,
    };
    if (props.word) {
      const action = await editWord({ ...word, id: props.word.id });
      dispatch(action);
      history.push("/words");
    } else {
      const action = await postWord(word);
      dispatch(action);
      history.push("/words");
    }
  };

  return (
    <form id="word-form" onSubmit={handleWordSubmit}>
      <FormControl variant="outlined" margin="normal" size="small">
        <InputLabel>Lang</InputLabel>
        <Select
          name="language"
          value={state.language}
          onChange={(e) =>
            setState({ ...state, [e.target.name]: e.target.value })
          }
          label="Language"
        >
          <MenuItem value={"en"}>en</MenuItem>
          <MenuItem value={"tr"}>tr</MenuItem>
        </Select>
      </FormControl>
      <TextField
        name="title"
        variant="outlined"
        multiline
        rows={4}
        fullWidth
        label="Word"
        placeholder="Please enter your word here"
        value={state.title}
        onChange={handleChange}
      />
      <Autocomplete
        id="author"
        value={state.author}
        freeSolo
        onChange={handleChange}
        options={authors}
        getOptionLabel={(author) => author.name}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            {...params}
            name="author"
            margin="normal"
            onChange={handleChange}
            label="Author"
            variant="outlined"
          />
        )}
      />
      <Autocomplete
        id="categories"
        multiple
        value={state.categories}
        onChange={handleChange}
        options={categoryOptions}
        getOptionLabel={(category) => category.name}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Categories"
            margin="normal"
          />
        )}
      />
      <Button type="submit" variant="contained">
        {buttonName}
      </Button>
    </form>
  );
}
