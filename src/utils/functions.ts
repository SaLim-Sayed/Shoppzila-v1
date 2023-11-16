import { IProduct } from "../interfaces";

export const addItemToShoppingCart = (
  cartItem: IProduct[],
  product: IProduct
) => {
  const exists = cartItem.find((item) => item.src == product.src);
  console.log(exists);

  if (exists) {
    return cartItem.map((item) =>
      item.src == product.src ? { ...item, qty: item.qty + 1 } : item
    );
  } else {
    // If the item doesn't exist, add it to the cart with a quantity of 1
    return [...cartItem, { ...product, qty: 1 }];
  }
};
