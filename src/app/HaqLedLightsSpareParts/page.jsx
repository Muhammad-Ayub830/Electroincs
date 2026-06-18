'use client'

import ProductListingPage from '../components/productListingPage'
import { CATEGORIES } from '../productCategories'

export default function HaqLedLightsSparePartsPage() {
  return (
    <ProductListingPage
      title="Haq LED Lights Spare Parts"
      category={CATEGORIES.LED_LIGHT_SPARE_PART}
    />
  )
}
