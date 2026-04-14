import FeaturedProducts from '@/components/landing-Page/featured-products'
import Herosection from '@/components/landing-Page/hero-section'
import RecentlyLaunchedProducts from '@/components/landing-Page/recently-launched-products'

const page = () => {
  return (
    <div>
     <Herosection/>
     <FeaturedProducts/>
     <RecentlyLaunchedProducts/>
    </div>
  )
}

export default page
