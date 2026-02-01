export const products = [
  // ================= LED BULBS =================
  {
    id: "prd_led_001",
    title: "EcoGlow 9W LED Bulb",
    slug: "ecoglow-9w-led-bulb",
    category: "Bulbs",
    subcategory: "LED Bulb",
    brand: "EcoGlow",
    images: [
      "/ecoglow-9w-led-bulb.jpg",
      "/ecoglow-9w-led-bulb-2.jpg",
      "/ecoglow-9w-led-bulb-3.jpg"
    ],
    description:
      "The EcoGlow 9W LED Bulb delivers bright illumination with low energy consumption. Designed for long life and consistent performance, it is ideal for homes and offices.",
    price: 3.5,
    originalPrice: 5,
    discountPercentage: 30,
    currency: "USD",
    rating: 4.5,
    reviewsCount: 210,
    stock: 120,
    productType: "regular",
    isNewArrival: false,
    isFeatured: true,
    isBestDeal: true,
    tags: ["energy-saving", "best-seller"],
    createdAt: "2025-01-02T09:00:00Z"
  },

  {
    id: "prd_led_002",
    title: "EcoGlow Smart LED Bulb 12W",
    slug: "ecoglow-smart-led-bulb-12w",
    category: "Bulbs",
    subcategory: "Smart LED",
    brand: "EcoGlow",
    images: [
      "/EcoGlow Smart LED Bulb 12W.png",
      "/EcoGlow Smart LED Bulb 12W-2.png"
    ],
    description:
      "A smart 12W LED bulb with WiFi connectivity, allowing remote control, scheduling, and energy monitoring for modern smart homes.",
    price: 9.99,
    originalPrice: 12.99,
    discountPercentage: 23,
    currency: "USD",
    rating: 4.8,
    reviewsCount: 95,
    stock: 60,
    productType: "new",
    isNewArrival: true,
    isFeatured: true,
    isBestDeal: false,
    tags: ["smart", "wifi"],
    createdAt: "2025-01-12T11:30:00Z"
  },

  // ================= CABLES =================
  {
    id: "prd_cbl_001",
    title: "PowerFlex 1.5mm Copper Cable",
    slug: "powerflex-1-5mm-copper-cable",
    category: "Cables",
    subcategory: "Electrical Cable",
    brand: "PowerFlex",
    images: [
      "/PowerFlex 1.5mm Copper Cable.png",
      "/PowerFlex 1.5mm Copper Cable-2.png"
    ],
    description:
      "High-quality copper electrical cable designed for durability and stable power transmission in residential and commercial installations.",
    price: 25,
    originalPrice: 30,
    discountPercentage: 17,
    currency: "USD",
    rating: 4.4,
    reviewsCount: 140,
    stock: 75,
    productType: "regular",
    isNewArrival: false,
    isFeatured: false,
    isBestDeal: true,
    tags: ["copper", "durable"],
    createdAt: "2024-12-20T10:15:00Z"
  },

  {
    id: "prd_cbl_002",
    title: "PowerFlex Solar DC Cable 4mm",
    slug: "powerflex-solar-dc-cable-4mm",
    category: "Cables",
    subcategory: "Solar Cable",
    brand: "PowerFlex",
    images: [
      "/PowerFlex 1.5mm Copper Cable.png",
      "/PowerFlex Solar DC Cable 4mm-2.png"
    ],
    description:
      "Weather-resistant 4mm solar DC cable built for reliable energy transfer in solar power systems.",
    price: 40,
    originalPrice: 48,
    discountPercentage: 16,
    currency: "USD",
    rating: 4.7,
    reviewsCount: 88,
    stock: 50,
    productType: "new",
    isNewArrival: true,
    isFeatured: true,
    isBestDeal: false,
    tags: ["solar", "weather-resistant"],
    createdAt: "2025-01-14T08:45:00Z"
  },

  // ================= INVERTERS =================
  {
    id: "prd_inv_001",
    title: "SunVolt 3kVA Solar Inverter",
    slug: "sunvolt-3kva-solar-inverter",
    category: "Inverters",
    subcategory: "Solar Inverter",
    brand: "SunVolt",
    images: [
      "/SunVolt 3kVA Solar Inverter.png",
      "/SunVolt 3kVA Solar Inverter-2.png"
    ],
    description:
      "A reliable 3kVA solar inverter designed for efficient energy conversion and dependable home solar solutions.",
    price: 420,
    originalPrice: 480,
    discountPercentage: 13,
    currency: "USD",
    rating: 4.6,
    reviewsCount: 65,
    stock: 20,
    productType: "regular",
    isNewArrival: false,
    isFeatured: true,
    isBestDeal: true,
    tags: ["solar", "home-use"],
    createdAt: "2024-11-18T15:20:00Z"
  },

  {
    id: "prd_inv_002",
    title: "SunVolt 5kVA Hybrid Inverter",
    slug: "sunvolt-5kva-hybrid-inverter",
    category: "Inverters",
    subcategory: "Hybrid Inverter",
    brand: "SunVolt",
    images: [
      "/SunVolt 3kVA Solar Inverter.png",
      "/SunVolt 5kVA Hybrid Inverter-2.png"
    ],
    description:
      "A powerful hybrid inverter supporting both solar and grid power, ensuring uninterrupted energy backup.",
    price: 699,
    originalPrice: 780,
    discountPercentage: 10,
    currency: "USD",
    rating: 4.9,
    reviewsCount: 42,
    stock: 12,
    productType: "new",
    isNewArrival: true,
    isFeatured: true,
    isBestDeal: false,
    tags: ["hybrid", "backup"],
    createdAt: "2025-01-15T13:00:00Z"
  },

  // ================= LED SPARE PARTS =================
  {
    id: "prd_sp_001",
    title: "EcoGlow 12W LED Driver",
    slug: "ecoglow-12w-led-driver",
    category: "Spare_Parts",
    subcategory: "LED Driver",
    brand: "EcoGlow",
    images: [
      "/EcoGlow 12W LED Driver.png",
      "/EcoGlow 12W LED Driver-2.png"
    ],
    description:
      "Efficient LED driver designed to deliver stable power for 12W LED lighting systems.",
    price: 4.5,
    originalPrice: 6,
    discountPercentage: 25,
    currency: "USD",
    rating: 4.3,
    reviewsCount: 76,
    stock: 90,
    productType: "regular",
    isNewArrival: false,
    isFeatured: false,
    isBestDeal: true,
    tags: ["led", "replacement"],
    createdAt: "2024-12-05T09:40:00Z"
  },

  {
    id: "prd_sp_002",
    title: "EcoGlow LED Bulb Holder (B22)",
    slug: "ecoglow-led-bulb-holder-b22",
    category: "Spare_Parts",
    subcategory: "Bulb Holder",
    brand: "EcoGlow",
    images: [
      "/EcoGlow 12W LED Driver.png",
      "/EcoGlow LED Bulb Holder B22-2.png"
    ],
    description:
      "Durable B22 bulb holder ensuring secure fitting and long-lasting electrical connections.",
    price: 1.2,
    originalPrice: 1.8,
    discountPercentage: 33,
    currency: "USD",
    rating: 4.2,
    reviewsCount: 54,
    stock: 150,
    productType: "regular",
    isNewArrival: false,
    isFeatured: false,
    isBestDeal: false,
    tags: ["holder", "socket"],
    createdAt: "2024-11-28T12:10:00Z"
  },

  {
    id: "prd_sp_003",
    title: "EcoGlow LED Panel Diffuser 12W",
    slug: "ecoglow-led-panel-diffuser-12w",
    category: "Spare Parts",
    subcategory: "Diffuser",
    brand: "EcoGlow",
    images: [
      "/ecoglow-led-panel-diffuser-12w.jfif",
      "/ecoglow-led-panel-diffuser-12w-2.jfif"
    ],
    description:
      "A high-quality diffuser that ensures soft, even light distribution for LED panels.",
    price: 3.8,
    originalPrice: 5,
    discountPercentage: 24,
    currency: "USD",
    rating: 4.6,
    reviewsCount: 39,
    stock: 70,
    productType: "new",
    isNewArrival: true,
    isFeatured: true,
    isBestDeal: false,
    tags: ["panel", "light-cover"],
    createdAt: "2025-01-11T10:00:00Z"
  },

  {
    id: "prd_sp_004",
    title: "EcoGlow Aluminum Heat Sink for LED Bulbs",
    slug: "ecoglow-aluminum-heat-sink-led",
    category: "Spare Parts",
    subcategory: "Heat Sink",
    brand: "EcoGlow",
    images: [
      "/ecoglow-led-panel-diffuser-12w.jfif",
      "/ecoglow-aluminum-heat-sink-led-2.jfif"
    ],
    description:
      "An aluminum heat sink designed to efficiently dissipate heat and extend LED bulb lifespan.",
    price: 2.9,
    originalPrice: 4,
    discountPercentage: 28,
    currency: "USD",
    rating: 4.4,
    reviewsCount: 61,
    stock: 110,
    productType: "regular",
    isNewArrival: true,
    isFeatured: false,
    isBestDeal: true,
    tags: ["cooling", "durable"],
    createdAt: "2024-12-15T14:30:00Z"
  },

  // ================= SOLAR INVERTERS (MORE) =================
  {
    id: "prd_inv_003",
    title: "SunVolt 1.5kVA Off-Grid Solar Inverter",
    slug: "sunvolt-1-5kva-off-grid-inverter",
    category: "Inverters",
    subcategory: "Off-Grid Inverter",
    brand: "SunVolt",
    images: [
      "/SunVolt 1.5kVA Off-Grid Solar Inverter.png",
      "/SunVolt 1.5kVA Off-Grid Solar Inverter-2.png"
    ],
    description:
      "An off-grid inverter ideal for remote locations, providing reliable solar power conversion.",
    price: 260,
    originalPrice: 310,
    discountPercentage: 16,
    currency: "USD",
    rating: 4.4,
    reviewsCount: 58,
    stock: 28,
    productType: "regular",
    isNewArrival: false,
    isFeatured: false,
    isBestDeal: true,
    tags: ["off-grid", "solar"],
    createdAt: "2024-10-22T11:50:00Z"
  },

  {
    id: "prd_inv_004",
    title: "SunVolt 10kVA Commercial Hybrid Inverter",
    slug: "sunvolt-10kva-commercial-hybrid-inverter",
    category: "Inverters",
    subcategory: "Hybrid Inverter",
    brand: "SunVolt",
    images: [
      "/SunVolt 1.5kVA Off-Grid Solar Inverter.png",
      "/SunVolt 10kVA Commercial Hybrid Inverter-2.png"
    ],
    description:
      "A high-capacity commercial hybrid inverter built for demanding energy needs and large installations.",
    price: 1899,
    originalPrice: 2100,
    discountPercentage: 10,
    currency: "USD",
    rating: 4.9,
    reviewsCount: 19,
    stock: 6,
    productType: "new",
    isNewArrival: true,
    isFeatured: true,
    isBestDeal: false,
    tags: ["commercial", "high-capacity"],
    createdAt: "2025-01-16T09:15:00Z"
  }
];
