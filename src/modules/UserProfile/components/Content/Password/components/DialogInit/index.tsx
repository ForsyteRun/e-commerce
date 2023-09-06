import { FC } from 'react';
import { IDialogModal } from '../../types';
import DialogModal from '../DialogModal';

const DialogInit: FC<IDialogModal> = ({ open, setOpen, setSelectedValue }) => {
  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return <DialogModal open={open} onClose={handleClose} />;
};

export default DialogInit;
