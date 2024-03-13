'use client'
import About from '@/components/About';
import { Team } from "@/components/Team";
import Hero from '@/components/Hero'
import Footer from "@/components/Footer";
import Stories from '@/components/Stories'
import  Navbar from "@/components/Navbar";
import Swiper from '@/components/Swiper'
import '../styles/global.css'

 const Home = () => (
  <>
    <Navbar/>
    <Hero/>
    <About/>
    <Swiper/>
    <Team />
    <Footer/>
  </>
);

export default Home;



