import React, { useState } from 'react';
import { Button } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import TemporaryDrawerList from './TemporaryDrawerList';
import MenuIcon from '@mui/icons-material/Menu';

export default function TemporaryDrawer() {

  const [visible, setVisible] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    
    setVisible(open);
  };

  return (
    <React.Fragment>
      <Button onClick={toggleDrawer(true)}>{<MenuIcon />}</Button>
      <Drawer
        anchor={'left'}
        open={visible}
        onClose={toggleDrawer(false)}
      >
        <TemporaryDrawerList toggleDrawer={toggleDrawer} />
      </Drawer>
    </React.Fragment>
  );
}