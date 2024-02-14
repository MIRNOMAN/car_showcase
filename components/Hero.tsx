"use client";

import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';



const Hero = () => {
  
   useEffect(() => {
      AOS.init({
           duration:3000,
           once: false,
         })
   }, [])
  return (
    <div className='relative'>

     <video autoPlay loop muted playsInline >
     <source className='object-fill' src="/Toyota_Supra_-_Cinematic(1080p).mp4" type="video/mp4" />
    
     </video>
       <div data-aos="fade-up" data-aos-duration="3000" >
       <h1 className='absolute -mt-40 md:ml-36 mr-24  text-white text-5xl font-extrabold' data-aos-easing="ease-in-out"  data-aos-delay="3000"  >Accused Drug Lord's Rare Toyota Supra Sells for Record $308K: The 'Fast and Furious' Franchise Made Car Famous</h1>
       </div>
    </div>
  )
}

export default Hero