import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Products from './Products';
 function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
     
      <Footer />
    </>
  );
}

export default Home;
