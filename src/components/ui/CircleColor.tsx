"use client";

import { colorList } from "@/constants";
import { useState } from "react";
import clsx from "clsx";
import { SignalHigh } from "lucide-react";

interface IProps {}

const CircleColor = ({}: IProps) => {
  const [tempColor, setTempColor] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState(1);

  return (
    <div>
      <h1> Color :{tempColor} </h1>
      <div className=" flex  items-center  gap-2">
        {colorList.map((color, index) => (
          <span
            key={color}
            className={clsx(
              " flex rounded-full justify-center items-center bg-slate-600 cursor-pointer",
              {
                "h-8 w-8": selectedColor === index,
                "h-6 w-6": selectedColor !== index,
              }
            )}
            style={{ backgroundColor: color }}
            onClick={() => {
              setTempColor([color]);
              setSelectedColor(index);
            }}
          >
            {
              selectedColor === index? " ✔":""
            }
          </span>
        ))}
      </div>
    </div>
  );
};

export default CircleColor;
