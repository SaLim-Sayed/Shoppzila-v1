"use client";
import CollectionPage from "@/components/Collection";
import BoxPage from "./boxes/page";
import Products from "./products/page";
import ShopSkill from "@/components/ShopSkill";
import Categories from "./cart/page";

 
 
export default function Home() {
  return (
     
      <>
      <Categories/>
        <Products />
        <BoxPage />
        <CollectionPage />
        <ShopSkill/>
        
       
      </>
  );
}
