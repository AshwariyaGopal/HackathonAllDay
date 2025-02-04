import Image from "next/image";

export default function Black() {
  return (
    <div className="relative xl:w-full xl:h-[142px] bg-black border border-b-black flex items-center justify-center xl:-top-[230px] xs:w-[376px] xs:h-[146px] xs:mt-20 xs:-top-36">
      {/* First Vector */}
      <div className="absolute xl:w-[166px] xl:h-[34px] xl:top-[44px] xl:left-[50px] xs:w-[116px] xs:h-[23px] xs:left-4 xs:top-10">
        <Image src="/Vector (1).png" alt="Vector 1" width={167} height={33} />
      </div>
      {/*xs:w-[116px] xs:h-[23px] xs:left-4 xs:top-10 */}

      {/* Second Vector */}
      <div className="absolute xl:w-[91px] xl:h-[38px] xl:top-[44px] xl:left-[300px] xs:w-[63px] xs:h-[26px] xs:left-44 xs:top-10">
        <Image src="/Vector (2).png" alt="Vector 2" width={91} height={38} />
      </div>

      {/* Third Vector */}
      <div className="absolute xl:w-[156px] xl:h-[36px] xl:top-[44px] xl:left-[500px] xs:w-[109px] xs:h-[26px] xs:left-64 xs:top-10">
        <Image src="/Vector (3).png" alt="Vector 3" width={156} height={32} />
      </div>

      {/* Fourth Vector */}
      <div className="absolute xl:w-[194px] xl:h-[32px] xl:top-[44px] xl:left-[750px] xs:w-[127px] xs:h-[21px] xs:left-12 xs:top-24">
        <Image src="/prada-logo-1 1.png" alt="Prada" width={194} height={32} />
      </div>

      {/* Fifth Vector */}
      <div className="absolute xl:w-[206px] xl:h-[34px] xl:top-[44px] xl:left-[1030px] xs:w-[134px] xs:h-[22px] xs:left-52 xs:top-24">
        <Image src="/Group (1).png" alt="Group" width={207} height={33} />
      </div>
    </div>
  );
}
