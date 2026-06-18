'use client'

import ProductListingPage from '../components/productListingPage'
import { CATEGORIES } from '../productCategories'

export default function HaqRodsPage() {
  return (
    <ProductListingPage
      title="Haq Spare Parts (Rods)"
      category={CATEGORIES.ROD}
    />
  )
}
