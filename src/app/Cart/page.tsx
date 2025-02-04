import Image from "next/image";
import Footer from "../Components/Footer";
export default function Cart() {
  return (
    <div className="xl:w-[1290px] xl:min-h-screen grid grid-rows-[1fr_auto] xs:w-[390px] xs:h-full">
      {/*home cart */}
      <div className="xl:w-[106px] xl:h-[22x] xl:top-[158px] xl:left-[100px] xl:gap-1 flex xl:mt-6 xl:ml-12 xs:ml-8 xs:w-[89px] xs:h-[19px] xs:mt-4">
        <p className="xl:w-[43px] xl:h-[11px] font-satoshi font-normal xl:text-base xl:leading-[21.6px] xs:w-[38px] xs:h-[10px] xs:text-sm xs:leading-[18.9px] text-black/60">
          Home
        </p>

        <div className="inline-block mx-2">
          <Image src="/Frame (21).png" alt="sign" width={16} height={16} />{" "}
        </div>
        <p className="xl:w-[31px] xl:h-[22px] font-satoshi font-normal xl:text-base xl:leading-[21.6px] xs:mr-6 xs:w-[27px] xs:h-[19px] xs:text-sm xs:leading-[18.9px]">
          Cart
        </p>

        {/*h1*/}
        <h1 className="xl:w-[259px] xl:h-12 xl:top-[204px] font-integral-cf font-bold xl:text-[40px] xl:leading-[48px] xl:-ml-32 xl:mt-12 whitespace-nowrap xs:w-[207px] xs:h-[38px] xs:text-[32px] xs:leading-[39px] xs:mt-8 xs:-ml-28 ">
          Your cart
        </h1>
      </div>

      <div className="flex xl:flex-row xl:gap xs:flex-col xs:gap-2 xs:mt-16 xs:ml-3">
        {/*card div*/}
        <div
          className="xl:w-[715px] xl:h-[508px] xl:top-[276px] xl:left-[100px] rounded-[20px] border border-[#0000001A] xl:py-5 xl:px-6 xl:gap-6 xl:mt-10 xl:ml-8 
          xs:w-[358px] xs:h-[389px] xs:top-[203px] xs:left-4 xs:p-[14px] xs:gap-4 "
        >
          {/*first*/}
          <div className="xl:w-[667px] xl:h-[124px] xl:gap-1 flex xs:mt-1 xs:w-[330px] xs:h-[99px] xs:gap-[14px] ">
            <Image
              src="/image 8 (2).png"
              alt="t shirt"
              width={124}
              height={124}
              className="rounded-[8.66px] xs:w-[99px] xs:h-[99px] xl:w-[124px] xl:h-[124px]"
            />
            <div className="xl:w-[527px] xl:h-[124px] justify-between xs:w-[217px] xs:h-[99px]">
              <div className="w-[227px] h-[118px] justify-between">
                <h2 className="xl:w-[227px] xl:h-[27px] font-satoshi font-bold xl:text-xl xl:leading-[27px] whitespace-nowrap xl:ml-4 xs:w-[181px] xs:h-[22px] xs:text-base xs:leading-[21.6px]">
                  Gradient Graphic T-shirt
                </h2>
                <div className="flex lg:ml-4 lg:mt-2">
                  <p className="xl:w-[67px] xl:h-[19px] font-satoshi font-normal xl:text-base xl:leading-[18.9px] text-black xs:w-[58px] xs:h-4 xs:text-xs xs:leading-4">
                    Size:
                  </p>
                  <p className="xl:w-[67px] xl:h-[19px] font-satoshi font-normal xl:text-base xl:leading-[18.9px] xl:-ml-7 text-black/60 xs:w-[58px] xs:h-4 xs:text-xs xs:leading-4 ">
                    Large
                  </p>
                </div>
                <div className="flex lg:ml-4 lg:mt-2">
                  <p className="xl:w-[67px] xl:h-[19px] font-satoshi font-normal xl:text-base xl:leading-[18.9px] text-black xs:w-[58px] xs:h-4 xs:text-xs xs:leading-4">
                    Color:
                  </p>
                  <p className="xl:w-[67px] xl:h-[19px] font-satoshi font-normal xl:text-base xl:leading-[18.9px] lg:-ml-5 text-black/60 xs:w-[58px] xs:h-4 xs:text-xs xs:leading-4">
                    White
                  </p>
                </div>
                <div className="xl:w-[54px] xl:h-8 font-satoshi font-bold xl:text-2xl xl:leading-[32.4px] text-black xl:mt-4 xl:ml-4 xs:mt-4  xs:w-[45px] xs:h-[27px] xs:text-xl xs:leading-[27px]">
                  $145
                </div>
              </div>
            </div>
            <div className="xl:w-[225px] xl:h-[124px] justify-between xs:-ml-28">
              <div className="xl:w-[300px] xl:h-[124px] justify-between xl:ml-[80%] xs:ml-[72%] xs:w-5 xs:h-5">
                <Image
                  src="/Frame (18).png"
                  alt="delete"
                  width={24}
                  height={24}
                />
              </div>
              <div className="xl:w-[126px] xl:h-[44px] rounded-[62px] xl:py-3 xs:py-4 px-5 gap-5 bg-[#F0F0F0] flex items-center justify-center xl:-mt-10 xl:ml-24 xs:w-[105px] xs:h-[31px] xs:mt-12 ">
                <Image
                  src="/Frame (19).png"
                  alt="minus"
                  width={20}
                  height={20}
                  className="xs:w-4 xs:h-4"
                />
                <button className="xl:w-[12px] xl:h-[19px] font-satoshi font-medium xl:text-base xs:text-sm leading-[18.9px] xs:w-[6px] xs:h-[19px]">
                  1
                </button>
                <Image
                  src="/Frame (20).png"
                  alt="plus"
                  width={20}
                  height={20}
                  className="xs:w-4 xs:h-4"
                />
              </div>
            </div>
          </div>

          {/*line*/}
          <div className="xl:w-[667px] xs:w-[330px] border rotate-0 bg-black/10 xl:mt-5 xs:mt-3"></div>
          {/*second*/}
          <div className="w-[667px] h-[124px] gap-4 lg:mt-5 flex xs:w-[330px] xs:h-[99px] xs:gap-[14px] xs:mt-3">
            <Image
              src="/image 9.png"
              alt="shirt"
              width={124}
              height={124}
              className="rounded-[8.66px] xs:w-[99px] xs:h-[99px] xl:w-[124px] xl:h-[124px]"
            />
            {/*After shirt div*/}
            <div className="xl:w-[527px] xl:h-[124px] justify-between xs:w-[217px] xs:h-[99px]">
              {/*left part*/}
              <div className="xl:w-[151px] xl:h-[118px] justify-between">
                <h2 className="xl:w-[151px] xl:h-[27px] font-satoshi font-bold xl:text-xl xl:leading-[27px] whitespace-nowrap  xs:w-[181px] xs:h-[22px] xs:text-base xs:leading-[21.6px]">
                  CHECKERED SHIRT
                </h2>
                <div className="flex  xl:mt-2">
                  <p className="xl:w-[82px] xl:h-[19px] font-satoshi font-normal xl:text-base xl:leading-[18.9px] text-black xs:w-[58px] xs:h-4 xs:text-xs xs:leading-4">
                    Size:
                  </p>
                  <p className="xl:w-[82px] xl:h-[19px] font-satoshi font-normal xl:text-base xl:leading-[18.9px] xl:-ml-7 text-black/60 xs:w-[58px] xs:h-4 xs:text-xs xs:leading-4">
                    Medium
                  </p>
                </div>
                <div className="flex  lg:mt-2">
                  <p className="xl:w-[67px] xl:h-[19px] font-satoshi font-normal xl:text-base xl:leading-[18.9px] text-black xs:w-[58px] xs:h-4 xs:text-xs xs:leading-4">
                    Color:
                  </p>
                  <p className="xl:w-[67px] xl:h-[19px] font-satoshi font-normal xl:text-base xl:leading-[18.9px] xl:-ml-5 text-black/60 xs:w-[58px] xs:h-4 xs:text-xs xs:leading-4">
                    Red
                  </p>
                </div>
                <div className="xl:w-[56px] xl:h-8 font-satoshi font-bold xl:text-2xl xl:leading-[32.4px] text-black xl: xs:mt-4  xs:w-[45px] xs:h-[27px] xs:text-xl xs:leading-[27px]">
                  $180
                </div>
              </div>
            </div>
            <div className="xl:w-[225px] xl:h-[124px] justify-between xs:-ml-28">
              <div className="xl:w-[300px] xl:h-[124px] justify-between xl:ml-[192%] xs:ml-[78%] xs:w-5 xs:h-5">
                <Image
                  src="/Frame (18).png"
                  alt="delete"
                  width={24}
                  height={24}
                />
              </div>
              <div className="xl:w-[126px] xl:h-[44px] rounded-[62px] xl:py-3 xs:py-4 px-5 gap-5 bg-[#F0F0F0] flex items-center justify-center xl:-mt-16 xl:ml-[155%] xs:w-[105px] xs:h-[31px] xs:mt-12 xs:ml-8">
                <Image
                  src="/Frame (19).png"
                  alt="minus"
                  width={20}
                  height={20}
                  className="xs:w-4 xs:h-4"
                />
                <button className="xl:w-[12px] xl:h-[19px] font-satoshi font-medium xl:text-base xs:text-sm leading-[18.9px] xs:w-[6px] xs:h-[19px]">
                  1
                </button>
                <Image
                  src="/Frame (20).png"
                  alt="plus"
                  width={20}
                  height={20}
                  className="xs:w-4 xs:h-4"
                />
              </div>
            </div>
          </div>

          {/*line*/}
          <div className="xl:w-[667px] xs:w-[330px] border rotate-0 bg-black/10 xl:mt-12 xs:mt-3"></div>
          {/*third*/}
          <div className="xl:w-[667px] xl:h-[124px] xl:gap-4 xl:mt-5 flex xs:w-[330px] xs:h-[99px] xs:gap-[14px]  xs:mt-3">
            <Image
              src="/image 8.png"
              alt="jeans"
              width={124}
              height={124}
              className="rounded-[8.66px] xs:w-[99px] xs:h-[99px] xl:w-[124px] xl:h-[124px]"
            />
            {/*after jeans div*/}
            <div className="xl:w-[527px] xl:h-[124px] justify-between xs:w-[217px] xs:h-[99px]">
              {/*left part*/}
              <div className="xl:w-[150px] xl:h-[118px] justify-between">
                <h2 className="xl:w-[150px] xl:h-[27px] font-satoshi font-bold xl:text-xl xl:leading-[27px] whitespace-nowrap  xs:w-[181px] xs:h-[22px] xs:text-base xs:leading-[21.6px]">
                  SKINNY FIT JEANS
                </h2>
                <div className="flex  xl:mt-2">
                  <p className="xl:w-[82px] xl:h-[19px] font-satoshi font-normal xl:text-base xl:leading-[18.9px] text-black xs:w-[58px] xs:h-4 xs:text-xs xs:leading-4">
                    Size:
                  </p>
                  <p className="xl:w-[82px] xl:h-[19px] font-satoshi font-normal xl:text-base xl:leading-[18.9px] lg:-ml-7 text-black/60 xs:w-[58px] xs:h-4 xs:text-xs xs:leading-4">
                    Large
                  </p>
                </div>
                <div className="flex  lg:mt-2">
                  <p className="xl:w-[67px] xl:h-[19px] font-satoshi font-normal xl:text-base xl:leading-[18.9px] text-black xs:w-[58px] xs:h-4 xs:text-xs xs:leading-4">
                    Color:
                  </p>
                  <p className="xl:w-[67px] xl:h-[19px] font-satoshi font-normal xl:text-base xl:leading-[18.9px] xl:-ml-5 text-black/60 xs:w-[58px] xs:h-4 xs:text-xs xs:leading-4">
                    Blue
                  </p>
                </div>
                <div className="xl:w-[56px] xl:h-8 font-satoshi font-bold xl:text-2xl xl:leading-[32.4px] text-black xl:mt-4 xs:mt-4  xs:w-[45px] xs:h-[27px] xs:text-xl xs:leading-[27px]">
                  $240
                </div>
              </div>
            </div>
            <div className="xl:w-[225px] xl:h-[124px] justify-between xs:-ml-28">
              <div className="xl:w-[300px] xl:h-[124px] justify-between xl:ml-[80%]  xs:ml-[78%] xs:w-5 xs:h-5 ">
                <Image
                  src="/Frame (18).png"
                  alt="delete"
                  width={24}
                  height={24}
                />
              </div>
              <div className="xl:w-[126px] xl:h-[44px] rounded-[62px] xl:py-3 xs:py-4 px-5 gap-5 bg-[#F0F0F0] flex items-center justify-center xl:-mt-10 xl:ml-24 xs:w-[105px] xs:h-[31px] xs:mt-12 xs:ml-10">
                <Image
                  src="/Frame (19).png"
                  alt="minus"
                  width={20}
                  height={20}
                  className="xs:w-4 xs:h-4"
                />
                <button className="xl:w-[12px] xl:h-[19px] font-satoshi font-medium xl:text-base  xs:text-sm leading-[18.9px] xs:w-[6px] xs:h-[19px]">
                  1
                </button>
                <Image
                  src="/Frame (20).png"
                  alt="plus"
                  width={20}
                  height={20}
                  className="xs:w-4 xs:h-4"
                />
              </div>
            </div>
          </div>

          {/*right part*/}
          <div
            className="xl:w-[505px] xl:h-[458px] rounded-[20px] border border-[#0000001A] xl:-mt-[480px] xl:ml-[710px] xl:py-5 xl:px-6 
          xs:w-[358px] xs:h-[390px] xs:p-5 xs:gap-4 xs:mt-10 xs:-ml-4"
          >
            <h1
              className="xl:w-[179px] xl:h-8 font-satoshi font-bold xl:text-2xl xl:leading-[32.4px] whitespace-nowrap 
            xs:w-[149px] xs:h-[27px] xs:text-xl xs:leading-[27px]"
            >
              Order Summary
            </h1>
            {/*details of order div*/}
            <div className="xl:w-[457px] xl:h-[193px] gap-5 xs:w-[318px] xs:h-[173px] xs:mt-5 ">
              {/*sub total*/}
              <div className="xl:w-[457px] xl:h-[27px] justify-between flex xl:mt-4 xs:w-[318px] xs:h-[22px]">
                <h2 className="xl:w-[72px] xl:h-[27px] font-satoshi font-normal xl:text-xl xl:leading-[27px] text-black/60 xs:w-[58px] xs:h-[22px] xs:text-base xs:leading-[21.6px]">
                  Subtotal
                </h2>
                <div className="xl:w-[49px] xl:h-[27px] font-satoshi font-bold xl:text-xl xl:leading-[27px] text-right xs:w-[39px] xs:h-[22px] xs:text-base xs:leading-[21.6px]">
                  $565
                </div>
              </div>
              {/*discount*/}
              <div className="xl:w-[457px] xl:h-[27px] xl:justify-between flex  xl:mt-4 xs:w-[318px] xs:h-[22px] xs:mt-5">
                <h2 className="xl:w-[143px] xl:h-[27px] font-satoshi font-normal xl:text-xl xl:leading-[27px] text-black/60 whitespace-nowrap xs:w-[115px] xs:h-[22px] xs:text-base xs:leading-[21.6px]">
                  Discount (-20%)
                </h2>
                <div className="xl:w-[48px] xl:h-[27px] font-satoshi font-bold xl:text-xl xl:leading-[27px] text-right text-[#FF3333] xs:w-[39px] xs:h-[22px] xs:text-base xs:leading-[21.6px] xs:ml-40">
                  -$113
                </div>
              </div>
              {/*delivery*/}
              <div className="xl:w-[457px] xl:h-[27px] justify-between flex xl:mt-4 xs:w-[318px] xs:h-[22px] xs:mt-5">
                <h2 className="xl:w-[107px] xl:h-[27px] font-satoshi font-normal xl:text-xl xl:leading-[27px] text-black/60 whitespace-nowrap xs:w-[86px] xs:h-[22px] xs:text-base xs:leading-[21.6px]">
                  Delivery Fee
                </h2>
                <div className="xl:w-[32px] xl:h-[27px] font-satoshi font-bold xl:text-xl xl:leading-[27px] text-right xs:w-[26px] xs:h-[22px] xs:text-base xs:leading-[21.6px]">
                  $15
                </div>
              </div>
              {/*line*/}
              <div className="xl:w-[457px] border rotate-0 xl:mt-6 xs:w-[318px] xs:mt-6"></div>
              {/*total*/}
              <div className="xl:w-[457px] xl:h-[32px] justify-between flex xl:mt-8 xs:w-[318px] xs:h-[27px] xs:mt-6">
                <h2 className="xl:w-[42px] xl:h-[27px] font-satoshi font-normal xl:text-xl xl:leading-[27px] xs:w-[33px] xs:h-[22px] xs:text-base xs:leading-[21.6px]">
                  Total
                </h2>
                <div className="xl:w-[56px] xl:h-[32px] font-satoshi font-bold xl:text-2xl xl:leading-[32.4px] text-right xs:w-[47px] xs:h-[27px] xs:text-xl xs:leading-[27px]">
                  $467
                </div>
              </div>
            </div>
            {/* buttons*/}
            <div className="xl:w-[457px] xl:h-[48px] gap-3 flex items-center xl:mt-8 xs:w-[318px] xs:h-[48px] xs:mt-6">
              <div className="xl:w-[326px] xl:h-[48px] rounded-[62px] py-3 px-4 xl:gap-3 xs:gap-[10px] bg-[#F0F0F0] flex items-center xs:w-[218px] xs:h-[48px] ">
                <Image
                  src="/Frame (12).png"
                  alt="sign"
                  width={24}
                  height={24}
                  className="xs:w-5 xs:h-5"
                />
                <button className="xl:w-[120px] xl:h-[22px] font-satoshi font-normal xl:text-base xl:leading-[21.6px] text-black/40 text-center xs:w-[105px] xs:h-[19px] xs:text-base xs:leading-[18.9px] whitespace-nowrap xs:ml-2">
                  Add promo code
                </button>
              </div>
              {/*second one*/}
              <div className="xl:w-[119px] xl:h-[48px] rounded-[62px] xl:py-3 xl:px-4 gap-3 bg-black xs:w-[88px] xs:h-[48px] xs:py-3 xs:px-4 ">
                <button className="xl:w-[42px] xl:h-[22px] font-satoshi font-medium xl:text-base xl:leading-[21.6px] text-white text-center xl:ml-5 xs:w-[37px] xs:h-[19px] xs:text-sm xs:leading-[18.9px] xs:ml-2">
                  Apply
                </button>
              </div>
            </div>
            {/*checkout buuton*/}
            <div className="xl:w-[457px] xl:h-[60px] rounded-[62px] xl:py-4 xl:px-[54px] xl:gap-3 bg-black xl:mt-5 flex items-center xs:w-[318px] xs:h-[54px] xs:py-4 xs:px-[54px] xs:mt-3">
              <button className="xl:w-[114px] xl:h-[22px] font-satoshi font-medium xl:text-base xl:leading-[21.6px] text-white xl:ml-24 xs:w-[100px] xs:h-[19px] xs:text-sm xs:leading-[18.9px] xs:ml-10">
                Go to Checkout
              </button>
              <Image
                src="/arrow-down-bold 1.png"
                alt="arrow"
                width={24}
                height={24}
                className="xs:w-5 xs:h-5"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
