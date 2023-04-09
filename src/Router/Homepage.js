import React from 'react';
import HeroSection from '../Components/HeroSection/HeroSection';
import Hightlight from '../Components/Hightlight/Hightlight';
import Testimonials from '../Components/Testimonials/Testimonials';
import AboutSection from '../Components/AboutSection/AboutSection';

export default function Homepage() {
  return (
    <>
       <HeroSection />
       <Hightlight />
       <Testimonials />
       <AboutSection />
    </>
  )
}
