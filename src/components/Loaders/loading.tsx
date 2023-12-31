import React from "react";
import { Card, Skeleton } from "@nextui-org/react";
import { IProduct } from "@/interfaces";
import fetchData from "@/utils";

export default async function App() {
  const url = "https://shoppzila.vercel.app/api/products";

  const allProducts: IProduct[] = await fetchData(url);
  return (
    <div>
      <main className=" container mx-auto overflow-hidden">
        <div className="mt-12 padding-x padding-y max-width" id="discover">
          <div className="home__text-container">
            <section>
              <div className="home__cars-wrapper">
                {allProducts?.map((product) => (
                  <Card
                    key={product.src}
                    className="w-[200px] space-y-5 p-4"
                    radius="lg"
                  >
                    <Skeleton className="rounded-lg">
                      <div className="h-24 rounded-lg bg-default-300"></div>
                    </Skeleton>
                    <div className="space-y-3">
                      <Skeleton className="w-3/5 rounded-lg">
                        <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                      </Skeleton>
                      <Skeleton className="w-4/5 rounded-lg">
                        <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                      </Skeleton>
                      <Skeleton className="w-2/5 rounded-lg">
                        <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                      </Skeleton>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </div>
        <hr />
      </main>
    </div>
  );
}
