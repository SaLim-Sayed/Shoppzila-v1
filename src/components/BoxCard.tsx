"use client";

import { IBox } from "@/types";
// import { Button } from "@nextui-org/button";
import { ArrowBigRight, ArrowRight } from "lucide-react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

interface ICardProps {
  box: IBox;
  idx: number;
}
const BoxCard = ({ box, idx }: ICardProps) => {
  const { title, slug, src } = box;

  return (
    // <div className="relative flex flex-col p-6 justify-center h-80  items-start text-black-100 bg-primary-blue-100 hover:bg-white  rounded-3xl group">
    <div className="  flex   justify-center ">
      <Card className="  h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col gap-2 !items-start">
          <h4 className=" font-extrabold text-lg">{title}</h4>
          <p className=" text-tiny  font-light ">{slug}</p>
        </CardHeader>
        <Image
          isZoomed
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={src}
        />
        <div className="flex justify-center absolute z-50 -bottom-4 right-0     w-36 by-6 rounded-tl-3xl rounded-bl-3xl bg-white">
          <Button
            className=" text-[12px] z-50 mt-1 mb-5 bg-[#a2745c] hover:bg-orange-300  text-white hover:px-6 transition-all hover:animate-pulse "
            radius="full"
            size="sm"
          >
            Shop Now <ArrowRight size={15} />
          </Button>
        </div>
      </Card>
      {/* <div className=" w-full flex  flex-col items-start gap-2 top-2 left-2 z-20">
        <h2 className=" leading-[26px] ">{title}</h2>
        <p className="  mt-2 font-light text-xs  ">{slug}</p>
      </div>

      <div className="  object-contain w-full hover:w-72 h-36 my-3 rounded-xl">
        <Image
        isZoomed
          src={src}
          alt="car model"
          fill
          priority
          className="   rounded-xl"
        />
      </div>
      <div className="absolute flex justify-center  -bottom-5 -right-3 w-36 bg-white p-1 rounded-3xl">
        <Button className="bg-[#a2745c] hover:bg-orange-300 text-white hover:w-32 rounded-full hover:p-x-6">
          Shop <ArrowRight />{" "}
        </Button>
      </div> */}
    </div>
  );
};

export default BoxCard;
