"use client";
import CollectionPage from "@/components/Collection";
import BoxPage from "./boxes/page";
import Products from "./products/page";
import ShopSkill from "@/components/ShopSkill";
import Categories from "./categories/page";
import CardComponent from "@/components/Slider";

 
 
export default function Home() {
  return (
     
      <>
      <CardComponent/>
      <Categories/>
        <Products />
        <BoxPage />
        <CollectionPage />
        <ShopSkill/>
        
       
      </>
  );
}
