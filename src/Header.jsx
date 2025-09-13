import React, {useState, useEffect} from "react";

export default function Header () {
 const [isScrolled, setIsScrolled] = useState(false)

   useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); //research it
  };

  return(
      <header className={`fixed h-12 top-2 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-400/70 backdrop-blur-md shadow-lg rounded-3xl' : 'bg-transparent'
      }`}>
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-center">
            <div className="flex space-x-8 md:space-x-12">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-white hover:text-yellow-300 transition-colors duration-300 font-medium"
              >
                INICIO
              </button>
              <button 
                onClick={() => scrollToSection('planes')}
                className="text-white hover:text-yellow-300 transition-colors duration-300 font-medium"
              >
                PLANES
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="text-white hover:text-yellow-300 transition-colors duration-300 font-medium"
              >
                CONTACTO
              </button>
            </div>
          </div>
        </nav>
      </header>
  )
} 