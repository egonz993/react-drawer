import React from 'react'
import TemporaryDrawerListItem from './TemporaryDrawerListItem';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import OutboxIcon from '@mui/icons-material/Outbox';
import SendIcon from '@mui/icons-material/Send';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import DeleteIcon from '@mui/icons-material/Delete';

const TemporaryDrawerList = (props) => {

  return (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={props.toggleDrawer(false)}
      onKeyDown={props.toggleDrawer(false)}
    >
      <List>
        <TemporaryDrawerListItem icon={<InboxIcon />} text='Inbox' />
        <TemporaryDrawerListItem icon={<OutboxIcon />} text='Outbox' />
        <TemporaryDrawerListItem icon={<SendIcon />} text='Send email' />
        <Divider />
        <TemporaryDrawerListItem icon={<AllInboxIcon />} text='All mail' />
        <TemporaryDrawerListItem icon={<DeleteIcon />} text='Trash' />
      </List>
    </Box>
  )
}

export default TemporaryDrawerList