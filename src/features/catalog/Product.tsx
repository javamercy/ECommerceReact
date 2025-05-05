import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { IProduct } from "../../models/IProduct";
import { AddShoppingCart, Search } from "@mui/icons-material";
import { Link } from "react-router";
import { IAddItemToCartRequest } from "../../api/requests";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { RequestStatus } from "../../enums/requestStatus";
import { addCartItemToCart } from "../cart/cartSlice";

interface Props {
  product: IProduct;
}

export default function Product({ product }: Props) {
  const customerId = +(localStorage.getItem("CustomerId") || 0);
  const dispatch = useAppDispatch();
  const { cart, status } = useAppSelector((state) => state.cart);

  function handleAddItem(productId: number) {
    const request = {
      productId,
      customerId,
      quantity: 1,
    } as IAddItemToCartRequest;

    dispatch(addCartItemToCart(request));
  }
  return (
    <Card>
      <CardMedia
        image={`http://localhost:5132/${product.imageUrl}`}
        sx={{ height: 300, backgroundSize: "cover" }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="h2"
          color="text-secondary"
        >
          {product.name}
        </Typography>
        <Typography variant="body2" color="secondary">
          {product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          loading={status === RequestStatus.LOADING}
          loadingPosition="center"
          onClick={() => handleAddItem(product.id)}
          size="small"
          variant="outlined"
          startIcon={<AddShoppingCart />}
          color="success"
        >
          Add to Cart
        </Button>
        <Button
          component={Link}
          to={`/catalog/${product.id}`}
          size="small"
          variant="outlined"
          startIcon={<Search />}
          color="info"
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
}
