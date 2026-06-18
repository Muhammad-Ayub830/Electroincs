'use client'

import ProductListingPage from '../components/productListingPage'
import { CATEGORIES, SUB_CATEGORIES } from '../productCategories'

export default function HaqLedBulbsPage() {
  return (
    <ProductListingPage
      title="Haq LED Bulbs"
      category={CATEGORIES.LED_LIGHT}
      subCategory={SUB_CATEGORIES.LED_BULB}
    />
  )
}
