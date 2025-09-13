import React, { useState, useEffect } from 'react';
import { Star, Phone, Instagram, Music, ChevronDown } from 'lucide-react';

const NumerologyLanding = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const testimonials = [
    {
      name: "María González",
      comment: "El Prospecto cambió mi vida completamente. Sus predicciones son increíblemente precisas y su orientación me ha dado la claridad que necesitaba.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b9f3c0ec?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Carlos Rodríguez",
      comment: "Las masterclass son extraordinarias. He aprendido tanto sobre numerología y cómo aplicarla en mi día a día. ¡Totalmente recomendado!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Ana Martínez",
      comment: "La asesoría personalizada es increíble. El Prospecto tiene un don especial y siempre acierta con sus lecturas. Mi suerte ha cambiado para mejor.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Diego Pérez",
      comment: "Formar parte del grupo VIP ha sido la mejor inversión que he hecho. Las reuniones diarias me mantienen enfocado y con energía positiva.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
    }
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-300 rounded-full animate-pulse opacity-70"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-300 rounded-full animate-ping opacity-60"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-blue-300 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute top-60 left-1/2 w-1 h-1 bg-yellow-400 rounded-full animate-ping opacity-70"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
      </div>

      {/* Fixed Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-purple-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
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

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 relative inline-block">
            <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden border-4 border-yellow-300 shadow-2xl transform hover:scale-105 transition-all duration-500 hover:border-yellow-200 hover:shadow-yellow-300/30">
              <img 
                src="/assets/hermesmanos.jpg" 
                alt="El Prospecto" 
                className="w-full h-full object-cover hover:brightness-110 transition-all duration-500"
              />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-300 rounded-full animate-bounce opacity-80"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-400 rounded-full animate-pulse opacity-70"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-400 bg-clip-text text-transparent animate-pulse">
            EL PROSPECTO
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-200">
            Numerólogo y Experto Lotero
          </p>
          <p className="text-lg md:text-xl mb-12 text-purple-100 max-w-2xl mx-auto leading-relaxed">
            Descubre como poner la suerte a tu favor con el mejor metodo de toda Venezuela entera. 
            Más de 600 clientes confían en mi guía para transformar sus vidas.
          </p>
          
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-yellow-300" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-800/50 to-blue-800/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-300">
            ¿Quién es El Prospecto?
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Con más de 15 años de experiencia en numerología y astrología, he dedicado mi vida 
                a descifrar los misterios del universo y compartir esta sabiduría con aquellos que 
                buscan claridad y propósito pleno y claro para ganar en las loterias de animalitos.
              </p>
              <p className="text-lg leading-relaxed">
                Mi método único combina la numerología pitagórica, la astrología occidental y 
                técnicas ancestrales de lectura energética para ofrecerte una guía precisa y 
                transformadora.
              </p>
              <p className="text-lg leading-relaxed">
                He guiado a más de 6000 personas en su camino hacia la abundancia, el amor y el 
                éxito, utilizando el poder de la experiencia para poder sacar los mejores pronosticos para los datos en las loterias de animalitos.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 bg-gradient-to-br from-yellow-300/20 to-purple-400/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-yellow-300/30">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-yellow-300 mb-2">6000+</div>
                    <div className="text-lg text-purple-200">Clientes VIP</div>
                    <div className="text-sm text-purple-300">Transformados</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-yellow-300">
            ¿Qué Incluye tu Suscripción VIP?
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🔮</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-yellow-300">Asesoría Personalizada</h3>
              <p className="text-purple-200 leading-relaxed">
                Sesiones individuales donde te mantengo al dia de las jugadas hora a hora para ganar FIJO en la loterias de animalitos.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-yellow-300">Comunicacion Exclusivas</h3>
              <p className="text-purple-200 leading-relaxed">
                Precisamente mi infromacion es DIRECTA DERECHA y SIN CAIDA porque no hay intermediarios SOLO HABLAMOS TU Y YO Y TE GUIO POR LE MEJOR CAMINO.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-yellow-300">Grupo amplio con comunidad amena</h3>
              <p className="text-purple-200 leading-relaxed">
                Encuentros diarios donde compartimos energías, entre el chat de la comunidad mas de seis mil.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🃏</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-yellow-300">Aciertos fijos </h3>
              <p className="text-purple-200 leading-relaxed">
              Sin caida en mi metodo ganas mas ye inviertes menos. Sepa invertir su dinero el dia de hoy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="planes" className="py-20 px-4 bg-gradient-to-r from-purple-800/50 to-blue-800/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-yellow-300">
            Elige tu Plan VIP
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Plan Quincenal */}
            <div className="bg-gradient-to-br from-purple-700/80 to-purple-800/80 p-8 rounded-2xl backdrop-blur-sm border border-purple-400/30 hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-yellow-300">Plan Quincenal</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">700</span>
                  <span className="text-xl text-purple-200 ml-2">Bs</span>
                  <div className="text-purple-300 text-sm">cada 15 días</div>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center text-purple-200">
                    <span className="text-yellow-300 mr-2">✓</span>
                    Datos hora a hora 
                  </li>
                  <li className="flex items-center text-purple-200">
                    <span className="text-yellow-300 mr-2">✓</span>
                    Un solo ganador por hora en la jugada para guacharo 
                  </li>
                  <li className="flex items-center text-purple-200">
                    <span className="text-yellow-300 mr-2">✓</span>
                    Ganancias reales y comunicacion TRANSPARENTE.
                  </li>
                  <li className="flex items-center text-purple-200">
                    <span className="text-yellow-300 mr-2">✓</span>
                    3 aciertos MINIMO
                  </li>
                </ul>
                <a 
                target="_blank" 
                rel="noopener noreferrer"
                href='https://Wa.me/5804123290941?text=PLANQUINCENAL' className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-colors duration-300">
                  Elegir Plan
                </a>
              </div>
            </div>

            {/* Plan Mensual - Featured */}
            <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 p-8 rounded-2xl backdrop-blur-sm border-2 border-yellow-300 hover:scale-105 transition-transform duration-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-300 text-purple-900 px-4 py-1 rounded-full text-sm font-bold">
                MEJOR PLAN
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-yellow-300">Plan Mensual</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">1000</span>
                  <span className="text-xl text-purple-200 ml-2">Bs</span>
                  <div className="text-purple-300 text-sm">cada mes</div>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center text-purple-200">
                    <span className="text-yellow-300 mr-2">✓</span>
                    TODO LO DEL PLAN QUINCENAL
                  </li>
                  <li className="flex items-center text-purple-200">
                    <span className="text-yellow-300 mr-2">✓</span>
                    MAS ACIERTO Y MUCHA MAS PRECISION 
                  </li>
                  <li className="flex items-center text-purple-200">
                    <span className="text-yellow-300 mr-2">✓</span>
                    PAGAS MENOS Y GANAS MAS
                  </li>
                  <li className="flex items-center text-purple-200">
                    <span className="text-yellow-300 mr-2">✓</span>
                    ACIERTOS A TODA HORA
                  </li>
                  <li className="flex items-center text-purple-200">
                    <span className="text-yellow-300 mr-2">✓</span>
                    Soporte prioritario
                  </li>
                </ul>
                <a 
                target="_blank" 
                rel="noopener noreferrer"
                href='https://Wa.me/5804123290941?text=PLANMENSUAL' className="w-full bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold py-3 px-6 rounded-xl transition-colors duration-300">
                  Elegir Plan
                </a>
              </div>
            </div>

            {/* Plan Semanal */}
            <div className="bg-gradient-to-br from-blue-700/80 to-blue-800/80 p-8 rounded-2xl backdrop-blur-sm border border-blue-400/30 hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-yellow-300">Plan Semanal</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">500</span>
                  <span className="text-xl text-purple-200 ml-2">Bs</span>
                  <div className="text-purple-300 text-sm">cada semana</div>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center text-purple-200">
                    <span className="text-yellow-300 mr-2">✓</span>
                    Datos hora a hora
                  </li>
                  <li className="flex items-center text-purple-200">
                    <span className="text-yellow-300 mr-2">✓</span>
                    Minimo 2 aciertos por dia
                  </li>
                  <li className="flex items-center text-purple-200">
                    <span className="text-yellow-300 mr-2">✓</span>
                    Solo jugamos guacharo activo
                  </li>
                  <li className="flex items-center text-purple-200">
                    <span className="text-yellow-300 mr-2">✓</span>
                    Soporte basico 
                  </li>
                </ul>
                <a 
                target="_blank" 
                rel="noopener noreferrer"
                href='https://Wa.me/5804123290941?text=PLANMENSUAL' className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-colors duration-300">
                  Elegir Plan
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-yellow-300">
            Lo que Dicen Nuestros Clientes VIP
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-purple-700/50 to-purple-800/50 p-6 rounded-2xl backdrop-blur-sm border border-purple-400/30 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-purple-200 text-sm leading-relaxed">{testimonial.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4 bg-gradient-to-r from-purple-800/50 to-blue-800/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-yellow-300">
            ¿Listo para Transformar tu Destino?
          </h2>
          <p className="text-xl mb-12 text-purple-200 max-w-2xl mx-auto">
            Contacta conmigo a través de cualquiera de estas plataformas y comienza tu viaje hacia la abundancia y la claridad espiritual para mejorar tu futuro YA MISMO.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="https://Wa.me/5804123290941?text=LISTO" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/30"
            >
              <Phone className="w-6 h-6 mr-3" />
              WHATSAPP
            </a>
            
            <a 
              href="https://instagram.com/elprospectove" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/30"
            >
              <Instagram className="w-6 h-6 mr-3" />
              INSTAGRAM
            </a>
            
            <a 
              href="https://tiktok.com/@elprospectove" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center bg-black hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-gray-500/30"
            >
              <Music className="w-6 h-6 mr-3" />
              TIKTOK
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-purple-400/30">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-yellow-300 mb-2">EL PROSPECTO</h3>
            <p className="text-purple-200">Numerólogo y DATERO EXPERTO</p>
          </div>
          
          <div className="mb-6">
            <p className="text-purple-300 text-sm max-w-2xl mx-auto">
              Transformando vidas a través de la sabiduría de los números Y LOS ACIERTOS REALES. 
              Más de 6000 clientes confían en MI guía precisa para alcanzar su máximo potencial.
            </p>
          </div>
          
          <div className="border-t border-purple-400/20 pt-6">
            <p className="text-purple-400 text-sm">
              © 2025 El Prospecto. Todos los derechos reservados. | Unete ya.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NumerologyLanding;