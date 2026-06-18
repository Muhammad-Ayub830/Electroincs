'use client'

import ProductListingPage from '../components/productListingPage'
import { CATEGORIES, SUB_CATEGORIES } from '../productCategories'

export default function AcLedLightSparePartsPage() {
  return (
    <ProductListingPage
      title="Ac LED Light Spare Parts"
      category={CATEGORIES.LED_LIGHT_SPARE_PART}
      subCategory={SUB_CATEGORIES.AC_LED_LIGHT_SPARE_PART}
    />
  )
}
