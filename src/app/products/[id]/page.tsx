"use client";

import { IProduct } from "@/interfaces";
import fetchData from "@/utils";
import Image from "next/image";

import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import ProductSize from "@/components/ProductSize";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";

import CircleColor from "@/components/ui/CircleColor";
import AddButtun from "./AddButtun";

interface IProps {
  params: {
    id: number;
  };
}

const page = async ({ params }: IProps) => {
  const { id } = params;

  const url = `http://localhost:3000/api/product/${id}`;
  const product: IProduct[] = await fetchData(url);

  return (
    <div className=" container mx-auto my-6">
      {product.map((item, idx) => (
        <section key={idx} className=" container flex flex-col  justify-start ">
          <Breadcrumbs>
            <BreadcrumbItem>
              <Button variant="light">Home</Button>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Button variant="light">Shop</Button>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Button variant="light" color="warning">
                {" "}
                {item.name}
              </Button>
            </BreadcrumbItem>
          </Breadcrumbs>
          <div className="  flex flex-col items-center justify-center">
            <Card className=" gap-10" shadow="none">
              <CardBody className="overflow-visible shadow-none py-2">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
                  <Image
                    alt="Shoe"
                    className="  object-cover"
                    width={500}
                    height={400}
                    src={item.src}
                  />

                  <div className="flex-1 gap-4">
                    <h2 className="text-lg font-bold uppercase">{item.name}</h2>

                    <div className="mb-6 mt-2 flex gap-3">
                      <span className="font-bold">${item.price}</span>
                      <span className="text-default-600 line-through">
                        ${item.price + Math.ceil(item.price * 0.2)}{" "}
                      </span>
                      <span className="text-success">20% off</span>
                    </div>
                    <hr />
                    <p className="text-sm text-default-500"> {item.desc}</p>
                    <div className=" flex m-2 gap-2">
                      <CircleColor />
                    </div>
                    <ProductSize />

                    <div className="mt-6 flex gap-6">
                      <Button color="primary">Buy now</Button>
                      <AddButtun product={item} />
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </section>
      ))}
    </div>
  );
};

export default page;
