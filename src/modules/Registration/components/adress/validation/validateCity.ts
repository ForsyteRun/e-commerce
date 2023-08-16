const validateCity = (name: string): string | undefined => {
  let error;

  if (name.trim() === '') {
    error = 'Required';
  } else if (!/^[A-Za-z0-9\s]+$/.test(name)) {
    error = 'Must contain only letters and spaces';
  }

  return error;
};

export default validateCity;
