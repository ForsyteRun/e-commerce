import { AlertColor } from '@mui/material';
import store from 'store';
import { showSnackbar } from 'store/snackbarSlice';

interface IMessageProps {
  status: AlertColor;
  message: string;
}

const showSnackbarMessage = ({ status, message }: IMessageProps): void => {
  const { dispatch } = store;
  dispatch(showSnackbar({ status, message }));
};

export default showSnackbarMessage;
