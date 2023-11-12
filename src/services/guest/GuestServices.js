import axios from "../customize-axios";

const productDetail = (_idP) => {
  return axios.get(`/api/product/${_idP}`);
};

const searchProduct = (name = "", type = "") => {
  return axios.get(`/api/product/search?name=${name}&type=${type}`);
};

const userDetail = (_idUser) => {
  return axios.get(`/api/user/getUser/${_idUser}`);
};

export { searchProduct, productDetail, userDetail };
