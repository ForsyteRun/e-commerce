export const BIRTH_INIT_DATA = '1905-01-01';
// eslint-disable-next-line import/no-mutable-exports
export let SUCCESS_REGISTR = false;

// for REDUX
export const setSuccessRegistr = (value: boolean) => {
  SUCCESS_REGISTR = value;
};
