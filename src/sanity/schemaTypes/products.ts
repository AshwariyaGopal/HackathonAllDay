
import { defineType } from "sanity";

export default defineType({
  name: "products",
  title: "Products",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "oldPrice",
      title: "Old Price",
      type: "number",
      description: "Original price before discount (optional)",
    },
    {
      name: "discountPercent",
      title: "Discount Percent",
      type: "number",
      description: "Discount percentage applied (optional)",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "T-Shirt", value: "tshirt" },
          { title: "Short", value: "short" },
          { title: "Jeans", value: "jeans" },
          { title: "Hoodie", value: "hoodie" },
          { title: "Shirt", value: "shirt" },
        ],
      },
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
      description: "Average rating out of 5 (optional)",
      validation: (Rule) => Rule.min(0).max(5),
    },
    {
      name: "new",
      title: "New",
      type: "boolean",
    },
    {
      name: "colors",
      title: "Colors",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "sizes",
      title: "Sizes",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
});
