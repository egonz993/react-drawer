import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import TemporaryDrawerList from './TemporaryDrawerList';
import TemporaryDrawerButton from './TemporaryDrawerButton';

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
      <TemporaryDrawerButton toggleDrawer={toggleDrawer} />
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