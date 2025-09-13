import Header from './Header';
import BackgroundElements from './BackgroundElements';
import Hero from './Hero'
import About from './About'
import ServicesInfo from './ServicesInfo';
import Plans from './Plans'
import Testimonios from './Testimonios'
import Contact from './Contact'
import Footer from './Footer';


const NumerologyLanding = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-x-hidden">  {/* research it */}

      {/* Animated Background Elements */}
      <BackgroundElements />
      <Header />

      {/* Hero Section */}
      <Hero id='home' />

      {/* About Section */}
      <About />


      {/* Services Section */}
      <ServicesInfo />
      {/* Pricing Section */}
      <Plans id='planes'/>
      {/* Testimonials Section */}
      <Testimonios />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NumerologyLanding;