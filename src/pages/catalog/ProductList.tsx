import { IProduct } from "../../models/IProduct";
import { Grid } from "@mui/material";
import Product from "./Product";

interface Props {
  products: IProduct[];
}

export default function ProductList({ products }: Props) {
  return (
    <Grid container spacing={2} margin={5}>
      {products.map((p) => (
        <Grid size={{ xs: 6, md: 4, lg: 3 }} key={p.id}>
          <Product product={p} key={p.id} />
        </Grid>
      ))}
    </Grid>
  );
}
