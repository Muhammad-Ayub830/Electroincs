'use client'

import ProductListingPage from '../components/productListingPage'
import { CATEGORIES } from '../productCategories'

export default function HaqLedLightsPage() {
  return (
    <ProductListingPage
      title="Haq Led Lights"
      category={CATEGORIES.LED_LIGHT}
    />
  )
}
