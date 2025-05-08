import React from 'react'
import BillCarousel from '../../Component/Banner/BillCarousel'
import TrustedPartners from '../../Component/TrustedPartners/TrustedPartners'
import BillSection from '../../Component/BillSection/BillSection'
import BillServiceCards from '../../Component/BillServiceCards/BillServiceCards'

const Home = () => {
  return (
    <div>
      <BillSection></BillSection>
      <BillCarousel></BillCarousel>
      <TrustedPartners></TrustedPartners>
      <BillServiceCards></BillServiceCards>
    </div>
  )
}

export default Home
