export const validateEmail = (email) => {
  return /^\w+([.+~_-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
};
