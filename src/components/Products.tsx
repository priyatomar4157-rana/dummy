import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Helmet } from "react-helmet-async";
import { products } from "../data";
import {
  ShoppingCart,
  CheckCircle,
  Heart,
  Trash2,
} from "lucide-react";

export default function Products() {
  const [addedItem, setAddedItem] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("Masks");

  const [likedProducts, setLikedProducts] = useState<Set<string>>(new Set());
  const [showLikeToast, setShowLikeToast] = useState(false);
  const [showUnlikeToast, setShowUnlikeToast] = useState(false);

  const handleAddToCart = (productId: string) => {
    setAddedItem(productId);
    setTimeout(() => {
      setAddedItem(null);
    }, 2000);
  };

  const handleLike = (productId: string) => {
    setLikedProducts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
        setShowUnlikeToast(true);
        setTimeout(() => setShowUnlikeToast(false), 2000);
      } else {
        newSet.add(productId);
        setShowLikeToast(true);
        setTimeout(() => setShowLikeToast(false), 2000);
      }
      return newSet;
    });
  };

  const categories = [
    "All",
    "Serums",
    "Moisturizers",
    "Cleansers",
    "Toners & Mists",
    "Eye Care",
    "Masks",
    "Body Care",
    "Exfoliators",
    "Lip Care",
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        description: product.description,
        image: product.imageUrl ? `https://ais-pre-nrvtfifb6pgpefogtlofsa-929270079623.asia-east1.run.app${product.imageUrl}` : undefined,
        offers: {
          "@type": "Offer",
          price: product.price,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      },
    })),
  };

  return (
    <>
      <Helmet>
        <title>Shop Natural Skincare | Glowing Skin Products</title>
        <link rel="canonical" href="https://botanic-glow.netlify.app/products" />
        <meta
          name="description"
          content="Explore our collection of natural, botanical skincare products designed to bring out your skin's inner glow."
        />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-20"
      >
        <section className="bg-gradient-to-br from-stone-50 via-emerald-50/30 to-stone-100 py-24 relative overflow-hidden">
          {/* Soft background decor */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl opacity-50" />
            <div className="absolute top-1/3 -left-40 w-96 h-96 bg-rose-100/30 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl opacity-50" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h1 className="text-4xl md:text-5xl font-serif text-emerald-950 mb-4">
                Botanical Skincare Collection
              </h1>
              <p className="text-lg text-stone-600 font-normal mb-8">
                Explore our curated selection of 100% natural, cruelty-free skincare products. 
                Formulated with potent botanical extracts to nourish, protect, and reveal your skin's inner glow.
              </p>
              
              <div className="w-16 h-1 bg-emerald-300 mx-auto" />
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-emerald-800 text-white shadow-md"
                      : "bg-white/80 text-stone-600 hover:bg-emerald-100 hover:text-emerald-800 border border-stone-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-3xl p-6 shadow-[0_8px_32px_rgba(0,10,0,0.04)] border border-stone-100 hover:shadow-[0_16px_48px_rgba(0,10,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col group"
                  >
                    <div
                      className={`w-full aspect-square rounded-2xl ${product.imageColor} flex items-center justify-center p-0 overflow-hidden relative mb-6`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/0 group-hover:from-white/10 group-hover:via-white/20 group-hover:to-white/10 transition-all duration-500 z-10 pointer-events-none mix-blend-overlay"></div>
                      {product.imageUrl ? (
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="w-full h-full bg-white/40 backdrop-blur-sm shadow-inner transition-transform duration-700 group-hover:scale-110" />
                      )}
                      
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleLike(product.id);
                        }}
                        className={`absolute top-4 right-4 z-20 p-2 rounded-full backdrop-blur-md transition-all ${
                          likedProducts.has(product.id)
                            ? "bg-rose-50/90 text-rose-500 shadow-sm"
                            : "bg-white/50 text-stone-600 hover:bg-white/80 hover:text-rose-500"
                        }`}
                      >
                        <Heart
                          className={`h-5 w-5 ${
                            likedProducts.has(product.id) ? "fill-rose-500" : ""
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex flex-col flex-grow">
                      <div className="mb-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-2 block">{product.category}</span>
                        <h3 className="text-xl font-serif text-emerald-950 leading-tight mb-2 line-clamp-2">
                          {product.name}
                        </h3>
                        <p className="text-lg text-stone-900 font-medium">
                          ${product.price}
                        </p>
                      </div>

                      <p className="text-sm text-stone-600 leading-relaxed mb-6 line-clamp-3 flex-grow">
                        {product.description}
                      </p>

                      <button
                        onClick={() => handleAddToCart(product.id)}
                        className="w-full bg-emerald-800 text-white py-3 rounded-full font-medium hover:bg-emerald-900 transition-colors flex items-center justify-center space-x-2 text-sm mt-auto"
                      >
                        {addedItem === product.id ? (
                          <>
                            <CheckCircle className="h-4 w-4" />
                            <span>Added</span>
                          </>
                        ) : (
                          <>
                            <ShoppingCart className="h-4 w-4" />
                            <span>Add to Cart</span>
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-20 bg-white rounded-3xl border border-stone-100 shadow-sm">
                  <p className="text-xl text-stone-600">
                    No products found in this category yet.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
        
        <section className="py-24 bg-stone-50 border-t border-b border-stone-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-serif text-emerald-950 mb-4">
                Powered By Nature
              </h2>
              <div className="w-12 h-1 bg-emerald-300 mx-auto mb-6" />
              <p className="text-stone-600">
                Our products are formulated with high-quality botanical ingredients, 
                carefully selected for their restorative and nourishing properties.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group relative overflow-hidden rounded-3xl shadow-md">
                <div className="aspect-[4/5] w-full">
                  <img 
                    src="/images/aloe_vera_ingredient_1782273394409.jpg" 
                    alt="Fresh aloe vera gel" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent opacity-80 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-serif text-white mb-2">Aloe Vera</h3>
                  <p className="text-emerald-50 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">Deeply hydrating and soothing for sensitive skin types.</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-3xl shadow-md">
                <div className="aspect-[4/5] w-full">
                  <img 
                    src="/images/golden_face_oil_1782273408476.jpg" 
                    alt="Golden face oil with rose petals" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent opacity-80 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-serif text-white mb-2">Botanical Oils</h3>
                  <p className="text-emerald-50 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">Rich in antioxidants to protect and restore your skin's natural barrier.</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-3xl shadow-md">
                <div className="aspect-[4/5] w-full">
                  <img 
                    src="/images/green_clay_mask_1782273422408.jpg" 
                    alt="Natural green clay mask" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent opacity-80 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-serif text-white mb-2">Purifying Clays</h3>
                  <p className="text-emerald-50 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">Gently draws out impurities while delivering essential minerals.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full md:w-1/2">
                <div className="rounded-3xl overflow-hidden shadow-2xl relative">
                  <div className="absolute inset-0 bg-emerald-900/10 mix-blend-overlay z-10"></div>
                  <img 
                    src="/images/skincare_routine_lifestyle_1782271655070.jpg" 
                    alt="Serene morning skincare routine" 
                    className="w-full h-full object-cover aspect-[4/3] md:aspect-square"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-3xl md:text-4xl font-serif text-emerald-950">Elevate Your Daily Routine</h2>
                <div className="w-12 h-1 bg-emerald-500 rounded" />
                <p className="text-lg text-stone-600 leading-relaxed">
                  Skincare is more than just products; it's a daily ritual of self-care. 
                  Take a moment each morning and evening to nourish your skin and center your mind. 
                  Our botanical formulations are designed to work synergistically, creating a radiant glow that lasts all day.
                </p>
                <p className="text-stone-500 text-sm leading-relaxed pb-4">
                  For optimal results, start with our gentle cleansers, follow up with hydrating serums, and lock in the moisture with our rich botanical creams.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-emerald-700" />
                  </div>
                  <span className="text-emerald-900 font-medium">100% Cruelty-Free & Vegan</span>
                </div>
              </div>
            </div>
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

          {showLikeToast && (
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, x: 20 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="bg-rose-900 border border-rose-800 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center space-x-4"
            >
              <div className="bg-rose-800/50 p-2 rounded-full">
                <Heart className="h-6 w-6 text-rose-300 fill-rose-300" />
              </div>
              <div>
                <p className="font-semibold text-rose-50 tracking-wide">
                  Product Liked
                </p>
                <p className="text-rose-200/80 text-sm">
                  This product has been saved to your favorites.
                </p>
              </div>
            </motion.div>
          )}

          {showUnlikeToast && (
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, x: 20 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="bg-stone-900 border border-stone-800 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center space-x-4"
            >
              <div className="bg-stone-800/50 p-2 rounded-full">
                <Trash2 className="h-6 w-6 text-stone-300" />
              </div>
              <div>
                <p className="font-semibold text-stone-50 tracking-wide">
                  Like Removed
                </p>
                <p className="text-stone-200/80 text-sm">
                  This product has been removed from your favorites.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
