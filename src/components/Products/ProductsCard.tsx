"use client";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { IProduct } from "@/interfaces";
import { Button } from "@nextui-org/button";
import { Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

interface IProductCardProps {
  product: IProduct;
  idx: number;
}
const ProductsCard = ({ product, idx }: IProductCardProps) => {
  const { name, price, src, subSrc } = product;
  // const dispatch = useAppDispatch();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="  flex  shadow-none justify-center  ">
      <Card
        className="h-[400px]  "
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        shadow="none"
        isPressable
        as={Link}
        href={`/products/${idx + 1} `}
        onPress={() => console.log("item pressed")}
      >
        <motion.div initial={{ opacity: 0.8 }} animate={{ opacity: 1 }}>
          <CardBody className="overflow-hidden p-0 relative h-[300px] transition  motion-reduce:transition-background motion-reduce:hover:transform-none">
            <Image
              shadow="sm"
              radius="lg"
              width="100"
              alt={name}
              className="w-full z-0 object-cover h-[290px]  "
              src={isHovered ? subSrc : src}
            />

            {/* // <div className="  flex flex-col justify-end  transition-all ease-linear duration-1000   z-50 items-baseline"> */}
            {isHovered ? (
              <div className="absolute top-0 right-0 h-8 w-8 z-50 rounded-full bg-white m-4 flex justify-center items-center  cursor-pointer">
                <Search width={15} />
              </div>
            ) : (
              <p></p>
            )}
            {isHovered ? (
              <Button
                as={Link}
                href={`/products/${idx + 1} `}
                className="absolute -bottom-4 z-50 -right-[0.52rem] h-16 w-16 rounded-tr-none  cursor-pointer   flex justify-center items-center  hover:bg-white bg-white font-light mx-2"
                onClick={() => console.log("clicked")}
              >
                <ShoppingCart fill="black" />
              </Button>
            ) : (
              ""
            )}
          </CardBody>
          <CardFooter className=" flex flex-col justify-start text-start items-start text-tiny ">
            <b className=" text-start">{name}</b>
            <p>{price}</p>
          </CardFooter>
        </motion.div>
      </Card>
    </div>
  );
};

export default ProductsCard;
