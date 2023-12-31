import BoxCard from "@/components/BoxCard";
import { IBox } from "@/interfaces";
import fetchData from "@/utils";

interface IProps {}

const BoxPage = async ({}: IProps) => {
  const url = "https://shoppzila.vercel.app/api/boxes";
  const boxes: IBox[] = await fetchData(url);
  return (
    <main className=" container mx-auto overflow-hidden">
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className=" ">
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-10 cursor-pointer">
              {boxes?.map((box, idx) => (
                <BoxCard key={box.src} idx={idx} box={box} />
              ))}
            </div>
          </section>
        </div>
      </div>
       
    </main>
  );
};

export default BoxPage;
