import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  MapPin, 
  Phone, 
  Clock, 
  Sparkles, 
  Scissors, 
  Droplets, 
  Heart,
  ChevronRight,
  Crown,
  Star,
  Sun,
  Palette,
  ShoppingBag
} from 'lucide-react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Smooth scroll function for navigation
  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 13 services matching your blade.php template
  const services = [
    {
      title: "Bridal Dressing",
      description: "Complete bridal makeover and styling for your perfect, unforgettable special day.",
      icon: <Crown className="w-8 h-8 text-[#C5A059]" />,
      highlight: true
    },
    {
      title: "Normal Dressing",
      description: "Professional and elegant dressing services tailored for any special occasion.",
      icon: <Star className="w-8 h-8 text-[#C5A059]" />,
      highlight: true
    },
    {
      title: "Facial treatment",
      description: "Rejuvenate your skin with our premium therapies designed to cleanse, exfoliate, and nourish.",
      icon: <Sparkles className="w-8 h-8 text-[#C5A059]" />
    },
    {
      title: "Cleanup",
      description: "Deep cleansing to remove impurities and leave your skin feeling fresh and glowing.",
      icon: <Droplets className="w-8 h-8 text-[#C5A059]" />
    },
    {
      title: "Waxing",
      description: "Enjoy smooth, flawless skin with our gentle, effective, and hygienic waxing services.",
      icon: <Sun className="w-8 h-8 text-[#C5A059]" />
    },
    {
      title: "Threading",
      description: "Precise and gentle hair removal for perfectly shaped eyebrows and smooth skin.",
      icon: <Scissors className="w-8 h-8 text-[#C5A059]" />
    },
    {
      title: "Manicure",
      description: "Treat your hands to the ultimate pampering experience for perfectly polished nails.",
      icon: <Heart className="w-8 h-8 text-[#C5A059]" />
    },
    {
      title: "Pedicure",
      description: "Relaxing foot care treatment to keep your feet soft, smooth, and beautiful.",
      icon: <Heart className="w-8 h-8 text-[#C5A059]" />
    },
    {
      title: "Hair cuts",
      description: "Get a stunning new style from our expert stylists, tailored to your face shape.",
      icon: <Scissors className="w-8 h-8 text-[#C5A059]" />
    },
    {
      title: "Nail Art",
      description: "Express yourself with custom, beautiful, and creative nail art designs.",
      icon: <Palette className="w-8 h-8 text-[#C5A059]" />
    },
    {
      title: "Oil Treatment",
      description: "Nourish your hair from the roots with our rich and revitalizing oil treatments.",
      icon: <Droplets className="w-8 h-8 text-[#C5A059]" />
    },
    {
      title: "Conditioner treatment",
      description: "Deep conditioning to restore moisture, shine, and health to your hair.",
      icon: <Sparkles className="w-8 h-8 text-[#C5A059]" />
    },
    {
      title: "Saree & party wear rent",
      description: "Choose from our beautiful collection of premium sarees and elegant party wear.",
      icon: <ShoppingBag className="w-8 h-8 text-[#C5A059]" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-gray-800 relative">
      
      {/* Floating Modern WhatsApp Button */}
      <a 
        href="https://wa.me/94704006309" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:bg-[#20bd5a] transition-all duration-300 flex items-center justify-center cursor-pointer"
        aria-label="Chat with us on WhatsApp"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="32" 
          height="32" 
          fill="currentColor" 
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c.003-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </a>

      {/* Navigation Bar */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
              <img 
                src="heroimg.png" 
                alt="Salon Leora Logo" 
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-[#C5A059] transition-colors uppercase tracking-wider text-sm font-medium">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-[#C5A059] transition-colors uppercase tracking-wider text-sm font-medium">Services</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-[#C5A059] transition-colors uppercase tracking-wider text-sm font-medium">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-[#C5A059] transition-colors uppercase tracking-wider text-sm font-medium">Contact</button>
              
              {/* Call Book Now Button */}
              <a 
                href="tel:0704006309"
                className="bg-[#C5A059] text-white px-6 py-2.5 rounded-full hover:bg-[#b08d4f] transition-colors shadow-md shadow-[#C5A059]/20 font-medium tracking-wide flex items-center gap-2"
              >
                <Phone className="w-4 h-4" /> Book Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 hover:text-[#C5A059] focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-1 text-center">
              <button onClick={() => { scrollToSection('home'); setIsMobileMenuOpen(false); }} className="block w-full py-3 text-gray-700 hover:text-[#C5A059] uppercase tracking-wider text-sm font-medium">Home</button>
              <button onClick={() => { scrollToSection('services'); setIsMobileMenuOpen(false); }} className="block w-full py-3 text-gray-700 hover:text-[#C5A059] uppercase tracking-wider text-sm font-medium">Services</button>
              <button onClick={() => { scrollToSection('about'); setIsMobileMenuOpen(false); }} className="block w-full py-3 text-gray-700 hover:text-[#C5A059] uppercase tracking-wider text-sm font-medium">About</button>
              <button onClick={() => { scrollToSection('contact'); setIsMobileMenuOpen(false); }} className="block w-full py-3 text-gray-700 hover:text-[#C5A059] uppercase tracking-wider text-sm font-medium">Contact</button>
              <div className="pt-4">
                
                {/* Mobile Call Book Now Button */}
                <a 
                  href="tel:0704006309"
                  className="inline-flex bg-[#C5A059] text-white px-8 py-3 rounded-full hover:bg-[#b08d4f] transition-colors shadow-md shadow-[#C5A059]/20 font-medium tracking-wide items-center gap-2"
                >
                  <Phone className="w-4 h-4" /> Book Now
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-24 pb-12 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-50/80 to-white"></div>
          <div className="absolute top-20 left-[-10%] w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-[-5%] w-72 h-72 bg-[#C5A059]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between mt-12">
          <div className="w-full lg:w-1/2 text-center lg:text-left pt-10 lg:pt-0">
            <h2 className="text-[#C5A059] font-medium tracking-[0.2em] uppercase text-sm mb-4">Welcome to Excellence</h2>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-gray-900 leading-tight mb-6">
              Discover Your <br/>
              <span className="italic text-[#C5A059]">Inner Glow</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Experience the pinnacle of beauty and relaxation at Salon LEORA. 
              Let our experts enhance your natural beauty with our premium salon services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#services" 
                onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
                className="bg-[#C5A059] text-white px-8 py-4 rounded-full hover:bg-[#b08d4f] transition-all shadow-lg shadow-[#C5A059]/30 font-medium tracking-wide flex items-center justify-center gap-2"
              >
                Our Services <ChevronRight className="w-4 h-4" />
              </a>
              <a 
                href="tel:0704006309"
                className="bg-white text-[#C5A059] border border-[#C5A059]/30 px-8 py-4 rounded-full hover:bg-[#C5A059]/5 transition-all font-medium tracking-wide flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" /> Book Now
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 mt-16 lg:mt-0 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#C5A059]/20 to-transparent rounded-full blur-2xl transform scale-110"></div>
              {/* Top Hero Image */}
              <img 
                src="img1.png" 
                alt="Salon Leora Hero" 
                className="relative z-10 w-full max-w-md h-[500px] object-cover shadow-2xl rounded-t-full rounded-b-xl border-4 border-white bg-gray-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#C5A059] font-medium tracking-[0.2em] uppercase text-sm mb-2">What We Offer</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-gray-900">Our Premium Services</h3>
            <div className="w-20 h-1 bg-[#C5A059] mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              // Apply specific styling if the service is marked as highlighted
              const bgClass = service.highlight 
                ? 'bg-[#C5A059]/15 border-[#C5A059]/40 shadow-lg shadow-[#C5A059]/10' 
                : 'bg-[#FAFAFA] border-gray-100 hover:shadow-xl hover:shadow-[#C5A059]/5';

              return (
                <div 
                  key={index} 
                  className={`${bgClass} p-8 rounded-2xl border hover:border-[#C5A059]/30 transition-all duration-300 group`}
                >
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-serif text-gray-900 mb-3 group-hover:text-[#C5A059] transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About/Info Section */}
      <section id="about" className="py-20 bg-[#FAFAFA] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
              <h2 className="text-[#C5A059] font-medium tracking-[0.2em] uppercase text-sm mb-2">About Us</h2>
              <h3 className="text-3xl font-serif text-gray-900 mb-6">Elevating Beauty in Poddala</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Located just a stone's throw away from River Park, Salon LEORA is your local sanctuary for beauty and relaxation. We believe that every individual deserves to feel confident and radiant.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our team of experienced professionals is dedicated to providing personalized treatments using only the finest products, ensuring you leave our salon feeling refreshed, revitalized, and absolutely beautiful.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-[#C5A059]/10 p-2 rounded-lg text-[#C5A059]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900">Expert Staff</h5>
                    <p className="text-sm text-gray-500">Highly trained beauticians</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-[#C5A059]/10 p-2 rounded-lg text-[#C5A059]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900">Relaxing Vibe</h5>
                    <p className="text-sm text-gray-500">A peaceful sanctuary</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 bg-gray-200 min-h-[400px] relative">
              {/* About Section Image */}
              <img 
                src="img2.png" 
                alt="Salon Interior" 
                className="absolute inset-0 w-full h-full object-cover bg-gray-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#C5A059] font-medium tracking-[0.2em] uppercase text-sm mb-2">Visit Us</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-gray-900">Get In Touch</h3>
            <div className="w-20 h-1 bg-[#C5A059] mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Address Card */}
            <div className="bg-[#FAFAFA] p-8 rounded-2xl border border-gray-100 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#C5A059]/10 text-[#C5A059] rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-medium text-gray-900 mb-3">Location</h4>
              <p className="text-gray-600 leading-relaxed">
                Salon LEORA,<br />
                Mepawala, Poddala<br />
                <span className="text-sm text-[#C5A059] font-medium mt-2 block">(about 100m from River Park)</span>
              </p>
            </div>

            {/* Phone Card */}
            <div className="bg-[#FAFAFA] p-8 rounded-2xl border border-gray-100 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#C5A059]/10 text-[#C5A059] rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-medium text-gray-900 mb-3">Call Us</h4>
              <p className="text-gray-600 mb-4">
                Call us to book your appointment or for any inquiries.
              </p>
              <a href="tel:0704006309" className="text-xl font-medium text-[#C5A059] hover:text-[#a88748] transition-colors">
                070 400 6309
              </a>
            </div>

            {/* Hours Card */}
            <div className="bg-[#FAFAFA] p-8 rounded-2xl border border-gray-100 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#C5A059]/10 text-[#C5A059] rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-medium text-gray-900 mb-3">Opening Hours</h4>
              <ul className="text-gray-600 space-y-2">
                <li className="flex justify-between max-w-xs mx-auto">
                  <span>Mon - Sun:</span>
                  <span className="font-medium text-gray-900">8:00 AM - 8:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#C5A059] text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-12">
            
            <div className="md:col-span-12 lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="flex items-center mb-6">
                <img 
                  src="heroimg.png" 
                  alt="Salon Leora Logo" 
                  className="h-16 w-auto object-contain"
                />
              </div>
              <p className="text-white/90 max-w-sm">
                Your premier destination for advanced beauty treatments, relaxing spa therapies, and exceptional hair care in Poddala.
              </p>
              <div className="flex gap-4 mt-6">
                <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#C5A059] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#C5A059] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>

            <div className="md:col-span-6 lg:col-span-4 text-center lg:text-left">
              <h4 className="text-lg font-medium text-white mb-6 uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-4">
                <li><button onClick={() => scrollToSection('home')} className="text-white/80 hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-white/80 hover:text-white transition-colors">Our Services</button></li>
                <li><button onClick={() => scrollToSection('about')} className="text-white/80 hover:text-white transition-colors">About Salon</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-white/80 hover:text-white transition-colors">Contact Us</button></li>
              </ul>
            </div>

            <div className="md:col-span-6 lg:col-span-4 text-center lg:text-left">
              <h4 className="text-lg font-medium text-white mb-6 uppercase tracking-wider">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 justify-center lg:justify-start">
                  <MapPin className="w-5 h-5 text-white/90 mt-1 shrink-0" />
                  <span className="text-white/90">Salon LEORA, Mepawala, Poddala<br/>(100m from River Park)</span>
                </li>
                <li className="flex items-center gap-3 justify-center lg:justify-start">
                  <Phone className="w-5 h-5 text-white/90 shrink-0" />
                  <a href="tel:0704006309" className="text-white/90 hover:text-white transition-colors">070 400 6309</a>
                </li>
              </ul>
            </div>
            
          </div>
          
          <div className="pt-8 border-t border-white/20 text-center">
            <p className="text-white/80 text-sm">
              &copy; {new Date().getFullYear()} Salon LEORA. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}