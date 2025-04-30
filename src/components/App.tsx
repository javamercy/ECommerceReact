import ButtonUsage from "./ButtonUsage";
import Header from "./Header";
import { Container } from "@mui/material";
import { Outlet } from "react-router";

export default function App() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <ButtonUsage />
    </>
  );
}
