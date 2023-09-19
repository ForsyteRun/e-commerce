import { Button } from '@mui/material';
import { AnswerButtonProps, Answers } from 'modules/Cart/types';

const AnswerButton = ({ children, onClick, disabled }: AnswerButtonProps) => {
  const color = children === Answers.yes ? '76, 175, 80' : '255, 75, 75';
  const styles = {
    color: `rgb(${color})`,
    '@media (hover: hover)': {
      ':hover': {
        backgroundColor: `rgba(${color}, 0.15)`,
      },
    },
  };

  return (
    <Button disabled={disabled} variant="text" onClick={onClick} sx={styles}>
      {children}
    </Button>
  );
};

export default AnswerButton;
