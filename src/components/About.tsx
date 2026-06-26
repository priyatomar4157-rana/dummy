import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";

export default function About() {
  const values = [
    {
      title: "Sustainability",
      description:
        "Eco-friendly packaging and responsible ingredient sourcing.",
    },
    {
      title: "Transparency",
      description: "Clear ingredient lists and honest product claims.",
    },
    {
      title: "Innovation",
      description: "Combining botanical wisdom with modern skincare science.",
    },
    {
      title: "Community",
      description:
        "Building a supportive skincare community through education and care.",
    },
  ];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Botanic Glow",
    "url": "https://ais-pre-nrvtfifb6pgpefogtlofsa-929270079623.asia-east1.run.app/about",
    "description": "Learn about Botanic Glow's origin, our philosophy of using clean, natural ingredients, and our journey to create skincare that works with nature."
  };

  return (
    <>
      <Helmet>
        <title>About Us | Botanic Glow</title>
        <link rel="canonical" href="https://botanic-glow.netlify.app/about" />
        <meta
          name="description"
          content="Learn about Botanic Glow's origin, our philosophy of using clean, natural ingredients, and our journey to create skincare that works with nature."
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
        {/* Hero */}
        <section className="bg-emerald-900 text-emerald-50 py-24 object-cover relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-4xl md:text-5xl font-serif mb-6"
            >
              Our Story
            </motion.h2>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="w-16 h-1 bg-emerald-500 mx-auto my-8"
            />
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-emerald-100 leading-relaxed max-w-2xl mx-auto font-normal"
            >
              Botanic Glow was founded in 2021 with a simple mission: create
              effective skincare products inspired by nature and backed by
              science.
            </motion.h2>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-24 bg-stone-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xl text-stone-700 leading-relaxed mb-12">
              We believe healthy skin starts with clean ingredients sourced
              responsibly from nature. Our team works closely with skincare
              experts and botanists to formulate products that nourish, protect,
              and revitalize skin naturally.
            </p>

            <h2 className="text-3xl font-serif text-emerald-950 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed bg-white p-8 rounded-2xl shadow-sm border border-stone-100 italic">
              To empower people with safe, sustainable, and effective skincare
              solutions that promote confidence and well-being.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-white border-y border-stone-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif text-emerald-950 mb-4">
                Our Values
              </h2>
              <div className="w-16 h-1 bg-emerald-200 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, i) => (
                <div key={i} className="bg-stone-50 p-8 rounded-2xl">
                  <h3 className="text-xl font-serif text-emerald-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="py-24 bg-stone-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-32 h-32 bg-stone-300 rounded-full mx-auto mb-8 flex items-center justify-center text-stone-400 overflow-hidden shadow-lg border-4 border-white">
              <img
                src="/images/founder_1781760068755.jpg"
                alt="Olivia Green"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <h2 className="text-3xl font-serif text-emerald-950 mb-2">
              Olivia Green
            </h2>
            <p className="text-emerald-700 font-medium mb-8 uppercase tracking-widest text-sm">
              Founder & CEO
            </p>
            <blockquote className="text-xl md:text-2xl text-stone-600 font-serif italic max-w-2xl mx-auto leading-relaxed">
              "Our vision is to make botanical skincare accessible to everyone
              while maintaining the highest standards of quality and
              sustainability."
            </blockquote>
          </div>
        </section>
      </motion.div>
    </>
  );
}
