import Image from "next/image";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
export default function Category() {
  return (
    <div className="w-full h-auto">
      {/*first home and casual*/}
      <div className="xl:w-[123px] xl:h-[22px] xl:top-[158px] xl:left-[100px] xl:gap-3 flex xl:ml-16 mt-5 overflow-x-hidden xs:w-[104px] xs:h-[19px] xs:ml-9">
        <div className="xl:w-[63px] xl:h-4 xl:gap-1 flex  xs:w-14 xs:h-[14px] xs:gap-1">
          <p
            className="xl:w-[43px] xl:h-[11px] font-satoshi font-normal xl:text-base xl:leading-[21.6px] text-black/60 
          xs:W-[38px] xs:h-[10px] xs:text-sm xs:leading-[18.9px]"
          >
            Home
          </p>
          <Image
            src="/Frame (5).png"
            alt="sign"
            width={16}
            height={16}
            className="xs:w-[14px] xs:h-[14px]"
          />
        </div>
        <p
          className="xl:w-[48px] xl:h-[22px] font-satoshi font-normal xl:text-base xl:leading-[21.6px]
        xs:w-[42px] xs:h-[19px] xs:text-sm xs:leading-[18.9px]"
        >
          Casual
        </p>
      </div>
      {/*filters and side data div for align them flex*/}
      <div className="flex">
        {/* filters */}
        <div className="w-[295px] h-[1220px] top-[204px] left-[100px] rounded-[20px] border border-[#0000001A] py-5 px-6 gap-6 lg:ml-12 lg:mt-5 ">
          {/*filter heading and sign*/}
          <div className="w-[247px] h-[27px] justify-between flex">
            <h2 className="w-[57px] h-[27px] font-satoshi font-bold text-xl leading-[27px]">
              Filters
            </h2>
            <Image src="/Frame (13).png" alt="sign" width={24} height={24} />
          </div>
          {/*line*/}
          <div className="w-[247px] border rotate-0 border-[#0000001A] lg:mt-6"></div>

          {/*second part div content*/}
          <div className="w-[247px] h-[160px] gap-5">
            {/*first t shirts*/}
            <div className="w-[247px] h-4 justify-between flex lg:mt-5">
              <p className="w-[52px] h-[11px] font-satoshi font-normal text-base leading-[21.6px] text-black/60 whitespace-nowrap">
                T-shirts
              </p>
              <Image src="/Frame (14).png" alt="sign" width={16} height={16} />
            </div>
            {/*second shorts*/}
            <div className="w-[247px] h-4 justify-between flex lg:mt-5 lg:gap-12">
              <p className="w-[45px] h-[11px] font-satoshi font-normal text-base leading-[21.6px] text-black/60">
                Shorts
              </p>
              <Image
                src="/Frame (14).png"
                alt="sign"
                width={16}
                height={16}
                className="lg:ml-[140px]"
              />
              .
            </div>
            {/*third shirt*/}
            <div className="w-[247px] h-4 justify-between flex lg:mt-5">
              <p className="w-[39px] h-[11px] font-satoshi font-normal text-base leading-[21.6px] text-black/60">
                Shirts
              </p>
              <Image src="/Frame (14).png" alt="sign" width={16} height={16} />
            </div>
            {/*fourth hoodie*/}
            <div className="w-[247px] h-4 justify-between flex lg:mt-5">
              <p className="w-[51px] h-[11px] font-satoshi font-normal text-base leading-[21.6px] text-black/60">
                Hoodie
              </p>
              <Image src="/Frame (14).png" alt="sign" width={16} height={16} />
            </div>
            {/*fifth jeans*/}
            <div className="w-[247px] h-4 justify-between flex lg:mt-5">
              <p className="w-[41px] h-[11px] font-satoshi font-normal text-base leading-[21.6px] text-black/60">
                Jeans
              </p>
              <Image src="/Frame (14).png" alt="sign" width={16} height={16} />
            </div>
          </div>
          {/* line*/}
          <div className="w-[247px] border rotate-0 border-[#0000001A] lg:mt-8"></div>

          {/* Price Section */}
          <div className="relative w-[247px] h-[90px] flex flex-col gap-5 lg:mt-4">
            {/* Price and Sign */}
            <div className="flex justify-between items-center w-[247px] h-[27px]">
              {/* Price Label */}
              <h1 className="font-satoshi font-bold text-[20px] leading-[27px] text-black">
                Price
              </h1>

              {/* Sign (Image) */}
              <Image
                src="/Frame (9).png"
                alt="sign"
                width={16}
                height={16}
                className="rotate-180"
              />
            </div>

            {/* Below Part (Progress Bar and Labels) */}
            <div className="relative w-[247px] h-[43px]">
              {/*Gray Progress Bar Background */}
              <div className="absolute top-[28px] w-[247px] h-[6px] bg-gray-200 rounded-full"></div>

              {/* Black Progress Bar*/}
              <div className="absolute top-[28px] left-[43.13px] w-[150.29px] h-[6px] bg-black rounded-full"></div>

              {/* Ellipse 4 (First Circle) */}
              <div className="absolute top-[20px] left-[41px] w-[20px] h-[20px] bg-black rounded-full"></div>

              {/* Ellipse 5 (Second Circle) */}
              <div className="absolute top-[20px] left-[187px] w-[20px] h-[20px] bg-black rounded-full"></div>

              {/* $50 Label */}
              <p className="absolute top-[45px] left-[37px] font-satoshi font-medium text-[14px] leading-[19px] text-black">
                $50
              </p>

              {/* $200 Label */}
              <p className="absolute top-[45px] left-[179px] font-satoshi font-medium text-[14px] leading-[19px] text-black text-center">
                $200
              </p>
            </div>
          </div>

          {/*line*/}
          <div className="w-[247px] border border-[#0000001A] rotate-0  lg:mt-10"></div>

          {/* Colors */}
          <div className="w-[247px] h-[137px] gap-5 lg:mt-6">
            {/* Header Section */}
            <div className="flex justify-between items-center w-full h-[27px]">
              <h1 className="font-satoshi font-bold text-xl leading-[27px]">
                Colors
              </h1>
              <Image
                src="/Frame (9).png"
                alt="sign"
                width={16}
                height={16}
                className="rotate-180"
              />
            </div>

            {/* Circle Colors first row */}
            <div className="flex justify-between items-center w-full h-[90px]">
              <div className="w-[37px] h-[37px] rounded-full bg-[#00C12B] border-[2px] border-black/20"></div>
              <div className="w-[37px] h-[37px] rounded-full bg-[#F50606] border border-black/20"></div>
              <div className="w-[37px] h-[37px] rounded-full bg-[#F5DD06] border border-black/20"></div>
              <div className="w-[37px] h-[37px] rounded-full bg-[#F57906] border border-black/20"></div>
              <div className="w-[37px] h-[37px] rounded-full bg-[#06CAF5] border border-black/20"></div>
            </div>
            {/* Circle Colors (Second Row) */}
            <div className="flex justify-between items-center w-full h-[37px]">
              <div className="w-[37px] h-[37px] rounded-full bg-[#063AF5] border-[2px] border-black/20">
                <Image
                  src="/Frame (16).png"
                  alt="sign"
                  width={16}
                  height={16}
                  className="lg:ml-2 lg:mt-2"
                />
              </div>
              <div className="w-[37px] h-[37px] rounded-full bg-[#7D06F5] border border-black/20"></div>
              <div className="w-[37px] h-[37px] rounded-full bg-[#F506A4] border border-black/20"></div>
              <div className="w-[37px] h-[37px] rounded-full bg-[#FFFFFF] border border-black/20"></div>
              <div className="w-[37px] h-[37px] rounded-full bg-[#000000] border border-black/20"></div>
            </div>
          </div>
          {/*line*/}
          <div className="w-[247px] border border-[#0000001A] rotate-0 lg:mt-10 "></div>
          <div className="w-[247px] h-[274px] flex flex-col gap-5 lg:mt-6">
            {/* Header Section */}
            <div className="w-[247px] h-[27px] flex justify-between items-center">
              <h1 className="w-[38px] h-[27px] font-satoshi font-bold text-xl leading-[27px]">
                Size
              </h1>
              <Image
                src="/Frame (9).png"
                alt="sign"
                width={16}
                height={16}
                className="rotate-180"
              />
            </div>

            {/* Button Section */}
            <div className="w-[247px] h-[227px] flex flex-wrap gap-2 ">
              {/* XX-Small */}
              <div className="w-24 h-[39px] bg-[#F0F0F0] rounded-[62px] flex justify-center items-center">
                <button className="w-[56px] h-[19px] font-satoshi font-normal text-base leading-[19px] text-black/60 whitespace-nowrap">
                  XX-Small
                </button>
              </div>
              {/* X-Small */}
              <div className="w-[88px] h-[39px] bg-[#F0F0F0] rounded-[62px] flex justify-center items-center">
                <button className="w-[48px] h-[19px] font-satoshi font-normal text-base leading-[19px] text-black/60 whitespace-nowrap">
                  X-Small
                </button>
              </div>
              {/* Small */}
              <div className="w-[74px] h-[39px] bg-[#F0F0F0] rounded-[62px] flex justify-center items-center">
                <button className="w-[34px] h-[19px] font-satoshi font-normal text-base leading-[19px] text-black/60">
                  Small
                </button>
              </div>
              {/* Medium */}
              <div className="w-[90px] h-[39px] bg-[#F0F0F0] rounded-[62px] flex justify-center items-center">
                <button className="w-[50px] h-[19px] font-satoshi font-normal text-base leading-[19px] text-black/60">
                  Medium
                </button>
              </div>
              {/* Large */}
              <div className="w-[76px] h-[39px] bg-black rounded-[62px] flex justify-center items-center">
                <button className="w-[36px] h-[19px] font-satoshi font-medium text-base leading-[19px] text-white">
                  Large
                </button>
              </div>
              {/* X-Large */}
              <div className="w-[89px] h-[39px] bg-[#F0F0F0] rounded-[62px] flex justify-center items-center">
                <button className="w-[49px] h-[19px] font-satoshi font-normal text-base leading-[19px] text-black/60 whitespace-nowrap">
                  X-Large
                </button>
              </div>
              {/* XX-Large */}
              <div className="w-[98px] h-[39px] bg-[#F0F0F0] rounded-[62px] flex justify-center items-center">
                <button className="w-[58px] h-[19px] font-satoshi font-normal text-base leading-[19px] text-black/60 whitespace-nowrap">
                  XX-Large
                </button>
              </div>
              {/* 3X-Large */}
              <div className="w-[97px] h-[39px] bg-[#F0F0F0] rounded-[62px] flex justify-center items-center">
                <button className="w-[57px] h-[19px] font-satoshi font-normal text-base leading-[19px] text-black/60 whitespace-nowrap">
                  3X-Large
                </button>
              </div>
              {/* 4X-Large */}
              <div className="w-[98px] h-[39px] bg-[#F0F0F0] rounded-[62px] flex justify-center items-center">
                <button className="w-[58px] h-[19px] font-satoshi font-normal text-base leading-[19px] text-black/60 whitespace-nowrap">
                  4X-Large
                </button>
              </div>
            </div>
          </div>
          {/* line */}
          <div className="w-[247px] border border-[#0000001A]  lg:mt-6"></div>
          {/*dress*/}
          <div className="w-[247px] h-[171px] gap-5 lg:mt-5">
            {/*dress by style*/}
            <div className="w-[247px] h-[27px] justify-between flex">
              <h1 className="w-[103px] h-[27px] font-satoshi font-bold text-xl leading-[27px] text-black whitespace-nowrap">
                Dress Style
              </h1>
              <Image
                src="/Frame (9).png"
                alt="sign"
                width={16}
                height={16}
                className="rotate-180"
              />
            </div>
            {/*below*/}
            <div className="w-[247px] h-[124px] gap-5">
              {/*casual*/}
              <div className="w-[247px] h-4 justify-between flex lg:mt-3">
                <p className="w-12 h-[11px] font-satoshi font-normal text-base leading-[21.6px] text-black/60">
                  Casual
                </p>
                <Image src="/Frame (5).png" alt="sign" width={16} height={16} />
              </div>
              {/*formal*/}
              <div className="w-[247px] h-4 justify-between flex lg:mt-3">
                <p className="w-[49px] h-[11px] font-satoshi font-normal text-base leading-[21.6px] text-black/60">
                  Formal
                </p>
                <Image src="/Frame (5).png" alt="sign" width={16} height={16} />
              </div>
              {/*party*/}
              <div className="w-[247px] h-4 justify-between flex lg:mt-3">
                <p className="w-9 h-[11px] font-satoshi font-normal text-base leading-[21.6px] text-black/60">
                  Party
                </p>
                <Image src="/Frame (5).png" alt="sign" width={16} height={16} />
              </div>
              {/*Gym*/}
              <div className="w-[247px] h-4 justify-between flex lg:mt-3">
                <p className="w-[33px] h-[11px] font-satoshi font-normal text-base leading-[21.6px] text-black/60">
                  Gym
                </p>
                <Image src="/Frame (5).png" alt="sign" width={16} height={16} />
              </div>
            </div>
            {/*last buttton*/}
            <div className=" absolute w-[247px] h-12 rounded-[62px] py-4 px-[54px] gap-3 bg-black ">
              <button className="flex justify-center items-center w-full h-full font-satoshi font-medium text-base leading-[18.9px] text-white whitespace-nowrap text-center">
                Apply Filter
              </button>
            </div>
          </div>
        </div>

        {/*right part*/}

        <div className="flex flex-col xl:mt-2 lg:ml-5">
          <div className="flex flex-row xs:ml-7 xs:mt-3">
            <h1
              className="xl:w-[101px] xl:h-[43px] xl:top-[204px] xl:left-[415px] font-satoshi font-bold xl:text-[32px] xl:leading-[43.2px]
            xs:w-[76px] xs:h-8 xs:text-2xl xs:leading-[32.4px]"
            >
              Casual
            </h1>
            <div className="xl:w-[369px] xl:h-4 xl:top-[222px] xl:left-[944px] xl:gap-3 xl:flex xl:justify-end xl:ml-96 xl:mt-3">
              <p
                className="xl:w-[209px] xl:h-[11px] font-satoshi font-normal xl:text-base xl:leading-[21.6px] text-black/60 whitespace-nowrap
              xs:W-[183px] xs:h-10 xs:text-sm xs:leading-[18.9px] xs:ml-2 xs:mt-2"
              >
                Showing 1-10 of 100 Products
              </p>
            </div>
            {/* <div className="xs:w-8 xs:h-8 xs:py-4 xs:px-5 xs:rounded-[62px] bg-[#F0F0F0] text-black"> */}
            <Image
              src="/Frame 19 (1).png"
              alt="filter sign"
              width={35}
              height={35}
              className="xl:hidden xs:block xs:ml-8 xs:mb-4"
            />
            <div className="w-[175px] h-4 gap-1 flex flex-row items-end lg:mt-2 lg:ml-4 xs:hidden">
              {/* Sort by: Most Popular */}
              <div className="w-[155px] h-3 font-satoshi font-medium text-base leading-[22px] text-black/60">
                Sort by:
              </div>

              {/* Most Popular */}
              <div className="w-[155px] h-3 font-satoshi font-medium text-base leading-[22px] text-black whitespace-nowrap">
                Most Popular
              </div>

              <Image
                src="/Frame (17).png"
                alt="sign"
                width={16}
                height={16}
                className="relative top-1"
              />
            </div>
          </div>

          <div>
            {/* Row 1 */}
            <div className="flex flex-wrap gap-3 mt-6">
              <Card
                title="Gradient Graphic T-shirt"
                imageSrc="/image 8 (2).png"
                rating={3.5}
                price={145}
                className="w-full xs:w-1/2 md:w-1/3 xl:w-auto"
                ratingClassName="xl:ml-4 xl:mt-2"
                starsClassName="xl:mt-2 xl:ml-4"
                priceClassName="xl:-ml-44 xl:mt-4"
              />
              <Card
                title="Polo with Tipping Details"
                imageSrc="/image 9 (2).png"
                rating={4.5}
                price={180}
                className="w-full xs:w-1/2 md:w-1/3 xl:w-auto"
                ratingClassName="xl:ml-4 xl:mt-2"
                starsClassName="xl:mt-2 xl:ml-8"
                priceClassName="xl:-ml-44 xl:mt-4"
              />
              <Card
                title="Black Striped T-shirt"
                imageSrc="/image 10 (2).png"
                rating={5.0}
                price={120}
                oldPrice={150}
                discount="-30%"
                className="w-full xs:w-1/2 md:w-1/3 xl:w-auto"
                ratingClassName="xl:ml-4 xl:mt-2"
                starsClassName="xl:mt-2 xl:ml-6"
                priceClassName="xl:-ml-8 xl:mt-4"
              />
            </div>

            {/* Row 2 */}
            <div className="flex flex-wrap gap-3 mt-6">
              <Card
                title="SKINNY FIT JEANS"
                imageSrc="/image 8.png"
                rating={3.5}
                price={240}
                oldPrice={260}
                discount="-20%"
                className="w-full xs:w-1/2 md:w-1/3 xl:w-auto"
                ratingClassName="xl:ml-4 xl:mt-2"
                starsClassName="xl:mt-2 xl:ml-5"
                priceClassName="xl:-ml-5 xl:mt-3"
              />
              <Card
                title="CHECKERED SHIRT"
                imageSrc="/image 9.png"
                rating={4.5}
                price={180}
                className="w-full xs:w-1/2 md:w-1/3 xl:w-auto"
                ratingClassName="xl:ml-4 xl:mt-2"
                starsClassName="xl:mt-2 xl:ml-7"
                priceClassName="xl:-ml-36 xl:mt-3"
              />
              <Card
                title="SLEEVE STRIPED T-SHIRT"
                imageSrc="/image 10.png"
                rating={4.5}
                price={130}
                oldPrice={160}
                discount="-30%"
                className="w-full xs:w-1/2 md:w-1/3 xl:w-auto"
                ratingClassName="xl:ml-4 xl:mt-2"
                starsClassName="xl:mt-2 xl:ml-9"
                priceClassName="xl:-ml-16 xl:mt-3"
              />
            </div>

            {/* Row 3 */}
            <div className="flex flex-wrap gap-3 mt-6 ">
              <Card
                title="VERTICAL STRIPED SHIRT"
                imageSrc="/image 7 (1).png"
                rating={5.0}
                price={212}
                oldPrice={232}
                discount="-20%"
                className="w-full xs:w-1/2 md:w-1/3 xl:w-auto"
                ratingClassName="xl:ml-4 xl:mt-2"
                starsClassName="xl:mt-2 xl:ml-12"
                priceClassName="xl:-ml-20 xl:mt-4"
              />
              <Card
                title="COURAGE GRAPHIC T-SHIRT"
                imageSrc="/image 8 (1).png"
                rating={4.0}
                price={145}
                className="w-full xs:w-1/2 md:w-1/3 xl:w-auto"
                ratingClassName="xl:ml-4 xl:mt-2"
                starsClassName="xl:mt-2 xl:ml-6"
                priceClassName="xl:-ml-52 xl:mt-4"
              />
              <Card
                title="Loose Fit Bermuda Shorts"
                imageSrc="/image 9 (1).png"
                rating={3.0}
                price={80}
                className="w-full xs:w-1/2 md:w-1/3 xl:w-auto"
                ratingClassName="xl:ml-4 xl:mt-2"
                starsClassName="xl:mt-2 xl:ml-8"
                priceClassName="xl:-ml-48 xl:mt-4"
              />
            </div>
          </div>

          {/*line*/}
          <div
            className="xl:w-[925px] xl:top-[1591px] xl:left-[415px] border rotate-0 xl:mt-8
          xs:w-[358px] xs:top-[1052px] xs:left-4 xs:ml-2"
          ></div>
          <div
            className="flex flex-row items-center justify-between xl:w-[920px] xl:h-auto absolute  xl:top-[1630px] xl:gap-48
          xs:w-[359px] xs:h-9 xs:top-[1073px] xs:left-[15px] xs:rounded-lg "
          >
            {/* Previous Button */}
            <button
              className="flex flex-row items-center justify-center xl:w-[133px] xl:h-[36px] rounded-lg border border-gray-300 bg-white xl:px-[14px] xl:py-[8px] xl:gap-[8px]
            xs:w-96px] xs:h-9 xs:top-[1063px] xs:left-[15px] xl:ml-96"
            >
              <Image
                src="/arrow-left.png"
                alt="arrow"
                width={20}
                height={20}
                className="xs:w-4 xs:h-4"
              />
              <span className="font-satoshi font-medium xl:text-[14px] leading-[20px] text-black xs:text-xs">
                Previous
              </span>
            </button>

            <div className="flex xl:space-x-2">
              {/* Pagination numbers */}
              <button
                className="xl:w-10 xl:h-10 flex justify-center items-center bg-gray-100 rounded-lg text-black font-medium
              xs:w-9 xs:h-9"
              >
                1
              </button>
              <button
                className="xl:w-10 xl:h-10 flex justify-center items-center  rounded-lg text-black/6%
               xs:w-9 xs:h-9"
              >
                2
              </button>
              <button
                className="w-10 h-10 flex justify-center items-center  rounded-lg text-gray-500
               xs:w-9 xs:h-9"
              >
                3
              </button>
              <button
                className="xl:w-10 xl:h-10 flex justify-center items-center  rounded-lg text-gray-500
               xs:w-9 xs:h-9"
              >
                ...
              </button>
              <button
                className="xl:w-10 xl:h-10 flex justify-center items-center rounded-lg text-gray-500
               xs:w-9 xs:h-9"
              >
                4
              </button>
              <button className="xl:w-10 xl:h-10 flex justify-center items-center  rounded-lg text-gray-500  xs:w-9 xs:h-9">
                5
              </button>

              <button
                className="xl:w-10 xl:h-10 flex justify-center items-center  rounded-lg text-gray-500
               xs:w-9 xs:h-9"
              >
                10
              </button>
            </div>

            {/* Next Button */}
            <button
              className="flex flex-row items-center justify-center xl:w-[86px] xl:h-[36px] rounded-lg border border-gray-300 bg-white xl:px-[14px] xl:py-[8px] gap-[8px]
            xs:w-[90px] xs:h-9 "
            >
              <span
                className="font-satoshi font-medium xl:text-[14px] leading-[20px] text-black xl:w-[30px] xl:h-[20px]
              xs:w-[25px] xs:h-5 xs:text-xs "
              >
                Next
              </span>
              <Image
                src="/arrow-right.png"
                alt="arrow"
                width={20}
                height={20}
                className="xs:w-4 xs:h-4"
              />
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
