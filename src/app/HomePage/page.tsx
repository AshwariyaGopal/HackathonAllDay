import Image from "next/image";

export default function Home() {
  return (
    <section className="relative bg-[#F2F0F1] xl:w-full xl:h-[663px] xl:overflow-hidden xs:w-[375px] xs:h-[853px]  ">
      <div className="grid w-full px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
        {/* Text Content */}
        <div className="mr-auto place-self-center lg:col-span-7 relative z-10 flex flex-col justify-center mt-[-100px] lg:pl-8 lg:pr-8 text-left">
          <h1 className="xl:w-[577px] xl:h-[173px] xl:font-satoshi font-extrabold xl:text-[64px] xl:leading-[64px] xl:mt-14 xs:mt-32 xs:w-[315px] xs:h-[93px] xs:top-[138px] xs:left-4 xs:font-integral-cf  xs:text-4xl xs:leading-[34px] ">
            FIND CLOTHES <br />
            THAT MATCHES <br /> YOUR STYLE
          </h1>
          <p className="xl:max-w-[545px] xl:h-[33px] xl:top-[600px] xl:left-[100px] font-normal  xl:text-base text-black/60 font-satoshi xl:leading-[22px] xl:mt-8 xs:w-[358px] xs:h-[50px] xs:top-[251px] xs:left-4 xs:text-sm xs:leading-5 xs:mt-5">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <div className="flex gap-3 justify-start xl:mt-16">
            <button
              className="xl:px-4 xl:py-2 bg-black text-white rounded-full xl:w-[180px] xl:h-12 xs:w-[358px] xs:h-[52px] xs:mt-8"
              style={{
                fontFamily: "'Satoshi', sans-serif",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Shop Now
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:mt-0 lg:col-span-5 lg:flex justify-center items-center relative  overflow-hidden ">
          <div className="relative xl:w-full h-[500px] xs:w-[460px] ">
            <Image
              src="/Rectangle 2 (1).png"
              alt="mockup"
              width={1300} /* Adjusted width */
              height={530} /* Adjusted height */
              className="object-cover rounded-lg shadow-md w-full h-full "
              style={{ objectPosition: "center right" }}
            />
            {/* Small Vector (right) */}
            <Image
              src="/Vector (4).png"
              alt="vector"
              className="absolute right-[85%] top-[40%] transform -translate-x-1/2 -translate-y-1/2"
              width={48}
              height={48}
            />
            {/* Large Vector (left) */}
            <Image
              src="/Vector (5).png"
              alt="Decorative Vector"
              className="absolute xl:left-[90%] top-[20%] transform -translate-x-1/2 -translate-y-1/2 xs:left-[70%]"
              width={84}
              height={84}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
