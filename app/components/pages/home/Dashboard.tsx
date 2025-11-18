import { info } from "~/utils/images/icon.image";
import { sales } from "~/utils/images/icon.image";
import { Trending } from "~/utils/images/icon.image";
import { Avg } from "~/utils/images/icon.image";
import { Factoring } from "~/utils/images/icon.image";
import { Factored } from "~/utils/images/icon.image";
import { Secure } from "~/utils/images/icon.image";
import { u1 } from "~/utils/images/icon.image";
import { u2 } from "~/utils/images/icon.image";
import { u3 } from "~/utils/images/icon.image";
import { u4 } from "~/utils/images/icon.image";
import { u5 } from "~/utils/images/icon.image";
import { Profile } from "~/utils/images/icon.image";

const Dashboard: React.FC = () => {
  const us = [u1, u2, u3, u4, u5];

  const barChartData = [
    { day: "Sun", value: 70, color: "bg-[#E0F0E5]" },
    { day: "Mon", value: 60, color: "bg-[#E0F0E5]" },
    { day: "Tue", value: 90, color: "bg-[#E0F0E5]" },
    { day: "Wed", value: 70, color: "bg-[#E0F0E5]" },
    { day: "Thu", value: 130, color: "bg-[#0F4E23]" },
    { day: "Fri", value: 60, color: "bg-[#DAFFC2]" },
    { day: "Sat", value: 90, color: "bg-[#E0F0E5]" },
  ];

  return (
    <section className=" ">
      <div className="container container-pad">
        {/* Container */}
        <div className="max-w-[1440px] lg:h-[665x] xl:h-[665x] opacity-100  gap-[141px] pt-20 bg-[#F9FAFB] flex flex-col align-middle justify-center lg:flex-row lg:gap-[36px] h-full  lg:max-w-[1440px] ">
          {/* Card 1 */}

          <div className="w-[457px] h-[665px] opacity-100 p-[46px_28px] flex flex-col align-middle justify-between  gap-2 rounded-[24px]  bg-[#E0F0E5] ">
            <div className="w-[401px] h-[587px] opacity-100 flex flex-col gap-[50px]">
              <div className="w-[401px] h-[62px] opacity-100 flex items-center gap-[24px] bg-[#E0F0E5]">
                <h2 className="flex items-center w-[334px] h-[62px] opacity-100 font-roboto font-semibold text-[32px] leading-[40px] align-middle text-[#141414] gap-6">
                  <img src={info} alt="sal" className=" w-[40px] h-[40px]" />
                  Sales overview from Previous Day
                </h2>
              </div>

              {/* Sales Stats */}

              <div className="w-[400px] h-[475px] opacity-100 flex flex-col  items-center justify-center gap-[50px] relative      ">
                <div className="w-[400px] h-[361px] opacity-100 rounded-[24px] bg-[#FFFFFF] flex align-middle">
                  <div className="flex gap-4 items-center  w-[308px] h-[40px] opacity-100 absolute top-[32px] left-[32.5px] ">
                    <img
                      src={sales}
                      alt="total sales"
                      className="w-[32px] h-[32px]"
                    />
                    <span className="w-[260px] h-[40px] opacity-100 flex gap-2">
                      <span className="w-[133px] h-[22px] opacity-100 font-manrope font-medium text-[24px] leading-[36px] align-middle text-[#686868]">
                        Total sales:
                      </span>
                      <span className="w-[119px] h-[40px] opacity-100 font-roboto font-bold text-[32px] leading-[40px] align-middle text-[#686868]">
                        $12,500
                      </span>
                    </span>
                  </div>

                  {/* Bar Chart */}
                  <div className="absolute left-[33px] top-[102px] flex justify-between  items-end gap-[8px] w-[334px] h-[232px] opacity-100 ">
                    {barChartData.map(({ day, value, color }) => {
                      const isHighest =
                        value === Math.max(...barChartData.map((d) => d.value));
                      return (
                        <div
                          key={day}
                          className="flex flex-col items-center justify-end relative w-[28px]"
                        >
                          {isHighest && (
                            <div
                              className="absolute bg-[#F1F68E] rounded-[12px] shadow-md flex flex-col items-center justify-center text-[#141414] font-[roboto] font-medium"
                              style={{
                                width: "135px",
                                height: "87px",
                                top: "-70px",
                                left: "-54px",
                              }}
                            >
                              <p className="text-[14px] font-normal leading-[20px]">
                                Highest sale
                              </p>

                              <div className=" flex items-center w-[103px] h-[34px] gap-2">
                                <img
                                  src={Trending}
                                  alt="total sales"
                                  className="w-[10px] h-[10px] top-[10px] left-[5px] opacity-100"
                                />
                                <p className="text-[20px] font-bold leading-[28px] mt-[4px]">
                                  $2,450
                                </p>
                              </div>
                            </div>
                          )}
                          <div
                            className={`rounded-t-[4px] ${color} w-full`}
                            style={{ height: `${value}px` }}
                          ></div>
                          <span className="text-[12px] mt-[6px] text-[#666]">
                            {day}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Avg Sale */}
                <div className=" flex items-center w-[400px] h-[64px] opacity-100 pt-4 pr-6 pb-4 pl-6 gap-2 rounded-[24px] bg-[#BFE5A6] ">
                  <div className="flex items-center w-[355px] h-[32px] opacity-100 gap-4">
                    <img
                      src={Avg}
                      alt="average sale icon"
                      className="w-[24px] h-[24px]"
                    />
                    <p className="w-[315px] h-[32px] opacity-100 font-roboto font-normal text-[20px] leading-[32px] align-middle text-[#141414]">
                      Avg. sale: $104.16/per transection
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          {/* Factoring Possible Amount */}
          <div className=" sm:w-[500px] lg:w-[466px] border border-gray-200 flex flex-col justify-between w-[456px] h-[665px] opacity-100 pt-[46px] pr-[28px] pb-[46px] pl-[28px] gap-[54px] rounded-[25px] bg-[#DAFFC2]">
            <h2 className="flex items-center align-middle justify-between w-[388px] h-[77px] opacity-100  gap-[24px]">
              <img
                src={Factoring}
                alt="factoring"
                className="w-[48px] h-[48px]"
              />
              <span className="w-[316px] h-[77px] opacity-100 font-roboto font-semibold text-[32px] leading-[40px] text-[#141414]">
                Factoring Possible Amount
              </span>
            </h2>

            {/* Available Amount & Factored amount vs. remaining */}
            <div className="w-[400px] h-[442px] opacity-100 flex flex-col items-center  gap-[36px] ">
              <div className=" items-center max-w-[245px] w-[245px] h-[125px] opacity-100 flex flex-col gap-[16px] rounded-[25px] p-[24px] bg-[#FFFFFF]">
                <span className="flex items-center justify-center w-[197px] h-[21px] opacity-100 font-manrope font-normal text-[24px] leading-[36px] text-center align-middle text-[#686868]">
                  Available Amount
                </span>
                <div className="flex flex-row justify-center items-center w-[197px] h-[40px] opacity-100 gap-[24px]">
                  <span className=" flex items-center justify-center w-[118px] h-[40px] opacity-100 font-roboto font-semibold text-[32px] leading-[40px] align-middle text-[#141414]">
                    $15,375
                  </span>
                  <span className=" flex items-center justify-center w-[35px] h-[19px] opacity-100 font-roboto font-semibold text-[18px] leading-[30px] align-middle text-[#141414]">
                    USD
                  </span>
                </div>
              </div>

              {/* Factored Amount */}
              <div className="mt-[36px] items-center max-w-[400px] w-[400px] h-[281px] opacity-100 flex flex-col gap-[30px] rounded-[25px] p-[24px] bg-[#FFFFFF]">
                <div className="flex flex-row items-start w-[348px] h-[62px] opacity-100 gap-4">
                  <div className="relative w-[32px] h-[32px] rounded-full bg-[#E0F0E5] flex items-center justify-center">
                    <img
                      src={Factored}
                      alt="dollar icon"
                      className="w-[21.33px] h-[21.33px]"
                    />
                  </div>
                  <p className="flex items-center w-[300px] h-[62px] opacity-100 font-roboto font-medium text-[24px] leading-[32px] align-middle text-[#141414]">
                    Factored amount vs. remaining balance
                  </p>
                </div>

                <div className=" w-[374px] h-[141px] opacity-100 flex flex-col gap-[64px] rounded-[24px] p-[24px] bg-[#E0F0E5]">
                  <div className="flex justify-between w-[326px] h-[14px] gap-12">
                    <p className=" text-[20px] opacity-100 gap-[48px] rounded-[24px] w-[154px] h-[28px] font-['Roboto'] font-semibold text-lg leading-[28px] text-[#686868] text-left">
                      Factored Balance
                    </p>
                    <p className="text-[24px] w-[124px] h-[34px] font-['Roboto'] font-bold text-2xl leading-[34px] text-[#141414] text-right ">
                      $11,531.25
                    </p>
                  </div>

                  <div className="relative w-[305px] h-[15px]  rounded-[25px] bg-[#F2F2F2] opacity-100">
                    <div
                      className="absolute left-0 top-0 w-[234px] h-[15px] rounded-[25px] bg-[#0F4E23] opacity-100"
                      style={{ width: "75%" }}
                    ></div>
                    <span className="absolute top-[-26px] left-[206.5px] text-[18px] leading-[30px] w-[34px] h-[21px] font-['Roboto'] font-semibold text-lg text-[#141414] align-middle ">
                      75%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="max-w-[455.25px] min-w-[455.25px] xl:max-w-[455.25px] xl:min-w-[455.25px] 2xl:max-w-[455.25px] 2xl:min-w-[455.25px] h-[665px] pt-[46px] pr-6 pb-[46px] pl-6 gap-2 rounded-[25px] bg-[#F1F68E] opacity-100 flex flex-col justify-evenly items-center">
            <div className="max-width-[407.25px] h-[573.66px]">
              <h2 className=" max-w-[390.86px] 2xl:w-[390.86px] h-[99.97px] top-[46px] 2xl:px-[24px] gap-6 opacity-100 flex flex-row">
                <img src={Secure} alt="secure" className="w-[48px] h-[48px]" />
                <span className="max-w-[318px] h-[80px] 2xl:min-w-[318px] rotate-0 opacity-100 font-[Roboto] font-semibold text-[32px] leading-[40px] tracking-normal align-middle text-[#141414]">
                  Secure & Streamlined Workflow
                </span>
              </h2>

              {/* Recent Users & Balances */}
              <div className="max-w-[407.0001px] h-[458.6902px] 2xl:w-[407.0001px] 2xl:h-[458.6902px] rotate-0 opacity-100 top-[160.97px] left-[24.25px] rounded-[25px] flex flex-col justify-evenly items-center">
                {/* Recent Users Card */}
                <div className=" flex flex-col gap-[16px] max-w-[266.4895px] h-[124.6854px] 2xl:max-w-[266.4895px] 2xl:max-h-[124.6854px] rotate-[-12.89deg] opacity-100 top-[160.97px] left-[78.89px] pt-[20px] pr-[24px] pb-[20px] pl-[24px] rounded-[25px] bg-white">
                  <div className="flex gap-[35px] max-w-[219px] h-[34px] 2xl:max-w-[219px] opacity-100">
                    <span className="w-[132px] h-[34px] 2xl:max-w-[132px] opacity-100 font-[Roboto] font-bold text-[24px] leading-[34px] tracking-normal align-middle text-[#141414]">
                    <p>
                      Recent user
                    </p>
                    </span>
                    <span className="max-w-[51px] 2xl:max-w-[51px] h-[24px] opacity-100 font-[Roboto] font-semibold text-[14px] leading-[24px] tracking-normal align-middle flex-row text-[#686868] ">
                    <p >View All</p>
                    </span>
                  </div>
                  <div className="flex -space-x-2 max-w-[196px] h-[36px]">
                    {us.map((u, i) => (
                      <div
                        key={i}
                        className="max-w-[164px] h-[36px] rounded-full border-2 border-white overflow-hidden"
                      >
                        <img
                          src={u}
                          alt={`u${i}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                    <div className="w-[36px] h-[36px] rounded-full bg-lime-100 border-2 border-white flex items-center justify-center text-black font-bold">
                      9+
                    </div>
                  </div>
                </div>

                {/* Total Balance */}
                <div className="flex flex-col justify-center xl:self-end gap-[16px] max-w-[195.6091px] 2xl:max-w-[195.6091px] h-[165.9542px] rotate-[2.5deg] opacity-100 top-[316.93px] left-[228.59px] pt-[20px] pr-[24px] pb-[20px] pl-[24px] rounded-[25px] bg-white">
                  <div className=" gap-[16px] w-[146.00000px] 2xl:max-w-[146.00000px] h-[85.99999px] opacity-100 flex flex-col">
                  <span className="max-w-[110px] 2xl:max-w-[110px] h-[30px] opacity-100 font-[Roboto] font-semibold text-[18px] leading-[30px] tracking-normal align-middle text-[#686868]">
                    Total Balance
                  </span>
                  <span className="w-[146px] h-[40px] opacity-100 font-[Roboto] font-bold text-[32px] leading-[40px] tracking-normal align-middle text-[#141414]">
                    23,576.00
                  </span>
                  </div>
                  <button className="flex flex-row gap-[10px] max-w-[373.2269px] h-[96px] opacity-100 top-[482.88px] left-[24.25px] px-[10px] py-[6px] rounded-[25px] ">
                    <span className="bg-green-100 inline-block w-5 h-5 rounded-full font-manrope">
                      +
                    </span>{" "}
                    Add Number
                  </button>
                </div>

                {/* Online User Card */}
                <div className="flex gap-[26px] w-[373.2269px] h-[96px] 2xl:max-w-[373.2269px] 2xl:min-w-[373.2269px] rotate-[6.36deg] opacity-100 top-[482.88px] left-[24.25px] pt-[16px] pr-[24px] pb-[16px] pl-[24px] rounded-[25px] bg-white">
                  
                    <div className="w-[56.00000px] h-[56.00000px]  opacity-100 border-[6.28px] border-white">
                      <img
                        src={Profile}
                        alt="u3"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="gap-[6px] w-[244px] h-[64px] flex flex-row justify-between opacity-100">
                    <div className="flex flex-col items-center max-w-[126px] h-[64px] gap-4">
                    <span className="w-[70px] h-[26px] opacity-100 font-[Roboto] font-bold text-[24px] leading-[34px] tracking-normal align-middle text-[#141414] ">
                      Online <br />
                      <span className="flex flex-row w-[126px] h-[22px] opacity-100 font-[Manrope] font-normal text-[14px] leading-[100%] tracking-normal align-middle text-[#686868]">
                        Tommy Restaurant
                      </span>
                    </span>
                  </div> 
                  <div className="flex flex-col items-center max-w-[83px] h-[64px]">
                    <p className="text-[20px] text-gray-700 font-bold mb-1">
                      +$10k
                    </p>
                    <button className="bg-[#E0F0E5] text-green-800 px-3 py-1 rounded-full text-[14px] font-medium hover:bg-blue-800 transition">
                      Confirm
                    </button>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
