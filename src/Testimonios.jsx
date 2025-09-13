import { Star } from 'lucide-react';

export default function Testimonios(){

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


 return(
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
 )
}