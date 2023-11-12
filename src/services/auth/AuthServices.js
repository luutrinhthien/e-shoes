import axios from "../customize-axios";

const userLogin = (username, password) => {
  return axios.post("/api/auth/login", { username, password });
};

const userRegister = (username, password, hoten, SDT, email) => {
  return axios.post("/api/auth/register", {
    username,
    password,
    hoten,
    SDT,
    email,
  });
};

export { userLogin, userRegister };
