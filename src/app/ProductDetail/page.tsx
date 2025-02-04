import React from "react";

import Image from "next/image";
import Card from "../Components/Card";
import ReviewCard from "../Components/ReviewCard";
import Footer from "../Components/Footer";

export default function ProductDetail() {
  return (
    <div className="relative xl:w-full xl:h-auto overflow-x-hidden xs:w-[390px] xs:h-auto">
      {/* Breadcrumbs Section */}
      <div className="xl:w-[295px] xl:h-[22px] xl:top-[158px] xl:gap-3 text-black/60 flex mt-8 ml-12 overflow-hidden xs:w-[154px] xs:h-[19px] xs:top-[653px] xs:left-4 xs:gap-4">
        {["Home", "Shop", "Men", "T-shirts"].map((breadcrumb, index) => (
          <div
            key={index}
            className="w-auto h-4 gap-1 flex items-center justify-center"
          >
            <p className="font-satoshi font-normal xl:text-base xl:leading-[21.6px] xs:text-sm xs:leading-[18.9px]">
              {breadcrumb}
            </p>
            {index < 3 && (
              <Image
                src="/Frame (5).png"
                alt="arrow"
                width={16}
                height={16}
                className="xs:w-[14px] xs:h-[14px]"
              />
            )}
          </div>
        ))}
      </div>

      {/* Product Section */}
      <div className="flex flex-col xl:flex-row xl:items-start mt-12 ml-6 overflow-hidden xl:gap-8">
        {/* Left Column: Small Images + Large Image */}
        <div className="flex flex-col xl:flex-row xl:gap-6 xs:w-full">
          {/* Small Images */}
          <div className="order-2 xl:order-1 flex xs:flex-row xl:flex-col  xs:mt-4 xl:mt-0  xl:space-y-2 xs:w-full xl:w-auto xs:space-x-1">
            {[
              "/533545a2b1e10e90b8059bc1bc97eab5 (1).png",
              "/b417beff6f8fa6310534f3755fd23c5a.png",
              "/9d8d7ff6e33f95a574450e07218fc909.png",
            ].map((src, index) => (
              <div
                key={index}
                className="w-[111px] h-[106px] lg:w-[152px] lg:h-[167px] rounded-[20px] border border-black overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`small-image-${index}`}
                  width={152}
                  height={167}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>

          {/* Main Product Image */}
          <div className="order-1 xl:order-2  flex-shrink-0 xl:w-[444px] xl:h-[450px] rounded-[20px] overflow-hidden xs:w-full xs:h-[300px] ">
            <Image
              src="/533545a2b1e10e90b8059bc1bc97eab5 (1).png"
              alt="t-shirt"
              width={444}
              height={700}
              className="object-cover w-full h-full "
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="order-3 flex xs:flex-col  xs:mt-8 xs:mx-4 lg:ml-8 xl:-mt-2">
          {/* Product Title */}
          <h1 className="font-integral-cf font-extrabold xl:text-[40px] xl:leading-[48px] xs:text-[24px] xs:leading-[32px]">
            One Life Graphic T-shirt
          </h1>

          {/* Rating Section */}
          <div className="w-[193px] h-[24.71px] flex items-center gap-2 lg:ml-1 mt-2 xs:w-full xs:justify-start">
            <div className="flex gap-[4px]">
              {Array(4)
                .fill("★")
                .map((star, index) => (
                  <span
                    key={index}
                    className="text-[#FFC633] text-5xl xs:text-xl"
                  >
                    {star}
                  </span>
                ))}
              <span
                className="text-[#FFC633] text-2xl xs:text-xl"
                style={{ clipPath: "inset(0 50% 0 0)" }}
              >
                ★
              </span>
            </div>
            <span className="text-[14px] font-satoshi text-black">4.5</span>
            <span className="text-[14px] font-satoshi text-black opacity-60">
              /5
            </span>
          </div>

          {/* Pricing Section */}
          <div className="flex flex-row lg:ml-1 mt-4 xs:flex-col xs:gap-2">
            <div className="flex gap-2 items-center">
              <span className=" text-[32px] font-satoshi font-bold text-black xs:text-[24px]">
                $260
              </span>
              <span className="text-[32px] font-satoshi font-bold text-black/30 line-through xs:text-[20px]">
                $300
              </span>
              {/* -40% */}
              <div className="flex justify-center items-center px-[14px] py-[6px] gap-0 left-[938px] w-[72px] top-[321px] h-[34px] bg-[rgba(255,51,51,0.1)] rounded-[62px]">
                {/* -40% */}
                <div className="w-[44px] h-[22px] text-[16px] font-satoshi font-medium leading-[21.6pxpx] text-[#FF3333] ">
                  -40%
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="font-satoshi text-base leading-[22px] text-black/60 mt-4 xs:text-sm">
            This graphic t-shirt is perfect for any occasion. Crafted from a
            soft and breathable fabric, it offers superior comfort and style.
          </p>

          {/* Select Colors Section */}
          <div className="border-t mt-6 pt-4">
            <h3 className="font-satoshi font-medium text-lg">Select Colors</h3>
            <div className="flex gap-4 mt-2">
              {/* Add color options here */}
              <Image
                src="/Frame 77.png"
                alt="circle"
                width={143}
                height={37}
                className="top-[488px] left-[750px] gap-4 lg:mt-2 "
              />
            </div>
          </div>

          {/* Choose Size Section */}
          <div className="border-t mt-6 pt-4">
            <h3 className="font-satoshi font-medium text-lg">Choose Size</h3>
            <div className="flex gap-4 mt-2">
              {/* Add size options here */}
              {/*buttons div*/}
              <div
                className="xl:w-[420px] xl:h-[46px] xl:top-[600px] xl:left-[750px] xl:gap-3 flex  xl:mt-6 items-center
          xs:w-[353px] xs:h-[39px] xs:gap-2"
              >
                <div
                  className="xl:w-[86px] xl:h-[46px] rounded-[62px] xl:py-3 xl:px-6 gap-3 bg-[#F0F0F0]
            xs:w-[74px] xs:h-[39px] xs:py-[10px] xs:px-5"
                >
                  <button
                    className="xl:w-[38px] xl:h-[22px] font-satoshi font-normal xl:text-base xl:leading-[21.6px] text-black/60
              xs:w-[34px] xs:h-[19px] xs:text-sm xs:leading-[18.9px]"
                  >
                    Small
                  </button>
                </div>
                <div
                  className="xl:w-[105px] xl:h-[46px] rounded-[62px] xl:py-3 xl:px-6 bg-[#F0F0F0]
            xs:w-[90px] xs:h-[39px] xs:py-[10px] xs:px-5 xs:gap-3"
                >
                  <button
                    className="xl:w-[57px] xl:h-[22px] font-satoshi font-normal xl:text-base xl:leading-[21.6px] text-black/60
              xs:w-[50px] xs:h-[19px] xs:text-sm xs:leading-[18.9px]"
                  >
                    Medium
                  </button>
                </div>
                <div
                  className="xl:w-[89px] xl:h-[46px] rounded-[62px] xl:py-3 xl:px-6 bg-black
            xs:w-[76px] xs:h-[39px] xs:py-[10px] xs:px-5 gap-3"
                >
                  <button
                    className="xl:w-[41px] xl:h-[22px] font-satoshi font-medium xl:leading-[21.6px] text-white
              xs:w-[36px] xs:h-[19px] xs:text-sm xs:leading-[18.9px]"
                  >
                    Large
                  </button>
                </div>
                <div
                  className="xl:w-[104px] xl:h-[46px] rounded-[62px] xl: py-3 xl:px-6 bg-[#F0F0F0]
            xs:w-[89px] xs:h-[39px] xs:py-[10px] xs:px-5 gap-3"
                >
                  <button
                    className="xl:w-[56px] xl:h-[22px] font-satoshi font-normal xl:text-base xl:leading-[21.6px] text-black/60 whitespace-nowrap
              xs:w-[49px] xs:h-[19px] xs:text-sm xs:leading-[18.9px]"
                  >
                    X-Large
                  </button>
                </div>
                {/*line*/}
                <div className="xl:w-[590px] xl:border xl:border-black xl:left-[750px] xl:top-[670px]"></div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-row gap-4 mt-6">
            {/* Quantity Selector */}
            <div
              className="xl:w-[170px] xl:h-[52px] rounded-[62px] flex justify-between items-center xl:py-4 xl:px-5 bg-[#F0F0F0]
          xs:w-[110px] xs:h-[44px] xs:py-3 xs:px-4 gap-4"
            >
              <Image
                src="/Frame (8).png"
                alt="minus"
                width={24}
                height={24}
                className="xs:w-5 xs:h-5 xl:w-6 xl:h-6"
              />
              <p className="font-satoshi xl:text-base text-center xs:text-sm">
                1
              </p>
              <Image
                src="/Frame (7).png"
                alt="plus"
                width={24}
                height={24}
                className="xs:w-5 xs:h-5 xl:w-6 xl:h-6"
              />
            </div>
            {/* Add to Cart Button */}
            <button
              className="w-full xl:w-[400px] xl:h-[52px] rounded-[62px] xl:py-4 bg-black text-white font-satoshi text-base text-center
          xs:w-[236px] xs:h-[44px] xs:py-2 xs:px-[54px] "
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-20 px-8 py-0">
        <div>
          {/* All Reviews Section */}
          <div className="flex items-center">
            <h2 className="xl:font-integral-cf font-bold xl:text-2xl xl:mb-4 xs:font-satoshi xs:text-xl xs:leading-[27px] whitespace-nowrap">
              All Reviews
            </h2>
            <h3 className="xs:w-[29px] xs:h-[10px] xs:font-satoshi xs:font-normal xs:text-sm xs:leading-[22px] xs:-mt-2 xs:ml-1 xl:-mt-6">
              (451)
            </h3>
            <div className="xs:w-10 xs:h-10 xs:rounded-[62px] xs:py-4 xs:px-5 bg-[#F0F0F0] xs:ml-9 xl:flex xl:ml-[65%]">
              <Image
                src="/Frame 19 (2).png"
                alt="filter sign"
                width={35}
                height={35}
                className="mb-2 -ml-3"
              />
            </div>
            <div className="xl:w-[120px] xl:h-12 xl:rounded-[62px] xl:py-4 xl:px-5 bg-[#F0F0F0] flex flex-row xl:block xs:hidden">
              <button className="flex font-satoshi font-medium text-base leading-[21.6px] text-black ">
                Latest
              </button>
              <Image
                src="/Frame (26).png"
                alt="sign"
                width={16}
                height={16}
                className="xl:ml-12 xl:-mt-5"
              />
            </div>
            <div className="xs:w-[113px] xs:h-10 xs:rounded-[62px] xs:py-2 xs:px-4 xs:gap-3 bg-black xs:ml-2">
              <button className="font-satoshi font-medium xs:text-xs xs:leading-[16.2px] text-white whitespace-nowrap">
                Write a Review
              </button>
            </div>
          </div>

          {/* Product Details, Ratings & Reviews, FAQs */}
          <div className="relative w-full mt-6">
            <div className="flex justify-between items-center mx-auto w-[90%] max-w-[1240px] whitespace-nowrap xs:gap-x-3">
              {/* Product Details */}
              <div className="font-satoshi font-normal xl:text-[20px] xl:leading-[22px] text-[rgba(0,0,0,0.6)] xs:text-base xs:leading-[22px]">
                Product Details
              </div>

              {/* Rating & Reviews */}
              <div className="font-satoshi font-medium xl:text-[20px] xl:leading-[22px] text-[#000000] text-center  xs:text-base xs:leading-[22px]">
                Rating & Reviews
              </div>

              {/* FAQs */}
              <div className="font-satoshi font-normal xl:text-[20px] xl:leading-[22px] text-[rgba(0,0,0,0.6)] text-right  xs:text-base xs:leading-[22px]">
                FAQs
              </div>
            </div>

            {/* Divider Lines */}
            <div className="relative w-full mt-4">
              {/* Line 5 */}
              <div className="xl:w-full xs:w-[358px] border-t border-[rgba(0,0,0,0.1)]"></div>

              {/* Line 7 */}
              <div className="absolute left-1/2 transform xl:-translate-x-1/2 xs:w-[123px] xs:-translate-x-1 xl:w-[414px] border-t-2 border-black mt-[-1px]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid xs:grid-cols-1 xl:grid-cols-2 gap-x-0 gap-y-0 xs:gap-y-2 xs:mt-8 xl:ml-4">
        <ReviewCard
          name="Samantha D."
          imageSrc="/Frame (24).png"
          rating={4.5}
          reviewText="I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
          footerText="Posted on August 14, 2023"
          showFooter={true}
          className="w-full"
          width={610}
          height={242}
        />
        <ReviewCard
          name="Alex M."
          imageSrc="/Frame (24).png"
          rating={4}
          reviewText="The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."
          footerText="Posted on August 15, 2023"
          showFooter={true}
          className="w-full"
          width={610}
          height={242}
        />
        <ReviewCard
          name="Ethan R."
          imageSrc="/Frame (24).png"
          rating={3.5}
          reviewText="This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."
          footerText="Posted on August 16, 2023"
          showFooter={true}
          className="w-full"
          width={610}
          height={242}
        />
        <ReviewCard
          name="Olivia P."
          imageSrc="/Frame (24).png"
          rating={4}
          reviewText="As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."
          footerText="Posted on August 17, 2023"
          showFooter={true}
          className="w-full xl:block xs:hidden"
          width={610}
          height={242}
        />
        <ReviewCard
          name="Liam K."
          imageSrc="/Frame (24).png"
          rating={4}
          reviewText="This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."
          footerText="Posted on August 17, 2023"
          showFooter={true}
          className="w-full  xl:block xs:hidden"
          width={610}
          height={242}
        />
        <ReviewCard
          name="Ava H."
          imageSrc="/Frame (24).png"
          rating={4}
          reviewText="I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."
          footerText="Posted on August 17, 2023"
          showFooter={true}
          className="w-full  xl:block xs:hidden"
          width={610}
          height={242}
        />
      </div>

      <button
        className="mt-8 w-full xl:max-w-[200px] xl:xl:mx-auto rounded-[62px] border xl:py-3 xl:px-6 text-center
        xs:w-[195px] xs:h-[47px] xs:py-[12px] xs:px-9 whitespace-nowrap xs:ml-12 xl:ml-[500px]"
      >
        Load More Reviews
      </button>

      {/* Suggested Products Section */}
      <div className="mt-20">
        <h1 className="font-integral-cf font-bold xl:text-5xl text-center xl:mb-12 xs:text-[32px] xs:leading-9 ">
          You Might Also Like
        </h1>
        <div className="flex gap-1 justify-center xs:mt-4">
          <Card
            title="Polo with Contrast Trims"
            imageSrc="/image 7 (2).png"
            rating={4.0}
            price={212}
            oldPrice={242}
            discount="-20%"
            starsClassName="xs:ml-5 xl:mt-1"
            priceClassName="xs:mt-3 xs:-ml-6 xl:-ml-12"
            className="xs:mt-2 xl:-mt-1"
          />
          <Card
            title="Gradient Graphic T-shirt"
            imageSrc="/image 8 (2).png"
            rating={3.5}
            price={145}
            className="xs:mt-2 xl:-mt-1"
            starsClassName="xs:ml-3 xl:mt-1"
            priceClassName="xs:mt-3 xs:-ml-32 xl:-ml-40"
          />
          <Card
            title="Polo with Tipping Details"
            imageSrc="/image 9 (2).png"
            rating={4.5}
            price={180}
            ImageclassName="xs:hidden xl:block"
            starsClassName="xs:ml-5 xl:ml-12 xl:mt-1"
            priceClassName="xs:mt-3 xs:-ml-6 xl:-ml-44"
            className="xs:mt-2 "
          />
          <Card
            title="Black Striped T-shirt"
            imageSrc="/image 10 (2).png"
            rating={5.0}
            price={120}
            oldPrice={150}
            discount="-30%"
            ImageclassName="xs:hidden xl:block"
            starsClassName="xs:ml-5 xl:ml-20 xl:mt-1"
            priceClassName="xs:mt-3 xs:-ml-6"
            className="xs:mt-2"
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
