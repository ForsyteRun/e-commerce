import { useAppSelector } from 'hooks/useRedux';
import { Answers } from 'modules/Cart/types';
import clearCart from './clearCart';
import styles from './ModalButtons.module.scss';
import AnswerButton from './AnswerButton';

const ModalButtons = ({ onClose }: { onClose: () => void }) => {
  const { loading } = useAppSelector((state) => state.cartSlice);
  const isDisabled = loading !== 'succeeded' && loading !== 'failed';

  const onConfirm = async () => {
    await clearCart();
    onClose();
  };

  return (
    <div className={styles.buttons_wrapper}>
      <AnswerButton onClick={onConfirm} disabled={isDisabled}>
        {Answers.yes}
      </AnswerButton>
      <AnswerButton onClick={onClose} disabled={isDisabled}>
        {Answers.no}
      </AnswerButton>
    </div>
  );
};

export default ModalButtons;
