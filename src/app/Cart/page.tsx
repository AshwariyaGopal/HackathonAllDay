"use client";
import { useCart } from "../../app/context/CartContext";
import Image from "next/image";
import Footer from "../Components/Footer";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  return (
    <div className="xl:w-[1290px] xl:min-h-screen grid grid-rows-[1fr_auto] xs:w-[390px] xs:h-full">
      {/* 🏠 Breadcrumb Navigation */}
      <div className="xl:w-[106px] xl:h-[22px] flex xl:mt-6 xl:ml-12 xs:ml-8 xs:w-[89px] xs:h-[19px] xs:mt-4">
        <p className="text-black/60">
          <Link href="/#">Home</Link>
        </p>
        <div className="inline-block mx-2">
          <Image src="/Frame (21).png" alt="sign" width={16} height={16} />
        </div>
        <p>Cart</p>
      </div>

      {/* 🛒 Cart Heading */}
      <h1 className="xl:w-[259px] xl:h-12 font-bold xl:text-[40px] xl:leading-[48px] xs:text-[32px] xs:leading-[39px] xs:mt-8">
        Your cart
      </h1>

      {/* 📦 Cart Items */}
      {cart.length === 0 ? (
        <p className="text-gray-500 text-lg mt-5">Your cart is empty.</p>
      ) : (
        <div className="flex xl:flex-row xl:gap xs:flex-col xs:gap-2 xs:mt-16 xs:ml-3">
          <div className="xl:w-[715px] xl:h-[508px] border rounded-[20px] xl:py-5 xl:px-6 xl:gap-6 xs:w-[358px] xs:h-[389px] xs:p-[14px]">
            {cart.map((product, index) => (
              <div
                key={index}
                className="flex xl:gap-1 xs:gap-[14px] border-b pb-4"
              >
                {/* 🖼 Product Image */}
                {product.image ? (
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.name}
                    width={124}
                    height={124}
                    className="rounded-[8.66px] xs:w-[99px] xs:h-[99px]"
                  />
                ) : (
                  <div className="w-[124px] h-[124px] bg-gray-300 flex items-center justify-center">
                    <p className="text-gray-500 text-sm">No Image</p>
                  </div>
                )}

                {/* 📜 Product Info */}
                <div className="xl:w-[527px] flex flex-col justify-between">
                  <h2 className="font-bold text-xl">{product.name}</h2>
                  <p>
                    Size: {product.selectedSize} | Color:{" "}
                    {product.selectedColor}
                  </p>
                  <p className="text-lg font-bold">
                    ${product.price * product.quantity}
                  </p>
                </div>

                {/* ❌ Remove Button & Quantity Controls */}
                <div className="flex flex-col justify-between items-end">
                  <button
                    onClick={() =>
                      removeFromCart(
                        product._id,
                        product.selectedColor,
                        product.selectedSize
                      )
                    }
                    className="text-red-500"
                  >
                    ❌ Remove
                  </button>

                  {/* ➕➖ Functional Quantity Buttons */}
                  <div className="flex gap-2 bg-[#F0F0F0] p-2 rounded-[62px]">
                    <button
                      onClick={() =>
                        product.quantity > 1
                          ? updateQuantity(
                              product._id,
                              product.selectedColor,
                              product.selectedSize,
                              product.quantity - 1
                            )
                          : removeFromCart(
                              product._id,
                              product.selectedColor,
                              product.selectedSize
                            )
                      }
                      className="border px-2"
                    >
                      -
                    </button>
                    <p>{product.quantity}</p>
                    <button
                      onClick={() =>
                        updateQuantity(
                          product._id,
                          product.selectedColor,
                          product.selectedSize,
                          product.quantity + 1
                        )
                      }
                      className="border px-2"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 📄 Order Summary Section */}
          <div className="xl:w-[505px] border rounded-[20px] xl:py-5 xl:px-6 xs:w-[358px] xs:p-5 shadow-lg">
            <h1 className="font-bold text-2xl">Order Summary</h1>

            {/* Subtotal */}
            <div className="flex justify-between mt-4">
              <p>Subtotal</p>
              <p className="font-semibold">
                $
                {cart.reduce(
                  (total, product) => total + product.price * product.quantity,
                  0
                )}
              </p>
            </div>

            {/* Discount */}
            <div className="flex justify-between mt-4">
              <p>Discount (-20%)</p>
              <p className="text-[#FF3333] font-semibold">
                -$
                {(
                  cart.reduce(
                    (total, product) =>
                      total + product.price * product.quantity,
                    0
                  ) * 0.2
                ).toFixed(2)}
              </p>
            </div>

            {/* Delivery Fee */}
            <div className="flex justify-between mt-4">
              <p>Delivery Fee</p>
              <p className="font-semibold">$15</p>
            </div>

            <hr className="my-4" />

            {/* Total */}
            <div className="flex justify-between text-lg font-bold">
              <p>Total</p>
              <p>
                $
                {(
                  cart.reduce(
                    (total, product) =>
                      total + product.price * product.quantity,
                    0
                  ) *
                    0.8 +
                  15
                ).toFixed(2)}
              </p>
            </div>

            {/* Promo Code Input */}
            <div className="flex items-center mt-4 bg-gray-100 p-2 rounded-lg">
              <span className="px-2">
                {/* <Image src="/tag-icon.svg" alt="Tag Icon" width={20} height={20} /> */}
              </span>
              <input
                type="text"
                placeholder="Add promo code"
                className="bg-transparent outline-none w-full px-2 text-gray-600"
              />
              <button className="bg-black text-white px-4 py-1 rounded-lg text-sm">
                Apply
              </button>
            </div>

            {/* Checkout Button */}
            <button className="w-full bg-black text-white py-3 rounded-lg mt-5 flex items-center justify-center gap-2">
              Go to Checkout
              <span>➡️</span>
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
