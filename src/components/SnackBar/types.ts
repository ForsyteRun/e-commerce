export interface SnackBarProps {
  open: boolean;
  access: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export type StatusUpdater = React.Dispatch<React.SetStateAction<string>>;
export type Timeout = ReturnType<typeof setTimeout>;
