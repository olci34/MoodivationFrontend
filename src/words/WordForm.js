import { useState } from "react";
import AddIcon from '@material-ui/icons/AddBox';
import {
  Button,
  TextField,
  Fab
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useSelector, useDispatch } from "react-redux";
import postWord from "../actions/postWord";
import editWord from "../actions/editWord";
import { useHistory } from "react-router";
import PartialFormTitle from "./PartialFormTitle";


export default function WordForm(props) {
  
  let [wordLang, wordTitle, wordLang2, wordTitle2] = ["","","",""]
  if (props.word) {
    [wordLang, wordTitle, wordLang2, wordTitle2] = [Object.keys(props.word.title)[0], Object.values(props.word.title)[0], Object.keys(props.word.title)[1], Object.values(props.word.title)[1]]
  }

  const [lang, setLang] = useState(wordLang)
  const [title, setTitle] = useState(wordTitle)
  const [langTR, setLangTR] = useState(wordLang2)
  const [titleTR, setTitleTR] = useState(wordTitle2)
  const [author, setAuthor] = useState(props.word ? props.word.author : {name: ""})
  const [categories, setCategories] = useState(props.word ? props.word.categories : [])
  const [titles, setTitles] = useState([<PartialFormTitle key="partialForm1" title={title} lang={lang} setLang={setLang} setTitle={setTitle} />])
  
  const authors = useSelector((state) => state.authors);
  const stateCategories = useSelector((state) => state.categories)

  const buttonName = props.word ? "Edit Word" : "Create Word";
  const dispatch = useDispatch()
  const history = useHistory()

  const handleWordSubmit = async (e) => {
    e.preventDefault();
    const categoryIds = categories.map((c) => c.id);
    const word = {
      size: 24,
      title: { [lang]: title, [langTR]: titleTR },
      authors_attributes: author,
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
      
      {titles}
      
      <Autocomplete
        id="author"
        value={author}
        freeSolo
        onChange={(e, newValue) => {
            if (newValue) {
                setAuthor(newValue)
            } else {
                setAuthor({name: ""})
            }
        }}
        options={authors}
        getOptionLabel={(author) => author.name}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            {...params}
            name="author"
            margin="normal"
            onChange={(e) => setAuthor({name: e.target.value})}
            label="Author"
            variant="outlined"
          />
        )}
      />
      <Autocomplete
        id="categories"
        multiple
        value={categories}
        onChange={(e, newValue) => newValue ? setCategories(newValue) : console.log("No new value of category") }
        options={stateCategories}
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
      <Fab color="primary" size="small">
        <AddIcon onClick={() => {
            if (titles.length < 2) {
               setTitles([...titles, <PartialFormTitle key="partialForm2" title={titleTR} lang={langTR} setLang={setLangTR} setTitle={setTitleTR}/> ])
            } else {
                alert("You can't add more than 2 different languages")
            }
        }} />
      </Fab>
      <Button type="submit" variant="contained">
        {buttonName}
      </Button>
    </form>
  );
}
