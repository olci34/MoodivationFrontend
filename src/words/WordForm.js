import { useState } from "react";
import { Button,TextField } from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete'
import { useSelector } from "react-redux";

export default function WordForm() {

  const [state, setState] = useState({
      word: '',
      author: '',
      categories: []
  })

  const authors = useSelector(state => [ ...new Set(state.words.map(w => w.author).map(a => a.name)) ])
  const categories = useSelector(state => [...new Set(state.words.map(w => w.categories).flat().map(c => c.name))])
  
  const handleChange = (e, newValue = undefined) => {
      if (newValue) {
          const name = e.target.id.split("-")[0] || "categories" // string is added because when a category removed e.target.id returns ""
        setState({...state, [name]: newValue})
      } else {
        setState({...state, [e.target.name]: e.target.value})
      }
  }

  const handleWordSubmit = (e) => {
      e.preventDefault()
      console.log(state)
  }

  return (
    <form id="word-form" onSubmit={handleWordSubmit}>
      <TextField
        name='word'
        variant="outlined"
        multiline
        rows={4}
        fullWidth
        label="Word"
        placeholder="Please enter your word here"
        value={state.word}
        onChange={handleChange}
      />
        <Autocomplete
          id='author'
          value={state.author}
          freeSolo
          onChange={handleChange}
          options={authors}
          style={{width: 300}}
          renderInput={(params) => <TextField {...params} name='author' margin="normal" onChange={handleChange} label='Author' variant='outlined'/>}
        />
        <Autocomplete
          id='categories'
        //   value={state.categories}
          multiple
          onChange={handleChange}
          options={categories}
          style={{width: 300}}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="Categories"
              margin="normal"
            />
          )}
        />
       <Button type="submit" variant="contained">Create Word</Button>
    </form>
  );
}
