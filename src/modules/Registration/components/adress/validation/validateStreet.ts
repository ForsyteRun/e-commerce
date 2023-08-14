const validateStreet = (name: string): string | undefined => {
  let error;
  if (name.trim() === '') {
    error = 'Required';
  }

  return error;
};

export default validateStreet;
