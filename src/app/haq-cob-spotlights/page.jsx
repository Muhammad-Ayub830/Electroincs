'use client'

import ProductListingPage from '../components/productListingPage'
import { CATEGORIES, SUB_CATEGORIES } from '../productCategories'

export default function HaqCobSpotlightsPage() {
  return (
    <ProductListingPage
      title="Haq Cob SpotLights"
      category={CATEGORIES.LED_LIGHT}
      subCategory={SUB_CATEGORIES.COB_SPOTLIGHT}
    />
  )
}
