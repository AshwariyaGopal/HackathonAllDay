

export interface Product {
   
    _id: any;
    _type: "products"; // Sanity mein document type "products" hai
    name: string;
    price: number;
    oldPrice?: number;
    discountPercent?: number;
    description: string;
    image?: {
      asset: {
        _ref: string;
        _type: "image";
      };
    };
    category: "tshirt" | "short" | "jeans" | "hoodie" | "shirt"; // Fixed categories
    rating?: number; // Optional field (0-5)
    new: boolean;
    colors: string[]; // Array of colors
    sizes: string[];  // Array of sizes
  }
  