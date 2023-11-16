 
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../../types"; 

interface CounterState {
  cartItems: IProduct[];
}

// const [counter, setCounter] = useState(0)
const initialState: CounterState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart", // ** Attached with Store
  initialState,
  reducers: {
    addItemToCartAction: (state, action: PayloadAction<IProduct>) => {
      state.cartItems = [...state.cartItems, action.payload];
    },
  },
});

export const { addItemToCartAction } = cartSlice.actions;

export default cartSlice.reducer;
