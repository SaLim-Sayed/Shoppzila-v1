"use client";

import { IBox } from "@/types";
import { Button } from "@nextui-org/button";
import { ArrowBigRight, ArrowRight } from "lucide-react";
import Image from "next/image";

interface ICardProps {
  box: IBox;
  idx: number;
}
const BoxCard = ({ box, idx }: ICardProps) => {
  const { title, slug, src } = box;

  return (
    <div className="relative flex flex-col p-6 justify-center h-80  items-start text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl group">
      <div className=" w-full flex  flex-col items-start gap-2 top-2 left-2 z-20">
        <h2 className=" leading-[26px] ">{title}</h2> 
        <p className="  mt-2 font-light text-xs  ">{slug}</p>
      </div>

      <div className="  object-contain w-full h-36 my-3 rounded-xl">
        <Image
          src={src}
          alt="car model"
          fill
          priority
          className="   rounded-xl"
        />
      </div>
      <div className="absolute flex justify-center  -bottom-3 -right-3 w-36 bg-white p-2 rounded-3xl">
        <Button className=" bg-orange-300 hover:w-32 rounded-full hover:p-x-6">
          Shop <ArrowRight />{" "}
        </Button>
      </div>
    </div>
  );
};

export default BoxCard;
