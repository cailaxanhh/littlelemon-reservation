import Header from './Components/Header/Header';
import HeroSection from './Components/HeroSection/HeroSection';
import Hightlight from './Components/Hightlight/Hightlight';
import Testimonials from './Components/Testimonials/Testimonials';
import './App.css';

function App() {
  return (
    <div className='App'>
       <Header />
       <HeroSection />
       <Hightlight />
       <Testimonials />
    </div>
  );
}

export default App;
