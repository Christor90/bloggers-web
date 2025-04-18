import React from 'react';
import banner from '@/images/bannerImg.jpg';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="w-full max-h-sreen relative">
      <Image
        src={banner}
        alt="banner image"
        className="w-full max-h-screen object-contain"
      />
      <div className="absolute top-0 w-full h-full bg-black/30 flex flex-col justify-center items-center text-gray-100">
        <h2 className="text-7xl text-center lg:text-[150px] font-bold">
          seSAME Slake
        </h2>
        <p className="text-xl md:text-2xl lg:text-5xl font-semibold">
          Developer, Blogger, Designer
        </p>
      </div>
    </div>
  );
};

export default Hero;
