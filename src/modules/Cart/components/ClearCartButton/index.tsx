import { useState } from 'react';
import { Button } from '@mui/material';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import buttonStyles from './buttonStyles';
import CartClearModal from '../CartClearModal';

const ClearCartButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)} sx={buttonStyles}>
        <RemoveShoppingCartOutlinedIcon sx={{ mr: '0.5rem' }} />
        <span style={{ lineHeight: 1 }}>Clear cart</span>
      </Button>
      <CartClearModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ClearCartButton;
