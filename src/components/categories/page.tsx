import { ICategory } from "@/interfaces";
import fetchData from "@/utils";
// import Loading from "./loading";
import { useQuery } from "react-query";

import { Image } from "@nextui-org/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Categories = () => {
  const url = "https://shoppzila.vercel.app/api/categories";

  const { data } = useQuery({
    queryKey: ["data"],
    queryFn: async () => await fetchData(url),
  });
  const category: ICategory[] = data;
  return (
    <main className=" container mx-auto overflow-hidden">
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <h1 className="text-2xl font ">Explore Popular Categories</h1>
        <div className=" flex py-6 gap-0 overflow-hidden">
          <Swiper
            modules={[Navigation, A11y, Autoplay]}
            slidesPerView={2}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            freeMode={true}
            draggable={true}
            loop
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="mySwiper mt-8"
          >
            {category?.map((el, idx) => (
              <SwiperSlide key={idx}>
                <div className="sm:h-[218px] h-[266px] overflow-hidden">
                  <Image
                    src={el.src}
                    alt={el.title}
                    width={300}
                    height={300}
                    radius="full"
                    isZoomed
                  />
                </div>
                <div className="flex justify-center items-center">
                  <p className=" text-center hover:text-[#FFA458] ">
                    {el.title}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </main>
  );
};

export default Categories;
