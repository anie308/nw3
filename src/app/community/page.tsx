import CommunityHero from '@/components/CommunityHero'
import Diverse from '@/components/Diverse'
import Subscribe from '@/components/Subscribe'
import Footer from '@/components/Footer'
import React from 'react'
import NavHeader from '@/components/Header'

function Community() {
  return (
    <div className=''>
      <NavHeader/>
        <CommunityHero/>
        <Diverse/>
        <Subscribe/>
        <Footer/>
    </div>
  )
}

export default Community