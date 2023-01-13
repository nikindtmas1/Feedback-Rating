export const settings = {
  host: "",
};

async function request(url, options) {
  try {
    const respons = await fetch(url, options);

    if (respons.ok === false) {
      const error = await respons.json();

      throw new Error(error.message);
    }

    try {
      const data = await respons.json();

      return data;
    } catch (error) {
      return respons;
    }
  } catch (error) {
    alert(error.message);
    throw error;
  }
}

async function getOptions(method = "get", body) {
  const options = {
    method,
    headers: {},
  };

  // let token = sessionStorage.getItem("authToken");

  // if (token != null) {
  //   // Simulates that accessToken has expired
  //   const isValid = false;
  //   let refreshToken = sessionStorage.getItem("refreshToken");
  //   console.log(refreshToken);
  //   if (!isValid) {
  //     let res = await fetch("http://localhost:5000/users/refresh", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         refreshToken,
  //       }),
  //     });
  //     let result = await res.json();

  //     console.log(result);

  //     sessionStorage.setItem("authToken", result.accessToken);
  //     sessionStorage.setItem("refreshToken", result.refreshToken);

  //     token = result.accessToken;
  //   }

  //   options.headers["X-Authorization"] = token;
  // }

  if (body) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(body);
  }

  return options;
}

export async function get(url) {
  return await request(url, await getOptions());
}

export async function post(url, data) {
  return await request(url, await getOptions("post", data));
}

export async function put(url, data) {
  return await request(url, await getOptions("put", data));
}

export async function del(url) {
  return await request(url, await getOptions("delete"));
}

export async function login(username, password) {
  const result = await post(settings.host + "/users/login", {
    username,
    password,
  });

  sessionStorage.setItem("username", result.username);
  sessionStorage.setItem("authToken", result.accessToken);
  sessionStorage.setItem("refreshToken", result.refreshToken);

  return result;
}

export async function logout(token) {
  const result = await get(settings.host + "/users/logout");

  sessionStorage.removeItem("username");
  sessionStorage.removeItem("authToken");
  sessionStorage.removeItem("refreshToken");

  return result;
}
