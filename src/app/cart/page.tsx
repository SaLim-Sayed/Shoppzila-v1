import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
 
import { addItemToCartAction } from '@/store/slices/cart/cartSlice';
import { RootState } from '@/store/store';
import { IProduct } from "@/interfaces";

const fetchData = async () => {
  const response = await fetch("https://shoppzila.vercel.app/api/products");
  const data = await response.json();
  return data;
};

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const cart: IProduct[] = useSelector(
    (state: RootState) => state.cart.cartItem
  );
  console.log(cart);
  const { data, isLoading } = useQuery("data", fetchData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1></h1>
      <button onClick={() => dispatch(addItemToCartAction(data))}>
        Set Redux Value
      </button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default HomePage;
