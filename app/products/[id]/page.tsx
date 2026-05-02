"use cache"

import React from "react";
import { getFeaturedProducts } from "@/lib/products/product-select";

export const generateStaticParams = async () => {
    const products = await getFeaturedProducts()
    return products.map((product) => ({
            id: product.id.toString(),
        }));
}

const Product = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <div>
      <h1>product{id}</h1>
    </div>
  );
};

export default Product;
