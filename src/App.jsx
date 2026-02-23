import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import HeroBanner from './components/HeroBanner'
import CompanyIcons from './components/companyIcons'
import FinancialSuiteSection from './components/FinancialSuiteSection'
import FasterApi from './components/FasterApi'
import WhyUzoFin from './components/WhyUzoFin'
import IndustryStandardSection from './components/IndustryStandardSection'
import StartHere from './components/StartHere'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <HeroBanner />
      <CompanyIcons />
      <FinancialSuiteSection />
      <FasterApi />
      <WhyUzoFin />
      <IndustryStandardSection />
      <StartHere />
      <Footer />
    </>
  )
}

export default App
