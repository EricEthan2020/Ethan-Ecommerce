import { create } from "zustand";
import products from "./useProductStore";

const useCartStore = create((set,get) => ({
    carts : [
        {
          id: 1,
          productId:7,
          quantity: 6,
        },
        {
          id: 2,
          productId:5,
          quantity: 1,
          cost:66.9,
        },
        {
            id:3,
            productId:3,
            quantity: 5,
            cost:66.4,
        },
        {
            id:4,
            productId:4,
            quantity:6,
            cost:54.3
        }
      ],
}));
export default useCartStore;