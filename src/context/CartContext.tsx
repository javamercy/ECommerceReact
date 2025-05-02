import { createContext, PropsWithChildren, useContext, useState } from "react";
import { ICartResponse, IDeleteCartItemFromCartRequest } from "../api/requests";

interface ICartContextValue {
  cart: ICartResponse | null;
  setCart: (cart: ICartResponse | null) => void;
  deleteCartItem: (request: IDeleteCartItemFromCartRequest) => void;
}
export const CartContext = createContext<ICartContextValue | undefined>(
  undefined
);

export function useCartContext() {
  const context = useContext(CartContext);

  if (context === undefined) throw new Error("No provider for cart context");

  return context;
}

export function CartContextProvider({ children }: PropsWithChildren<any>) {
  const [cart, setCart] = useState<ICartResponse | null>(null);

  function deleteCartItem(request: IDeleteCartItemFromCartRequest): void {}

  return (
    <CartContext.Provider value={{ cart, setCart, deleteCartItem }}>
      {children}
    </CartContext.Provider>
  );
}
