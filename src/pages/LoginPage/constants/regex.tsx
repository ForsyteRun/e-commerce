const regex = {
  passwordLength: /^(?=.{8,})/,
  number: /^(?=.*[0-9]).+$/,
  lowerCase: /^(?=.*[a-z]).+$/,
  upperCase: /^(?=.*[A-Z]).+$/,
  specialCharacter: /^(?=.*[$&+,:;=?@#|'`~<>_{}.^*()%!]).+$/,
  noLeadingTrailingSpace: /^\S(.*\S)?$/,
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
};

export default regex;
