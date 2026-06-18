'use client'

import ProductListingPage from '../components/productListingPage'
import { CATEGORIES, SUB_CATEGORIES } from '../productCategories'

export default function LedLightSparePartsPage() {
  return (
    <ProductListingPage
      title="LED Light Spare Parts"
      category={CATEGORIES.LED_LIGHT_SPARE_PART}
      subCategory={SUB_CATEGORIES.LED_LIGHT_SPARE_PART}
    />
  )
}
