import { useState } from "react";
import { Link } from "react-router";
import { cn } from "~/lib/utils";
import { Illustration } from "~/utils/images/icon.image";
import Button from "~/components/atoms/Button";

const HeroSection: React.FC = () => {
  return (
    <section className="pt-[121px] pb-[110px] xs:px-[100px] sm:px-[100px] md:px-[100px] ">
      <div className="container container-pad">
        <div
          className=" xs:max-w-[300px] h-[180px] sm:max-w-[600px] sm:h-[300px] md:max-w-[800px] md:h-auto lg:max-w-[1042px] xl:max-w-[1042px] 2xl:max-w-[1042px] lg:h-[441px] gap-[40px] 
        sm:gap-[80px] md:gap-[100px] lg:gap-[130px] opacity-100 flex flex-col text-center text-gap-[48px] items-center mx-auto"
        >
          {/* ---------- Badge ---------- */}
          <div className="2xl:max-w-[1042px] xl:max-w-[1042px] xs:max-w-[800px] sm:max-w-[900px] h-[261px] md:max-w-[1000px] md:h-full lg:max-w-[1042px] lg:h-[335px]  opacity-100 md:gap-[28px] lg:gap-[32px] md:px-[10px] flex flex-col justify-center items-center">
            <div className="flex justify-center items-center  ">
              <button className="xl:max-w-[279px] 2xl:max-w-[279px] w-[279px] xs:max-w-[269px] sm:max-w-[269px] h-[42px] lg:max-w-[279px] lg:h-[42px] flex items-center justify-center gap-2 rounded-full bg-[#DFEDE3] px-6  opacity-100">
                <span className="xs:max-w-[220px] sm:max-w-[220px] max-w-[279px] xl:max-w-[279px] 2xl:max-w-[279px] lg:max-w-[279px] w-[279px] h-[42px] flex items-center justify-center font-manrope font-medium xs:text-[15px] sm:text-[15px] text-[20px] leading-[26px] text-[#0F4E23]">
                  Fast. secure. hassle-free
                </span>
              </button>
            </div>

            {/* ---------- Heading ---------- */}
            <div className=" max-w-[1042px] 2xl:max-w-[1042px] xl:max-w-[1042px] xs:max-w-[1000px] h-[265px] md:max-w-[1022px] md:h-[241px] lg:max-w-[1042px] lg:h-[165px] opacity-100 md:flex-row md:px-[6px] md:gap-[20] md:gap-[10px] lg:gap-[24px] xs:py-[20px]">
              
                <h1
                  className="text-center md:mt-[12px] lg:mt-[12px] xl:mt-[12px] 2xl:mt-[12px] mx-auto max-w-[1042px] max-h-[165px] text-gray-900 font-bold
                      font-roboto text-[38px] sm:text-[45px] md:text-[48px]
                       2xl:text-[72px] sm:leading-[58px] 
                       lg:text-[64px] lg:leading-[74px] 
                       xl:text-[72px] xl:leading-[82px]"
                >
                  Get Paid Faster
                  <span className="inline-block ml-1 sm:ml-2">
                    <img
                      src={Illustration}
                      alt="money emoji"
                      className="inline-block w-[36px] h-[36px] sm:w-[48px] sm:h-[48px] lg:w-[60px] lg:h-[60px] xl:w-[72px] xl:h-[72px] object-contain"
                    />
                  </span>
                  Instant Cash for Businesses!
                </h1>
             

              {/* ---------- Subtext ---------- */}
              <p
                className="w-[1000px] xs:max-w-[400px] h-[62px] sm:max-w-[600px] sm:h-[72px] md:max-w-[800px] md:h-[72px] lg:max-w-[1000px] lg:h-[62px] xl:max-w-[1042px] xl:h-[72px] xs:pt-[40px] sm:pt-[10px] md:pt-[20px] lg:pt-[70px] xl:pt-[70px]  font-manrope font-normal
           md:text-[20px] lg:text-[24px] xs:text-[22px] sm:text-[20px] px-auto  leading-[28px] sm:leading-[32px] md:leading-[36px] text-center text-[#686868] mx-auto"
              >
                Stop waiting months for credit card payments. CASA helps
                business owners access cash instantly by converting card
                transactions into immediate funds.
              </p>
            </div>
          </div>

          {/* ---------- CTA Button ---------- */}
          
          <span className="mt-[120px]">
            <Button className="">
              Get Started</Button>
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// const HeroSection:React.FC = () => {
//   return <div>
//     Hero Section
//   </div>;
// };

// export default HeroSection;
