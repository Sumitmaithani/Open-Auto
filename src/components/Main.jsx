import React from 'react'
import Footer from './subcomponents/Footer';
import Header from "./subcomponents/Header";
import Hero from './subcomponents/Hero';
import Landing from './subcomponents/Landing';

const Main = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Landing />
        <Footer />
    </div>
  )
}

export default Main