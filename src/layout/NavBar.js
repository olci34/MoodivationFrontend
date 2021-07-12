import { AppBar, Toolbar, Typography, Button, IconButton } from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from "react-router-dom";

export default function NavBar() {
    const history = useHistory()
    return (
        <AppBar position="static" >
        <Toolbar >
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" >
            Moodivation
          </Typography>
          <Button variant="outlined" color="inherit" onClick={(e) => history.push('/words/new')}>Add Word</Button>
          <Button variant="outlined" color="inherit" onClick={(e) => history.push('/categories')}>Categories</Button>
          <Button variant="outlined" color="inherit" onClick={(e) => history.push('/words')}>Words</Button>

          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    )
}