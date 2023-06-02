import Model from '@/components/model/Model';
import React from 'react';

const HeroSection = () => {
  return (
    <>
      <div className="h-[90vh] flex justify-around items-center">
        <div className="h-full w-[50%] px-12 flex gap-5 flex-col justify-center items-center">
          <p className="text-6xl w-full">FERN</p>
          <p className="text-6xl w-full">- Easy & Fast</p>
          <p className="text-6xl w-full">Investment Analysis</p>
        </div>
        <div className="h-full w-[50%] flex justify-around items-center">
          <Model />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
