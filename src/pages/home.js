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

  // Section Opacity Animation
  const opacitySection1 = useAnimation(); const headerFade = useAnimation();
  const opacitySection2 = useAnimation(); const opacitySection3 = useAnimation();
  const opacitySection4 = useAnimation(); const opacitySection5 = useAnimation();

  // Section 1 Animation
  const heroHiFade = useAnimation(); const heroTitleFade = useAnimation();
  const heroSubFade = useAnimation(); const heroPFade = useAnimation();
  const heroButtonFade = useAnimation(); const heroImageFade = useAnimation();

  // Section 2 Animation
  const p1FadeX = useAnimation(); const p2FadeX = useAnimation();
  const p3FadeX = useAnimation(); const listFadeX = useAnimation();
  const p4FadeX = useAnimation(); const imgFadeY = useAnimation();

  // Section 3 Animation
  const t1 = useAnimation(); const t2 = useAnimation(); const t3 = useAnimation();
  const t4 = useAnimation(); const t5 = useAnimation(); const t6 = useAnimation();
  const t7 = useAnimation(); const t8 = useAnimation();

  // Section 4 Animation
  const p1 = useAnimation(); const p2 = useAnimation(); const p3 = useAnimation();
  const p4 = useAnimation(); const img1 = useAnimation(); const img2 = useAnimation();
  const img3 = useAnimation(); const img4 = useAnimation();

  const inViewFadeIn = { transition: { duration: 0.5, ease: 'easeInOut', delay: 0.2}, opacity: 1}
  const inViewFadeOut = { transition: { duration: 0.5, ease: 'easeInOut'}, opacity: 0 }
 
  const inViewXFadeIn04 = { transition: { duration: 0.7, ease: 'easeInOut', delay: 0.4}, opacity: 1, x: '0'}
  const inViewXFadeIn05 = { transition: { duration: 0.7, ease: 'easeInOut', delay: 0.5}, opacity: 1, x: '0'}
  const inViewXFadeIn06 = { transition: { duration: 0.7, ease: 'easeInOut', delay: 0.6}, opacity: 1, x: '0'}
  const inViewXFadeIn07 = { transition: { duration: 0.7, ease: 'easeInOut', delay: 0.7}, opacity: 1, x: '0'}
  const inViewXFadeIn08 = { transition: { duration: 0.7, ease: 'easeInOut', delay: 0.8}, opacity: 1, x: '0'}
  const inViewXFadeOut = { transition: { duration: 0.5, ease: 'easeInOut'}, opacity: 0, x: '-200px' }
  const inViewYFadeOut = { transition: { duration: 0.5, ease: 'easeInOut'}, opacity: 0, y: '200px' }
  const inViewYFadeIn04 = { transition: { duration: 0.7, ease: 'easeInOut', delay: 0.4}, opacity: 1, y: '0'}
  const inViewYFadeIn05 = { transition: { duration: 0.7, ease: 'easeInOut', delay: 0.5}, opacity: 1, y: '0'}
  const inViewYFadeIn06 = { transition: { duration: 0.7, ease: 'easeInOut', delay: 0.6}, opacity: 1, y: '0'}
  const inViewYFadeIn07 = { transition: { duration: 0.7, ease: 'easeInOut', delay: 0.7}, opacity: 1, y: '0'}
  const inViewYFadeIn08 = { transition: { duration: 0.7, ease: 'easeInOut', delay: 0.8}, opacity: 1, y: '0'}
  const inViewYFadeIn09 = { transition: { duration: 0.7, ease: 'easeInOut', delay: 0.9}, opacity: 1, y: '0'}
  const inViewYFadeIn10 = { transition: { duration: 0.7, ease: 'easeInOut', delay: 1}, opacity: 1, y: '0'}
  const inViewYFadeIn11 = { transition: { duration: 0.7, ease: 'easeInOut', delay: 1.1}, opacity: 1, y: '0'}


  useEffect(() => {
    if (section1View) {
      opacitySection1.start(inViewFadeIn);
      headerFade.start(inViewFadeIn);
      heroHiFade.start(inViewXFadeIn04)
      heroTitleFade.start(inViewXFadeIn05)
      heroSubFade.start(inViewXFadeIn06)
      heroPFade.start(inViewXFadeIn07)
      heroButtonFade.start(inViewXFadeIn08)
      heroImageFade.start(inViewYFadeIn09)
    } 
    if (section2View) {
      opacitySection2.start(inViewFadeIn);
      p1FadeX.start(inViewXFadeIn04)
      p2FadeX.start(inViewXFadeIn05)
      listFadeX.start(inViewXFadeIn06)
      p3FadeX.start(inViewXFadeIn07)
      p4FadeX.start(inViewXFadeIn08)
      imgFadeY.start(inViewYFadeIn09)
    } 
    if (section3View) {
      opacitySection3.start(inViewFadeIn);
      t1.start(inViewYFadeIn04)
      t2.start(inViewYFadeIn05)
      t3.start(inViewYFadeIn06)
      t4.start(inViewYFadeIn07)
      t5.start(inViewYFadeIn08)
      t6.start(inViewYFadeIn09)
      t7.start(inViewYFadeIn10)
      t8.start(inViewYFadeIn11)
    } 
    if (section4View) {
      opacitySection4.start(inViewFadeIn);
      p1.start(inViewYFadeIn07);
      p2.start(inViewYFadeIn07);
      p3.start(inViewYFadeIn07);
      p4.start(inViewYFadeIn07);
      img1.start(inViewXFadeIn04);
      img2.start(inViewXFadeIn04);
      img3.start(inViewXFadeIn04);
      img4.start(inViewXFadeIn04);
    } 
    if (section5View) {
      console.log('foi')
      opacitySection5.start(inViewFadeIn);
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
          <span className="text-blue-gradient font-bold leading-5 tracking-[-0.02em] lg:text-xs xl:text-sm">VINÍCIUS RODRIGUES</span>
          <ul className='flex items-center gap-8 font-montserrat font-bold leading-5 tracking-[-0.02em] lg:text-xs xl:text-sm'>      
            <li><a href='/' className='text-blue-gradient transition-filter hover:brightness-150'>01.HOME</a></li>
            <li><a href='/' className='text-blue-gradient transition-filter hover:brightness-150'>02.ABOUT</a></li>
            <li><a href='/' className='text-blue-gradient transition-filter hover:brightness-150'>03.TECHNOLOGIES</a></li>
            <li><a href='/' className='text-blue-gradient transition-filter hover:brightness-150'>03.PROJECTS</a></li>
            <li><a href='/' className='text-blue-gradient transition-filter hover:brightness-150'>04.CONTACT</a></li>
          </ul>
        </nav>
      </div>

      <main className="mt-[132px] md:mt-[252px] lg:mt-[102px] xl:mt-[198px] max-w-[358px] md:max-w-[628px] lg:max-w-[1283px] px-4 mx-auto">
        <HeroSection
          section1Ref={section1Ref} 
          inViewYFadeOut={inViewYFadeOut} inViewXFadeOut={inViewXFadeOut}
          heroHiFade={heroHiFade} heroTitleFade={heroTitleFade}
          heroSubFade={heroSubFade} heroPFade={heroPFade}
          heroButtonFade={heroButtonFade} heroImageFade={heroImageFade}
        />

        <AboutSection 
          section2Ref={section2Ref} 
          p1FadeX={p1FadeX} p2FadeX={p2FadeX}
          p3FadeX={p3FadeX} listFadeX={listFadeX} p4FadeX={p4FadeX} imgFadeY={imgFadeY}
          inViewYFadeOut={inViewYFadeOut} inViewXFadeOut={inViewXFadeOut}
          inViewFadeOut={inViewFadeOut} 
          opacitySection2={opacitySection2} 
        />

        <TechnologiesSection
          section3Ref={section3Ref}
          t1={t1} t2={t2} t3={t3} t4={t4} t5={t5} t6={t6} t7={t7} t8={t8}
          inViewYFadeOut={inViewYFadeOut}
          inViewFadeOut={inViewFadeOut}
          opacitySection3={opacitySection3}
        />

        <ProjectsSection
          section4Ref={section4Ref}
          opacitySection4={opacitySection4} inViewFadeOut={inViewFadeOut}
          p1={p1} p2={p2} p3={p3} p4={p4} img1={img1} img2={img2} img3={img3} img4={img4}
          inViewXFadeOut={inViewXFadeOut} inViewYFadeOut={inViewYFadeOut}
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