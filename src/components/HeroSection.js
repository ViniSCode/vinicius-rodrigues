import { motion } from 'framer-motion';
import React from 'react';

export function HeroSection ({section1Ref, heroHiFade, heroTitleFade, heroSubFade, heroPFade, heroButtonFade, heroImageFade, inViewYFadeOut, inViewXFadeOut}) {
  
  const scrollToProjects = () => {
    const element = document.getElementById('projects-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  return (
    <motion.section className="text-white lg:flex items-center justify-between" ref={section1Ref}>
      <div className='lg:max-w-[600px] xl:max-w-[782px]'>
        <motion.p className="text-blue-gradient font-montserrat font-bold text-xs lg:text-sm md:text-base xl:text-base" initial={inViewXFadeOut} animate={heroHiFade}>Hi, my name is</motion.p>        
        <motion.h1 className="mt-4 font-sans font-extrabold text-[32px] md:text-[58px] lg:mt-2 lg:text-[52px] xl:text-[62px]"  initial={inViewXFadeOut} animate={heroTitleFade}>Vinicius Rodrigues</motion.h1>
        <motion.h2 className="mt-4 font-sans font-bold text-[20px] text-blue-gradient lg:mt-2 md:text-[38px] lg:text-[34px] xl:text-[50px]" initial={inViewXFadeOut} animate={heroSubFade}>Creating solutions with code</motion.h2>
        <motion.p className="lg:max-w-[510px] xl:max-w-[700px] xl:text-base mt-6 lg:mt-4 font-montserrat font-semibold text-xs text-gray-250 md:text-sm lg:text-xs" initial={inViewXFadeOut} animate={heroPFade}>As a passionate technology enthusiast and <span className="text-blue-500">front-end</span> developer 
          student, I am dedicated to staying current with the latest 
          development trends and expanding my knowledge base through 
          continuous learning and experimentation with new technologies. 
          Currently, I am focused on <span className="text-blue-500">Next.js</span> and using my expertise to build 
          intuitive, effective code solutions.
        </motion.p>
        <motion.button onClick={scrollToProjects}  initial={inViewXFadeOut} animate={heroButtonFade} className="button-properties py-3 px-4 lg:py-4 lg:px-6 mt-[78px] transition-colors hover:bg-blue-300 hover:text-blue-500 lg:mt-[72px]">
          Check out my projects
        </motion.button>
      </div>
        
      <motion.img initial={inViewYFadeOut} animate={heroImageFade} src="/assets/hero.svg" alt="" className="mt-32 block w-[310.38px] static hero-image md:w-[520.45px] lg:w-[430px] lg:mt-0 xl:w-[480px]"/>
  </motion.section>

  );
}