"use client";
import Head from "next/head";
import Header from "./components/navbar";
import HotAirBallooning from "./hotairballooning/page";
import Image from "next/image";
import Link from "next/link";
import Paragliding from "./paragliding/page";
import Script from "next/script";
import Ziplining from "./ziplining/page";
import { motion } from "framer-motion";
import { FaCamera, FaCheck, FaClock, FaMapMarkerAlt, FaPlane, FaQuoteLeft, FaShieldAlt, FaStar, FaSuitcase, FaUsers } from "react-icons/fa";

const activities = [
  {
    title: "Paragliding in Khajjiar",
    description: "Soar like an eagle over the Mini Switzerland of India. Experience breathtaking aerial views of Khajjiar's lush meadows, deodar forests, and snow-capped Himalayan peaks.",
    image: "/images/Paragliding2.jpg",
    price: "1500/- to ₹3500/- per person",
    link: "/activities/paragliding",
    highlights: ["15-30 min flights", "Professional pilots", "HD video included", "Perfect for beginners"]
  },
  {
    title: "Hot Air Balloon",
    description: "Float peacefully above Khajjiar's scenic landscape in a hot air balloon. Perfect for romantic couples and families seeking a gentle aerial adventure.",
    image: "/images/hotairballon.jpg",
    price: "1500/- per person",
    link: "/activities/hot-air-ballooning",
    highlights: ["1 hour experience", "Panoramic views", "Safe for all ages", "Sunrise flights available"]
  },
  {
    title: "Ziplining Adventure",
    description: "Race through the treetops on our high-speed ziplines. Feel the adrenaline rush as you zip across Khajjiar's beautiful valleys.",
    image: "/images/zipline2.jpg",
    price: "1000/- per person",
    link: "/activities/zipline",
    highlights: ["Multiple ziplines", "Speed up to 60kmph", "Safety certified", "Group discounts available"]
  },
];

const packages = [
  {
    name: "Basic Flight",
    price: "1,500",
    duration: "15-20 minutes",
    features: [
      "Professional pilot",
      "Safety equipment included",
      "Basic ground training",
      "Insurance coverage"
    ],
    popular: false
  },
  {
    name: "Premium Flight",
    price: "2,500",
    duration: "25-30 minutes",
    features: [
      "Professional pilot",
      "HD video recording",
      "Photos included",
      "Extended ground training",
      "Insurance coverage"
    ],
    popular: true
  },
  {
    name: "Extreme Flight",
    price: "3,500",
    duration: "30+ minutes",
    features: [
      "Aerobatic maneuvers",
      "Professional video package",
      "Certificate of completion",
      "Advanced techniques demo",
      "Premium insurance"
    ],
    popular: false
  }
];

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Delhi",
    rating: 5,
    text: "Absolutely incredible experience! The views of Khajjiar from above are breathtaking. The pilot was very professional and made me feel completely safe."
  },
  {
    name: "Rajesh Kumar",
    location: "Chandigarh",
    rating: 5,
    text: "Best paragliding experience in India! Khajjiar truly is the Mini Switzerland. The entire team was professional and the equipment was top-notch."
  },
  {
    name: "Sarah Johnson",
    location: "Mumbai",
    rating: 5,
    text: "As a first-timer, I was nervous but the instructor made everything so comfortable. The flight over Khajjiar was magical - definitely coming back!"
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
  }
];

export default function Home() {
  return (
    <>
      <Head>
        {/* ✅ Optimized Title */}
        <title>Best Paragliding in Khajjiar & Dalhousie | Mini Switzerland Adventure Activities</title>

        {/* ✅ SEO-Optimized Meta Description */}
        <meta name="description" content="Experience the best paragliding in Khajjiar, the Mini Switzerland of India! Professional pilots, certified equipment, breathtaking Himalayan views. Book paragliding, ziplining & hot air balloon rides at best prices in Himachal Pradesh." />

        {/* ✅ Expanded Keyword List for SEO */}
        <meta name="keywords" content="paragliding in Khajjiar, Khajjiar paragliding, Mini Switzerland paragliding, paragliding Himachal Pradesh, adventure activities in Khajjiar, paragliding in Dalhousie, best paragliding in India, Khajjiar adventure sports, paragliding packages Khajjiar, safe paragliding for beginners, aerial views Khajjiar, Himalayan paragliding experience" />

        <meta name="author" content="Adventure Heaven" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* ✅ Open Graph Tags for Social Sharing */}
        <meta property="og:title" content="Best Paragliding in Khajjiar - Mini Switzerland of India" />
        <meta property="og:description" content="Soar over the Mini Switzerland of India! Experience world-class paragliding in Khajjiar with professional pilots, certified equipment, and breathtaking Himalayan views." />
        <meta property="og:image" content="/images/Paragliding2.jpg" />
        <meta property="og:url" content="https://adventuresheaven.com/" />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter Card for Better Engagement on Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Paragliding in Khajjiar - Mini Switzerland Adventure" />
        <meta name="twitter:description" content="Experience world-class paragliding in Khajjiar, Himachal Pradesh. Professional pilots, stunning Himalayan views, perfect for beginners!" />
        <meta name="twitter:image" content="/images/Paragliding2.jpg" />

        {/* ✅ JSON-LD Schema Markup for SEO */}
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
              "url": "https://adventuresheaven.com/"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "89"
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

      <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-300 text-white overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: "url('/images/hotairballon.png')" }}
        />

        <Header />

        {/* Enhanced Hero Section */}
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative p-4"
          >
            <div className="mb-4">
              <span className="inline-block bg-yellow-400 text-blue-900 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                Mini Switzerland of India
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-6xl font-bold mb-6 leading-tight">
              Best Paragliding in <span className="text-yellow-300">Khajjiar</span>
            </h1>

            <p className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Experience world-class paragliding in Khajjiar, Himachal Pradesh. Soar over lush meadows, dense deodar forests, and breathtaking Himalayan views with professional pilots and certified equipment!
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#packages"
                className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg text-lg hover:bg-yellow-300 transition font-bold shadow-lg transform hover:scale-105"
              >
                View Packages
              </Link>
              <Link
                href={`https://wa.me/9817404544?text=${encodeURIComponent("Hello, I want to book paragliding in Khajjiar. Please share details!")}`}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-blue-600 transition font-bold"
              >
                Book Now
              </Link>
            </div>
          </motion.div>

          {/* Enhanced Statistics Section */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {[
              { icon: <FaPlane />, value: "20+", label: "Expert Pilots", color: "bg-gradient-to-br from-purple-400 to-purple-600" },
              { icon: <FaSuitcase />, value: "3K+", label: "Happy Customers", color: "bg-gradient-to-br from-green-400 to-green-600" },
              { icon: <FaStar />, value: "4.9", label: "Star Rating", color: "bg-gradient-to-br from-yellow-400 to-orange-500" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className={`${stat.color} text-white p-8 rounded-xl shadow-2xl flex flex-col items-center transform hover:scale-105 transition-all duration-300`}
              >
                <div className="text-5xl mb-4">{stat.icon}</div>
                <h3 className="text-3xl sm:text-4xl font-bold">{stat.value}</h3>
                <p className="text-lg font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Khajjiar Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-gray-800 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Why Khajjiar is Perfect for Paragliding
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover what makes Khajjiar the ultimate paragliding destination in India
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                {
                  icon: "🏔️",
                  title: "Stunning Himalayan Views",
                  description: "Soar above the 'Mini Switzerland of India' with panoramic views of snow-capped peaks, emerald meadows, and dense deodar forests stretching to the horizon."
                },
                {
                  icon: "🌤️",
                  title: "Perfect Weather Conditions",
                  description: "Khajjiar's consistent wind patterns, ideal thermals, and favorable weather from March to November make it perfect for safe and enjoyable paragliding."
                },
                {
                  icon: "✈️",
                  title: "Professional & Safe",
                  description: "Certified pilots with 1000+ flights, international-standard equipment, comprehensive safety briefings, and full insurance coverage ensure your complete safety."
                },
                {
                  icon: "📍",
                  title: "Ideal Launch Altitude",
                  description: "Launch from 6,500 feet above sea level with perfect wind conditions and soft grass landing zones on Khajjiar's famous meadows."
                },
                {
                  icon: "🎥",
                  title: "Professional Photography",
                  description: "Capture your aerial adventure with our professional photography and HD video services, creating memories that last a lifetime."
                },
                {
                  icon: "👥",
                  title: "Perfect for All Levels",
                  description: "Whether you're a complete beginner or experienced flyer, our range of packages caters to all skill levels with personalized instruction."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="text-6xl mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-600">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Featured Activities */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-br from-blue-600 to-purple-700">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold font-serif mb-6 text-white">
              Popular Air Adventures in Khajjiar
            </h2>
            <p className="text-xl text-blue-100 mb-16 max-w-3xl mx-auto">
              Choose from our exciting range of aerial adventures designed for thrill-seekers and nature lovers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    width={400}
                    height={250}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-bold">
                    POPULAR
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 text-left">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">{activity.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{activity.description}</p>
                  
                  {/* Highlights */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {activity.highlights?.map((highlight, idx) => (
                        <span key={idx} className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-sm text-gray-500">Starting from</span>
                      <p className="text-2xl font-bold text-blue-600">₹{activity.price}</p>
                    </div>
                  </div>
                  
                  <Link
                    href={`https://wa.me/9817404544?text=${encodeURIComponent(`Hello, I am interested in ${activity.title}. Can you share more details?`)}`}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-bold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg inline-block text-center"
                  >
                    Book This Adventure
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Paragliding Packages Section */}
        <section id="packages" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Khajjiar Paragliding Packages
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the perfect paragliding experience that matches your adventure level
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-white p-8 rounded-2xl shadow-xl ${pkg.popular ? 'border-4 border-yellow-400 transform scale-105' : ''} hover:shadow-2xl transition-all duration-300`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold uppercase">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">{pkg.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-blue-600">₹{pkg.price}</span>
                      <span className="text-gray-600">/person</span>
                    </div>
                    <p className="text-gray-500 font-semibold">{pkg.duration}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <FaCheck className="text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href={`https://wa.me/9817404544?text=${encodeURIComponent(`I want to book the ${pkg.name} package for ₹${pkg.price}. Please provide more details.`)}`}
                    className={`w-full py-4 px-6 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 text-center block ${
                      pkg.popular 
                        ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:from-yellow-500 hover:to-orange-600' 
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    Choose This Package
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Information Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Complete Paragliding Guide for Khajjiar
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to know about paragliding in the Mini Switzerland of India
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-3xl font-bold mb-8 text-blue-600">What Makes Khajjiar Special?</h3>
                <div className="space-y-6">
                  {[
                    { icon: <FaMapMarkerAlt className="text-red-500" />, label: "Altitude", value: "Launch from 6,500 feet above sea level" },
                    { icon: <FaClock className="text-blue-500" />, label: "Flight Duration", value: "15-30 minutes of pure aerial bliss" },
                    { icon: <FaShieldAlt className="text-green-500" />, label: "Best Months", value: "March to June, September to November" },
                    { icon: <FaMapMarkerAlt className="text-purple-500" />, label: "Landing Zone", value: "Soft grass meadows of Khajjiar plateau" },
                    { icon: <FaUsers className="text-orange-500" />, label: "Experience Level", value: "Suitable for beginners to experts" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start p-4 bg-gray-50 rounded-lg">
                      <div className="mr-4 mt-1">{item.icon}</div>
                      <div>
                        <span className="font-bold text-gray-800">{item.label}: </span>
                        <span className="text-gray-700">{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-3xl font-bold mb-8 text-blue-600">Safety & Equipment</h3>
                <div className="space-y-4">
                  {[
                    "Certified international paragliding equipment",
                    "Licensed pilots with 1000+ successful flights",
                    "Comprehensive insurance coverage included",
                    "Free professional photography and video service",
                    "Pre-flight safety briefing and ground training",
                    "24/7 emergency support and first aid",
                    "Weather monitoring and safety protocols",
                    "Regular equipment maintenance and inspection"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center p-3 bg-green-50 rounded-lg">
                      <FaCheck className="text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-purple-700">
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
                  <div className="text-4xl text-blue-500 mb-4">
                    <FaQuoteLeft />
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.location}</p>
                    </div>
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
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

        {/* Call to Action Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-bold mb-6 text-white">
                Ready for Your Khajjiar Adventure?
              </h2>
              <p className="text-2xl text-white mb-10 max-w-3xl mx-auto leading-relaxed">
                Don't miss the chance to experience paragliding in the Mini Switzerland of India. Book now and create memories that will last a lifetime!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  href={`https://wa.me/9817404544?text=${encodeURIComponent("Hello! I want to book paragliding in Khajjiar. Please share available dates and packages.")}`}
                  className="bg-white text-orange-600 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                  📞 Book Now - Call/WhatsApp
                </Link>
                
                <div className="text-white">
                  <p className="text-lg font-semibold mb-2">🕒 Available Daily</p>
                  <p className="text-sm">9:00 AM - 6:00 PM</p>
                </div>
              </div>
              
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-white">
                <div className="text-center">
                  <div className="text-3xl mb-2">🚁</div>
                  <p className="font-bold">Free Pickup</p>
                  <p className="text-sm">From Dalhousie Hotels</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">💯</div>
                  <p className="font-bold">100% Safe</p>
                  <p className="text-sm">Certified Equipment</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">📱</div>
                  <p className="font-bold">Instant Booking</p>
                  <p className="text-sm">Confirm via WhatsApp</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
          {/* Activity Components */}
          <HotAirBallooning />
        <Paragliding />
        <Ziplining />
        {/* Location & Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-4xl font-bold mb-8">Find Us in Khajjiar</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-red-500 mr-4 mt-1 text-xl" />
                    <div>
                      <h4 className="font-bold text-xl mb-2">Location</h4>
                      <p className="text-gray-300">Khajjiar, Chamba District, Himachal Pradesh 176314</p>
                      <p className="text-gray-300">Near Khajjiar Lake, Mini Switzerland of India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FaClock className="text-blue-500 mr-4 mt-1 text-xl" />
                    <div>
                      <h4 className="font-bold text-xl mb-2">Operating Hours</h4>
                      <p className="text-gray-300">Daily: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-300">Best flying: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FaCamera className="text-green-500 mr-4 mt-1 text-xl" />
                    <div>
                      <h4 className="font-bold text-xl mb-2">What to Bring</h4>
                      <ul className="text-gray-300 space-y-1">
                        <li>• Comfortable sports shoes</li>
                        <li>• Full-length pants</li>
                        <li>• Light jacket for altitude</li>
                        <li>• Camera/phone for memories</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-blue-600 to-purple-700 p-8 rounded-2xl"
              >
                <h3 className="text-3xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-xl mb-2">📞 Phone & WhatsApp</h4>
                    <Link href="https://wa.me/9817404544" className="text-yellow-300 text-xl hover:text-yellow-200">
                      +91 9817404544
                    </Link>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-xl mb-2">🌐 Website</h4>
                    <p className="text-blue-200">www.adventuresheaven.com</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-xl mb-2">📧 Email</h4>
                    <p className="text-blue-200">info@adventuresheaven.com</p>
                  </div>
                  
                  <div className="pt-6 border-t border-blue-400">
                    <h4 className="font-bold text-xl mb-4">🚗 How to Reach</h4>
                    <ul className="space-y-2 text-blue-100">
                      <li>• 24 km from Dalhousie (45 min drive)</li>
                      <li>• 19 km from Chamba (30 min drive)</li>
                      <li>• Free pickup service available</li>
                      <li>• Nearest airport: Pathankot (80 km)</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

      
      </div>
    </>
  );
}