import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'
import TableChartIcon from '@material-ui/icons/TableChart';
import AssessmentIcon from '@material-ui/icons/Assessment';
import DescriptionIcon from '@material-ui/icons/Description';
import { Link } from 'react-router-dom'

const Routes = () => {
  return (
    <List>
      <ListItem button component={Link} to={"/home"}>
        <ListItemIcon><HomeIcon /></ListItemIcon>
        <ListItemText primary={'Home'} />
      </ListItem>
      <ListItem button component={Link} to={"/table"}>
        <ListItemIcon>{<TableChartIcon />}</ListItemIcon>
        <ListItemText primary={'Table'} />
      </ListItem>
      <ListItem button component={Link} to={"/graph"}>
        <ListItemIcon>{<AssessmentIcon />}</ListItemIcon>
        <ListItemText primary={'Graph'} />
      </ListItem>
      <ListItem button component={Link} to={"/about"}>
        <ListItemIcon><DescriptionIcon /></ListItemIcon>
        <ListItemText primary={'About'} />
      </ListItem>
    </List>
  )
}

export default Routes