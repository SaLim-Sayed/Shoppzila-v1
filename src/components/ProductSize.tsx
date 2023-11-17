"use client";

import { useState } from "react";
import clsx from "clsx";
import { cn } from "@nextui-org/react";

function ProductSize() {
  const [selectedSize, setSelectedSize] = useState(1);
  const [size, setSize] = useState<string[]>([]);

  return (
    <div>
      <h1>Size : {size} </h1>
      <ul className="flex gap-3 my-4">
    
    {["XS", "S", "M", "L", "XL"].map((size, index) => (
      <li key={size}>
        <button
          onClick={() => {
            setSelectedSize(index);
            setSize([size])
          }}
          className={clsx(
            "flex h-8 w-8 items-center justify-center rounded-full p-2 text-sm font-semibold transition-colors",
            {
              "bg-primary text-white": selectedSize === index,
              "bg-transparent": selectedSize !== index,
            }
          )}
        >
          {size}
        </button>
      </li>
    ))}
  </ul>
    </div>
  );
}

export default ProductSize;
