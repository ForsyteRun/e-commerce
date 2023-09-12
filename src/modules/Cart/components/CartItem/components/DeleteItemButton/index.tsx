import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IconButton } from '@mui/material';
import { removeFromCartHandler } from 'helpers';
import useIconButtonColorTheme from 'helpers/useIconButtonColorTheme';

const DeleteItemButton = ({ id }: { id: string }) => {
  return (
    <IconButton
      onClick={() => removeFromCartHandler(id)}
      sx={useIconButtonColorTheme('255, 135, 135')}
    >
      <DeleteOutlineIcon />
    </IconButton>
  );
};

export default DeleteItemButton;
