import React, { useState } from "react";
import "../css/Base.css";
import DELIVERY from "../assets/svg/delivery.svg";
import Button from "../components/Button";

import SEARCH_ICON from "../assets/images/search2.png";
import SNEAKER from "../assets/images/sneakersss.png";
import { useNavigate, Link } from "react-router-dom";

const SearchBanner = () => {
  const [productSearch, setProductSearch] = useState("");
  const navigate = useNavigate();
  const searchHandle = () => {
    navigate(`/search/${productSearch}`);
  };
  return (
    <section className="bg-bgColor xl:mt-[108px]">
      <div className="flex xl:flex-row flex-col justify-between w-[390px] wrapper p-[32px] gap-[32px]">
        <div className="">
          <div>
            <h1 className="text-white font-primaryFont text-5xl lg:text-[88px] font-bold">
              Giày cũ - Giày chính hãng
            </h1>
            <h2 className="text-black font-primaryFont text-xl lg:text-[22px] font-bold mt-10">
              Chắc chắn bạn sẽ tìm thấy đôi giày ưa thích của mình tại đây
            </h2>
          </div>
          <div className="grid grid-flow-row items-center bg-white rounded-[16px] mt-[35px] ">
            <div className="justify-left items-center p-[24px]">
              <Link to="/cart">
                <img src={DELIVERY} alt="Delivery"></img>
              </Link>
            </div>
            <div className="justify-center flex md:flex-row flex-col  items-center p-[24px] gap-2 border-t-2">
              <input
                onChange={(e) => {
                  setProductSearch(e.target.value);
                }}
                type="text"
                placeholder={"Nhập tên sản phẩm..."}
                className="input-form bg-[#F5F5F5] w-full flex-grow h-[49px] rounded-[8px] p-4 font-secondaryFont text-[#9E9E9E]"
              ></input>
              <Button
                onClick={searchHandle}
                className="min-w-[150px] h-[60px] bg-Color2 text-[18px] font-bold font-primaryFont text-white gap-x-[10px] hover:bg-[#FFAD2D] active:bg-[#F09303]"
              >
                <img src={SEARCH_ICON} alt="Search Icon"></img>Tìm kiếm
              </Button>
            </div>
          </div>
        </div>
        <img className="" src={SNEAKER} alt="Sneakers!"></img>
      </div>
    </section>
  );
};

export default SearchBanner;
