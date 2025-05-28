"use client";
import Head from "next/head";
import Header from "../components/navbar";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { motion } from "framer-motion";
import { Award, Camera, Check, Clock, Heart, MapPin, Mountain, PlayCircle, Shield, Star, Users, Wind } from "lucide-react";
import { usePathname } from "next/navigation";

// import "react-responsive-carousel/lib/styles/carousel.min.css";

const activities = [
  {
    title: "Khajjiar Paragliding Launch Point",
    location: "Dalhousie, Chamba",
    image: "/images/Paragliding1.jpg",
  },
  {
    title: "Scenic Flight Views",
    location: "Mini Switzerland Views",
    image: "/images/Paragliding5.jpg",
  },
  {
    title: "Professional Equipment",
    location: "Safety First",
    image: "/images/Paragliding3.jpg",
  },
  {
    title: "Landing Zone",
    location: "Soft Grass Meadows",
    image: "/images/Paragliding4.jpg",
  },
];

const packages = [
  {
    name: "Basic Tandem Flight",
    price: "1,500",
    duration: "15-20 minutes",
    features: [
      "Certified professional pilot",
      "All safety equipment included",
      "Basic ground training",
      "Insurance coverage",
      "Take-off from 6,500 feet"
    ],
    popular: false,
    color: "from-blue-500 to-blue-600"
  },
  {
    name: "Premium Experience",
    price: "2,500",
    duration: "25-30 minutes",
    features: [
      "Extended flight time",
      "HD video recording",
      "Professional photos included",
      "Detailed ground training",
      "Aerobatic maneuvers (optional)",
      "Digital media package"
    ],
    popular: true,
    color: "from-purple-500 to-purple-600"
  },
  {
    name: "Extreme Adventure",
    price: "3,500",
    duration: "30+ minutes",
    features: [
      "Maximum flight duration",
      "Advanced aerobatic maneuvers",
      "4K video documentation",
      "Certificate of completion",
      "VIP ground experience",
      "Professional photo shoot"
    ],
    popular: false,
    color: "from-orange-500 to-red-600"
  }
];

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Delhi",
    rating: 5,
    text: "Absolutely incredible experience! The views of Khajjiar from above are breathtaking. The pilot was very professional and made me feel completely safe throughout the flight.",
    image: "/images/testimonial1.jpg"
  },
  {
    name: "Rajesh Kumar",
    location: "Chandigarh", 
    rating: 5,
    text: "Best paragliding experience in India! Khajjiar truly is the Mini Switzerland. The entire team was professional and the equipment was top-notch. Highly recommended!",
    image: "/images/testimonial2.jpg"
  },
  {
    name: "Sarah Johnson",
    location: "Mumbai",
    rating: 5,
    text: "As a first-timer, I was nervous but the instructor made everything so comfortable. The flight over Khajjiar was magical - definitely coming back with friends!",
    image: "/images/testimonial3.jpg"
  }
];

const faqs = [
  {
    question: "Is paragliding in Khajjiar safe for beginners?",
    answer: "Absolutely! Our certified pilots have over 1000+ successful flights. We provide comprehensive safety briefings, use international-standard equipment, and maintain perfect safety records. Khajjiar's gentle wind conditions make it ideal for first-time flyers."
  },
  {
    question: "What's the best time for paragliding in Khajjiar?",
    answer: "The ideal months are March to June and September to November. During these periods, weather conditions are perfect with consistent thermals and clear skies. Morning hours (9 AM - 11 AM) and late afternoon (3 PM - 5 PM) offer the best flying conditions."
  },
  {
    question: "How long does a paragliding session last?",
    answer: "Flight duration ranges from 15-30 minutes depending on weather conditions and the package chosen. Including ground training, equipment setup, and briefing, the complete experience takes 2-3 hours."
  },
  {
    question: "What should I wear for paragliding in Khajjiar?",
    answer: "Wear comfortable, closed-toe shoes (sports shoes preferred), full-length pants, and layers as temperatures can vary with altitude. We provide helmets and safety harnesses. Avoid loose jewelry and carry minimal items."
  },
  {
    question: "Can I get photos and videos of my paragliding experience?",
    answer: "Yes! Our premium and extreme packages include professional photography and HD video recording. Basic package customers can purchase media separately. All content is provided on the same day via digital transfer."
  },
  {
    question: "What is the weight limit for paragliding?",
    answer: "Our weight limit is 45-90 kg for tandem flights. This ensures optimal safety and performance. If you're outside this range, please contact us to discuss alternative options."
  }
];

export default function Paragliding() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const whatsappNumber = "9817404544";
  const message = encodeURIComponent("Hello, I want to book paragliding in Khajjiar. Please share available packages and dates.");

  return (
    <>
      <Head>
        <title>Best Paragliding in Khajjiar, Dalhousie | Mini Switzerland Adventure | ₹1500 Onwards</title>
        <meta name="description" content="Experience world-class paragliding in Khajjiar, the Mini Switzerland of India! Professional pilots, certified equipment, breathtaking Himalayan views. Packages starting ₹1500. Book now!" />
        <meta name="keywords" content="paragliding Khajjiar, Khajjiar paragliding price, best paragliding Himachal Pradesh, Mini Switzerland paragliding, Dalhousie adventure activities, tandem paragliding India, safe paragliding for beginners, Khajjiar adventure sports, paragliding packages Himachal, aerial views Khajjiar" />
        <meta name="author" content="Adventures Heaven" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content="Best Paragliding in Khajjiar - Mini Switzerland Adventure Experience" />
        <meta property="og:description" content="Soar over the Mini Switzerland of India! Experience world-class paragliding in Khajjiar with professional pilots, certified equipment, and breathtaking Himalayan views. Book your adventure today!" />
        <meta property="og:image" content="/images/Paragliding2.jpg" />
        <meta property="og:url" content="https://adventuresheaven.com/paragliding/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Paragliding in Khajjiar - Mini Switzerland Adventure" />
        <meta name="twitter:description" content="Experience world-class paragliding over Khajjiar's stunning landscapes. Professional pilots, perfect for beginners, unforgettable memories!" />
        <meta name="twitter:image" content="/images/Paragliding2.jpg" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ 
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristAttraction",
            "name": "Paragliding in Khajjiar - Mini Switzerland of India",
            "image": "/images/Paragliding2.jpg",
            "description": "Experience world-class paragliding in Khajjiar, the Mini Switzerland of India. Professional pilots, certified equipment, breathtaking Himalayan views.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Khajjiar",
              "addressRegion": "Himachal Pradesh",
              "addressCountry": "IN"
            },
            "offers": {
              "@type": "Offer",
              "priceCurrency": "INR",
              "price": "1500-3500",
              "availability": "https://schema.org/InStock",
              "url": "https://adventuresheaven.com/paragliding"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "500"
            }
          })
        }} />

        <Script
          id="gtag-base"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-17088875101"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17088875101');
          `}
        </Script>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
        {!isHomePage && <Header />}

        {/* Hero Section */}
        <section className="relative py-20 px-4 md:px-8 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="relative max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center mb-12"
            >
              <div className="inline-block bg-yellow-400 text-blue-900 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
                Mini Switzerland of India
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Best Paragliding in <span className="text-yellow-300">Khajjiar</span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
                Paragliding in Khajjiar, Dalhousie: Soar over the breathtaking landscapes of the Mini Switzerland of India with certified pilots and world-class equipment
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  href="#packages"
                  className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  View Packages
                </Link>
                <Link
                  href={`https://wa.me/${whatsappNumber}?text=${message}`}
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  Book Now - Call/WhatsApp
                </Link>
              </div>
            </motion.div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <motion.div 
                className="md:row-span-2 relative group overflow-hidden rounded-2xl shadow-2xl"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src={activities[0].image}
                  alt={activities[0].title}
                  width={400}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6 w-full">
                  <h3 className="text-xl font-bold mb-2">{activities[0].title}</h3>
                  <p className="text-sm opacity-90">{activities[0].location}</p>
                </div>
              </motion.div>

              {activities.slice(1).map((activity, index) => (
                <motion.div 
                  key={index} 
                  className="relative group overflow-hidden rounded-2xl shadow-2xl"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent text-white p-4 w-full">
                    <h3 className="font-bold mb-1">{activity.title}</h3>
                    <p className="text-sm opacity-90">{activity.location}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Why Choose Khajjiar for Paragliding?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover what makes Khajjiar the premier paragliding destination in India
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Mountain className="w-12 h-12 text-blue-500" />,
                  title: "Perfect Altitude",
                  description: "Launch from 6,500 feet above sea level with optimal wind conditions and stunning 360-degree views of the Himalayan ranges."
                },
                {
                  icon: <Wind className="w-12 h-12 text-green-500" />,
                  title: "Ideal Weather",
                  description: "Consistent thermals and favorable wind patterns make Khajjiar perfect for safe paragliding throughout the season."
                },
                {
                  icon: <Shield className="w-12 h-12 text-red-500" />,
                  title: "100% Safety",
                  description: "Certified pilots with 1000+ flights, international equipment standards, and comprehensive insurance coverage."
                },
                {
                  icon: <Camera className="w-12 h-12 text-purple-500" />,
                  title: "Epic Views",
                  description: "Soar over the Mini Switzerland of India with breathtaking views of meadows, forests, and snow-capped peaks."
                },
                {
                  icon: <Users className="w-12 h-12 text-orange-500" />,
                  title: "Expert Pilots",
                  description: "Professional certified pilots with years of experience ensure your safety and provide an unforgettable experience."
                },
                {
                  icon: <Heart className="w-12 h-12 text-pink-500" />,
                  title: "Beginner Friendly",
                  description: "Perfect for first-time flyers with gentle slopes, soft landing zones, and comprehensive ground training."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-8 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="flex justify-center mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section id="packages" className="py-20 px-4 md:px-8 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-6">
                Paragliding Packages in Khajjiar
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect paragliding experience that matches your adventure level and budget
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-white text-gray-800 p-8 rounded-2xl shadow-2xl ${pkg.popular ? 'border-4 border-yellow-400 transform scale-105' : ''} hover:shadow-3xl transition-all duration-300`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold uppercase">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-blue-600">₹{pkg.price}</span>
                      <span className="text-gray-600">/person</span>
                    </div>
                    <p className="text-gray-500 font-semibold">{pkg.duration}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="text-green-500 mr-3 flex-shrink-0 w-5 h-5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`I want to book the ${pkg.name} package for ₹${pkg.price}. Please provide more details and available dates.`)}`}
                    className={`w-full py-4 px-6 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 text-center block bg-gradient-to-r ${pkg.color} text-white hover:shadow-lg`}
                  >
                    Book This Package
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Experience The <span className="text-blue-600">Ultimate Adventure</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Explore breathtaking landscapes and thrilling experiences with our world-class paragliding adventures. 
                  Enjoy a hassle-free journey with <span className="font-semibold text-blue-500">pickup and drop included</span>, 
                  making your travel smooth and convenient.
                </p>

                <div className="space-y-6 mb-8">
                  <FeatureItem 
                    number="1" 
                    title="Experienced Certified Pilots" 
                    description="Our professional pilots with 1000+ successful flights ensure a safe and exhilarating journey, enhancing your paragliding experience with expert guidance and safety protocols." 
                  />
                  <FeatureItem 
                    number="2" 
                    title="Premium Safety Standards" 
                    description="We prioritize your safety with international-standard equipment, comprehensive briefings, and strict safety protocols approved by aviation authorities." 
                  />
                  <FeatureItem 
                    number="3" 
                    title="Best Value Packages" 
                    description="Enjoy premium paragliding experiences at competitive prices without compromising on quality, safety, or the breathtaking aerial adventure." 
                  />
                </div>

                <Link
                  href={`https://wa.me/${whatsappNumber}?text=${message}`}
                  className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Start Your Adventure
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image 
                    src="/images/Paragliding4.jpg"
                    alt="Paragliding Adventure in Khajjiar"
                    width={600}
                    height={700}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  
                  {/* Floating Stats */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-blue-600">1000+</div>
                        <div className="text-sm text-gray-600">Safe Flights</div>
                      </div>
                      <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-green-600">4.9★</div>
                        <div className="text-sm text-gray-600">Rating</div>
                      </div>
                      <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-purple-600">30+</div>
                        <div className="text-sm text-gray-600">Min Flight</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-blue-600 to-purple-700">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-6 text-white">
                What Our Adventurers Say
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Real experiences from thousands of happy customers who soared over Khajjiar
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                      <p className="text-gray-500">{testimonial.location}</p>
                      <div className="flex text-yellow-400 mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about paragliding in Khajjiar
              </p>
            </motion.div>

            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold mb-4 text-blue-600">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-bold mb-6 text-white">
                Ready for Your Khajjiar Paragliding Adventure?
              </h2>
              <p className="text-2xl text-white mb-10 max-w-3xl mx-auto leading-relaxed">
                Don't miss the chance to experience paragliding in the Mini Switzerland of India. Book now and create memories that will last a lifetime!
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                <Link
                  href={`https://wa.me/${whatsappNumber}?text=${message}`}
                  className="bg-white text-orange-600 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                  📞 Book Now - WhatsApp
                </Link>
                
                <div className="text-white text-center">
                  <p className="text-lg font-semibold mb-2">🕒 Available Daily</p>
                  <p className="text-sm">9:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-white">
                <div className="text-center">
                  <div className="text-4xl mb-3">🚁</div>
                  <p className="font-bold text-lg">Free Pickup</p>
                  <p className="text-sm">From Dalhousie Hotels</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">💯</div>
                  <p className="font-bold text-lg">100% Safe</p>
                  <p className="text-sm">Certified Equipment</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">📱</div>
                  <p className="font-bold text-lg">Instant Booking</p>
                  <p className="text-sm">Confirm via WhatsApp</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

function FeatureItem({ number, title, description }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold text-lg rounded-full shadow-lg flex-shrink-0">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}