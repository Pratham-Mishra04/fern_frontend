import Model from '@/components/model/Model';
import React from 'react';
import LandingCards from './landingCards';

const HeroSection = () => {
  return (
    <>
      <div className="h-[90vh] flex justify-around items-center">
        <div className="h-full w-[50%] font-Poppins font-bold  px-12 flex gap-5 flex-col justify-center items-center">
          <p className="text-7xl w-full tracking-[5rem]">FERN.</p>
          <p className="text-3xl w-full tracking-[1rem]">- Easy & Fast</p>
          <p className="text-3xl w-full tracking-[1rem]">Investment Analysis</p>
        </div>
        <div className="h-full w-[50%] flex justify-around items-center">
          <Model />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
