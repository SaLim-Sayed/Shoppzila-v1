"use client"
 import {useRef,useEffect} from 'react'
import Image from "next/image";
import React from "react";

export default function Category() {
    const imgRef =  useRef(null)
    useEffect(() => {
     if(imgRef.current){
        
     }
    }, [])
    
  return (
    <div ref={imgRef} className=" flex  gap-4 overflow-scroll  ">
      {Array.from({ length: 10 }).map((_, idx) => (
        <div className="   shrink-0 w-[150px]  h-[150px]" key={idx}>
          <Image
            width={200}
            height={200}
            className="rounded-full w-full h-full block"
            alt="NextUI Fruit Image with Zoom"
            src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
          />
        </div>
      ))}
    </div>
  );
}
