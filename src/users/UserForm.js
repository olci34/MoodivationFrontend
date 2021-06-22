import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import postUser from '../actions/postUser'
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1)
      },
    },
  }));

export default function UserForm() {
    
    const classes = useStyles();
    const [state, setState] = useState({username: "", email: "", password: ""})
    const history = useHistory()
    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        postUser(state)
        history.push('/words') // TODO: If there is an error, stay in /signup
    }

    return (
        <form className={classes.root} id="user-form" onSubmit={handleSubmit}>
            <TextField variant="outlined" fullWidth label="Username" onChange={handleChange} value={state.username} name="username" />
            <TextField variant="outlined" fullWidth label="Email" onChange={handleChange} value={state.email} name="email" />
            <TextField variant="outlined" fullWidth label="Password" onChange={handleChange} value={state.password} name="password" type="password" />
            <Button variant="contained" type="submit" >Sign Up</Button>
        </form>
    )
}