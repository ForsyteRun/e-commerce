export interface IModalWindowProps {
  images: string[];
  name: string | undefined;
  open: boolean;
  handleClose: () => void;
  step: number;
}
