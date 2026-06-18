'use client'

import ProductListingPage from '../components/productListingPage'
import { CATEGORIES } from '../productCategories'

export default function HaqCablesPage() {
  return (
    <ProductListingPage
      title="Haq Cables"
      category={CATEGORIES.CABLE}
    />
  )
}
