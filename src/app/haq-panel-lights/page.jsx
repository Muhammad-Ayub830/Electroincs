'use client'

import ProductListingPage from '../components/productListingPage'
import { CATEGORIES, SUB_CATEGORIES } from '../productCategories'

export default function HaqPanelLightsPage() {
  return (
    <ProductListingPage
      title="Haq Panel Lights"
      category={CATEGORIES.LED_LIGHT}
      subCategory={SUB_CATEGORIES.PANEL_LIGHT}
    />
  )
}
