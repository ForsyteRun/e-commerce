import { TypedMoney } from '@commercetools/platform-sdk';

const calculatePriceByFraction = ({
  centAmount,
  fractionDigits,
}: TypedMoney): number => {
  const fraction = 10 ** fractionDigits;
  return centAmount / fraction;
};

export default calculatePriceByFraction;
