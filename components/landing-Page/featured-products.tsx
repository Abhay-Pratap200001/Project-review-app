import React from "react";
import SectionHeader from "@/components/common/section-header";
import { ArrowUpRightIcon, StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProductCard from "@/components/products/product-card";
import { getFeaturedProducts } from "@/lib/products/product-select";

// const featuredProducts = [
//   {
//     id: 1,
//     name: "ParityKit",
//     description: "A toolkit for creating parity Products",
//     tags: ["Saas", "Pricing", "Global"],
//     vote: 615,
//     isFeatured: true
//   },

//    {
//     id: 2,
//     name: "Modern FullStack Next.js Course",
//     description: "Learn to build production-ready full stack apps with next.js",
//     tags: ["Next.js", "FullStack", "Course"],
//     vote: 615,
//     isFeatured: false
//   },
// ]

const FeaturedProducts = async () => {
  const featuredProducts = await getFeaturedProducts()
  return (
    <section className="py-20 bg-muted/20">
        <div className="wrapper">
          <div className="flex items-center justify-between mb-8">
            <SectionHeader
              title="Featured Today"
              icon={StarIcon}
              description="Top picks from our community this week"
            />
            <Button variant="outline" className="hidden sm:flex">
              <Link href="/explore">
                View All
              </Link>
              <ArrowUpRightIcon className="size-4" />
            </Button>
          </div>
          <div className="grid-wrapper">
            {featuredProducts.map((product) => 
            <ProductCard key={product.id} product={product}/>)} 
          </div>
        </div>
    </section>
  );
};

export default FeaturedProducts;
