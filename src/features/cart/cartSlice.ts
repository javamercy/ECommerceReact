import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import requests, {
  IAddItemToCartRequest,
  ICartResponse,
  IDeleteCartItemFromCartRequest,
} from "../../api/requests";
import { RequestStatus } from "../../enums/requestStatus";

interface ICartState {
  cart: ICartResponse | null;
  status: RequestStatus;
}

const initialState: ICartState = {
  cart: null,
  status: RequestStatus.IDLE,
};

export const addCartItemToCart = createAsyncThunk<
  ICartResponse,
  IAddItemToCartRequest
>("cart/addCartItemToCart", async (request: IAddItemToCartRequest) => {
  const response = await requests.Cart.addItemToCart(request);
  return response;
});

export const deleteCartItemFromCart = createAsyncThunk<
  ICartResponse,
  IDeleteCartItemFromCartRequest
>(
  "cart/deleteCartItemFromCart",
  async (request: IDeleteCartItemFromCartRequest) => {
    const response = await requests.Cart.deleteCartItemFromCart(request);
    return response;
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<ICartResponse>) => {
      state.cart = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addCartItemToCart.pending, (state) => {
      state.status = RequestStatus.LOADING;
    });
    builder.addCase(
      addCartItemToCart.fulfilled,
      (state, action: PayloadAction<ICartResponse>) => {
        state.status = RequestStatus.SUCCESS;
        state.cart = action.payload;
      }
    );
    builder.addCase(addCartItemToCart.rejected, (state) => {
      state.status = RequestStatus.ERROR;
    });
    builder.addCase(deleteCartItemFromCart.pending, (state) => {
      state.status = RequestStatus.LOADING;
    });
    builder.addCase(
      deleteCartItemFromCart.fulfilled,
      (state, action: PayloadAction<ICartResponse>) => {
        state.status = RequestStatus.SUCCESS;
        state.cart = action.payload;
      }
    );
    builder.addCase(deleteCartItemFromCart.rejected, (state) => {
      state.status = RequestStatus.ERROR;
    });
  },
});

export const { setCart } = cartSlice.actions;
