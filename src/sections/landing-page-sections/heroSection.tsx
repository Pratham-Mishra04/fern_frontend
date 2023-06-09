import Model from '@/components/model/Model';
import React from 'react';
import LandingCards from './landingCards';

const HeroSection = () => {
  return (
    <>
      <div className="h-[90vh] flex justify-around items-center">
        <div className="h-full w-1/2 font-Poppins px-12 flex gap-5 flex-col justify-center items-center">
          <p className="text-9xl font-bold">FERN.</p>
          <p className="text-3xl mb-24">- Investment Analysis</p>
        </div>
        <div className="h-full w-1/2 flex justify-around items-center">
          <Model />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
