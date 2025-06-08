'use client';
import React, { useState, useEffect } from 'react';
import { X, MapPin, Phone, Camera, Mountain, Wind, Users, Calendar, Star, MessageCircle } from 'lucide-react';
import Head from 'next/head';
import Header from '../components/navbar';

const ParaglidingGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  
  const whatsappNumber = "9817404544";
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleWhatsAppRedirect = (message = "Hi! I want to book a paragliding flight in Khajjiar with Adventures Heaven.") => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  // Sample gallery images with realistic paragliding scenarios
  const galleryImages = [
    {
      id: 1,
      src: "/images/paraglding-g1.jpg",
      alt: "Tandem paragliding over Khajjiar meadows with Himalayan backdrop",
      category: "tandem",
      title: "Tandem Flight Over Mini Switzerland",
      description: "Experience breathtaking views of Khajjiar's pristine meadows"
    },
    {
      id: 2,
      src: "/images/paragliding-g2.jpg",
      alt: "Professional paragliding instructor preparing equipment in Khajjiar",
      category: "preparation",
      title: "Pre-flight Safety Check",
      description: "Our certified instructors ensure complete safety"
    },
    {
      id: 3,
      src: "/images/paragliding-g3.jpg",
      alt: "Paraglider soaring above Dalhousie hills with mountain views",
      category: "flying",
      title: "Soaring Above Dalhousie Hills",
      description: "Panoramic views of the Dhauladhar mountain range"
    },
    {
      id: 4,
      src: "/images/paraglding-g4.jpg",
      alt: "Group of happy paragliding customers at Khajjiar landing site",
      category: "customers",
      title: "Happy Adventurers",
      description: "Satisfied customers after their Khajjiar paragliding experience"
    },
    {
      id: 5,
      src: "/images/paragliding-g5.jpg",
      alt: "Paragliding takeoff from Khajjiar plateau with forest backdrop",
      category: "takeoff",
      title: "Perfect Takeoff Conditions",
      description: "Launching from Khajjiar's ideal paragliding sites"
    },
    {
      id: 6,
      src: "/images/paragliding-g6.jpg",
      alt: "Aerial view of Khajjiar lake during paragliding flight",
      category: "aerial",
      title: "Bird's Eye View of Khajjiar Lake",
      description: "Stunning aerial perspective of the famous Khajjiar lake"
    },

  ];

  const categories = [
    { id: 'all', name: 'All Photos', count: galleryImages.length },
    { id: 'tandem', name: 'Tandem Flights', count: galleryImages.filter(img => img.category === 'tandem').length },
    { id: 'flying', name: 'In Flight', count: galleryImages.filter(img => img.category === 'flying').length },
    { id: 'aerial', name: 'Aerial Views', count: galleryImages.filter(img => img.category === 'aerial').length },
    { id: 'customers', name: 'Happy Customers', count: galleryImages.filter(img => img.category === 'customers').length },
    { id: 'equipment', name: 'Equipment', count: galleryImages.filter(img => img.category === 'equipment').length }
  ];

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const testimonials = [
    {
      name: "Rahul Sharma",
      location: "Delhi",
      rating: 5,
      text: "Best paragliding experience in Khajjiar! Adventures Heaven team was professional and the views were absolutely breathtaking."
    },
    {
      name: "Priya Patel",
      location: "Mumbai",
      rating: 5,
      text: "Amazing tandem flight over Mini Switzerland! The instructors made me feel completely safe throughout the entire experience."
    },
    {
      name: "Amit Kumar",
      location: "Chandigarh",
      rating: 5,
      text: "Khajjiar paragliding with Adventures Heaven was the highlight of our Dalhousie trip. Highly recommend to everyone!"
    }
  ];

  return (
    <>
      <Head>
        <title>Paragliding Gallery - Adventures Heaven Khajjiar | Best Photos & Videos of Dalhousie Paragliding</title>
        <meta name="description" content="Explore stunning paragliding photos from Adventures Heaven Khajjiar. See breathtaking aerial views of Mini Switzerland, tandem flights, and happy customers enjoying Dalhousie paragliding experiences." />
        <meta name="keywords" content="paragliding photos Khajjiar, Adventures Heaven gallery, Dalhousie paragliding images, Mini Switzerland aerial views, tandem paragliding pictures, Khajjiar adventure photos, Himachal paragliding gallery, paragliding Dalhousie pictures, aerial photography Khajjiar" />
        <meta name="author" content="Adventures Heaven" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Paragliding Gallery - Adventures Heaven Khajjiar | Stunning Aerial Photos" />
        <meta property="og:description" content="Browse our amazing collection of paragliding photos from Khajjiar and Dalhousie. See why Adventures Heaven is the top choice for paragliding in Mini Switzerland of India." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://adventuresheaven.com/gallery" />
        <meta property="og:image" content="/images/paragliding-khajjiar-gallery-og.jpg" />
        <meta property="og:site_name" content="Adventures Heaven" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Paragliding Gallery - Adventures Heaven Khajjiar" />
        <meta name="twitter:description" content="Stunning paragliding photos from Mini Switzerland of India. Book your adventure today!" />
        <meta name="twitter:image" content="/images/paragliding-khajjiar-gallery-twitter.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="IN-HP" />
        <meta name="geo.placename" content="Khajjiar, Dalhousie, Himachal Pradesh" />
        <meta name="geo.position" content="32.5499;76.0567" />
        <meta name="ICBM" content="32.5499, 76.0567" />
        
        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Adventures Heaven Paragliding Gallery - Khajjiar Dalhousie",
            "description": "Professional paragliding photo gallery showcasing aerial views and tandem flights in Khajjiar and Dalhousie region",
            "url": "https://adventuresheaven.com/gallery",
            "provider": {
              "@type": "Organization",
              "name": "Adventures Heaven",
              "url": "https://adventuresheaven.com",
              "telephone": "+91-9817404544",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Khajjiar",
                "addressRegion": "Himachal Pradesh",
                "addressCountry": "IN"
              }
            },
            "mainEntity": {
              "@type": "TouristAttraction",
              "name": "Khajjiar Paragliding",
              "description": "Premium paragliding experiences in Mini Switzerland of India"
            }
          })}
        </script>
        
        <link rel="canonical" href="https://adventuresheaven.com/gallery/" />
        <link rel="alternate" hreflang="en-in" href="https://adventuresheaven.com/gallery/" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        {/* Hero Section */}
        <section className="relative h-96 flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-600 to-green-600">
          <div className="absolute inset-0 bg-black/20"></div>
          <div 
            className={`text-center z-10 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Paragliding Gallery
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto px-4">
              Stunning Photos from Adventures Heaven Khajjiar & Dalhousie Paragliding
            </p>
            <div className="flex items-center justify-center text-blue-100 mb-8">
              <MapPin className="w-5 h-5 mr-2" />
              <span className="text-lg">Mini Switzerland of India - Khajjiar, Dalhousie</span>
            </div>
            <button 
              onClick={() => handleWhatsAppRedirect("Hi! I want to see more photos and book paragliding in Khajjiar!")}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center mx-auto"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Book Paragliding Now
            </button>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 animate-bounce">
            <Camera className="w-8 h-8 text-white opacity-60" />
          </div>
          <div className="absolute bottom-20 right-10 animate-pulse">
            <Mountain className="w-12 h-12 text-white opacity-60" />
          </div>
        </section>

        {/* Filter Categories */}
        <section className="py-12 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Explore Our Khajjiar Paragliding Adventures
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Browse through our collection of breathtaking paragliding photos from Mini Switzerland of India
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    filter === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-blue-50 shadow-md'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Photo Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                      <p className="text-sm opacity-90">{image.description}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Click to View
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">Real experiences from paragliding adventurers in Khajjiar</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for Your Khajjiar Adventure?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of satisfied customers who have experienced the thrill of paragliding 
              in Mini Switzerland of India. Book your tandem flight today!
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button 
                onClick={() => handleWhatsAppRedirect("Hi! I want to book a paragliding flight in Khajjiar. Please share the details and pricing.")}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Book via WhatsApp
              </button>
              <button 
                onClick={() => handleWhatsAppRedirect("Hi! I need more information about paragliding packages in Khajjiar and Dalhousie.")}
                className="border-2 border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-300"
              >
                Get Information
              </button>
            </div>
            <div className="mt-8 flex items-center justify-center text-blue-100">
              <Phone className="w-5 h-5 mr-2" />
              <span>WhatsApp: +91-{whatsappNumber}</span>
            </div>
          </div>
        </section>

        {/* Modal for Image Viewing */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200 z-10"
                aria-label="Close image"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white font-bold text-2xl mb-2">{selectedImage.title}</h3>
                <p className="text-gray-200">{selectedImage.description}</p>
                <button 
                  onClick={() => handleWhatsAppRedirect(`Hi! I'm interested in this: ${selectedImage.title}. Please provide more details about paragliding in Khajjiar.`)}
                  className="mt-4 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Book This Experience
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ParaglidingGallery;