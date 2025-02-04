"use client";
import Image from "next/image";
interface ReviewCardProps {
  name: string;
  rating: number;
  reviewText: string;
  imageSrc: string;
  footerText?: string; // Optional prop for footer text
  showFooter?: boolean;
  width?: number;
  height?: number; // Optional prop for displaying footer
  className?: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  rating,
  reviewText,
  imageSrc,
  footerText,
  showFooter = false,
  width,
  height,
  className,
}) => {
  return (
    <div
      className={`rounded-[20px] border border-[#0000001A] py-7 px-8 xl:mt-28 xl:w-[400px] xl:h-[240px] xs:w-[350px] xs:h-[200px] ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }} // Dynamically set width and height
    >
      {/* Display stars */}
      <div className="flex gap-[3px] xl:-mt-4">
        {/* Full stars */}
        {Array.from({ length: Math.floor(rating) }).map((_, index) => (
          <span key={`full-${index}`} className="text-yellow-400 text-xl">
            ★
          </span>
        ))}
        {/* Half star */}
        {rating % 1 >= 0.5 && (
          <span className="text-yellow-400 text-xl">
            <span
              style={{ clipPath: "inset(0 50% 0 0)" }}
              className="absolute text-yellow-400"
            >
              ★
            </span>
          </span>
        )}
      </div>

      {/* Display name */}
      <div className="flex items-center gap-3 xl: xl:py-2">
        <h1 className="font-satoshi font-bold xl:text-[20px] leading-[22px] xs:w-[66px] xs:h-3 xs:text-base whitespace-nowrap xs:-mt-3">
          {name}
        </h1>

        {/* Display image */}
        <Image
          src={imageSrc}
          alt="right"
          width={19.5}
          height={19.5}
          className="xs:ml-12"
        />
      </div>

      {/* Display review text */}
      <p className="font-satoshi font-normal xl:text-[16px] xl:leading-[22px] text-black/60 xs:w-[310px] xs:h-[80px] xs:text-sm xs:leading-5  ">
        {reviewText}
        {showFooter && (
          <>
            <span className="text-black/60">...</span>
            {footerText && (
              <div className="w-[546px] h-[22px] font-satoshi font-medium text-base leading-[22px] text-black/60 lg:mt-5 xs:mt-2 xl:mt-2">
                {footerText}
              </div>
            )}
          </>
        )}
      </p>
    </div>
    //  </div>
  );
};

export default ReviewCard;
