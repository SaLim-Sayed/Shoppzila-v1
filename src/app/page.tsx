"use client";
import CollectionPage from "@/components/Collection";
import BoxPage from "./boxes/page";
import Products from "./products/page";

 
 
export default function Home() {
  return (
     
      <>
        <Products />
        <BoxPage />
        <CollectionPage />
        
       
      </>
  );
}
