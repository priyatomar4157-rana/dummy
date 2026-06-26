import { useState } from "react";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { blogPosts } from "../data";
import { ArrowRight } from "lucide-react";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    "Skincare Tips",
    "Natural Ingredients",
    "Product Guides",
    "Sustainability",
    "Beauty Trends",
    "Wellness",
  ];

  const filteredPosts = selectedCategory
    ? blogPosts.filter((post) => post.category === selectedCategory)
    : blogPosts;

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "The Glow Blog",
    "url": "https://ais-pre-nrvtfifb6pgpefogtlofsa-929270079623.asia-east1.run.app/blog",
    "description": "Insights, tips, and trends for your natural skincare journey.",
    "blogPost": blogPosts.map((post) => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "datePublished": post.date,
      "description": post.excerpt,
      "author": {
        "@type": "Person",
        "name": post.author
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>The Glow Blog | Botanic Glow Skincare Tips</title>
        <link rel="canonical" href="https://botanic-glow.netlify.app/blog" />
        <meta
          name="description"
          content="Insights, tips, and trends for your natural skincare journey. Read the latest in botanical beauty from Botanic Glow."
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
        <section className="bg-stone-50 py-24 min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-serif text-emerald-950 mb-6">
                The Glow Blog
              </h2>
              <h3 className="text-lg text-stone-600 font-normal">
                Insights, tips, and trends for your natural skincare journey.
              </h3>
              <div className="w-16 h-1 bg-emerald-300 mx-auto mt-8" />
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
              {/* Main Content */}
              <div className="lg:w-2/3 space-y-12">
                <h2 className="text-2xl font-serif text-emerald-950 mb-8">
                  {selectedCategory
                    ? `${selectedCategory} Articles`
                    : "Latest Articles"}
                </h2>

                <div className="space-y-12">
                  {filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => (
                      <article
                        key={post.id}
                        className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-stone-100 group cursor-pointer hover:shadow-md transition-all"
                      >
                        <div className="flex items-center space-x-4 mb-4">
                          <span className="text-sm font-medium text-emerald-700 tracking-wider uppercase">
                            {post.category}
                          </span>
                          <span className="w-1 h-1 bg-stone-300 rounded-full" />
                          <time className="text-sm text-stone-500">
                            {post.published}
                          </time>
                        </div>

                        <h3 className="text-2xl font-serif text-emerald-950 mb-4 group-hover:text-emerald-700 transition-colors">
                          {post.title}
                        </h3>

                        <p className="text-stone-600 mb-6 leading-relaxed">
                          {post.excerpt}
                        </p>

                        <button className="inline-flex items-center text-emerald-800 font-medium hover:text-emerald-600 transition-colors">
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                      </article>
                    ))
                  ) : (
                    <div className="bg-stone-50 p-8 rounded-3xl text-center border border-stone-200">
                      <p className="text-stone-600">
                        No articles found in this category yet.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:w-1/3">
                <div className="sticky top-32 space-y-10">
                  {/* Categories */}
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
                    <h3 className="text-xl font-serif text-emerald-950 mb-6">
                      Categories
                    </h3>
                    <ul className="space-y-3">
                      <li>
                        <button
                          onClick={() => setSelectedCategory(null)}
                          className={`transition-colors flex items-center w-full group ${selectedCategory === null ? "text-emerald-800 font-semibold" : "text-stone-600 hover:text-emerald-700"}`}
                        >
                          <span>All Categories</span>
                          {selectedCategory === null && (
                            <span className="ml-auto text-emerald-600">
                              &rarr;
                            </span>
                          )}
                        </button>
                      </li>
                      {categories.map((category, i) => (
                        <li key={i}>
                          <button
                            onClick={() => setSelectedCategory(category)}
                            className={`transition-colors flex items-center w-full group ${selectedCategory === category ? "text-emerald-800 font-semibold" : "text-stone-600 hover:text-emerald-700"}`}
                          >
                            <span>{category}</span>
                            {selectedCategory === category && (
                              <span className="ml-auto text-emerald-600">
                                &rarr;
                              </span>
                            )}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Newsletter Box */}
                  <div className="bg-emerald-900 p-8 rounded-3xl text-emerald-50 text-center">
                    <h3 className="text-xl font-serif mb-4">
                      Never miss a post
                    </h3>
                    <p className="text-emerald-200/80 text-sm mb-6">
                      Join our newsletter for the latest articles and skincare
                      tips.
                    </p>
                    <form
                      onSubmit={(e) => e.preventDefault()}
                      className="space-y-4"
                    >
                      <input
                        type="email"
                        placeholder="Email address"
                        className="w-full px-4 py-3 rounded-xl bg-emerald-800/50 border border-emerald-700 placeholder-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                      <button className="w-full bg-white text-emerald-900 px-4 py-3 rounded-xl font-medium hover:bg-emerald-50 transition-colors">
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}
