import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { products, reviews } from "../data";
import {
  CheckCircle,
  Star,
  ShoppingCart,
  ArrowRight
} from "lucide-react";

export default function Home() {
  const [addedItem, setAddedItem] = useState<string | null>(null);

  const handleAddToCart = (productId: string) => {
    setAddedItem(productId);
    setTimeout(() => {
      setAddedItem(null);
    }, 2000);
  };

  const featuredProducts = products.slice(0, 3);
  const featuredBenefits = [
    "100% Cruelty-Free",
    "Natural Botanical Ingredients",
    "Dermatologically Tested",
    "Suitable for All Skin Types",
  ];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Botanic Glow",
    "url": "https://ais-pre-nrvtfifb6pgpefogtlofsa-929270079623.asia-east1.run.app",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ais-pre-nrvtfifb6pgpefogtlofsa-929270079623.asia-east1.run.app/organic-skincare-products?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Botanic Glow",
    "url": "https://ais-pre-nrvtfifb6pgpefogtlofsa-929270079623.asia-east1.run.app",
    "logo": "https://ais-pre-nrvtfifb6pgpefogtlofsa-929270079623.asia-east1.run.app/images/hero_banner_1781760092351.jpg",
    "description": "Discover premium botanical skincare products crafted with natural ingredients for healthy, glowing skin."
  };

  return (
    <>
      <Helmet>
        <title>Botanic Glow – Vegan, Natural & Sustainable Skincare</title>
        <link rel="canonical" href="https://botanic-glow.netlify.app/" />
        <meta
          name="description"
          content="Discover premium botanical skincare products crafted with natural ingredients for healthy, glowing skin."
        />
        <meta name="keywords" content="Natural Skincare Products, Organic Beauty Products, Vegan Skincare, Botanical Ingredients, Sustainable Beauty" />
        <meta property="og:title" content="Botanic Glow – Natural & Organic Skincare Products" />
        <meta property="og:description" content="Discover premium botanical skincare products crafted with natural ingredients for healthy, glowing skin." />
        <meta name="twitter:title" content="Botanic Glow – Natural & Organic Skincare Products" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-20"
      >
        {/* Hero Section */}
        <section className="bg-stone-50 py-32 md:py-48 relative overflow-hidden flex flex-col justify-center min-h-[80vh]">
          <img
            src="/images/hero_banner_1781760092351.jpg"
            alt="Botanical aesthetic"
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-stone-50/10 z-0" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="max-w-2xl bg-white/60 backdrop-blur-xl border border-white/50 p-8 md:p-12 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.05)]">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-serif text-emerald-950 leading-tight mb-6"
              >
                Naturally Radiant Skin
                <br />
                <span className="text-emerald-800">with Botanical Care</span>
              </motion.h1>
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-stone-600 mb-10 leading-relaxed max-w-xl font-normal"
              >
                Discover premium botanical skincare products crafted with natural ingredients for healthy, glowing skin.
              </motion.h2>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/organic-skincare-products"
                  className="bg-emerald-800 text-white px-8 py-3 rounded-full font-medium hover:bg-emerald-900 transition-colors inline-block"
                >
                  Shop Now
                </Link>
                <Link
                  to="/about"
                  className="bg-white text-emerald-900 px-8 py-3 rounded-full font-medium border border-stone-200 hover:border-emerald-200 hover:bg-emerald-50 transition-colors inline-block"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Benefits */}
        <section className="py-16 bg-white border-b border-stone-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {featuredBenefits.map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-3 text-stone-700"
                >
                  <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO On-Page Info Sections */}
        <section className="py-24 bg-white border-b border-stone-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              
              {/* H2: Why Choose Natural Skincare */}
              <div className="space-y-6">
                <h2 className="text-3xl font-serif text-emerald-950 tracking-tight">
                  Why Choose Natural Skincare
                </h2>
                <div className="w-12 h-1 bg-emerald-600 rounded" />
                <p className="text-stone-600 leading-relaxed text-sm">
                  Choosing <strong className="text-emerald-900 font-semibold">Natural Skincare Products</strong> means feeding your skin with high-potency, pure nutrients. Synthetic alternatives often contain harsh sulfates and parabens that disrupt your skin's natural lipid barrier. 
                </p>
                <p className="text-stone-600 leading-relaxed text-sm">
                  By incorporating <span className="text-emerald-800 font-medium">Organic Beauty Products</span> into your daily wellness ritual, you support a healthier, safer, and more sustainable method of personal care. Our formulations are packed with bioactive compounds that synergize naturally with your body.
                </p>
                <ul className="space-y-3 pt-2">
                  <li className="flex items-start space-x-3 text-stone-600 text-sm">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong className="text-stone-900">Botanical Ingredients</strong> that nourish deeply and support collagen production.</span>
                  </li>
                  <li className="flex items-start space-x-3 text-stone-600 text-sm">
                    <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Rich antioxidant protection against daily environmental pollutants.</span>
                  </li>
                </ul>
              </div>

              {/* H2: About Botanic Glow */}
              <div className="space-y-6">
                <h2 className="text-3xl font-serif text-emerald-950 tracking-tight">
                  About Botanic Glow
                </h2>
                <div className="w-12 h-1 bg-emerald-600 rounded" />
                <p className="text-stone-600 leading-relaxed text-sm">
                  At Botanic Glow, we champion high-purity, ethical skincare. Our collection is formulated on the pillars of <span className="text-emerald-800 font-medium">Vegan Skincare</span> and <span className="text-emerald-800 font-medium">Sustainable Beauty</span>, ensuring that your skin glows without compromising the well-being of our planet.
                </p>
                <p className="text-stone-600 leading-relaxed text-sm">
                  Every product is thoughtfully hand-blended and housed in eco-conscious, recyclable glass packaging. We believe in transparency and absolute purity, offering you a clean glow routine that is as gentle on the earth as it is on your skin.
                </p>
                <div className="p-5 bg-stone-50 rounded-2xl border border-stone-200/60 mt-4">
                  <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold block mb-2">Our Promise</span>
                  <p className="text-xs text-stone-500 italic leading-relaxed">
                    "Crafted with love, powered by nature. Never tested on animals, always free from synthetics and artificial fillers."
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Best Sellers */}
        <section className="py-24 bg-gradient-to-b from-stone-50 to-emerald-50/20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif text-emerald-950 mb-4">
                Curated Best Sellers
              </h2>
              <p className="text-stone-600 max-w-xl mx-auto mb-6">
                Discover the products our customers love most, perfect for starting your natural skincare journey.
              </p>
              <div className="w-16 h-1 bg-emerald-200 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                    ease: "easeOut",
                  }}
                  className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-stone-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group flex flex-col"
                >
                  <div
                    className={`h-72 w-full p-8 ${product.imageColor} flex items-center justify-center overflow-hidden relative`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    {product.imageUrl ? (
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-full object-cover rounded-2xl shadow-lg transition-transform duration-700 ease-out group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-24 h-32 bg-white/40 backdrop-blur-sm rounded-lg shadow-inner border border-white/50 transition-transform duration-700 group-hover:scale-110" />
                    )}
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 mb-3">{product.category}</span>
                    <h3 className="text-2xl font-serif text-emerald-950 mb-3 line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-stone-600 text-sm mb-8 line-clamp-3 flex-grow">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between pt-6 border-t border-stone-100 mt-auto">
                      <span className="text-xl font-medium text-emerald-900">
                        ${product.price}
                      </span>
                      <button
                        onClick={() => handleAddToCart(product.id)}
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-50 text-emerald-800 hover:bg-emerald-800 hover:text-white transition-colors"
                        aria-label="Add to cart"
                      >
                        {addedItem === product.id ? (
                          <CheckCircle className="h-5 w-5" />
                        ) : (
                          <ShoppingCart className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-16">
              <Link
                to="/organic-skincare-products"
                className="inline-flex items-center space-x-2 bg-white border border-stone-200 text-emerald-900 px-8 py-4 rounded-full font-medium hover:border-emerald-300 hover:bg-emerald-50 transition-colors shadow-sm"
              >
                <span>Shop All Collections</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-emerald-900 text-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif mb-4">Customer Reviews</h2>
              <div className="w-16 h-1 bg-emerald-700 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)] p-8 rounded-3xl"
                >
                  <div className="flex space-x-1 mb-6">
                    {[...Array(review.stars)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-lg leading-relaxed mb-6 italic text-emerald-100">
                    "{review.text}"
                  </p>
                  <div className="font-medium text-emerald-300">
                    — {review.author}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-24 bg-stone-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif text-emerald-950 mb-4">
              Join the Glow Club
            </h2>
            <p className="text-stone-600 mb-8 max-w-lg mx-auto">
              Get skincare tips, exclusive offers, and product launches
              delivered to your inbox.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-3 rounded-full border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                required
              />
              <button
                type="submit"
                className="bg-emerald-800 text-white px-8 py-3 rounded-full font-medium hover:bg-emerald-900 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </motion.div>

      {/* Success Toast Placement */}
      <div className="fixed bottom-8 right-8 z-50 pointer-events-none flex flex-col space-y-4">
        <AnimatePresence>
          {addedItem && (
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, x: 20 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="bg-emerald-900 border border-emerald-800 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center space-x-4"
            >
              <div className="bg-emerald-800/50 p-2 rounded-full">
                <CheckCircle className="h-6 w-6 text-emerald-300" />
              </div>
              <div>
                <p className="font-semibold text-emerald-50 tracking-wide">
                  Added to Cart
                </p>
                <p className="text-emerald-200/80 text-sm">
                  Your product was added successfully.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
