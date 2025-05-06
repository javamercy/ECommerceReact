import { useEffect } from "react";

import {
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getProductById, selectProductById } from "./catalogSlice";
import { RequestStatus } from "../../enums/requestStatus";

export default function ProductDetailsPage() {
  const { id } = useParams<{ id: string }>();

  const product = useAppSelector((state) => selectProductById(state, +id!));
  const { status } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (
      id &&
      !product &&
      status != RequestStatus.LOADING &&
      status != RequestStatus.SUCCESS
    ) {
      dispatch(getProductById(+id));
    }
  }, [dispatch, id, product, status]);

  if (!product) return <h3>Not Found...</h3>;

  return (
    <Grid container spacing={2}>
      <Grid size={{ xl: 3, lg: 4, md: 5, sm: 6, xs: 12 }}>
        <img
          src={`http://localhost:5132/${product.imageUrl}`}
          style={{ width: "100%" }}
        ></img>
      </Grid>
      <Grid size={{ xl: 9, lg: 8, md: 7, sm: 6, xs: 12 }}>
        <Typography variant="h3">{product.name}</Typography>
        <Divider color="secondary"></Divider>
        <Typography variant="h4" color="secondary">
          {product.price}$
        </Typography>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>{product.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Description</TableCell>
                <TableCell>{product.description}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Stock</TableCell>
                <TableCell>{product.stock}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
