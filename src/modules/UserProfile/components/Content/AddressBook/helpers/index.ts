/* eslint-disable no-console */
import { Address } from '@commercetools/platform-sdk';

const modifyAddress = (
  addresses: Address[],
  index: number,
  isExist: boolean
) => {
  console.log(addresses, index, isExist);
};

export default modifyAddress;
