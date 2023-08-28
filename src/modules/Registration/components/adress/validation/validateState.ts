const validateState = (state: string): string | undefined => {
  let error;
  if (state.trim() === '') {
    error = 'Required';
  } else if (!/^[A-Za-z\s]+$/.test(state)) {
    error = 'Symbols are not allowed';
  }

  return error;
};

export default validateState;
