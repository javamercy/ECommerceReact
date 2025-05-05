import requests, { IDeleteCartItemFromCartRequest } from "../../api/requests";
import {
  TableContainer,
  Paper,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import {
  AddCircleOutlineRounded,
  Delete,
  RemoveCircleOutlineOutlined,
} from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { addCartItemToCart, setCart } from "./cartSlice";

export default function ShoppingCartPage() {
  const { cart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const customerId: number = +localStorage.getItem("customerId")!;

  function deleteCartItemFromCart(
    request: IDeleteCartItemFromCartRequest
  ): void {
    requests.Cart.deleteCartItemFromCart(request)
      .then((response) => dispatch(setCart(response)))
      .catch((err) => console.log(err));
  }

  function handleAddClick(productId: number, quantity: number = 1) {
    const request = {
      productId,
      customerId,
      quantity,
    };

    dispatch(addCartItemToCart(request));
  }

  return (
    <TableContainer
      component={Paper}
      style={{ marginTop: 50 }}
      variant="elevation"
    >
      <Table sx={{ minWidth: 650 }} aria-label="Cart table">
        <TableBody>
          {cart?.cartItems.map((item) => (
            <TableRow
              key={item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                <img
                  src={`http://localhost:5132/${item.productImageUrl}`}
                  height={100}
                  style={{ backgroundSize: "cover" }}
                />
              </TableCell>
              <TableCell component="th" scope="row" align="left">
                {item.productName}
              </TableCell>
              <TableCell align="left">{item.productDescription}</TableCell>
              <TableCell align="left">
                <Button
                  startIcon={<AddCircleOutlineRounded />}
                  onClick={() => handleAddClick(item.productId)}
                />
                {item.quantity}
                <Button
                  startIcon={<RemoveCircleOutlineOutlined />}
                  onClick={() => handleAddClick(item.productId, -1)}
                />
              </TableCell>
              <TableCell align="left">{item.productPrice} $</TableCell>
              <TableCell align="right">
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() =>
                    deleteCartItemFromCart({
                      cartId: cart.cartId,
                      productId: item.productId,
                      quantity: item.quantity,
                    })
                  }
                >
                  <Delete color="error"></Delete>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
