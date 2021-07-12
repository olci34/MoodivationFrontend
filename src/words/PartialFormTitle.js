import {
    TextField,
    FormControl,
    Select,
    InputLabel,
    MenuItem
  } from "@material-ui/core";
import { useState } from "react";


export default function PartialFormTitle(props) {

    
  const [lang,setLang] = useState(props.lang)
  const [title,setTitle] = useState(props.title)
  return (
    <FormControl variant="outlined" margin="normal" fullWidth id="title-scope">
      <InputLabel>Language</InputLabel>
      <Select
        name="language"
        value={lang}
        onChange={(e) => {
            setLang(e.target.value)
            props.setLang(e.target.value)
        }}
        label="Language"
      >
        <MenuItem value={"en"}>en</MenuItem>
        <MenuItem value={"tr"}>tr</MenuItem>
      </Select>

      <TextField
        margin="normal"
        name="title"
        variant="outlined"
        multiline
        rows={4}
        fullWidth
        label="Word"
        placeholder="Please enter your word here"
        value={title}
        onChange={(e) => {
            setTitle(e.target.value)
            props.setTitle(e.target.value)
        }}
      />
    </FormControl>
  );
}
