export const getUser = () => {
    let username = sessionStorage.getItem('username');
  
    let userData = { username }

    return userData;
};

export const userInfoDate = {
    isAuthenticated: false,
    username: "",
};