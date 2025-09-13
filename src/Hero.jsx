import { ChevronDown } from 'lucide-react';

export default function Hero ({ id }){
 return(
    <section id={id} className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 relative inline-block">
            <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden border-4 border-yellow-300 shadow-2xl transform hover:scale-105 transition-all duration-500 hover:border-yellow-200 hover:shadow-yellow-300/30">
              <img 
                src="/assets/hermesmanos.jpg" 
                alt="Foto de El Prospecto" 
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
 )
}