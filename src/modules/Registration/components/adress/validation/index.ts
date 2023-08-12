import { validCountries } from '../../../constants';

const validateCity = (name: string): string | undefined => {
  let error;
  if (name.trim() === '') {
    error = 'Required';
  } else if (!/^[A-Za-z0-9\s]+$/.test(name)) {
    error = 'Must contain only letters and spaces';
  }

  return error;
};

const validateStreet = (name: string): string | undefined => {
  let error;
  if (name.trim() === '') {
    error = 'Required';
  }

  return error;
};

const validatePostCode = (street: string): string | undefined => {
  let error;

  if (street.trim() === '') {
    error = 'Required';
  } else if (street === 'US' && !/^\d{5}$/.test(street)) {
    error = 'Invalid format for the U.S. (e.g., 12345)';
  } else if (
    street === 'CA' &&
    !/^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/.test(street)
  ) {
    error = 'Invalid format for Canada (e.g., A1B 2C3)';
  }

  return error;
};

const validateCountry = (name: string): string | undefined => {
  let error;
  if (name.trim() === '') {
    error = 'Required';
  } else if (!validCountries.includes(name)) {
    error = 'Invalid country';
  }

  return error;
};

export { validateCountry, validateCity, validateStreet, validatePostCode };
