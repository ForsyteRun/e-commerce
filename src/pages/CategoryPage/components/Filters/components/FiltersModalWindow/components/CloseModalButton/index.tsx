import { IconButton } from '@mui/material';
import { CloseRounded } from '@mui/icons-material';
import buttonStyles from './buttonStyles';

const CloseModalButton = ({ onClose }: { onClose: () => void }) => {
  return (
    <IconButton
      aria-label="Close"
      onClick={onClose}
      sx={buttonStyles}
      size="small"
    >
      <CloseRounded />
    </IconButton>
  );
};

export default CloseModalButton;
