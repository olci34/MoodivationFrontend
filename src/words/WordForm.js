import { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { TextField, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const useStyles = makeStyles((theme) => ({
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

export default function WordForm() {
  
  const classes = useStyles();

  const [state, setState] = useState({
      word: '',
      author: ''
  })

  const authors = useSelector(state => [ ...new Set(state.words.map(w => w.author)) ])
  
  const handleChange = (e) => {
      setState({...state, [e.target.name]: e.target.value})
  }

  return (
    <form id="word-form">
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
          value={state.author}
          onChange={handleChange}
          options={authors}
          getOptionLabel={(author) => author.name}
          style={{width: 300}}
          renderInput={(params) => <TextField {...params} label='Author' variant='outlined'/>}
        />
       
    </form>
  );
}