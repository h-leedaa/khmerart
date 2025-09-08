import React from 'react'
import MainH from '../components/MainH'
import Footer from '../components/Footer'
import About from './About'
import MainA from '../components/MainA'
import MainAb from '../components/MainAb'
import Contact from './Contact'


function Home() {
  return (
    <div>
        <MainH/>
        <MainAb/>
        <MainA/>
        <Contact/>
       
    </div>
  )
}

export default Home