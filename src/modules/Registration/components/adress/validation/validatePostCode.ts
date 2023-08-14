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

export default validatePostCode;
