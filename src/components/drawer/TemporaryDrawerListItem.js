import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const TemporaryDrawerListItem = (props) => {
  return (
    <ListItem disablePadding>
        <ListItemButton>
        <ListItemIcon>{props.icon}</ListItemIcon>
        <ListItemText primary={props.text} />
        </ListItemButton>
    </ListItem>
  )
}

export default TemporaryDrawerListItem