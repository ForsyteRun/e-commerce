import { HandleChange, CountChanger } from 'modules/Cart/types';

export const handleChange: HandleChange = (e, setCount) => {
  const { value } = e.target;

  if (!Number.isNaN(+value) && +value > 0) {
    setCount(value);
  }
};

export const changeCount: CountChanger = (type, count, setCount) => {
  const newValue = type === 'inc' ? +count + 1 : +count - 1;
  if (newValue > 0) {
    setCount(`${newValue}`);
  }
};
