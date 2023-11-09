import React from "react";
import AppleLogo from "../../assets/Apple_logo.png";
import arrowSvg from "../../assets/icons arrow-right.svg";
import iphonePic from "../../assets/iphone pic.jpg";

const HomeHero = () => {
  return (
    <div className="w-full mt-10 flex justify-center">
      <div className="max-w-6xl mx-auto flex  items-center h-[300px]  bg-black  pl-16 ">
        <div class="grid grid-cols-3   text-white ">
          <div className="pt-2">
            <div className="flex items-center gap-3">
              <img src={AppleLogo} alt="AppleLogo" />
              <h3>iPhone 14 Series</h3>
            </div>
            <div className="pt-2 ">
              <h3 className="text-4xl font-semibold leading-relaxed">
                Up to 10%
              </h3>
              <h3 className="text-4xl font-semibold ">off Voucher</h3>
            </div>
            <div className="flex pt-2  items-center ">
              <h3 className="text-sm border-gray-200 border-b">Shop Now</h3>
              <img src={arrowSvg} alt="" className="pt-1" />
            </div>
          </div>

          <div className="">
            <img src={iphonePic} alt="iphonePic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
