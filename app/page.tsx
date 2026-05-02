import FeaturedProducts from '@/components/landing-Page/featured-products'
import Herosection from '@/components/landing-Page/hero-section'
import RecentlyLaunchedProducts from '@/components/landing-Page/recently-launched-products'
import { Suspense } from 'react'

const page = () => {
  return (
    <div>
     <Herosection/>
     <FeaturedProducts/>

     <Suspense fallback={<div>Loading... Recently Launched Products</div>}>
     <RecentlyLaunchedProducts/>
     </Suspense>
    </div>
  )
}

export default page


// 