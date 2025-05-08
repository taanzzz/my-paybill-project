import React from 'react'
import BillCarousel from '../../Component/Banner/BillCarousel'
import TrustedPartners from '../../Component/TrustedPartners/TrustedPartners'
import BillSection from '../../Component/BillSection/BillSection'
import BillServiceCards from '../../Component/BillServiceCards/BillServiceCards'
import Counting from '../../Component/Counting/Counting'

const Home = () => {
  return (
    <div>
      <BillSection></BillSection>
      <BillCarousel></BillCarousel>
      <TrustedPartners></TrustedPartners>
      <BillServiceCards></BillServiceCards>
      <Counting></Counting>
    </div>
  )
}

export default Home
