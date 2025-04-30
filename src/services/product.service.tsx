import { IProduct } from "../models/IProduct";

const API_URL = "http://localhost:5132/api/Products";

async function getProducts(): Promise<IProduct[]> {
  try {
    const response = await fetch(API_URL + "/GetList", {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data as IProduct[];
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

export { getProducts };
