import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { AboutSection } from '../components/AboutSection';
import { HeroSection } from '../components/HeroSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { TechnologiesSection } from '../components/TechnologiesSection';

export default function Home () {
  const {ref: section1Ref, inView: section1View } = useInView({ triggerOnce: true });
  const {ref: section2Ref, inView: section2View } = useInView({ triggerOnce: true });
  const {ref: section3Ref, inView: section3View } = useInView({ triggerOnce: true });
  const {ref: section4Ref, inView: section4View } = useInView({ triggerOnce: true });
  const {ref: section5Ref, inView: section5View } = useInView({ triggerOnce: true });

  const opacitySection1 = useAnimation();
  const headerFade = useAnimation();
  const opacitySection2 = useAnimation();
  const opacitySection3 = useAnimation();
  const opacitySection4 = useAnimation();
  const opacitySection5 = useAnimation();

  const heroHiFade = useAnimation();
  const heroTitleFade = useAnimation();
  const heroSubFade = useAnimation();
  const heroPFade = useAnimation();
  const heroButtonFade = useAnimation();
  const heroImageFade = useAnimation();
  
  const inViewFadeIn = { transition: { duration: 0.5, ease: 'easeInOut', delay: 0.2}, opacity: 1}
  const inViewFadeOut = { transition: { duration: 0.5, ease: 'easeInOut'}, opacity: 0 }
 
  const inViewXFadeIn = { transition: { duration: 0.5, ease: 'easeInOut', delay: 0.3}, opacity: 1, x: '0'}
  const inViewXFadeIn04 = { transition: { duration: 0.5, ease: 'easeInOut', delay: 0.4}, opacity: 1, x: '0'}
  const inViewXFadeIn05 = { transition: { duration: 0.5, ease: 'easeInOut', delay: 0.5}, opacity: 1, x: '0'}
  const inViewXFadeIn06 = { transition: { duration: 0.5, ease: 'easeInOut', delay: 0.6}, opacity: 1, x: '0'}
  const inViewXFadeIn07 = { transition: { duration: 0.5, ease: 'easeInOut', delay: 0.7}, opacity: 1, x: '0'}
  const inViewXFadeIn08 = { transition: { duration: 0.5, ease: 'easeInOut', delay: 0.8}, opacity: 1, x: '0'}
  const inViewXFadeIn09 = { transition: { duration: 0.5, ease: 'easeInOut', delay: 0.9}, opacity: 1, x: '0'}
  const inViewXFadeOut = { transition: { duration: 0.5, ease: 'easeInOut'}, opacity: 0, x: '-200px' }
 
  const inViewYFadeIn = { transition: { duration: 0.5, ease: 'easeInOut', delay: 0.3}, opacity: 1, y: '0'}
  const inViewYFadeOut = { transition: { duration: 0.5, ease: 'easeInOut'}, opacity: 0, y: '200px' }



  useEffect(() => {
    if (section1View) {
      opacitySection1.start(inViewFadeIn);
      headerFade.start(inViewFadeIn);
      heroHiFade.start(inViewXFadeIn04)
      heroTitleFade.start(inViewXFadeIn05)
      heroSubFade.start(inViewXFadeIn06)
      heroPFade.start(inViewXFadeIn07)
      heroButtonFade.start(inViewXFadeIn08)
      heroImageFade.start(inViewXFadeIn09)
    } 
    if (!section1View) {
      opacitySection1.start(inViewFadeOut);
      headerFade.start(inViewFadeOut);
    }
    if (section2View) {
      opacitySection2.start(inViewFadeIn);
    } 
    if (!section2View) {
      opacitySection2.start(inViewFadeOut);
    }
    if (section3View) {
      opacitySection3.start(inViewFadeIn);
    } 
    if (!section3View) {
      opacitySection3.start(inViewFadeOut);
    }
    if (section4View) {
      opacitySection4.start(inViewFadeIn);
    } 
    if (!section4View) {
      opacitySection4.start(inViewFadeOut);
    }
    if (section5View) {
      console.log('foi')
      opacitySection5.start(inViewFadeIn);
    } 
    if (!section5View) {
      console.log('não foi')
      opacitySection5.start(inViewFadeOut);
    }
  }, [section1View, section2View, section3View, section4View, section5View]);
  
  return (
    <motion.div className="container snap-start snap-mandatory scroll-smooth mx-auto"  animate={{opacity: 1}} initial={{opacity: 0}} transition={{delay: 0.1}}>
      <div className="lg:hidden menu-bg-blue-gradient fixed top-0 left-0 right-0 shadow-sm z-[20]">
        <header  className="pt-[22px] pb-[22px] w-full max-w-[358px] md:max-w-[628px] px-4 mx-auto">
          <nav className="flex items-center justify-between">
            <motion.span  className="font-montserrat font-bold text-sm leading-[17px] tracking-[-0.02em] text-blue-gradient">VINÍCIUS RODRIGUES</motion.span>
            <img src="/assets/menu.svg" alt="" />
          </nav>
        </header>
      </div>
      <div className="hidden lg:block lg:max-w-[1283px] mx-auto mt-8 px-4">
        <nav className='flex items-center justify-between'>
          <span className="text-blue-gradient font-bold leading-5 tracking-[-0.02em] text-sm">VINÍCIUS RODRIGUES</span>
          <ul className='flex items-center gap-8 font-montserrat font-bold leading-5 tracking-[-0.02em] text-sm'>      
            <li><a href='/' className='text-blue-gradient transition-filter hover:brightness-150'>01.HOME</a></li>
            <li><a href='/' className='text-blue-gradient transition-filter hover:brightness-150'>02.ABOUT</a></li>
            <li><a href='/' className='text-blue-gradient transition-filter hover:brightness-150'>03.TECHNOLOGIES</a></li>
            <li><a href='/' className='text-blue-gradient transition-filter hover:brightness-150'>03.PROJECTS</a></li>
            <li><a href='/' className='text-blue-gradient transition-filter hover:brightness-150'>04.CONTACT</a></li>
          </ul>
        </nav>
      </div>

      <main className="mt-[132px] md:mt-[252px] lg:mt-[152px] xl:mt-[198px] max-w-[358px] md:max-w-[628px] lg:max-w-[1283px] px-4 mx-auto">
        <HeroSection
          inViewFadeOut={inViewFadeOut}
          section1Ref={section1Ref}
          opacitySection1={opacitySection1} 
          heroHiFade={heroHiFade}
          heroTitleFade={heroTitleFade}
          heroSubFade={heroSubFade}
          heroPFade={heroPFade}
          heroButtonFade={heroButtonFade}
          heroImageFade={heroImageFade}
        />

        <AboutSection 
          inViewFadeOut={inViewFadeOut} 
          opacitySection2={opacitySection2} 
          section2Ref={section2Ref} 
        />

        <TechnologiesSection
          inViewFadeOut={inViewFadeOut}
          opacitySection3={opacitySection3}
          section3Ref={section3Ref}
        />

      <ProjectsSection
        section4Ref={section4Ref}
        inViewFadeOut={inViewFadeOut}
        opacitySection4={opacitySection4} 
      />

        <motion.section className="mt-[398px] pb-56" ref={section5Ref} initial={inViewFadeOut} animate={opacitySection5}>
          <h2 className="text-center font-montserrat font-bold text-[28px] leading-10 tracking-[-0.02em] text-blue-gradient md:text-[40px]">05. CONTACT</h2>
          <div className='mt-[92px] md:mt-[152px]'>
            <h3 className="text-center font-montserrat font-bold text-[23px] text-blue-gradient">Get in touch</h3>
            <div className="mt-7 w-[200px] bg-blue-gradient h-[1px] mx-auto"></div>
            <div className="flex gap-7 justify-center mt-14">
              <img  src="/assets/github.svg" alt="" className="w-[33px] cursor-pointer"/>
              <img  src="/assets/mail.svg" alt=""  className="cursor-pointer"/>
              <img  src="/assets/linkedin.svg" alt=""  className="cursor-pointer"/>
            </div>
            <div className="mt-20 flex justify-center">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jairrodriguesmd@gmail.com" rel="noreferrer" target="_blank" className="cursor-pointer button-properties py-3 px-16 mt-[78px] transition-colors hover:bg-blue-300 hover:text-blue-500">
                Say Hello
              </a>
            </div>
          </div>
        </motion.section>  
      </main>
    </motion.div>
  )
}