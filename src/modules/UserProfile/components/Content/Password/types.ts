export interface IDialogModal {
  open: boolean;
  setOpen: (value: boolean) => void;
  setSelectedValue: (value: string) => void;
}

export interface SimpleDialogProps {
  open: boolean;
  onClose: (value: string) => void;
}

export enum DialogModalAnswer {
  'yes' = 'yes',
  'no' = 'no',
}

export interface InitialValues {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}
