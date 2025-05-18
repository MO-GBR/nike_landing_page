import React from 'react'
import "./App.css"
import Header from './Sections/Header'
import Hero from './Sections/Hero'
import PopularProducts from './Sections/PopularProducts'
import AboutUs from './Sections/AboutUs'
import Services from './Sections/Services'
import SpecialOffer from './Sections/SpecialOffer'
import Reviews from './Sections/Reviews'
import Subscribe from './Sections/Subscribe'
import Footer from './Sections/Footer'

const App = () => {
  return (
    <main className='overflow-hidden'>
      <Header />
      <Hero />
      <PopularProducts />
      <AboutUs />
      <Services />
      <SpecialOffer />
      <Reviews />
      <Subscribe />
      <Footer />
    </main>
  )
}

export default App