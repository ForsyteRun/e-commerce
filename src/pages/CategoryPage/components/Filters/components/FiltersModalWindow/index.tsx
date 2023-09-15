import { Modal, Box, Typography } from '@mui/material';
import ResetFiltersButton from './components/ResetFiltersButton';
import FiltersSelect from '../FiltersSelect';
import filtersModalStyles from './filtersModalStyles';
import CloseModalButton from './components/CloseModalButton';
import { IFilterModalProps } from './types';

const FiltersModalWindow = ({ open, onClose }: IFilterModalProps) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      sx={{
        margin: '1rem',
      }}
    >
      <Box sx={filtersModalStyles}>
        <Typography
          id="modal-title"
          component="h2"
          sx={{ fontSize: '1.5rem', fontWeight: '700' }}
        >
          Filters
        </Typography>
        <CloseModalButton onClose={onClose} />
        <FiltersSelect by="vendor" />
        <FiltersSelect by="print_type" />
        <FiltersSelect by="print_technology" />
        <ResetFiltersButton />
      </Box>
    </Modal>
  );
};

export default FiltersModalWindow;
