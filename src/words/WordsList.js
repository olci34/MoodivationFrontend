import { useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { useHistory, Link } from "react-router-dom";
import { List, ListItem, ListItemText, Divider } from "@material-ui/core";
import { ListItemIcon } from "@material-ui/core";
import React from "react";

export default function WordsList() {

  const words = useSelector((state) => state.words || []);
  const history = useHistory()

  return (
    <>
    <div id="words-list">
      <ol>
        {words.map((word) => (
          // <li key={`words-list-item-${word.id}`}>
          //   <Link to={`/words/${word.id}`} >{Object.values(word.title)[0]}</Link>
          // </li>
          <ListItemLink to={`/words/${word.id}`} ky={`words-list-item-${word.id}`} primary={Object.values(word.title)[0]} />
        ))}
      </ol>
    </div>
    

    </>
  );
}

function ListItemLink(props) {
  const {icon, primary, to, ky} = props
  const CustomLink = React.useMemo(
    () => React.forwardRef((linkProps, ref) => (
      <Link ref={ref} to={to} {...linkProps} />
    )),
    [to]
  ) 
  return (
    <li key={ky}>
      <ListItem button divider component={CustomLink}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={primary}/>
      </ListItem>
    </li>
  )
}