import React from 'react'
import MainLayout from '../components/MainLayout/MainLayout'
import Hero from './sections/Hero/Hero'
import About from './sections/About/About'
import Feature from './sections/Feature/Feature'
import CallToAction from './sections/CallToAction/CallToAction'
import Numbers from './sections/Numbers/Numbers'
import Newsletter from './sections/Newsletter/Newsletter'
import Stats from './sections/Stats/Stats'
import Blogs from './sections/Blog/Blogs'
import Logos from './sections/Logos/Logos'
import Testimonial from './sections/Testimonial/Testimonial'
import Contact from './sections/Contact/Contact'

const HomePage = () => {
  return <MainLayout>
    <Hero />
    <About />
    <Logos />
    <Feature />
    <Numbers />
    <Stats />
    <Blogs />
    <Testimonial />
    <Contact />
    <Newsletter />
  </MainLayout>
}

export default HomePage