import { ICommonDiscount } from 'modules/Cart/types';

const getSumSeparatePrice = (
  price: ICommonDiscount[],
  titlePrice: keyof ICommonDiscount
) => {
  return price.reduce((acc, item) => acc + item[titlePrice], 0);
};

export default getSumSeparatePrice;
