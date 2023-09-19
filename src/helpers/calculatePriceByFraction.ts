import { TypedMoney } from '@commercetools/platform-sdk';

const calculatePriceByFraction = (props: TypedMoney | undefined): number => {
  if (props) {
    const { centAmount, fractionDigits } = props;
    if (Number.isNaN(fractionDigits) || Number.isNaN(centAmount)) {
      return 0;
    }

    if (fractionDigits > 0) {
      const fraction = 10 ** fractionDigits;
      const result = centAmount / fraction;
      return +result.toFixed(2);
    }

    return centAmount;
  }

  return 0;
};

export default calculatePriceByFraction;
