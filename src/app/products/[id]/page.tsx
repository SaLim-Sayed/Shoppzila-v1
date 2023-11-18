<<<<<<< HEAD
import ProductCard from "@/components/Products/ProductCard";
import { IProduct } from "@/interfaces";
import fetchData from "@/utils";
import RelatedProducts from "./RelatedProducts";
=======
import ProductCard from "@/components/ProductCard";
import { IProduct } from "@/interfaces";
import fetchData from "@/utils";
>>>>>>> origin/master

interface IProps {
  params: {
    id: number;
  };
}

const page = async ({ params }: IProps) => {
  const { id } = params;

  const url = `https://shoppzila.vercel.app/api/product/${id}`;
  const product: IProduct[] = await fetchData(url);

  return (
    <div className=" container mx-auto my-6">
<<<<<<< HEAD
      <section>
        {product?.map((item, idx) => (
          <ProductCard key={idx} item={item} />
        ))}
      </section>
      <section>
        <RelatedProducts />
      </section>
=======
      {product?.map((item, idx) => (
        <ProductCard key={idx} item={item} />
      ))}
>>>>>>> origin/master
    </div>
  );
};

export default page;
