export default function About (){
 return(
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
 )
}