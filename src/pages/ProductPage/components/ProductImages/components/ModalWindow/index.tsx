import { Box, IconButton, Modal } from '@mui/material';
import { Close } from '@mui/icons-material';
import CarouselSlider from 'pages/ProductPage/components/CarouselSlider';
import {
  iconButtonStyles,
  modalWindowStyles,
  popUpStyles,
} from './helpers/modalWindowStyles';
import { IModalWindowProps } from './types';
import styles from './ModalWindow.module.scss';

const ModalWindow = ({
  open,
  handleClose,
  images,
  name,
}: IModalWindowProps) => {
  const isMultipleImages: boolean = images.length > 1;

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalWindowStyles}>
        <Box sx={popUpStyles}>
          <IconButton onClick={handleClose} sx={iconButtonStyles}>
            <Close />
          </IconButton>
          {isMultipleImages ? (
            <CarouselSlider images={images} name={name} />
          ) : (
            <img src={images[0]} alt={name} className={styles.image} />
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalWindow;
