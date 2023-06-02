import Model from '@/components/model/Model';
import React from 'react';

const HeroSection = () => {
  return (
    <>
      <div className="h-[90vh] w-[100vw] flex justify-around items-center">
        <div className="h-full w-[50%] flex flex-col justify-end items-center">
          <p className="text-4xl">FERN</p>
          <p className="text-4xl">- Easy & Fast</p>
          <p className="text-4xl">Investment Analysis</p>
        </div>
        <div className="h-full w-[50%] flex justify-around items-center">
          <Model />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
