
import ProductCard from "@/components/ProductCard";
import { IProduct } from "@/interfaces";
 

interface IProps {
  params: {
    id: number;
  };
}
const fetchData = async (url:string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const page = async ({ params }: IProps) => {
  const { id } = params;

  const url = `https://shoppzila.vercel.app/api/product/${id}`;
  const product: IProduct[] = await fetchData(url);

  return (
    <div className=" container mx-auto my-6">
      {product.map((item, idx) => (
       <ProductCard key={idx} item={item}/>
      ))}
    </div>
  );
};

export default page;
