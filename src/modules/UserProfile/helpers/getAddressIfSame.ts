import { Address } from '@commercetools/platform-sdk';
import { RegisteredUserData } from 'types';

const getAddressIfSame = ({
  addresses,
  shippingAddressIds,
  billingAddressIds,
}: RegisteredUserData): Address[] => {
  const isEqualAddress = shippingAddressIds?.every(
    (item) => billingAddressIds?.includes(item)
  );

  const modifyAddress = isEqualAddress
    ? [...addresses, ...addresses]
    : addresses;

  return modifyAddress;
};

export default getAddressIfSame;
