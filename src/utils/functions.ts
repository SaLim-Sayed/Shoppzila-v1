import { IProduct } from "../types";

export const addItemToShoppingCart = (
  cartItems: IProduct[],
  product: IProduct
) => {
  const exists = cartItems.find((item) => item.src == product.src);
  console.log(exists);

  if (exists) {
    return cartItems.map((item) =>
      item.src == product.src ? { ...item  } : item
    );
  } else {
    // If the item doesn't exist, add it to the cart with a quantity of 1
    return [...cartItems, { ...product  }];
  }
};
