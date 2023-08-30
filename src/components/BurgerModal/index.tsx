import { Box, Modal } from '@mui/material';
import AppNavigation from 'components/Header/components/AppNavigation';
import Logo from 'components/Header/components/Logo';

const BurgerModal = () => {
  const isOpen = true;

  return (
    <Modal
      open={isOpen}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        zIndex: 10,
      }}
    >
      <Box
        sx={{
          alignItems: 'flex-start',
          backgroundColor: '#fff',
          boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.3)',
          height: '100%',
          padding: '1rem',
          position: 'absolute',
          maxWidth: '320px',
          width: '100%',
        }}
      >
        <Logo />
        <AppNavigation />
      </Box>
    </Modal>
  );
};

export default BurgerModal;
