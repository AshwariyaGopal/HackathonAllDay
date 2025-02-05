
import ProductDetail from "@/app/Components/ProductDetail";
import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/products";

interface ProductPageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  // Fetch all product IDs from Sanity (Example Query)
  const query = `*[_type == "products"]{ _id }`;
  const products = await client.fetch(query);
  return products.map((product: { _id: string }) => ({ id: product._id }));
}

export default async function Page({ params }: ProductPageProps) {
  const { id } = params;

  const query = `*[ _type == "products" &&  _id == $id]{
    name,
    "id": _id,
    price,
    description,
    category,
    colors,
    sizes,
    "image": image.asset._ref
  }[0]`;

  const product: Product | null = await client.fetch(query, { id });

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-bold text-gray-700">Product Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <ProductDetail product={product} key={product._id} />
      </div>
    </div>
  );
}
