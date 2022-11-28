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
};

function getOptions(method = "get", body) {
  const options = {
    method,
    headers: {},
  };

  if (body) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(body);
  }

  return options;
};

export async function get(url) {
  return await request(url, getOptions());
};

export async function post(url, data) {
    return await request(url, getOptions("post", data));
};
