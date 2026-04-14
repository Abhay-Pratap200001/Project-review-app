import React from 'react'
import SectionHeader from '@/components/common/section-header'
import { CalendarIcon, RocketIcon } from 'lucide-react'
import ProductCard from '@/components/products/product-card'
import EmptyState from '@/components/common/empty-state'

const RecentlyLaunchedProducts = () => {

    const recentlyLaunchedProducts = [
  {
    id: 1,
    name: "ParityKit",
    description: "A toolkit for creating parity Products",
    tags: ["Saas", "Pricing", "Global"],
    vote: 615,
    isFeatured: true
  },

   {
    id: 2,
    name: "Modern FullStack Next.js Course",
    description: "Learn to build production-ready full stack apps with next.js",
    tags: ["Next.js", "FullStack", "Course"],
    vote: 615,
    isFeatured: false
  },

   {
    id: 3,
    name: "ParityKit",
    description: "A toolkit for creating parity Products",
    tags: ["Saas", "Pricing", "Global"],
    vote: 615,
    isFeatured: true
  },
]

  return (
    <section className='py-20'>
        <div className='wrapper space-y-8'>
            <SectionHeader title='Recently Launched' icon={RocketIcon} description='Discover the latest products from our community'/>
                {recentlyLaunchedProducts.length > 0 ?   <div className="grid-wrapper">
            {recentlyLaunchedProducts.map((product) => 
            <ProductCard key={product.id} product={product}/>)} 
          </div> : <EmptyState message="No Product launched in the last week. Check back soon for new launches.." icon={CalendarIcon}/>}
        </div>
    </section>
  )
}

export default RecentlyLaunchedProducts
