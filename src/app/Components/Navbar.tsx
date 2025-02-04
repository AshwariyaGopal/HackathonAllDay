import Image from "next/image";
import Link from "next/link";



export default function Navbar() {
  return (
    <div>
      {/* Top black bar */}
      <div className="bg-black text-white py-2 px-4">
        <div className="flex justify-center items-center h-6">
          <span className="text-sm font-light text-center">
            Sign up and get 20% off on your first order.{" "}
            <Link href="#" className="underline font-medium">
              Sign Up Now
            </Link>
          </span>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="bg-white border-b border-gray-300 overflow-hidden xl:h-20">
        <div className="flex justify-between items-center mx-auto px-10 py-4 max-w-screen-xl ">
          {/* Hamburger Menu (Mobile) */}
          <div className="flex items-center md:hidden ">
            <button className="text-gray-700 hover:text-black focus:outline-none">
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse "
          >
            <span className="self-center text-xl font-bold font-integral-cf ">
              SHOP.CO
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6 text-black ">
            <div className="font-satoshi font-normal flex gap-1">
              <Link href="/ProductDetail" className="hover:underline">
                Shop
              </Link>
              <Image src="/Frame (17).png" alt="arrow" width={14} height={14} />
            </div>
            <div className="font-satoshi font-normal">
              <Link href="Category" className="hover:underline">
                on Sale
              </Link>
            </div>
            <div className="font-satoshi font-normal">
              <Link href="#" className="hover:underline">
                New Arrivals
              </Link>
            </div>
            <div className="font-satoshi font-normal">
              {" "}
              <Link href="#" className="hover:underline">
                Brands
              </Link>
            </div>
          </div>

          {/* Search bar and icons container */}

          {/* Search bar (only visible on larger screens) */}
          <div className="relative items-center bg-gray-100 p-3 rounded-[62px] w-96 h-12 hidden sm:flex ">
            {/* Search Icon */}
            <div className="absolute left-4 text-[#00000066] pt-1">
              <i className="fas fa-search text-lg"></i>
            </div>
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full h-full bg-transparent pl-10 text-sm font-normal text-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
            />
          </div>

          {/* Search icon (only visible on mobile screens) */}
          <button className="block sm:hidden xs:ml-16">
            <i className="fas fa-search text-lg text-gray-700"></i>
          </button>

          {/* Cart Icon */}
          <div className="flex items-center space-x-4 ">
            {/* Other Nav Links */}
            <Link href="/Cart">
              <div className="cursor-pointer">
                <Image
                  src="/Frame (3).png" // Replace with your cart icon image path
                  alt="cart"
                  width={24}
                  height={24}
                />
              </div>
            </Link>
            <Image src="/Frame (4).png" alt="icon" width={24} height={24} />
          </div>
        </div>
      </nav>
    </div>
  );
}
