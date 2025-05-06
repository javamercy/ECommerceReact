import { createBrowserRouter } from "react-router";
import App from "../layout/App";
import HomePage from "../features/HomePage";
import AboutPage from "../features/AboutPage";
import ContactPage from "../features/ContactPage";
import CatalogPage from "../features/catalog/CatalogPage";
import ProductDetailsPage from "../features/catalog/ProductDetails";
import ShoppingCartPage from "../features/cart/ShoppingCartPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "cart", element: <ShoppingCartPage /> },
      { path: "catalog", element: <CatalogPage /> },
      { path: "catalog/:id", element: <ProductDetailsPage /> },
    ],
  },
]);
