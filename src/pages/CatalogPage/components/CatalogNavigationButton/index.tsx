import { IconButton } from '@mui/material';
import ListIcon from '@mui/icons-material/List';
import useIconButtonColorTheme from 'helpers/useIconButtonColorTheme';
import { useModalContext, useUpdateModalContext } from 'context/ModalContext';

const CatalogNavigationButton = () => {
  const { changeCatalogNavigationModalStatus } = useUpdateModalContext();
  const { isCatalogNavigationOpen } = useModalContext();

  return (
    <IconButton
      color="secondary"
      onClick={() =>
        changeCatalogNavigationModalStatus(!isCatalogNavigationOpen)
      }
      sx={useIconButtonColorTheme('25, 118, 210')}
    >
      <ListIcon fontSize="large" />
    </IconButton>
  );
};

export default CatalogNavigationButton;
