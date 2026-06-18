'use client'

import ProductListingPage from '../components/productListingPage'
import { CATEGORIES, SUB_CATEGORIES } from '../productCategories'

export default function HaqRechargeableLightsPage() {
  return (
    <ProductListingPage
      title="Haq Rechargeable Lights"
      category={CATEGORIES.LED_LIGHT}
      subCategory={SUB_CATEGORIES.RECHARGEABLE}
    />
  )
}
