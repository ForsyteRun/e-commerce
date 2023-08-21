export interface SnackBarProps {
  open: boolean;
  error: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export type StatusUpdater = React.Dispatch<React.SetStateAction<string>>;
export type Timeout = ReturnType<typeof setTimeout>;
