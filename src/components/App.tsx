import { ToastContainer } from "react-toastify";
import Header from "./Header";
import { Container } from "@mui/material";
import { Outlet } from "react-router";

import "react-toastify/ReactToastify.css";
import { useEffect } from "react";
import requests from "../api/requests";
import { useAppDispatch } from "../hooks/hooks";
import { setCart } from "../features/cart/cartSlice";

export default function App() {
  const dispatch = useAppDispatch();
  const customerId = +localStorage.getItem("customerId")!;
  const request = {
    customerId,
  };
  useEffect(() => {
    requests.Cart.getByCustomerId(request)
      .then((cartResponse) => dispatch(setCart(cartResponse)))
      .catch((error) => console.log(error));
  }, [customerId]);
  return (
    <>
      <ToastContainer
        position="bottom-right"
        theme="colored"
        stacked
      ></ToastContainer>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
