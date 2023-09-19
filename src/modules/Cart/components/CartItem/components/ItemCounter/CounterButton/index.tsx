import { Button } from '@mui/material';
import buttonStyles from './buttonStyles';
import { CounterButtonProps } from '../types';

const CounterButton = ({ disabled, callback, content }: CounterButtonProps) => {
  return (
    <Button disabled={disabled} onClick={callback} sx={buttonStyles}>
      {content}
    </Button>
  );
};

export default CounterButton;
