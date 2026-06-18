'use client'

import ProductListingPage from '../components/productListingPage'
import { CATEGORIES, SUB_CATEGORIES } from '../productCategories'

export default function HaqOriginalThermostatePage() {
  return (
    <ProductListingPage
      title="Haq Original Thermostate"
      category={CATEGORIES.ROD}
      subCategory={SUB_CATEGORIES.ORIGINAL_THERMOSTATE}
    />
  )
}
