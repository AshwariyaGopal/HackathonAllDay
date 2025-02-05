import React from 'react'
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
import { Product } from '../../../types/products';

const ProductListing = ({product}:{product:Product}) => {
 
  return (
    <div>
      
        {/* Banner Section */}
        {/* Product List */}
            <div
              className="flex flex-col items-center space-x-0 bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <Link href={`Product/${product._id}`}>
              
              {product.image ? (
              <Image
                src={urlFor(product.image).url()} // Convert ImageUrlBuilder to string URL
                alt={product.name}
                height={300} 
                
                width={300}
                className="h-[250px] w-full object-cover"
              /> ):(
                <div className="h-[250px] w-[300px] bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">No Image</p>
              </div>
            )}
              
              </Link>
              {/* Product Details */}
              <div className="p-4 text-center">
                {/* Product Name */}
                <p className="text-lg font-medium text-gray-800">{product.name}</p>
                {/* Product Price */}
                <h3 className="text-xl font-semibold text-gray-900 mt-2">${product.price}</h3>
              </div>
            </div>
          
        </div>

      
  )
}

export default ProductListing