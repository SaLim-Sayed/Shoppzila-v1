 
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../../interfaces";
import { addItemToShoppingCart } from "@/utils/functions";

interface CounterState {
  cartItems: IProduct[];
  cartItem: IProduct[];
}

// const [counter, setCounter] = useState(0)
const initialState: CounterState = {
  cartItems: [],
  cartItem: [],
};

const cartSlice = createSlice({
  name: "cart", // ** Attached with Store
  initialState,
  reducers: {
    addItemToCartAction: (state, action: PayloadAction<IProduct>) => {
      state.cartItems = [...state.cartItems, action.payload];
      state.cartItem = addItemToShoppingCart(state.cartItems, action.payload);
    },
  },
});

export const { addItemToCartAction } = cartSlice.actions;

export default cartSlice.reducer;
