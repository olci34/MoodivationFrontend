import React from 'react'
import { ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import { Link } from 'react-router-dom'

export default function ListItemLink(props) {
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