import { ModifyTypesPrice } from '../../types';

export interface ItemCounterProps {
  price: ModifyTypesPrice;
  quantity: number;
  id: string;
}

export type SetCount = (value: React.SetStateAction<string>) => void;

export type HandleChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setCount: SetCount
) => void;

export type CountChanger = (
  type: 'inc' | 'dec',
  count: string,
  setCount: SetCount
) => void;

interface CounterComponentsProps {
  disabled: boolean;
  callback: () => void;
}

export interface CounterButtonProps extends CounterComponentsProps {
  content: string;
}

export interface CounterInputProps extends CounterComponentsProps {
  count: string;
}
