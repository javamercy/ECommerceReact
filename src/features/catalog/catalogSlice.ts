import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { IProduct } from "../../models/IProduct";
import requests from "../../api/requests";
import { RequestStatus } from "../../enums/requestStatus";
import { RootState } from "../../store/store";

export const getProducts = createAsyncThunk<IProduct[]>(
  "catalog/getProducts",
  async () => {
    return await requests.Catalog.getList();
  }
);

export const getProductById = createAsyncThunk<IProduct, number>(
  "catalog/getProductById",
  async (id: number) => {
    return await requests.Catalog.getById(id);
  }
);

const productsAdapter = createEntityAdapter<IProduct>();

const initialState = productsAdapter.getInitialState({
  status: RequestStatus.IDLE,
});

export const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.status = RequestStatus.LOADING;
    });
    builder.addCase(
      getProducts.fulfilled,
      (state, action: PayloadAction<IProduct[]>) => {
        state.status = RequestStatus.SUCCESS;
        productsAdapter.setAll(state, action.payload);
      }
    );
    builder.addCase(getProducts.rejected, (state) => {
      state.status = RequestStatus.ERROR;
    });

    builder.addCase(getProductById.pending, (state) => {
      state.status = RequestStatus.LOADING;
    });
    builder.addCase(
      getProductById.fulfilled,
      (state, action: PayloadAction<IProduct>) => {
        state.status = RequestStatus.SUCCESS;
        productsAdapter.upsertOne(state, action.payload);
      }
    );
    builder.addCase(getProductById.rejected, (state) => {
      state.status = RequestStatus.ERROR;
    });
  },
});

export const {
  selectById: selectProductById,
  selectIds: selectProductIds,
  selectEntities: selectProductEntities,
  selectAll: selectAllProducts,
  selectTotal: selectTotalProducts,
} = productsAdapter.getSelectors((state: RootState) => state.catalog);
