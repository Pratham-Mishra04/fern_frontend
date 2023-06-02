import Model from '@/components/model/Model';
import React from 'react';

const LandingCards = () => {
  return (
    <>
      <div className="h-[80%] w-[50%] rounded-lg bg-white flex justify-end flex-col items-center gap-10 pb-10">
        <div className="text-black text-5xl w-[70%]">Analyze</div>
        <div className="h-[50%] rounded-xl bg-black w-[70%]">
          <Model />
        </div>
      </div>
    </>
  );
};

export default LandingCards;
