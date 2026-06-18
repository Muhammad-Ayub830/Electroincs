'use client'

import ProductListingPage from '../components/productListingPage'
import { CATEGORIES, SUB_CATEGORIES } from '../productCategories'

export default function HaqOriginalItalyRodsPage() {
  return (
    <ProductListingPage
      title="Haq Original Italy Rods"
      category={CATEGORIES.ROD}
      subCategory={SUB_CATEGORIES.ORIGINAL_ITALY_ROD}
    />
  )
}
