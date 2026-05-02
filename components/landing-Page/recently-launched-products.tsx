import React from 'react'
import SectionHeader from '@/components/common/section-header'
import { CalendarIcon, RocketIcon } from 'lucide-react'
import ProductCard from '@/components/products/product-card'
import EmptyState from '@/components/common/empty-state'
import { getRecentlyLaunchedProducts } from '@/lib/products/product-select'

const RecentlyLaunchedProducts = async () => {

  const recentlyLaunchedProducts = await getRecentlyLaunchedProducts()
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

