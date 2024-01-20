import AboutHero from '@/components/AboutHero'
import AboutMission from '@/components/AboutMission'
import Footer from '@/components/Footer'
import NavHeader from '@/components/Header'
import React from 'react'

function About() {
  return (
    <div className=''>
      <NavHeader/>
        <AboutHero/>
        <AboutMission/>
        <Footer/>
    </div>
  )
}

export default About