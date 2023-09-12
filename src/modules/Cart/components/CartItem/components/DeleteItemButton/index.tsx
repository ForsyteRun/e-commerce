import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { IconButton } from '@mui/material';
import { removeFromCartHandler } from 'helpers';
import useIconButtonColorTheme from 'helpers/useIconButtonColorTheme';

const DeleteItemButton = ({ id }: { id: string }) => {
  return (
    <IconButton
      onClick={() => removeFromCartHandler(id)}
      sx={{
        ...useIconButtonColorTheme('255, 75, 75'),
        width: '24px',
        height: '24px',
      }}
    >
      <DeleteForeverOutlinedIcon />
    </IconButton>
  );
};

export default DeleteItemButton;
