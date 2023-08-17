export interface ISnackBar {
  title?: string;
  color?: string;
}

export type StatusUpdater = React.Dispatch<React.SetStateAction<string>>;
export type Timeout = ReturnType<typeof setTimeout>;
