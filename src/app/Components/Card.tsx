import Image from "next/image";

interface CardProps {
  title: string;
  imageSrc: string;
  rating: number;
  price: number;
  oldPrice?: number;
  discount?: string;
  ImageclassName?: string;
  className?: string; // For customizing the title
  ratingClassName?: string; // For customizing the rating section
  priceClassName?: string; // For customizing the price section
  starsClassName?: string; // For customizing the stars section
}

const Card: React.FC<CardProps> = ({
  title,
  imageSrc,
  rating,
  price,
  oldPrice,
  discount,
  ImageclassName,
  className,
  ratingClassName,
  priceClassName,
  starsClassName,
}) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  return (
    <div
      className={`flex flex-col items-center xl:gap-4 xl:w-[295px]  ${ImageclassName}`}
    >
      {/*image container*/}
      <div className="xl:w-full xl:h-[298px] xl:rounded-[20px] bg-[#F0EEED] overflow-hidden xs:w-[175px] xs:h-[190px] xs:rounded-[13.42px]">
        <Image src={imageSrc} alt={title} width={296} height={444} />
      </div>
      {/*text content*/}
      <div className="text-center">
        <h2
          className={`font-satoshi font-bold xl:text-[20px] xl:leading-[27px] text-black xs:text-base xs:leading-[21.6px] ${className}`}
        >
          {title}
        </h2>
        {/*rating*/}
        <div
          className={`flex justify-center items-center gap-1  xs:w-[87px] xs:h-[15.47px]  ${starsClassName}`}
        >
          {[...Array(fullStars)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-xl">
              ★
            </span>
          ))}
          {halfStar && (
            <span
              className="text-yellow-400 text-xl"
              style={{ clipPath: "inset(0 50% 0 0)" }}
            >
              ★
            </span>
          )}
          <span
            className={`xl:text-sm text-gray-500  xs:text-xs ${ratingClassName}`}
          >
            {rating.toFixed(1)}/5
          </span>
        </div>
        {/*pricing*/}
        <div
          className={`flex items-center justify-center gap-2 font-satoshi font-bold xs:text-xl ${priceClassName}`}
        >
          <span className="text-[24px] font-bold text-black">${price}</span>
          {oldPrice && (
            <span className="text-[24px] text-gray-400 line-through">
              ${oldPrice}
            </span>
          )}
          {discount && (
            <span className="text-red-500 bg-red-100 rounded-full px-3 py-2 text-xs">
              {discount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
