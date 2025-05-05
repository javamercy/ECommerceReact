import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { IProduct } from "../models/IProduct";

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
  get: <T>(url: string): Promise<T> =>
    axios.get(url).then((response) => response.data),
  getList: <T>(url: string): Promise<T> =>
    axios.get(url + "/GetList").then((response) => response.data),
  post: <T>(url: string, body: object): Promise<T> =>
    axios.post(url, body).then((response) => response.data),
  delete: <T>(url: string, body: object): Promise<T> =>
    axios.delete(url, body).then((response) => response.data),
};

const Catalog = {
  getList: (): Promise<IProduct[]> => queries.getList("Products"),
  getById: (id: number): Promise<IProduct> => queries.get(`Products/${id}`),
};

const Cart = {
  getByCustomerId: (request: IGetByCustomerIdRequest): Promise<ICartResponse> =>
    queries.post(`Carts/GetByCustomerId`, request),

  addItemToCart: (request: IAddItemToCartRequest): Promise<ICartResponse> =>
    queries.post("Carts/AddCartItemToCart", request),

  deleteCartItemFromCart: (
    request: IDeleteCartItemFromCartRequest
  ): Promise<ICartResponse> =>
    queries.post("Carts/DeleteCartItemFromCart", request),
};

export interface IGetByCustomerIdRequest {
  customerId: number;
}

export interface ICartItemDto {
  id: number;
  productId: number;
  productPrice: number;
  productName: string;
  productDescription: string;
  productImageUrl: string;
  quantity: number;
}

export interface ICartResponse {
  cartId: number;
  customerId: number;
  size: number;
  totalPrice: number;
  cartItems: ICartItemDto[];
}

export interface IAddItemToCartRequest {
  customerId: number;
  productId: number;
  quantity: number;
}

export interface IDeleteCartItemFromCartRequest {
  cartId: number;
  productId: number;
  quantity: number;
}

const requests = {
  Catalog,
  Cart,
};

export default requests;
