import Image from "next/image";
import Card from "../Components/Card";
import { imageOptimizer } from "next/dist/server/image-optimizer";
import ReviewCard from "../Components/ReviewCard";
import Footer from "../Components/Footer";

export default function Arrivals() {
  return (
    <div className=" xl:w-full xl:h-[1250px] flex flex-col items-center bg-white bg-fixed xs:w-[390px] xs:h-full">
      {/* Heading */}
      <div className="xl:w-[403px] xl:h-[58px] xl:-mt-36 xs:w-[269px] xs:h-[38px] xs:-mt-24">
        <h1 className="font-integral-cf font-bold xl:text-5xl xl:leading-[57.6px] text-center xs:text-[32px] xs:leading-[38.4px] ">
          NEW ARRIVALS
        </h1>
      </div>
      <div className="flex xl:flex-wrap justify-center xl:gap-9 xl:mt-12  xs:mt-6 xs:flex-row xs:gap-6">
        <Card
          title="T-shirt with Tape Details"
          imageSrc="/image 7.png"
          rating={4.5}
          price={120}
          className="xs:mt-2 xl:-ml-8"
          ImageclassName="xs:ml-7 "
          starsClassName="xl:-ml-3 xs:ml-5 xs:mt-2"
          ratingClassName="xl:-ml-1 xl:mt-1"
          priceClassName="xl:-ml-52 xl:mb-2 xs:mt-2 xs:-ml-32"
        />
        <Card
          title="Skinny Fit Jeans"
          imageSrc="/image 8.png"
          rating={3.5}
          price={240}
          oldPrice={260}
          discount="-20%"
          ImageclassName="xs:-ml-5"
          className="xl:-ml-14 xs:mt-2 xs:-ml-12"
          starsClassName="xl:-ml-9  xs:mt-2 xs:ml-7"
          ratingClassName="xl:-ml-1 xl:mt-1"
          priceClassName="xl:-ml-12 xs:ml-4 xs:mt-2 "
        />
        <Card
          title="Checkered Shirt"
          imageSrc="/image 9.png"
          rating={4.5}
          price={180}
          ImageclassName="xl:block xs:hidden xl:-ml-5"
          className="xl:-ml-14 xl:mt-5 "
          starsClassName="xl:ml-16 xl:mt-2"
          ratingClassName="xl:-ml-1 xl:mt-1"
          priceClassName="xl:-ml-40 xl:mt-2"
        />
        <Card
          title="Sleeve Striped T-shirt"
          imageSrc="/image 10.png"
          rating={4.5}
          price={130}
          oldPrice={160}
          discount="-30%"
          className="xl:mt-5"
          ImageclassName="xl:block xs:hidden xl:-ml-5"
          starsClassName="xl:ml-16 xl:mt-2"
          ratingClassName="-ml-1 mt-1"
          priceClassName="xl:-ml-12 xl:mt-2"
        />
      </div>

      {/*BUTTON*/}
      <div className="xl:w-[218px] xl:h-[52px] xl:top-[1548px] xl:left-[611px] rounded-[62px] border-[1px] py-4 px-[54px] flex items-center justify-center xl:mt-10 xs:w-[358px] xs:h-[46px] xs:mt-10">
        <button className="font-satoshi font-medium xl:text-base xl:leading-[21.6px] text-black xs:text-sm xs:leading-[18.9px]">
          View All
        </button>
      </div>
      {/*border line*/}
      <div
        className="absolute xl:w-[1240px] h-0 xl:left-1/2 xl:top-[1570px] xl:-translate-x-1/2 border border-[rgba(0,0,0,0.1)] xl:-mt-6 
      xs:w-[358px] xs:mt-96"
      ></div>

      {/*SECOND PART*/}
      {/*HEADING*/}
      <div className="xl:w-[346px] xl:h-[58px] xl:top-[1728px] xl:left-[546px] xl:mt-44 xs:w-[231px] xs:h-[38px] xs:mt-24">
        <h1 className="font-integral-cf font-bold xl:text-5xl xl:leading-[57.6px] align-middle xs:text-[32px] xs:leading-[38.4px]">
          Top Selling
        </h1>
      </div>

      {/*cards section*/}
      <div className="flex xl:flex-wrap justify-center xl:gap-4 mt-10 whitespace-nowrap xs:flex-row xs:gap-1 ">
        <Card
          title="Vertical Striped Shirt"
          imageSrc="/image 7 (1).png"
          rating={5.0}
          price={212}
          oldPrice={232}
          discount="-20%"
          className="xl:-ml-16 xs:-ml-5 xs:mt-2"
          starsClassName="xl:-ml-8 mt-2 xs:ml-4"
          ratingClassName="xl:ml-2 xl:mt-1"
          priceClassName="xl:-ml-20 mt-2 xs:"
        />
        <Card
          title="Courage Graphic T-shirt"
          imageSrc="/image 8 (1).png"
          rating={4.0}
          price={145}
          className="xl:-ml-7 xs:mt-2"
          starsClassName=" xl:mt-2 xl:-ml-3 xs:ml-3 xs:mt-2"
          ratingClassName="xl:ml-2 xl:mt-1"
          priceClassName="xl:-ml-48 mt-2 xs:-ml-28"
        />

        <Card
          title="Loose Fit Bermuda Shorts"
          imageSrc="/image 9 (1).png"
          rating={3.0}
          price={80}
          ImageclassName="xl:block xs:hidden"
          className="mt-5"
          starsClassName="ml-7 mt-2"
          ratingClassName="ml-2 mt-1"
          priceClassName="-ml-52 mt-2"
        />
        <Card
          title="Faded Skinny Jeans"
          imageSrc="/image 10 (1).png"
          rating={4.5}
          price={210}
          ImageclassName="xl:block xs:hidden"
          className="-ml-16 mt-5"
          starsClassName="ml-12 mt-2"
          ratingClassName="ml-1 mt-1"
          priceClassName="-ml-48 mt-2"
        />
      </div>
      {/*button*/}
      <div className="xl:w-[218px] xl:h-[52px] xl:top-[2285px] xl:left-[611px] rounded-[62px] border-[1px] py-4 px-[54px] xl:gap-3 flex items-center justify-center xl:mt-12 xs:w-[358px] xs:h-[46px] xs:mt-8">
        <button className="font-satoshi font-medium xl:text-base xl:leading-[21.6px] text-black xs:text-sm xs:leading-[18.9px]">
          View All
        </button>
      </div>

      {/*Another container*/}
      <div
        className="absolute xl:w-[1180px] xl:h-[850px] xl:left-[60px] xl:top-[1780px] bg-[#F0F0F0] xl:rounded-[40px] xl:mt-[42%] xl:mr-28
      xs:w-[358px] xs:h-[975px] xs:rounded-[20px] xs:top-[2123px] xs:flex flex-col"
      >
        {/* Heading */}
        <div
          className="absolute xl:w-[687px] xl:h-[58px] xl:left-1/2 xl:-translate-x-1/2 xl:top-[70px] flex items-center justify-center
        xs:w-[246px] xs:h-[72px] xs:top-10 xs:left-14"
        >
          <h1 className="font-integral-cf font-bold xl:text-[48px] xl:leading-[58px] text-[#000000] text-center xs:text-[32px] xs:leading-[36px]">
            BROWSE BY DRESS STYLE
          </h1>
        </div>

        {/*all frame container*/}
        <div className="flex flex-col  xl:mx-16 ">
          {/* Row with Frame 61 and Frame 62*/}
          <div className="flex xl:flex-row xl:mt-8 xs:flex-col overflow-hidden">
            {/*Frame 61*/}
            <div className="xl:top-[122px]  rounded-[20px] overflow-hidden">
              <Image
                src="/Frame 61 (1).png"
                alt="first"
                width={407}
                height={289}
                className="xl:w-[407px] xl:h-[289px]  xs:w-[310px] xs:h-[190px] xs:mt-36 xs:ml-6 "
              />
            </div>
            {/*Frame 62*/}
            <div
              className="xl:top-[192px] xl:left-[491px] rounded-[20px] overflow-hidden
            "
            >
              <Image
                src="/Frame 62.png"
                alt="second"
                width={684}
                height={289}
                className="xl:w-[689px] xl:h-[289px]  xs:w-[310px] xs:h-[190px] xs:mt-3 xs:ml-6 xl:mt-36"
              />
            </div>
          </div>
          {/*Frame 60*/}

          <div className="flex xl:flex-row justify-start xl:mt-6 xs:flex-col ">
            <div
              className="xl:top-[501px] xl:left-[64px] rounded-[20px] overflow-hidden
          "
            >
              <Image
                src="/Frame 64.png"
                alt="third"
                width={689}
                height={289}
                className="xl:w-[689px] xl:h-[289px]  xs:w-[310px] xs:h-[190px] xs:mt-3 xs:ml-6"
              />
            </div>

            {/*Frame 63*/}
            <div className=" xl:left-[768px] rounded-[20px] xl:ml- ">
              <Image
                src="/Frame 63.png"
                alt="fourth"
                width={407}
                height={289}
                className="xl:w-[407px] xl:h-[289px]  xs:w-[310px] xs:h-[190px] xs:mt-3 xs:ml-6"
              />
            </div>
          </div>
        </div>
      </div>
      {/*last part*/}
      <div className="flex xl:mt-[1020px] xl:ml-[1100px] xs:mt-[275%]">
        <h1
          className="absolute xl:w-[654px] xl:h-[1160px] xl:left-[80px] xl:top-[2750px] font-integral font-bold xl:text-[48px] xl:leading-[58px]  text-black  xl:mt-[40%] 
      xs:w-[286px] xs:h-[72px] xs:text-[32px] xs:leading-9 xs:-ml-8 xs:mt-16 "
        >
          OUR HAPPY CUSTOMERS
        </h1>
        <div className="xs:mt">
          <Image
            src="/arrow-down-bold 2.png"
            alt="arrow"
            width={24}
            height={24}
            className="xs:mt-28 xs:ml-48 xl:-mt-0 xl:-ml-9 "
          />
          <Image
            src="/arrow-down-bold 1 (1).png"
            alt="arrow"
            width={24}
            height={24}
            className="xs:-mt-6 xs:ml-56 xl:-mt-5 xl:-ml-1"
          />
        </div>
      </div>

      {/*Review card*/}
      {/*parent div of all card*/}
      <div className="flex xl:flex-row justify-start xl:gap-6 xs:flex-col xs:gap-2 ">
        {/*card 1*/}
        <ReviewCard
          name="Sarah M."
          imageSrc="/Frame (24).png"
          rating={5}
          reviewText="I'm blown away by the quality and style of the clothes I received from Shop.co. 
        From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."

          // className="xs:w-full xs:h-[186px] xl:w-[400px] xl:h-[240px] "
        />
        {/* // xl:w-[400px] xl:h-[240px]  */}
        {/* CARD 3*/}
        <ReviewCard
          name="Alex K."
          imageSrc="/Frame (24).png"
          rating={5}
          reviewText="Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. 
        The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
          className="xl:block hidden"
        />

        {/* CARD 3*/}
        <ReviewCard
          name="James L."
          imageSrc="/Frame (24).png"
          rating={5}
          reviewText="As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. 
        The selection of clothes is not only diverse but also on-point with the latest trends."
          className="xl:block hidden"
        />
      </div>
      <Footer />
    </div>
  );
}
