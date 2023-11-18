import React from "react";
import {   Skeleton } from "@nextui-org/react";
<<<<<<< HEAD
import { IProduct } from "@/interfaces";
=======
import { CarProps } from "@/interfaces";
>>>>>>> origin/master
import fetchData from "@/utils";

export default async function Loading() {
  const url = "https://shoppzila.vercel.app/api/products";

<<<<<<< HEAD
  const allProducts: IProduct[] = await fetchData(url);
=======
  const allProducts: CarProps[] = await fetchData(url);
>>>>>>> origin/master
  return (
    <main className=" container mx-auto overflow-hidden">
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <h1 className="text-xl font-bold">Explore Popular Categories</h1>
        <div className=" flex py-6 gap-0 overflow-hidden">
          {allProducts?.map((product) => (
            <div
              key={product.src}
              className=" cursor-pointer  shrink-0 w-[137px] h-[137px] overflow-hidden"
            >
              <div className="max-w-[300px] w-full flex items-center gap-3">
                <div>
                  <Skeleton className="flex rounded-full w-12 h-12" />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <Skeleton className="h-3 w-3/5 rounded-lg" />
                  <Skeleton className="h-3 w-4/5 rounded-lg" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
