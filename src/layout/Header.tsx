import { ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, NavLink } from "react-router";
import { useAppSelector } from "../hooks/hooks";

interface ILink {
  title: string;
  to: string;
}
const links: ILink[] = [
  { title: "Home", to: "/" },
  { title: "Catalog", to: "/catalog" },
  { title: "About", to: "/about" },
  { title: "Contact", to: "/contact" },
];

const navStyles = {
  color: "inherit",
  textDecoration: "none",
  "&:hover": {
    color: "text.primary",
  },
  "&.active": {
    color: "text.secondary",
  },
};

export default function Header() {
  const { cart } = useAppSelector((state) => state.cart);
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6">E-Commerce</Typography>
          <List sx={{ display: "flex" }}>
            {links.map((link, index) => (
              <ListItem
                component={NavLink}
                to={link.to}
                key={index}
                sx={navStyles}
              >
                {link.title}
              </ListItem>
            ))}
          </List>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            component={Link}
            to="/cart"
            size="large"
            edge="start"
            color="inherit"
          >
            <Badge badgeContent={cart?.size} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
