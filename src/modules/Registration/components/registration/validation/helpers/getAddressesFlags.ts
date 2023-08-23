import { IDefaultAdress } from '../../types';

const getAdressesFlags = ({
  isSameBillingFieldAsShipping,
  defaultShippingAdress,
  defaultBillingAdress,
}: IDefaultAdress) => {
  const shippingAdressIndex = 0;
  const billingAdressIndex = isSameBillingFieldAsShipping ? 0 : 1;
  const defaultShippingAddressIndex = defaultShippingAdress
    ? shippingAdressIndex
    : undefined;

  const getDefaultBillingAdress = () => {
    if (isSameBillingFieldAsShipping) {
      return defaultShippingAddressIndex;
    }
    if (defaultBillingAdress) {
      return billingAdressIndex;
    }

    return undefined;
  };

  const flags = {
    shippingAddresses: [shippingAdressIndex],
    billingAddresses: [billingAdressIndex],
    defaultBillingAddress: getDefaultBillingAdress(),
    defaultShippingAddress: defaultShippingAddressIndex,
  };

  return flags;
};

export default getAdressesFlags;
