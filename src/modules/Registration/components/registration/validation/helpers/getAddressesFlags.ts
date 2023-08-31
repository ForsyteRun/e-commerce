import { IDefaultAddress } from '../../types';

const getAddressesFlags = ({
  isSameBillingFieldAsShipping,
  defaultShippingAddress,
  defaultBillingAddress,
}: IDefaultAddress) => {
  const shippingAddressIndex = 0;
  const billingAddressIndex = isSameBillingFieldAsShipping ? 0 : 1;
  const defaultShippingAddressIndex = defaultShippingAddress
    ? shippingAddressIndex
    : undefined;

  const getDefaultBillingAddress = () => {
    if (isSameBillingFieldAsShipping) {
      return defaultShippingAddressIndex;
    }
    if (defaultBillingAddress) {
      return billingAddressIndex;
    }

    return undefined;
  };

  const flags = {
    shippingAddresses: [shippingAddressIndex],
    billingAddresses: [billingAddressIndex],
    defaultBillingAddress: getDefaultBillingAddress(),
    defaultShippingAddress: defaultShippingAddressIndex,
  };

  return flags;
};

export default getAddressesFlags;
