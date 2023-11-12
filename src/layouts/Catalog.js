import { Link } from "react-router-dom";

import CIRCLE from "../assets/images/circle.png";
import SNEAKER from "../assets/images/SN.png";
import FORMAL from "../assets/images/FM.png";
import SPORT from "../assets/images/SP.png";
import SANDALS from "../assets/images/SD.png";
import SLIPPERS from "../assets/images/SL.png";
import SOCKS from "../assets/images/SK.png";

const Catalog_Items = [
  {
    title: "Sneaker",
    image: SNEAKER,
  },
  {
    title: "Formal",
    image: FORMAL,
  },
  {
    title: "Sport",
    image: SPORT,
  },
  {
    title: "Sandals",
    image: SANDALS,
  },
  {
    title: "Slippers",
    image: SLIPPERS,
  },
  {
    title: "Socks",
    image: SOCKS,
  },
];

const Catalog = () => {
  return (
    <section className="h-[571px] bg-[#FEFAF1] pt-[80px] pb-[80px] xl:flex flex-col hidden">
      <div className="flex items-center wrapper">
        <h1 className="text-[43px] ml-6 font-bold font-secondaryFont text-black">
          Danh mục sản phẩm
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-6 justify-between gap-x-[105px] mt-12 max-w-[1438px] text-center">
          {Catalog_Items.map((item) => (
            <Link to={`/search//${item.title}`} key={item.title}>
              <div className="grid grid-rows-2 gap-y-[90px] mt-[80px] max-w-[218px]">
                <div className="flex items-center justify-center">
                  <img srcSet={CIRCLE} alt="Circle" className="absolute w-[9rem]"></img>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute w-[5rem]"
                  ></img>
                </div>
                <h2 className="font-secondaryFont text-[30px] font-bold text-[#0A0909]">
                  {item.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
