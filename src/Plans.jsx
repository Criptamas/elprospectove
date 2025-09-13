export default function Plans({id}){
 return(
    <section id={id} className="py-20 px-4 bg-gradient-to-r from-purple-800/50 to-blue-800/50 backdrop-blur-sm">
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

 )
}