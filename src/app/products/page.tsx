import Footer from '@/components/Footer'
import ProductHero from '@/components/ProductHero'
import Selcto from '@/components/SelctoSection'
import React from 'react'

function Products() {
  return (
    <div className='bg-background'>
      <ProductHero/>
      <Selcto/>
      <Footer/>
    </div>
  )
}

export default Products