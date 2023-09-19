import { AlertColor } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

export type StatusUpdater = React.Dispatch<React.SetStateAction<string>>;
export type Timeout = ReturnType<typeof setTimeout>;

export interface IGetErrorSnackBar {
  severity: AlertColor;
  access: string;
}

export interface IAlertSnackBar {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
