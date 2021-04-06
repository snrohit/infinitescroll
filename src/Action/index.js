export const logIn = (user) => {
  return {
    type: "LOGIN",
    payload: user,
  };
};
