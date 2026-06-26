import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Botanic Glow",
    "url": "https://ais-pre-nrvtfifb6pgpefogtlofsa-929270079623.asia-east1.run.app/contact",
    "description": "Get in touch with Botanic Glow. We’d love to hear from you regarding our products, partnerships or general inquiries."
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "Botanic Glow Headquarters",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "245 Green Valley Avenue",
      "addressLocality": "Austin",
      "addressRegion": "TX",
      "postalCode": "78701",
      "addressCountry": "US"
    },
    "telephone": "+1-800-555-GLOW"
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Botanic Glow</title>
        <link rel="canonical" href="https://botanic-glow.netlify.app/contact" />
        <meta
          name="description"
          content="Get in touch with Botanic Glow. We’d love to hear from you regarding our products, partnerships or general inquiries."
        />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-20"
      >
        <section className="bg-stone-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-serif text-emerald-950 mb-6">
                Get in Touch
              </h2>
              <h3 className="text-lg text-stone-600 font-normal">
                We'd love to hear from you.
              </h3>
              <div className="w-16 h-1 bg-emerald-300 mx-auto mt-8" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div className="space-y-12 bg-white p-10 rounded-3xl shadow-sm border border-stone-100">
                <h2 className="text-2xl font-serif text-emerald-950 mb-8">
                  Contact Information
                </h2>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-emerald-900 mb-2">
                      Address
                    </h3>
                    <p className="text-stone-600">
                      Botanic Glow Headquarters
                      <br />
                      245 Green Valley Avenue
                      <br />
                      Austin, TX 78701
                      <br />
                      USA
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-emerald-900 mb-2">Phone</h3>
                    <p className="text-stone-600">+1 (512) 555-0123</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-emerald-900 mb-2">Email</h3>
                    <p className="text-stone-600">support@botanicglow.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-emerald-900 mb-2">
                      Business Hours
                    </h3>
                    <p className="text-stone-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-stone-600">
                      Saturday: 10:00 AM - 4:00 PM
                    </p>
                    <p className="text-stone-600">Sunday: Closed</p>
                  </div>
                </div>

                <div className="pt-8 border-t border-stone-100">
                  <h3 className="font-medium text-emerald-900 mb-4">
                    Follow Us
                  </h3>
                  <ul className="space-y-2 text-stone-600">
                    <li>Instagram: @botanicglow</li>
                    <li>Facebook: Botanic Glow</li>
                    <li>Pinterest: Botanic Glow Official</li>
                    <li>TikTok: @botanicglow</li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-stone-100 p-10 rounded-3xl">
                <h2 className="text-2xl font-serif text-emerald-950 mb-8">
                  Send a Message
                </h2>
                <form
                  className="space-y-6"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white resize-none"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-emerald-800 text-white px-8 py-4 rounded-xl font-medium hover:bg-emerald-900 transition-colors shadow-sm mt-4"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}
