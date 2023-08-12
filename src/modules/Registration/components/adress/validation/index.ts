const validateAdress = (name: string): string | undefined => {
  let error;
  if (name.trim() === '') {
    error = 'Required';
  } else if (!/^[A-Za-z]+$/.test(name)) {
    error = 'Must contain only letters';
  }

  return error;
};

export default validateAdress;
