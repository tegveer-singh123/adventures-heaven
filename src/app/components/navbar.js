import Image from "next/image";
import Link from "next/link";
import { ChevronDown, MapPin, Menu, Phone, Star, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on page change
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
    setMobileDropdownOpen(false);
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-2 sm:mb-0">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <Link href="tel:+919817404544" className="hover:text-yellow-300 transition-colors">
                +91 9817404544
              </Link>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Khajjiar, Himachal Pradesh</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-300 font-semibold">4.9/5</span>
            <span className="text-blue-100">• 3000+ Happy Customers</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'} text-white md:px-20 relative z-50 transition-all duration-300`}>
        <nav className="flex items-center justify-between py-4 px-6 w-full relative">
          
          {/* Enhanced Logo */}
          <div className="h-16 w-32 flex items-center justify-center z-50 relative">
            <Link href="/" className="transform hover:scale-105 transition-transform duration-300">
              <Image 
                src="/images/logo4.png" 
                alt="Adventure Heaven - Best Paragliding in Khajjiar" 
                width={120} 
                height={80}
                className="drop-shadow-lg"
              />
            </Link>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className={`hidden lg:flex items-center absolute left-1/2 -translate-x-1/2 ${scrolled ? 'border-blue-200/30 bg-white/90 text-gray-800' : 'border-white/30 bg-white/10 text-white'} border backdrop-blur-lg shadow-2xl px-8 py-3 rounded-full transition-all duration-300`}>
            <div className="flex space-x-8">
              <Link 
                href="/" 
                className={`nav-link font-semibold hover:text-blue-500 transition-all duration-300 ${pathname === '/' ? 'text-blue-500 border-b-2 border-blue-500' : ''}`}
              >
                Home
              </Link>

              {/* Enhanced Activities Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`nav-link font-semibold hover:text-blue-500 transition-all duration-300 flex items-center gap-1 ${pathname.includes('/paragliding') || pathname.includes('/ziplining') || pathname.includes('/hotairballooning') ? 'text-blue-500' : ''}`}
                >
                  Adventures
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {dropdownOpen && (
                  <div className="absolute left-0 mt-3 w-80 bg-white text-gray-800 rounded-2xl shadow-2xl z-50 border border-gray-100 overflow-hidden">
                    <div className="p-2">
                      <Link 
                        href="/paragliding" 
                        className="flex items-center p-4 hover:bg-blue-50 rounded-xl transition-all duration-300 group"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                          <span className="text-white text-xl">🪂</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800 group-hover:text-blue-600">Paragliding in Khajjiar</h3>
                          <p className="text-sm text-gray-600">Soar over Mini Switzerland</p>
                        </div>
                      </Link>
                      
                      <Link 
                        href="/ziplining" 
                        className="flex items-center p-4 hover:bg-green-50 rounded-xl transition-all duration-300 group"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                          <span className="text-white text-xl">🏃</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800 group-hover:text-green-600">Ziplining Adventure</h3>
                          <p className="text-sm text-gray-600">High-speed forest adventure</p>
                        </div>
                      </Link>
                      
                      <Link 
                        href="/hotairballooning" 
                        className="flex items-center p-4 hover:bg-orange-50 rounded-xl transition-all duration-300 group"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                          <span className="text-white text-xl">🎈</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800 group-hover:text-orange-600">Hot Air Ballooning</h3>
                          <p className="text-sm text-gray-600">Peaceful aerial experience</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link 
                href="/about" 
                className={`nav-link font-semibold hover:text-blue-500 transition-all duration-300 ${pathname === '/about' ? 'text-blue-500 border-b-2 border-blue-500' : ''}`}
              >
                About Us
              </Link>

              <Link 
                href="/gallery" 
                className={`nav-link font-semibold hover:text-blue-500 transition-all duration-300 ${pathname === '/gallery' ? 'text-blue-500 border-b-2 border-blue-500' : ''}`}
              >
                Gallery
              </Link>
            </div>
          </div>

          {/* Enhanced CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="https://wa.me/9817404544?text=Hello%2C%20I%20want%20to%20book%20adventure%20activities%20in%20Khajjiar"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Book Now</span>
            </Link>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden bg-white/20 backdrop-blur-lg p-2 rounded-lg hover:bg-white/30 transition-all duration-300"
          >
            {isOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
          </button>
        </nav>

        {/* Enhanced Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className={`fixed top-0 right-0 w-80 h-full bg-gradient-to-br from-gray-900/95 to-blue-900/95 backdrop-blur-lg text-white z-[9999] transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out lg:hidden shadow-2xl`}
        >
          <div className="p-6">
            <button 
              onClick={() => setIsOpen(false)} 
              className="absolute top-6 right-6 bg-white/20 p-2 rounded-lg hover:bg-white/30 transition-all"
            >
              <X size={24} />
            </button>

            <div className="mt-16 space-y-6">
              <Link 
                href="/" 
                className="block text-xl font-semibold py-3 px-4 rounded-lg hover:bg-white/10 transition-all"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Activities Dropdown */}
              <div>
                <button
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  className="w-full text-left text-xl font-semibold py-3 px-4 rounded-lg hover:bg-white/10 transition-all flex items-center justify-between"
                >
                  Adventures
                  <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {mobileDropdownOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link 
                      href="/paragliding" 
                      className="block py-3 px-4 text-blue-300 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                      onClick={() => { setMobileDropdownOpen(false); setIsOpen(false); }}
                    >
                      🪂 Paragliding
                    </Link>
                    <Link 
                      href="/ziplining" 
                      className="block py-3 px-4 text-green-300 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                      onClick={() => { setMobileDropdownOpen(false); setIsOpen(false); }}
                    >
                      🏃 Ziplining
                    </Link>
                    <Link 
                      href="/hotairballooning" 
                      className="block py-3 px-4 text-orange-300 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                      onClick={() => { setMobileDropdownOpen(false); setIsOpen(false); }}
                    >
                      🎈 Hot Air Balloon
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                href="/about" 
                className="block text-xl font-semibold py-3 px-4 rounded-lg hover:bg-white/10 transition-all"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>

              <Link 
                href="/gallery" 
                className="block text-xl font-semibold py-3 px-4 rounded-lg hover:bg-white/10 transition-all"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </Link>

              <div className="pt-6 border-t border-white/20">
                <Link
                  href="https://wa.me/9817404544?text=Hello%2C%20I%20want%20to%20book%20adventure%20activities%20in%20Khajjiar"
                  className="block w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-xl font-bold text-center shadow-lg transform hover:scale-105 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  📞 Book Your Adventure
                </Link>
              </div>

              <div className="pt-4 text-center text-sm text-blue-200">
                <p className="flex items-center justify-center mb-2">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  4.9/5 Rating • 3000+ Happy Customers
                </p>
                <p>Best Adventure Activities in Khajjiar</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <style jsx>{`
        .nav-link {
          position: relative;
          transition: all 0.3s ease;
        }
        .nav-link:hover {
          transform: translateY(-2px);
        }
      `}</style>
    </>
  );
}