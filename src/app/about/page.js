'use client';
import React, { useState, useEffect } from 'react';
import { ChevronDown, Mountain, Wind, Shield, Award, Users, MapPin, Clock, Heart } from 'lucide-react';
import Head from 'next/head';
import Header from '../components/navbar';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '500+', label: 'Happy Flyers', icon: Users },
    { number: '5+', label: 'Years Experience', icon: Clock },
    { number: '100%', label: 'Safety Record', icon: Shield },
    { number: '50+', label: 'Awards Won', icon: Award }
  ];



  return (
    <>
      <Head>
        <title>About Adventures Heaven - Best Paragliding in Khajjiar | Mini Switzerland Paragliding</title>
        <meta name="description" content="Adventures Heaven offers premium paragliding experiences in Khajjiar, Himachal Pradesh. Professional tandem paragliding flights over Mini Switzerland of India with certified pilots and 100% safety record." />
        <meta name="keywords" content="paragliding Khajjiar, Adventures Heaven, tandem paragliding Himachal Pradesh, Mini Switzerland paragliding, Dalhousie adventure sports, Khajjiar flying, paragliding near Dharamshala, Himachal adventure tourism, paragliding booking Khajjiar, certified paragliding instructors" />
        <meta name="author" content="Adventures Heaven" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Adventures Heaven - Premium Paragliding in Khajjiar | Book Now" />
        <meta property="og:description" content="Experience breathtaking paragliding flights over Khajjiar's pristine meadows. Professional tandem flights with certified pilots in Mini Switzerland of India." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://adventuresheaven.com/about" />
        <meta property="og:image" content="/images/paragliding-khajjiar-og.jpg" />
        <meta property="og:site_name" content="Adventures Heaven" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Adventures Heaven - Best Paragliding in Khajjiar" />
        <meta name="twitter:description" content="Professional paragliding experiences in Mini Switzerland of India. Book your tandem flight today!" />
        <meta name="twitter:image" content="/images/paragliding-khajjiar-twitter.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="IN-HP" />
        <meta name="geo.placename" content="Khajjiar, Himachal Pradesh" />
        <meta name="geo.position" content="32.5499;76.0567" />
        <meta name="ICBM" content="32.5499, 76.0567" />
        
        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristAttraction",
            "name": "Adventures Heaven - Paragliding Khajjiar",
            "description": "Professional paragliding and adventure sports company offering tandem paragliding flights in Khajjiar, Himachal Pradesh",
            "url": "https://adventuresheaven.com",
            "telephone": "+91-XXXXXXXXXX",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Khajjiar",
              "addressRegion": "Himachal Pradesh",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "32.5499",
              "longitude": "76.0567"
            },
            "priceRange": "₹₹",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "500"
            }
          })}
        </script>
        
        <link rel="canonical" href="https://adventuresheaven.com/about" />
        <link rel="alternate" hreflang="en-in" href="https://adventuresheaven.com/about" />
        <link rel="alternate" hreflang="hi-in" href="https://adventuresheaven.com/hi/about" />
      </Head>
     
      <div className="min-h-screen bg-gradient-to-r from-blue-600/20 to-green-600/20">
         <Header />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20"></div>
        <div 
          className={`text-center z-10 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-6">
            Adventures<span className="text-blue-600">Heaven</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto px-4">
            Premium Paragliding Adventures in Mini Switzerland of India
          </p>
          <div className="flex items-center justify-center text-gray-500 mb-8">
            <MapPin className="w-5 h-5 mr-2" />
            <span className="text-lg">Khajjiar, Himachal Pradesh</span>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-bounce">
          <Wind className="w-8 h-8 text-blue-400 opacity-60" />
        </div>
        <div className="absolute bottom-20 right-10 animate-pulse">
          <Mountain className="w-12 h-12 text-green-400 opacity-60" />
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Story</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Heart className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Born from Passion for Adventure</h3>
              <p className="text-gray-600 leading-relaxed">
                Adventures Heaven was born from a deep love for the mountains and the freedom of flight. 
                Founded in 2019 by a group of passionate paragliding enthusiasts, we discovered that Khajjiar's 
                pristine meadows and perfect wind conditions made it an ideal destination for tandem paragliding 
                and adventure sports in Himachal Pradesh.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Mountain className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Khajjiar - Mini Switzerland Adventure Hub</h3>
              <p className="text-gray-600 leading-relaxed">
                Khajjiar, renowned as the "Mini Switzerland of India," offers breathtaking 
                360-degree panoramic views of snow-capped Himalayan peaks, dense deodar forests, and rolling meadows. 
                This stunning natural beauty combined with excellent thermal conditions makes every paragliding 
                flight an unforgettable adventure tourism experience in Himachal Pradesh.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-400 to-green-400 rounded-3xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-6">Why Choose Khajjiar for Paragliding?</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-4"></div>
                  <span>Perfect altitude at 6,500 feet for tandem flights</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-4"></div>
                  <span>Consistent thermal conditions for safe paragliding</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-4"></div>
                  <span>Stunning Himalayan and Dhauladhar range views</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-4"></div>
                  <span>Safe landing areas in Khajjiar meadows</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-4"></div>
                  <span>Extended flying season from March to November</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center text-white">
                  <IconComponent className="w-12 h-12 mx-auto mb-4 opacity-80" />
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    
      {/* Safety & Certification */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Safety First</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Certifications</h3>
              <div className="space-y-4">
                <div className="flex items-center bg-white p-4 rounded-lg shadow">
                  <Shield className="w-8 h-8 text-green-500 mr-4" />
                  <div>
                    <h4 className="font-semibold">APPI Certified</h4>
                    <p className="text-gray-600 text-sm">Association of Paragliding Pilots and Instructors</p>
                  </div>
                </div>
                <div className="flex items-center bg-white p-4 rounded-lg shadow">
                  <Award className="w-8 h-8 text-blue-500 mr-4" />
                  <div>
                    <h4 className="font-semibold">Tourism Board Licensed</h4>
                    <p className="text-gray-600 text-sm">Himachal Pradesh Tourism Department</p>
                  </div>
                </div>
                <div className="flex items-center bg-white p-4 rounded-lg shadow">
                  <Heart className="w-8 h-8 text-red-500 mr-4" />
                  <div>
                    <h4 className="font-semibold">First Aid Certified</h4>
                    <p className="text-gray-600 text-sm">All staff trained in emergency response</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Safety Measures for Paragliding</h3>
              <div className="space-y-4 text-gray-600">
                <p>• Comprehensive pre-flight safety briefing and equipment inspection</p>
                <p>• Real-time weather monitoring for optimal flying conditions</p>
                <p>• High-quality, regularly inspected paragliding equipment</p>
                <p>• Experienced tandem pilots with 1000+ hours mountain flying</p>
                <p>• Emergency communication systems and rescue protocols</p>
                <p>• Comprehensive adventure sports insurance coverage</p>
                <p>• Strict weight and health requirements for tandem flights</p>
                <p>• Multiple landing zones in Khajjiar for maximum safety</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Experience Khajjiar Paragliding?</h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the ultimate thrill of tandem paragliding over the breathtaking landscapes of Khajjiar, 
            Mini Switzerland of India. Book your adventure with Adventures Heaven today and create memories 
            that will last a lifetime. Professional pilots, certified equipment, and unmatched views guaranteed!
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
              Book Paragliding Now
            </button>
            <button className="border-2 border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-300">
              Contact Adventures Heaven
            </button>
          </div>
        </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;