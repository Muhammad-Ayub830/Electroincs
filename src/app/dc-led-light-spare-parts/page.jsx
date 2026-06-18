'use client'

import ProductListingPage from '../components/productListingPage'
import { CATEGORIES, SUB_CATEGORIES } from '../productCategories'

export default function DcLedLightSparePartsPage() {
  return (
    <ProductListingPage
      title="Dc LED Light Spare Parts"
      category={CATEGORIES.LED_LIGHT_SPARE_PART}
      subCategory={SUB_CATEGORIES.DC_LED_LIGHT_SPARE_PART}
    />
  )
}
