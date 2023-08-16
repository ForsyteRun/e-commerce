import { Dispatch, SetStateAction } from 'react';

export interface ISnackBar {
  title: string;
  color: string;
  isOk?: boolean;
  setStatus: Dispatch<SetStateAction<string>>;
}

export type StatusUpdater = React.Dispatch<React.SetStateAction<string>>;
export type Timeout = ReturnType<typeof setTimeout>;
