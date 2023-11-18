import React from "react";
import { Card, CardBody, Image, Button, Slider } from "@nextui-org/react";
import { IProduct } from "@/interfaces";
import { useDispatch } from "react-redux";
import { removeItemFromCartAction } from "@/store/slices/cart/cartSlice";
import {   Trash } from "lucide-react";

interface IProps {
  product: IProduct;
}

export default function ShopingCartItem({ product }: IProps) {
  const dispatch = useDispatch();

  const handleRemoveItem = (itemToRemove: IProduct) => {
    dispatch(removeItemFromCartAction(itemToRemove));
  };

  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50   max-w-[610px]"
      style={{ color: product.color || "black" }}
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              height={300}
              shadow="md"
              src={product.src}
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold ">{product.name}</h3>

                <p className=" ">Size : {product.size}</p>
                <p className=" ">
                  Total Salary : {product.count * product.price} $
                </p>
                <div className=" flex  items-center gap-4">
                  <p>Color : {product.color}</p>
                  <Button
                    radius="full"
                    size="sm"
                    isIconOnly
                    className={
                      " flex   justify-center items-center cursor-pointer"
                    }
                    style={{ backgroundColor: product.color }}
                  ></Button>
                  <Button
                    isIconOnly
                    color="danger"
                    onClick={() =>
                      handleRemoveItem(product)
                    }
                  >
                    <Trash />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
