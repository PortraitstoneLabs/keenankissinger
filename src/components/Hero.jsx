import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);

    return () => {
      window.removeEventListener('resize', handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 2 });
    gsap.to('#cta', { opacity: 1, y: -50, delay: 2 });
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <section className="w-full nav-height bg-black relative">
        <div className="h-5/6 w-full flex flex-center flex-col">
          <p id="hero" className="hero-title">Reiki Master</p>

          {/* Center video container */}
          <div className="md:w-10/12 w-9/12 flex items-center justify-center">
            <video
              className="pointer-events-none object-cover w-full h-full"
              autoPlay
              muted
              playsInline
              key={videoSrc}
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          </div>
        </div>

        <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
          <a href="#contact" className="btn">Multidimensional Plastic Magic</a>
          <p className="font-normal text-xl">KEEP UPDATED</p>
        </div>
      </section>
    </section>
  );
};

export default Hero;
