import { Product, Review, BlogPost } from "./types";

export const products: Product[] = [
  {
    id: "p1",
    name: "Hydrating Aloe Face Serum",
    description:
      "A lightweight serum infused with aloe vera, hyaluronic acid, and cucumber extract to deeply hydrate and soothe the skin.",
    price: 24.99,
    benefits: ["Deep hydration", "Reduces dryness", "Calms irritation"],
    ingredients:
      "Aloe Vera Extract, Hyaluronic Acid, Cucumber Extract, Vitamin E",
    imageColor: "bg-emerald-100",
    imageUrl: "/images/aloe_serum_1782142642296.jpg",
    category: "Serums",
  },
  {
    id: "p2",
    name: "Vitamin C Glow Cream",
    description:
      "Brightening moisturizer designed to improve skin tone and radiance.",
    price: 29.99,
    benefits: [
      "Brightens complexion",
      "Reduces dullness",
      "Supports collagen production",
    ],
    ingredients: "Vitamin C, Niacinamide, Jojoba Oil, Shea Butter",
    imageColor: "bg-amber-100",
    imageUrl: "/images/vitamin_c_cream_1781759981400.jpg",
    category: "Moisturizers",
  },
  {
    id: "p3",
    name: "Green Tea Purifying Cleanser",
    description:
      "Gentle cleanser that removes dirt, oil, and makeup without stripping skin.",
    price: 18.99,
    benefits: ["Deep cleansing", "Balances oil", "Refreshes skin"],
    ingredients: "Green Tea Extract, Chamomile, Glycerin",
    imageColor: "bg-green-100",
    imageUrl: "/images/green_tea_cleanser_1781759993607.jpg",
    category: "Cleansers",
  },
  {
    id: "p4",
    name: "Rose Water Facial Mist",
    description:
      "Refreshing facial mist for instant hydration throughout the day.",
    price: 14.99,
    benefits: [
      "Refreshes skin",
      "Hydrates instantly",
      "Suitable for makeup setting",
    ],
    ingredients: "Rose Water, Aloe Vera, Witch Hazel",
    imageColor: "bg-rose-100",
    imageUrl: "/images/rose_mist_1781760009115.jpg",
    category: "Toners & Mists",
  },
  {
    id: "p5",
    name: "Overnight Repair Night Cream",
    description:
      "Rich overnight treatment that nourishes and restores skin while you sleep.",
    price: 34.99,
    benefits: [
      "Repairs skin barrier",
      "Improves elasticity",
      "Deep nourishment",
    ],
    ingredients: "Argan Oil, Peptides, Vitamin E, Shea Butter",
    imageColor: "bg-indigo-100",
    imageUrl: "/images/night_cream_1781760021030.jpg",
    category: "Moisturizers",
  },
  {
    id: "p6",
    name: "Radiant Peony Eye Cream",
    description:
      "A deeply nourishing eye cream that targets dark circles, puffiness, and fine lines around the delicate eye area.",
    price: 28.99,
    benefits: [
      "Reduces dark circles",
      "De-puffs under eyes",
      "Smooths fine lines",
    ],
    ingredients: "Peony Extract, Caffeine, Vitamin K, Hyaluronic Acid",
    imageColor: "bg-pink-100",
    imageUrl: "/images/eye_cream_1781760356470.jpg",
    category: "Eye Care",
  },
  {
    id: "p7",
    name: "Bamboo Charcoal Detox Mask",
    description:
      "A purifying clay mask that draws out impurities, unclogs pores, and absorbs excess oil without drying out the skin.",
    price: 22.99,
    benefits: ["Unclogs pores", "Absorbs excess oil", "Detoxifies skin"],
    ingredients: "Bamboo Charcoal, Bentonite Clay, Tea Tree Oil, Willow Bark",
    imageColor: "bg-stone-200",
    imageUrl: "/images/charcoal_mask_1781760373261.jpg",
    category: "Masks",
  },
  {
    id: "p8",
    name: "Jojoba Glow Body Oil",
    description:
      "A luxurious, fast-absorbing body oil that provides deep hydration and a luminous, non-greasy glow.",
    price: 38.99,
    benefits: [
      "Deep body hydration",
      "Fast-absorbing",
      "Leaves a radiant finish",
    ],
    ingredients: "Jojoba Oil, Squalane, Evening Primrose Oil, Vitamin E",
    imageColor: "bg-amber-50",
    imageUrl: "/images/body_oil_1781760387746.jpg",
    category: "Body Care",
  },
  {
    id: "p9",
    name: "Lavender Calming Toner",
    description:
      "A gentle, alcohol-free toner that balances skin pH, minimizes the appearance of pores, and soothes redness.",
    price: 16.99,
    benefits: [
      "Balances pH levels",
      "Minimizes pores",
      "Soothes redness and irritation",
    ],
    ingredients: "Lavender Water, Witch Hazel, Chamomile Extract, Glycerin",
    imageColor: "bg-purple-100",
    imageUrl: "/images/lavender_toner_1781760401607.jpg",
    category: "Toners & Mists",
  },
  {
    id: "p10",
    name: "Squalane Hydration Booster",
    description:
      "A pure plant-derived squalane serum that instantly hydrates and locks in moisture without feeling greasy.",
    price: 26.99,
    benefits: ["Locks in moisture", "Non-comedogenic", "Improves skin texture"],
    ingredients: "100% Plant-Derived Squalane",
    imageColor: "bg-blue-100",
    imageUrl: "/images/squalane_booster_1782142663772.jpg",
    category: "Serums",
  },
  {
    id: "p11",
    name: "Niacinamide Pore Refining Serum",
    description:
      "Targets enlarged pores, uneven skin tone, and blemishes with a high concentration of niacinamide.",
    price: 21.99,
    benefits: ["Refines pores", "Evens skin tone", "Reduces blemishes"],
    ingredients: "Niacinamide (Vitamin B3), Zinc PCA, Tamarind Extract",
    imageColor: "bg-teal-100",
    imageUrl: "/images/niacinamide_serum_1782142677086.jpg",
    category: "Serums",
  },
  {
    id: "p12",
    name: "Citrus Exfoliating Scrub",
    description:
      "A gentle physical and chemical exfoliator that buffs away dead skin cells to reveal a brighter complexion.",
    price: 19.99,
    benefits: ["Gently exfoliates", "Brightens skin", "Unclogs pores"],
    ingredients:
      "Lemon Extract, Papaya Enzymes, Fine Sugar Crystals, Jojoba Oil",
    imageColor: "bg-orange-100",
    imageUrl: "/images/citrus_exfoliating_scrub_1782142928033.jpg",
    category: "Exfoliators",
  },
  {
    id: "p13",
    name: "Hyaluronic Plumping Lip Balm",
    description:
      "Deeply moisturizes and plumps lips with hyaluronic acid and nourishing botanical oils.",
    price: 12.99,
    benefits: ["Plumps lips", "Deeply moisturizes", "Soothes chapped lips"],
    ingredients: "Hyaluronic Acid, Shea Butter, Peppermint Oil, Coconut Oil",
    imageColor: "bg-red-50",
    imageUrl: "/images/hyaluronic_lip_balm_1782142942786.jpg",
    category: "Lip Care",
  },
  {
    id: "p14",
    name: "Avocado Restorative Mask",
    description:
      "A creamy, intensely hydrating mask that restores dry, flaky skin back to a supple and soft state.",
    price: 25.99,
    benefits: ["Intense hydration", "Softens skin", "Relieves dryness"],
    ingredients: "Avocado Oil, Aloe Vera, Oatmeal Extract, Vitamin E",
    imageColor: "bg-green-200",
    imageUrl: "/images/avocado_mask_1781760500004.jpg",
    category: "Masks",
  },
  {
    id: "p15",
    name: "Bakuchiol Anti-Aging Serum",
    description:
      "A natural retinol alternative that helps smooth fine lines, improve skin texture, and restore firmness without irritation.",
    price: 32.99,
    benefits: ["Smooths fine lines", "Improves texture", "Gentle on skin"],
    ingredients: "Bakuchiol, Squalane, Rosehip Oil, Vitamin E",
    imageColor: "bg-purple-50",
    imageUrl: "/images/bakuchiol_serum_1782273591966.jpg",
    category: "Serums",
  },
  {
    id: "p16",
    name: "Chamomile Cleansing Balm",
    description:
      "A rich, melting balm that effortlessly dissolves makeup, sunscreen, and daily impurities while soothing the skin.",
    price: 24.99,
    benefits: ["Melts away makeup", "Soothes skin", "Deeply cleansing"],
    ingredients: "Chamomile Extract, Sunflower Seed Oil, Shea Butter",
    imageColor: "bg-yellow-50",
    imageUrl: "/images/cleansing_balm_1782273623293.jpg",
    category: "Cleansers",
  },
  {
    id: "p17",
    name: "Pure Rosehip Seed Oil",
    description:
      "Cold-pressed, 100% pure organic rosehip seed oil to nourish, brighten, and support skin regeneration.",
    price: 28.99,
    benefits: ["Brightens skin tone", "Reduces hyperpigmentation", "Nourishes"],
    ingredients: "100% Organic Cold-Pressed Rosehip Seed Oil",
    imageColor: "bg-orange-50",
    imageUrl: "/images/rosehip_oil_1782273644015.jpg",
    category: "Serums",
  },
  {
    id: "p18",
    name: "Jojoba Glow Face Oil",
    description:
      "A lightweight, non-comedogenic oil that mimics your skin's natural sebum to balance and impart a healthy glow.",
    price: 26.99,
    benefits: ["Balances oil production", "Non-comedogenic", "Imparts a healthy glow"],
    ingredients: "100% Pure Organic Jojoba Oil",
    imageColor: "bg-amber-100",
    imageUrl: "/images/jojoba_face_oil.jpg",
    category: "Serums",
  },
  {
    id: "p19",
    name: "Matcha Antioxidant Mask",
    description:
      "A vibrant green clay mask packed with antioxidant-rich matcha green tea to detoxify and revitalize dull skin.",
    price: 22.99,
    benefits: ["Detoxifies pores", "Revitalizes dull skin", "Rich in antioxidants"],
    ingredients: "Matcha Green Tea Powder, Kaolin Clay, Aloe Vera",
    imageColor: "bg-emerald-100",
    imageUrl: "/images/matcha_antioxidant_mask.jpg",
    category: "Masks",
  },
];

export const reviews: Review[] = [
  {
    id: "r1",
    stars: 5,
    text: "Botanic Glow transformed my skincare routine. My skin feels softer and brighter than ever.",
    author: "Sarah M.",
  },
  {
    id: "r2",
    stars: 5,
    text: "The Vitamin C Glow Cream is amazing. Highly recommended!",
    author: "Emily R.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    title: "5 Natural Ingredients for Healthy Skin",
    published: "March 10, 2026",
    excerpt:
      "Natural ingredients like aloe vera, green tea, chamomile, jojoba oil, and rose water offer numerous benefits for maintaining healthy skin. Learn how these ingredients work and how to incorporate them into your routine.",
    category: "Natural Ingredients",
  },
  {
    id: "b2",
    title: "Morning vs. Night Skincare Routine",
    published: "February 22, 2026",
    excerpt:
      "A proper skincare routine changes throughout the day. Discover the essential steps for morning protection and nighttime repair.",
    category: "Skincare Tips",
  },
  {
    id: "b3",
    title: "How Vitamin C Improves Skin Radiance",
    published: "January 15, 2026",
    excerpt:
      "Vitamin C is a powerhouse antioxidant that helps brighten skin, reduce dark spots, and support collagen production. Learn why it deserves a place in your skincare routine.",
    category: "Natural Ingredients",
  },
  {
    id: "b4",
    title: "Understanding Your Skin Type",
    published: "December 18, 2025",
    excerpt:
      "Knowing whether you have dry, oily, combination, or sensitive skin is key to selecting the right products. This guide helps you identify your skin type and build a personalized routine.",
    category: "Skincare Tips",
  },
  {
    id: "b5",
    title: "Sustainable Beauty: Why It Matters",
    published: "November 5, 2025",
    excerpt:
      "Consumers are becoming more conscious about sustainability. Explore how eco-friendly skincare brands can help reduce environmental impact while delivering great results.",
    category: "Sustainability",
  },
];
