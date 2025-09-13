import { Phone, Instagram, Music } from 'lucide-react';

export default function Contact(){
 return(
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
 )
}