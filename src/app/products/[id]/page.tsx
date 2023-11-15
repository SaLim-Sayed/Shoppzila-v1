"use client";

import CarCard from "@/components/CarCard";
import fetchCars from "@/utils";

interface IProps {}

const page = async ({}: IProps) => {
  const allProducts = await fetchCars();
  return (
    <div className=" container mx-auto">
      <h2>welcome</h2>
    </div>
  );
};

export default page;
