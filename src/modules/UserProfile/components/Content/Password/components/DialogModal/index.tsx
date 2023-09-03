import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FC } from 'react';
import { SimpleDialogProps } from '../../types';
import { answers } from '../../constants';

const DialogModal: FC<SimpleDialogProps> = ({ onClose, open }) => {
  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog open={open}>
      <DialogTitle>Are you sure?</DialogTitle>
      <List sx={{ pt: 1 }}>
        {answers.map((value) => (
          <ListItem disableGutters key={value}>
            <ListItemButton onClick={() => handleListItemClick(value)}>
              <ListItemText primary={value} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
};

export default DialogModal;
