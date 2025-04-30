import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { IProduct } from "../../models/IProduct";
import { getProducts } from "../../services/product.service";

export default function CatalogPage() {
  const [products, setProducts] = useState([] as IProduct[]);

  useEffect(() => {
    getProducts()
      .then((data: IProduct[]) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return <ProductList products={products} />;
}
