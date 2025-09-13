export default function ServicesInfo(){
 return(
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
 )
}