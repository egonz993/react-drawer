import React from 'react'
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';

const TemporaryDrawerButton = (props) => {
  return (
    <Button onClick={props.toggleDrawer(true)}>{<MenuIcon />}</Button>
  )
}

export default TemporaryDrawerButton