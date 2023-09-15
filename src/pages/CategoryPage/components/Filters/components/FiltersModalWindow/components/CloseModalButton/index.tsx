import { IconButton } from '@mui/material';
import { CloseRounded } from '@mui/icons-material';
import buttonStyles from './buttonStyles';
import { ICloseModalButtonProps } from './types';

const CloseModalButton = ({ onClose }: ICloseModalButtonProps) => {
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
