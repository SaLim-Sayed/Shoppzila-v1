import Category from "@/components/Category";
import axios from "axios";

interface IProps {
  title: string;
  slug:string;
  src:string
}

const page = async({}: IProps) => {
    const data=await getData();
  return <div>
    <Category/>
    {
        data.map((item:IProps)=>(
            <h1 key={item.slug}>{item.title} </h1>
        ))
    }
  </div>
}

export default page

async function getData() {
    const res = await axios('http://localhost:3000/api/boxes')
    console.log(res)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res ) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    return res.data 
  }