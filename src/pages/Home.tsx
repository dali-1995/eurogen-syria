import HeroSection from '../sections/HeroSection'
import FeatureCards from '../sections/FeatureCards'
import ProductsShowcase from '../sections/ProductsShowcase'
import ApplicationsPreview from '../sections/ApplicationsPreview'
import TechnicalSpecs from '../sections/TechnicalSpecs'
import VideoCTA from '../sections/VideoCTA'

export default function Home() {
  return (
    <div style={{ '--shader-intensity': '1.0' } as React.CSSProperties}>
      <HeroSection />
      <FeatureCards />
      <ProductsShowcase />
      <ApplicationsPreview />
      <TechnicalSpecs />
      <VideoCTA />
    </div>
  )
}
