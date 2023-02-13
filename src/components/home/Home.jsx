import React from 'react'
import AboutDesc from '../about/AboutDesc'
import Experience from '../about/Experience'
import CardPortofolio from '../portofolio/CardPortofolio'
import ServicesDesc from '../services/ServicesDesc'
import HomeDesc from './HomeDesc'

const Home = () => {
  return (
    <>
    <HomeDesc/>
    <AboutDesc/>
    <ServicesDesc/>
    <Experience/>
    <CardPortofolio/>
    </>
  )
}

export default Home
