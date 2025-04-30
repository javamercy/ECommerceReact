import { AppBar, Container, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container>
          <Typography variant="h6">E-Commerce</Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
