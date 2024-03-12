'use client'
import "../styles/global.css"

import About from '@/components/About';
import Swiper from '@/components/Swiper';
import { Team } from "@/components/Team";
import Hero from '@/components/Hero'
import Footer from "@/components/Footer";
import Stories from '@/components/Stories'
import  Navbar from "@/components/Navbar";

 const Home = () => (
  <>
    <Navbar/>
    <Hero/>
    <About/>
    <Swiper />
    <Team />
    <Footer/>
  </>
);

export default Home;



