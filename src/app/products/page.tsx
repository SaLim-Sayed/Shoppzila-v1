import CarCard from "@/components/CarCard";
import { CarProps } from "@/types";
import fetchData from "@/utils";

interface IProps {}

const Products = async ({}: IProps) => {
  const url = "https://shoppzila.vercel.app/api/products";
  const allProducts: CarProps[] = await fetchData(url);
  return (
    <div>
      <main className=" container mx-auto overflow-hidden">
        <div className="mt-12 padding-x padding-y max-width" id="discover">
          <div className=" ">
            <h1 className="text-xl font-bold">Featured Products</h1>
            <section>
              <div className="home__cars-wrapper  pb-16 cursor-pointer">
                {allProducts?.map((product,idx) => (
                  <CarCard key={product.subSrc} idx={idx } car={product} />
                ))}
              </div>
            </section>
          </div>
        </div>
     
      </main>
    </div>
  );
};

export default Products;
