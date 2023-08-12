const validateEmail = (value: string): string | undefined => {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid Email';
  }
  return error;
};

const validateName = (name: string): string | undefined => {
  let error;
  if (name.trim() === '') {
    error = 'Required';
  }

  return error;
};

const validatePassword = (password: string): string | undefined => {
  let error;
  if (password.length < 8) {
    error = 'Min length 8 items';
  }

  const hasNumber = /\d/.test(password);
  if (!hasNumber) {
    error = 'You need at least one number';
  }

  const hasUppercase = /[A-Z]/.test(password);
  if (!hasUppercase) {
    error = 'You need at least one uppercase letter';
  }

  const hasLowercase = /[a-z]/.test(password);
  if (!hasLowercase) {
    error = 'You need at least one lowercase letter';
  }

  return error;
};

export { validateName, validateEmail, validatePassword };
