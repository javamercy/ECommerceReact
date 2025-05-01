import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { IProduct } from "../../models/IProduct";
import requests from "../../api/requests";

export default function CatalogPage() {
  const [products, setProducts] = useState([] as IProduct[]);

  useEffect(() => {
    requests.Catalog.getList()
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return <ProductList products={products} />;
}
