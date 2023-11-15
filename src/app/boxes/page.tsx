import BoxCard from "@/components/BoxCard";
import { IBox } from "@/types";
import fetchData from "@/utils";

interface IProps {}

const BoxPage = async ({}: IProps) => {
  const url = "http://localhost:3000/api/boxes";
  const boxes: IBox[] = await fetchData(url);
  return (
    <main className=" container mx-auto overflow-hidden">
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className=" ">
          <section>
            <div className="home__cars-wrapper gap-6  pb-10 cursor-pointer">
              {boxes?.map((box, idx) => (
                <BoxCard key={box.src} idx={idx} box={box} />
              ))}
            </div>
          </section>
        </div>
      </div>
      <hr />
    </main>
  );
};

export default BoxPage;
