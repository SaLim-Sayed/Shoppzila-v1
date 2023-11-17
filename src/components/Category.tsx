"use client";
import { ICategory } from "@/interfaces";
import { Image } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface IProps {
  category: ICategory;
  index: number;
}

const CategoryPage = ({ category }: IProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 8);
    }, 2000); // Change the duration as needed

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <AnimatePresence>
      <motion.div
        className="flex flex-col justify-center space-y-2"
        key={currentIndex}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className=" cursor-pointer  shrink-0 w-[137px] h-[137px] overflow-hidden">
          <Image
            isZoomed
            className="rounded-full  "
            alt={category.title}
            src={category.src}
          /> 
        </div>
        <h2 className=" flex justify-center">{category.title}</h2>
      </motion.div>
    </AnimatePresence>
  );
};

export default CategoryPage;
