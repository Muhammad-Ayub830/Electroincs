'use client'

import ProductListingPage from '../components/productListingPage'
import { CATEGORIES } from '../productCategories'

export default function HaqSolarInvertersPage() {
  return (
    <ProductListingPage
      title="Haq Solar Inverters"
      category={CATEGORIES.INVERTER}
    />
  )
}
