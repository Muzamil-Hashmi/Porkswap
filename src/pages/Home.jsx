import React from 'react'
import Cards from '../component/element/Cards'
import Hero from '../component/element/Hero'
import Plateform from '../component/element/Plateform'
import Pswap from '../component/element/Pswap'
import Roadmap from '../component/element/Roadmap'
import Tooken from '../component/element/Tooken'
import Work from '../component/element/Work'
import Faqs from '../component/utils/Faqs'
import Tabel from '../component/element/Tabel'
import Par from '../component/element/Par'

export default function 
() {
  return (
   
    <>
  

   <Hero />
    
   <div className="home">

   <Cards/>
   <Work/>
   <Tooken/>
   <Plateform/>
   
  
   <Pswap/>
   <Tabel/>
   <Roadmap/>
   <Faqs/>
   </div>
   </>
  )
}
