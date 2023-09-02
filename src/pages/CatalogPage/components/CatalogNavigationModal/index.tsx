import { Box, IconButton, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useModalContext, useUpdateModalContext } from 'context/ModalContext';
import useIconButtonColorTheme from 'helpers/useIconButtonColorTheme';
import Navigation from '../Navigation';
import { modalCrossButton, modalBox } from './styles';

const CatalogNavigationModal = () => {
  const { isCatalogNavigationOpen } = useModalContext();
  const { changeCatalogNavigationModalStatus } = useUpdateModalContext();

  const sx = { ...useIconButtonColorTheme('0, 0, 0') };

  return (
    <Modal
      open={isCatalogNavigationOpen}
      onClose={() => changeCatalogNavigationModalStatus(false)}
      keepMounted
    >
      <Box sx={modalBox}>
        <Navigation />
        <IconButton
          onClick={() => changeCatalogNavigationModalStatus(false)}
          sx={{ sx, ...modalCrossButton }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
    </Modal>
  );
};

export default CatalogNavigationModal;
