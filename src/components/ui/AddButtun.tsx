"use client";

import { addItemToCartAction } from "@/store/slices/cart/cartSlice";
import { IProduct } from "@/interfaces";
import { Button } from "@nextui-org/button";
import { useDispatch } from "react-redux";

interface IProps {
  product: IProduct;
}

const AddButtun = ({ product }: IProps) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Button
        onClick={() => dispatch(addItemToCartAction(product))}
        color="primary"
        variant="bordered"
        radius="full"
      >
        Add to bag
      </Button>
    </div>
  );
};

export default AddButtun;
