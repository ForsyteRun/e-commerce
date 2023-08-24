import { TypedMoney } from '@commercetools/platform-sdk';

const calculatePriceByFraction = ({
  centAmount,
  fractionDigits,
}: TypedMoney): number => {
  if (fractionDigits > 0) {
    const fraction = 10 ** fractionDigits;
    const result = centAmount / fraction;
    return +result.toFixed(2);
  }

  return centAmount;
};

export default calculatePriceByFraction;
