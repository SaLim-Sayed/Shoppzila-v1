import React from "react";
import { Card, CardBody, Image, Button, Slider } from "@nextui-org/react";
import { IProduct } from "@/interfaces";

interface IProps {
  product: IProduct;
}

export default function ShopingCartItem({ product }: IProps) {
  const [liked, setLiked] = React.useState(false);

  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50   max-w-[610px]"
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
                <h3 className="font-semibold text-foreground/90">
                  {product.name}
                </h3>
                <p className="text-small text-foreground/80">{product.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
