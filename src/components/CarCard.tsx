"use client";

import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { CarProps } from "@/types";
import { Button } from "@nextui-org/button";
import { Search, ShoppingCart } from "lucide-react";
// import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
interface carCardProps {
  car: CarProps;
  idx: number;
}
const CarCard = ({ car, idx }: carCardProps) => {
  const { name, price, src, subSrc } = car;
  // const dispatch = useAppDispatch();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="  flex  shadow-none justify-center ">
      <Card
        className="h-[250px]"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        shadow="none"
        isPressable
        onPress={() => console.log("item pressed")}
      >
        <CardBody className="overflow-hidden p-0 relative h-[200px]">
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt={name}
            className="w-full z-0 object-cover h-[200px]  "
            src={isHovered ? src : subSrc}
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
              href={`/products/${idx + 1}`}
              className="absolute -bottom-4 z-50 -right-[0.52rem] h-16 w-16 rounded-tr-none  cursor-pointer   flex justify-center items-center  hover:bg-white bg-white font-light mx-2"
              onClick={() => console.log(name)}
            >
              <ShoppingCart fill="black" />
            </Button>
          ) : (
            ""
          )}
        </CardBody>
        <CardFooter className=" flex flex-col justify-start items-start text-tiny ">
          <b className="flex text-center ">{name}</b>
          <p className="  ">{price}</p>
        </CardFooter>
      </Card>
    </div>
    // <div
    //   className={`relative flex flex-col h-72 justify-center items-start bg-primary-blue-100  transition-all ease-linear duration-1000   ${
    //     isHovered ? "hover:bg-white hover:shadow-md" : ""
    //   } rounded-3xl`}
    //   onMouseOver={() => setIsHovered(true)}
    //   onMouseOut={() => setIsHovered(false)}
    // >
    //   {isHovered ? (
    //     <div className=" absolute  top-0 right-0 flex flex-col justify-end  transition-all ease-linear duration-1000   z-10 items-baseline">
    //       <div className=" h-8 w-8 rounded-full bg-white m-4 flex justify-center items-center  cursor-pointer">
    //         <Search width={15} />
    //       </div>

    //       <Button
    //         as={Link}
    //         href={`/products/${idx+1}`}
    //         className="absolute -bottom-[15rem] -right-[0.52rem] h-16 w-16   cursor-pointer   flex justify-center items-center  hover:bg-white bg-neutral-50 font-light mx-2"
    //         onClick={() => console.log(name)}
    //       >
    //         <ShoppingCart fill="black" />
    //       </Button>
    //     </div>
    //   ) : (
    //     ""
    //   )}
    //   <Image
    //     src={isHovered ? subSrc : src}
    //     alt="car model"
    //     fill
    //     priority
    //     className="rounded-3xl"
    //   />

    //   <div className="absolute -bottom-20 flex flex-col p-2 z-10">
    //     <h5 className="font-light text-sm">{name}</h5>
    //     <p className="flex">
    //       <span className="">$</span>
    //       {price}
    //     </p>
    //   </div>
    // </div>
  );
};

export default CarCard;
