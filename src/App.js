import Header from './Components/Header/Header';
import HeroSection from './Components/HeroSection/HeroSection';
import Hightlight from './Components/Hightlight/Hightlight';
import Testimonials from './Components/Testimonials/Testimonials';
import AboutSection from './Components/AboutSection/AboutSection';
import './App.css';

function App() {
  return (
    <div className='App'>
       <Header />
       <HeroSection />
       <Hightlight />
       <Testimonials />
       <AboutSection />
    </div>
  );
}

export default App;
