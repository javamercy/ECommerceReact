import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = "http://localhost:5132/api/";

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    const { data } = error.response as AxiosResponse;
    toast.error(data.title);

    return Promise.reject(error.response);
  }
);
const queries = {
  get: (url: string) => axios.get(url).then((response) => response.data),
  getList: (url: string) =>
    axios.get(url + "/GetList").then((response) => response.data),
  post: (url: string, body: object) =>
    axios.post(url, body).then((response) => response.data),
  delete: (url: string) => axios.delete(url).then((response) => response.data),
};

const Catalog = {
  getList: () => queries.getList("products"),
  getById: (id: number) => queries.get(`products/${id}`),
};

const requests = {
  Catalog,
};

export default requests;
