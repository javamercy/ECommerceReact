import { useEffect } from "react";
import ProductList from "./ProductList";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getProducts, selectAllProducts } from "./catalogSlice";
import { RequestStatus } from "../../enums/requestStatus";

export default function CatalogPage() {
  const products = useAppSelector(selectAllProducts);
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.catalog);

  useEffect(() => {
    if (status != RequestStatus.SUCCESS && status != RequestStatus.LOADING) {
      dispatch(getProducts());
    }
  }, [dispatch, status]);

  return <ProductList products={products} />;
}
