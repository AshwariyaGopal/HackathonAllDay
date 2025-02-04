import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className=" relative bg-[#F0F0F0] xl:mt-60 xs:mt-[600px]">
      {/* Footer Container */}
      <div className="xl:w-[1296px] xl:h-full bg-[#F0F0F0] overflow-hidden xs:w-[392px] xs:h-full ">
        <div className="flex items-start justify-between">
          {/* Frame 52 Content Wrapper */}
          <div className="w-full flex xl:flex-row xl:items-start xl:justify-between py-12 mx-auto xs:flex-col">
            {/* Frame 51 Shop Co  */}
            <div className="xl:w-[248px] xl:mt-24 xl:ml-20 xs:w-[144px] xs:h-20 xs:mt-36">
              <h1 className="font-integral-cf font-bold xl:text-[33.45px] xl:leading-[40.15px] text-black xs:text-[28px] xs:leading-[34px] xs:ml-3">
                SHOP.CO
              </h1>
              <p className="font-satoshi font-normal text-[14px] xl:leading-[22px] text-black/60 xl:mt-4 xs:leading-5 xs:mt-0 xs:ml-3 xs:whitespace-nowrap">
                We have clothes that suits your style and which you’re <br />
                proud to wear. From women to men.
              </p>
              {/* Social */}
              <div className="flex xl:mt-6 gap-6 xs:ml-3 xs:mt-4">
                <Image src="/1 (1).png" alt="Twitter" width={28} height={28} />
                <Image src="/2 (1).png" alt="Fb" width={28} height={28} />
                <Image src="/3 (1).png" alt="Insta" width={28} height={28} />
                <Image src="/4 (1).png" alt="" width={28} height={28} />
              </div>
            </div>

            {/* Columns */}

            <div className="grid  xs:grid-cols-2 xl:grid-cols-4 gap-x-4 xs:gap-x-2 gap-y-4 gap-6 xs:mt-14 xl:mr-20 xs:mr-5 xs:">
              {[
                {
                  title: "Company",
                  items: ["About", "Features", "Works", "Career"],
                },
                {
                  title: "Help",
                  items: [
                    "Customer Support",
                    "Delivery Details",
                    "Terms & Conditions",
                    "Privacy & Policy",
                  ],
                },
                {
                  title: "FAQ",
                  items: ["Account", "Manage Deliveries", "Orders", "Payments"],
                },
                {
                  title: "Resources",
                  items: [
                    "Free eBooks",
                    "Development Tutorial",
                    "How to - Blog",
                    "YouTube Playlist",
                  ],
                },
              ].map((col, idx) => (
                <div
                  key={idx}
                  className="w-full max-w-xs whitespace-normal  xl:mt-12 xs:ml-5 xs:mt-5 "
                >
                  <h1 className="font-satoshi font-medium text-[16px] leading-[18px]">
                    {col.title}
                  </h1>
                  <ul className="mt-4 space-y-4">
                    {col.items.map((item, index) => (
                      <li
                        key={index}
                        className="font-satoshi font-normal text-[16px] leading-[19px] text-black/60 xl:mt-4"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Divider Line */}
          {/* <div className="xl:w-[1240px] xl:top-[200px] xl:left-[100px] border rotate-0 bg-black/10 xs:w-[358px] xs:left-4 xs:"></div>  */}
        </div>
        {/*footer content*/}
        <div>
          <p className="w-[269px] h-[19px] top-[2213px] left-[100px] font-satoshi font-normal xl:text-base xs:text-sm leading-[18.9px] text-right text-black/60 whitespace-nowrap xl:ml-24 xs:ml-12 xl:mt-5 ">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <div className="w-[282px] h-[30px] top-[2208px] left-[1059px] gap-3 flex justify-end xl:ml-[72%] xl:mb-4 xs:ml-8 xs:gap-2 xs:mt-3">
            <Image
              src="/Badge (5).png"
              alt="badge 1"
              width={46}
              height={30}
              className="rounded-[5.38px] border-[0.22px]"
            />
            <Image
              src="/Badge (6).png"
              alt="badge 2"
              width={46}
              height={30}
              className="rounded-[5.38px] border-[0.22px]"
            />
            <Image
              src="/Badge (7).png"
              alt="badge 3"
              width={46}
              height={30}
              className="rounded-[5.38px] border-[0.22px]"
            />
            <Image
              src="/Badge (8).png"
              alt="badge 4"
              width={46}
              height={30}
              className="rounded-[5.38px] border-[0.22px]"
            />
            <Image
              src="/Badge (9).png"
              alt="badge 5"
              width={46}
              height={30}
              className="rounded-[5.38px] border-[0.22px]"
            />
          </div>
        </div>
      </div>

      {/* Subscribe to Newsletter Section */}
      <div
        className="absolute xl:w-[1240px] xl:h-[180px] xl:top-[-85px] bg-black rounded-[20px] xl:flex xl:justify-between xl:items-center xl:px-16 xl:py-8 xl:gap-[153px] xl:ml-7
      xl:mt-2 xs:w-[358px] xs:h-[293px] xs:top-0 xs:-mt-32 xs:ml-2 "
      >
        <h2 className="font-integral-cf font-bold xl:text-[40px] xs:text-[32px] xl:leading-[45px] xs:leading-[35px] xs:py-4 xs:px-4 text-white xs:ml-2 xs:mt-4">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h2>
        <div className="flex flex-col gap-4 xs:ml-5">
          <div className="flex items-center bg-white rounded-[62px] px-4 py-3 gap-3 xl:w-[349px] xl:h-12 xs:w-[311px] xs:h-[42px] ">
            <Image src="/Frame (23).png" alt="mesaage" width={24} height={24} />
            <input
              type="text"
              placeholder="Enter your email address"
              className="bg-transparent text-black/40 xl:text-[16px] xs:text-sm xl:leading-[22px] xs:leading-[18.9px] placeholder-black/40 flex-grow outline-none"
            />
          </div>
          <div className="xl:w-[349px] xl:h-[46px] xs:w-[311px] xs:h-[42px] rounded-[62px] py-3 px-4 gap-3 bg-white text-black flex items-center ">
            <input
              type="text"
              placeholder="Subscribe to Newsletter"
              className="w-[172px] h-[22px] font-satoshi font-medium xl:text-base xl:leading-[21.6px] text-black placeholder-black xl:ml-20 xs:text-sm xs:leading-[18.9px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
