'use client'

import ProductListingPage from '../components/productListingPage'
import { CATEGORIES, SUB_CATEGORIES } from '../productCategories'

export default function HaqDownlightsPage() {
  return (
    <ProductListingPage
      title="Haq Downlights"
      category={CATEGORIES.LED_LIGHT}
      subCategory={SUB_CATEGORIES.LED_DOWNLIGHT}
    />
  )
}
