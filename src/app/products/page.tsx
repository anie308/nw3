import Footer from '@/components/Footer'
import NavHeader from '@/components/Header'
import ProductHero from '@/components/ProductHero'
import Selcto from '@/components/SelctoSection'
import React from 'react'

function Products() {
  return (
    <div className='bg-background'>
      <NavHeader/>
      <ProductHero/>
      <Selcto/>
      <Footer/>
    </div>
  )
}

export default Products