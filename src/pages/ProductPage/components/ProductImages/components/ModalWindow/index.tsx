import { Box, IconButton, Modal } from '@mui/material';
import { Close } from '@mui/icons-material';
import {
  iconButtonStyles,
  modalWindowStyles,
  popUpStyles,
} from './helpers/modalWindowStyles';
import styles from './ModalWindow.module.scss';
import { IModalWindowProps } from './types';

const ModalWindow = ({ open, handleClose, image, name }: IModalWindowProps) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalWindowStyles}>
        <Box sx={popUpStyles}>
          <IconButton onClick={handleClose} sx={iconButtonStyles}>
            <Close />
          </IconButton>
          <img src={image} alt={name} className={styles.image} />
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalWindow;
