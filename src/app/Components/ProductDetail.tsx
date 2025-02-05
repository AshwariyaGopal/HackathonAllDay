"use client";
import { useCart } from "../../app/context/CartContext";  // Import Cart Context
import { urlFor } from "@/sanity/lib/image";
import { Product } from "../../../types/products";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";  // For quantity buttons
import Link from "next/link";

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const { addToCart } = useCart();  // ✅ Cart Context ko yahan use karenge
  const [selectedImage, setSelectedImage] = useState(
    product.image ? urlFor(product.image).url() : ""
  );
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || "");
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || "");
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 lg:flex lg:gap-12">
      {/* Left Side - Images */}
      <div className="flex flex-col gap-4 lg:w-1/2">
        <div className="w-full h-[500px] border rounded-lg overflow-hidden">
          {selectedImage ? (
            <Image
              src={selectedImage}
              alt={product.name}
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="bg-gray-200 flex items-center justify-center w-full h-full">
              <p className="text-gray-500">No Image</p>
            </div>
          )}
        </div>
      </div>

      {/* Right Side - Product Details */}
      <div className="lg:w-1/2 flex flex-col gap-6">
        <p className="text-sm text-gray-500">Home &gt; Shop &gt; {product.category}</p>
        <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
        <div className="flex items-center gap-2">
          <span className="text-yellow-500 text-lg">⭐⭐⭐⭐⭐</span>
          <p className="text-gray-600 text-sm">4.5/5</p>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-2xl font-semibold text-black">${product.price}</p>
          <p className="text-gray-400 line-through text-xl">${product.price + 40}</p>
          <p className="text-red-500 font-semibold">-40%</p>
        </div>

        <p className="text-gray-600">{product.description}</p>

        {/* Colors */}
        <div className="flex items-center gap-3">
          <p className="font-semibold">Select Colors:</p>
          <div className="flex gap-2">
            {product.colors?.map((color, index) => (
              <div
                key={index}
                className={`w-6 h-6 rounded-full border-2 cursor-pointer ${
                  selectedColor === color ? "border-black" : "border-gray-300"
                }`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              ></div>
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div className="flex gap-3">
          <p className="font-semibold">Choose Size:</p>
          {product.sizes?.map((size, index) => (
            <button
              key={index}
              className={`border px-4 py-2 rounded-lg transition ${
                selectedSize === size ? "bg-black text-white" : "border-gray-300"
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            className="border p-2 rounded-md"
          >
            <AiOutlineMinus />
          </button>
          <p className="text-lg font-semibold">{quantity}</p>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="border p-2 rounded-md"
          >
            <AiOutlinePlus />
          </button>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => addToCart(product, quantity, selectedColor, selectedSize)}  // ✅ Add to Cart Function
          className="w-full py-3 bg-black text-white text-lg font-semibold rounded-lg hover:bg-gray-800 transition"
        >
    <Link href = "/Cart">Add to Cart</Link> 
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
