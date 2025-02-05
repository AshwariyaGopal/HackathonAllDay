import ProductListing from "../Components/ProductListing";
import { client } from "../../sanity/lib/client";
import { Product } from "../../../types/products";
import ReviewCard from "../Components/ReviewCard";
import Footer from "../Components/Footer";

// export const revalidate = 60; //seconds

export default async function Home() {
  const query = `*[_type == "products"] | order(_createdAt asc){
  
   name,price,_id,"image": image.asset._ref
   
  }[0..14]`;

  const product: Product[] = await client.fetch(query);
  console.log(product);

  return (
    <div>
      <main className="flex min-h-screen flex-col ">
        <h1 className="text-2xl font-bold uppercase my-12 py-12 -mt-16 text-center text-dark dark:text-light sm:text-3xl lg:text-5xl ">
          NEW ARRIVALS
        </h1>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {product.map((product: Product) => (
            <ProductListing product={product} key={product._id} />
          ))}
        </section>
      </main>
      {/*Another container*/}
      <div
        className="absolute xl:w-[1150px] xl:h-[850px] xl:left-[60px] xl:top-[2700px] bg-[#F0F0F0] xl:rounded-[40px] xl:mt-[42%] xl:mr-28
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
        <div className="flex flex-col  xl:mx-12 ">
          {/* Row with Frame 61 and Frame 62*/}
          <div className="flex xl:flex-row xl:mt-8 xs:flex-col overflow-hidden">
            {/*Frame 61*/}
            <div className="xl:top-[122px]  rounded-[20px] overflow-hidden">
              <img
                src="/Frame 61 (1).png"
                alt="first"
                width={407}
                height={289}
                className="xl:w-[407px] xl:h-[289px]  xs:w-[310px] xs:h-[190px] xs:mt-36 xs:ml-6 "
              />
            </div>
            {/*Frame 62*/}
            <div className="xl:top-[192px] xl:left-[491px] rounded-[20px] overflow-hidden">
              <img
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
            <div className="xl:top-[501px] xl:left-[60px] rounded-[20px] overflow-hidden">
              <img
                src="/Frame 64.png"
                alt="third"
                width={689}
                height={289}
                className="xl:w-[689px] xl:h-[289px]  xs:w-[310px] xs:h-[190px] xs:mt-3 xs:ml-6"
              />
            </div>
            {/*Frame 63*/}
            <div className=" xl:left-[768px] rounded-[20px] xl:ml- ">
              <img
                src="/Frame 63.png"
                alt="fourth"
                width={407}
                height={289}
                className="xl:w-[407px] xl:h-[289px]  xs:w-[310px] xs:h-[190px] xs:mt-3 xs:ml-6"
              />
            </div>
          </div>
        </div>
        <div className="flex xl:mt-[1020px] xl:ml-[1100px] xs:mt-[275%]">
          <h1
            className="absolute xl:w-[654px] xl:h-[1160px] xl:left-[80px]  font-integral font-bold xl:text-[48px] xl:leading-[58px]  text-black  xl:mt-[-70%] 
      xs:w-[286px] xs:h-[72px] xs:text-[32px] xs:leading-9 xs:-ml-8 xs:mt-16 "
          >
            OUR HAPPY CUSTOMERS
          </h1>
          <div className="xl:mt-[-1550%]">
            <img
              src="/arrow-down-bold 2.png"
              alt="arrow"
              width={24}
              height={24}
              className="xs:mt-28 xs:ml-48 xl:mt-[-30%] xl:-ml-9 "
            />
            <img
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
        <div className="flex xl:flex-row justify-start xl:gap-6 xs:flex-col xs:gap-2 xl:mt-[-60%] ">
          {/*card 1*/}
          <ReviewCard
            name="Sarah M."
            imageSrc="/Frame (24).png"
            rating={5}
            reviewText="I'm blown away by the quality and style of the clothes I received from Shop.co. 
        From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
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
    </div>
  );
}
