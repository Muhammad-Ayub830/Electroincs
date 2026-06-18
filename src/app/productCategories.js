/**
 * Single source of truth for product categories.
 * Values MUST match the admin add-product form (category + subCategory fields)
 * and the API response from get-products.
 */

export const CATEGORIES = {
  LED_LIGHT: 'LED_LIGHT',
  LED_LIGHT_SPARE_PART: 'LED_LIGHT_SPARE_PART',
  IRON: 'IRON',
  ROD: 'ROD',
  CABLE: 'CABLE',
  INVERTER: 'INVERTER',
}

export const SUB_CATEGORIES = {
  LED_BULB: 'LED_BULB',
  LED_DOWNLIGHT: 'LED_DOWNLIGHT',
  PANEL_LIGHT: 'PANEL_LIGHT',
  COB_SPOTLIGHT: 'COB_SPOTLIGHT',
  RECHARGEABLE: 'RECHARGEABLE',
  AC_LED_LIGHT_SPARE_PART: 'AC_LED_LIGHT_SPARE_PART',
  DC_LED_LIGHT_SPARE_PART: 'DC_LED_LIGHT_SPARE_PART',
  LED_LIGHT_SPARE_PART: 'LED_LIGHT_SPARE_PART',
  ORIGINAL_ITALY_ROD: 'ORIGINAL_ITALY_ROD',
  ORIGINAL_THERMOSTATE: 'ORIGINAL_THERMOSTATE',
}

/** Admin form: category dropdown options */
export const ADMIN_CATEGORY_OPTIONS = [
  {
    value: CATEGORIES.LED_LIGHT,
    label: 'HAQ LED LIGHT',
    subCategories: [
      { value: SUB_CATEGORIES.LED_BULB, label: 'HAQ LED BULB' },
      { value: SUB_CATEGORIES.LED_DOWNLIGHT, label: 'HAQ DOWNLIGHT' },
      { value: SUB_CATEGORIES.PANEL_LIGHT, label: 'HAQ PANEL LIGHT' },
      { value: SUB_CATEGORIES.COB_SPOTLIGHT, label: 'HAQ COB SPOTLIGHT' },
      { value: SUB_CATEGORIES.RECHARGEABLE, label: 'HAQ RECHARGEABLE BULB' },
    ],
  },
  {
    value: CATEGORIES.LED_LIGHT_SPARE_PART,
    label: 'LED LIGHT SPARE PART',
    subCategories: [
      { value: SUB_CATEGORIES.AC_LED_LIGHT_SPARE_PART, label: 'AC LED LIGHT SPARE PART' },
      { value: SUB_CATEGORIES.DC_LED_LIGHT_SPARE_PART, label: 'DC LED LIGHT SPARE PART' },
      { value: SUB_CATEGORIES.LED_LIGHT_SPARE_PART, label: 'LED LIGHT SPARE PART' },
    ],
  },
  {
    value: CATEGORIES.IRON,
    label: 'HAQ IRON',
    subCategories: [],
  },
  {
    value: CATEGORIES.ROD,
    label: 'HAQ ROD',
    subCategories: [
      { value: SUB_CATEGORIES.ORIGINAL_ITALY_ROD, label: 'HAQ ORIGINAL ITALY ROD' },
      { value: SUB_CATEGORIES.ORIGINAL_THERMOSTATE, label: 'HAQ ORIGINAL THERMOSTATE' },
    ],
  },
  {
    value: CATEGORIES.CABLE,
    label: 'HAQ CABLE',
    subCategories: [],
  },
  {
    value: CATEGORIES.INVERTER,
    label: 'HAQ SOLAR INVERTER',
    subCategories: [],
  },
]

/** Storefront pages — one entry per navbar link */
export const PRODUCT_PAGES = [
  { title: 'Haq LED Bulbs', href: '/haq-led-bulbs', category: CATEGORIES.LED_LIGHT, subCategory: SUB_CATEGORIES.LED_BULB },
  { title: 'Haq Downlights', href: '/haq-downlights', category: CATEGORIES.LED_LIGHT, subCategory: SUB_CATEGORIES.LED_DOWNLIGHT },
  { title: 'Haq Panel Lights', href: '/haq-panel-lights', category: CATEGORIES.LED_LIGHT, subCategory: SUB_CATEGORIES.PANEL_LIGHT },
  { title: 'Haq Cob SpotLights', href: '/haq-cob-spotlights', category: CATEGORIES.LED_LIGHT, subCategory: SUB_CATEGORIES.COB_SPOTLIGHT },
  { title: 'Haq Rechargeable Lights', href: '/haq-rechargeable-lights', category: CATEGORIES.LED_LIGHT, subCategory: SUB_CATEGORIES.RECHARGEABLE },
  { title: 'Ac LED Light Spare Parts', href: '/ac-led-light-spare-parts', category: CATEGORIES.LED_LIGHT_SPARE_PART, subCategory: SUB_CATEGORIES.AC_LED_LIGHT_SPARE_PART },
  { title: 'Dc LED Light Spare Parts', href: '/dc-led-light-spare-parts', category: CATEGORIES.LED_LIGHT_SPARE_PART, subCategory: SUB_CATEGORIES.DC_LED_LIGHT_SPARE_PART },
  { title: 'LED Light Spare Parts', href: '/led-light-spare-parts', category: CATEGORIES.LED_LIGHT_SPARE_PART, subCategory: SUB_CATEGORIES.LED_LIGHT_SPARE_PART },
  { title: 'Haq Original Italy Rods', href: '/haq-original-italy-rods', category: CATEGORIES.ROD, subCategory: SUB_CATEGORIES.ORIGINAL_ITALY_ROD },
  { title: 'Haq Original Thermostate', href: '/haq-original-thermostate', category: CATEGORIES.ROD, subCategory: SUB_CATEGORIES.ORIGINAL_THERMOSTATE },
  { title: 'Haq Cables', href: '/HaqCables', category: CATEGORIES.CABLE },
  { title: 'Haq Irons', href: '/HaqIrons', category: CATEGORIES.IRON },
  { title: 'Haq Solar Inverters', href: '/HaqSolarInverters', category: CATEGORIES.INVERTER },
]

/** Navbar mega-menu structure */
export const NAV_MEGA_MENU = [
  {
    title: 'Haq LED Lights',
    items: PRODUCT_PAGES.filter((p) => p.category === CATEGORIES.LED_LIGHT).map((p) => ({
      name: p.title,
      href: p.href,
    })),
  },
  {
    title: 'Haq LED Lights Spare Parts',
    items: PRODUCT_PAGES.filter((p) => p.category === CATEGORIES.LED_LIGHT_SPARE_PART).map((p) => ({
      name: p.title,
      href: p.href,
    })),
  },
  {
    title: 'Haq Rods',
    items: PRODUCT_PAGES.filter((p) => p.category === CATEGORIES.ROD).map((p) => ({
      name: p.title,
      href: p.href,
    })),
  },
  {
    title: 'Other Products',
    items: PRODUCT_PAGES.filter((p) =>
      [CATEGORIES.CABLE, CATEGORIES.IRON, CATEGORIES.INVERTER].includes(p.category)
    ).map((p) => ({
      name: p.title,
      href: p.href,
    })),
  },
]

export function getSubCategoriesForCategory(category) {
  return ADMIN_CATEGORY_OPTIONS.find((c) => c.value === category)?.subCategories ?? []
}

export function filterProductsByCategory(products, category, subCategory = null) {
  return products.filter((item) => {
    if (item.category !== category) return false
    if (subCategory && item.subCategory !== subCategory) return false
    return true
  })
}
