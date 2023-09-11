import { SxProps } from '@mui/material';

export interface ICartActionButtonProps {
  id: string;
  children: JSX.Element;
  callback: (id: string) => void;
  disabled?: boolean;
  sx: SxProps;
}

export type AddToCartButtonProps = Pick<
  ICartActionButtonProps,
  'id' | 'disabled'
>;

export type RemoveFromCartButtonProps = Pick<ICartActionButtonProps, 'id'>;
