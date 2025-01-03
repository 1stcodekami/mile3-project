"use client";

import React from 'react';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import Link from 'next/link';

const HomeContent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);
  return (
    <section className="hero h-screen flex relative items-center bg-cover bg-center md:h-70vh md:p-5 md:text-center" style={{ backgroundImage: "url('/homeimg1.jpg')" }}>
     
      <div className="pl-0 md:pl-[30%] pt-[80%] xl:pt-[35%] xl:pl-[35%] 2xl:pt-[35%] 2xl:pl-[35%]  md:pt-[40%] sm:pl-[15%] sm:pt-[70%] sm:text-0.9rem text-cyan-400 text-center">
        <p className="text-2xl mt-4 pb-5 drop-shadow-md" data-aos="fade-up">Your ultimate destination for top-tier online watches</p>
        <button className="bg-black text-cyan-400  border-none px-4 py-2 sm:px-3 sm:py-4 text-1rem sm:text-0.9rem cursor-pointer rounded-md transition-colors duration-300 hover:bg-gray-700"><Link href={"/shope"}>Shop Now</Link></button>
      </div>
    </section>
  );
};


export default HomeContent;
