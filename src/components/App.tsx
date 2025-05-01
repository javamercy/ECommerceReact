import { ToastContainer } from "react-toastify";
import ButtonUsage from "./ButtonUsage";
import Header from "./Header";
import { Container } from "@mui/material";
import { Outlet } from "react-router";

import "react-toastify/ReactToastify.css";

export default function App() {
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
      <ButtonUsage />
    </>
  );
}
