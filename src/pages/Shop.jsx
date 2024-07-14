import React from 'react'
import Hero from "../Components/Hero/Hero"
import Popular from '../Components/Popular/Popular'
import { Offer } from '../Components/offers/Offer'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'

const Shop = () => {
  return (
    // <div>Shop</div>
    <div>
    <Hero />
    <Popular />
    <Offer />
    <NewCollections />
    <NewsLetter />
    <RelatedProducts />
    </div>
  )
}

export default Shop