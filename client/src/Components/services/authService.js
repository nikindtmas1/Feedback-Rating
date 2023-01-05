export const getUser = () => {
  let username = sessionStorage.getItem("username");

  let userData = { username };

  return userData;
};

export const userInfoDate = {
  isAuthenticated: false,
  username: "",
  authToken: "",
  refreshToken: "",
};

export const logInIvent = (logDate) => {
  let user = logDate.username;
  let authToken = logDate.accessToken;
  let refreshToken = logDate.refreshToken;

  let userDate = {
    user: user,
    authToken: authToken,
    refreshToken: refreshToken,
    isAuthenticated: true,
  };

  return userDate;
};
