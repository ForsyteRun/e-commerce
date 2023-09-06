import { Address } from '@commercetools/platform-sdk';
import { RegisteredUserData } from 'types';

const getAddressIfSame = ({ addresses }: RegisteredUserData): Address[] => {
  let isEqualAddress;
  if (addresses) {
    isEqualAddress = addresses.length === 1;
  }
  const modifyAddress = isEqualAddress
    ? [...addresses, ...addresses]
    : addresses;

  return modifyAddress;
};

export default getAddressIfSame;
