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

export default validatePassword;
