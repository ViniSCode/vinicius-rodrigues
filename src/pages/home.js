import { motion, useAnimation } from 'framer-motion';
import { useEffect, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Home () {
  const vhPx = useMemo(() => `-${window.innerHeight}px 0px 0px 0px`, [window.innerHeight]);
  const {ref: section1Ref, inView: section1View } = useInView({
    // rootMargin: vhPx,
    triggerOnce: true
  });

  const {ref: section2Ref, inView: section2View } = useInView({
    // rootMargin: vhPx,
    triggerOnce: true
  });

  const {ref: section3Ref, inView: section3View } = useInView({
    // rootMargin: vhPx,
    triggerOnce: true
  });

  const {ref: section4Ref, inView: section4View } = useInView({
    // rootMargin: vhPx,
    triggerOnce: true
  });

  const {ref: section5Ref, inView: section5View } = useInView({
    // rootMargin: vhPx,
    triggerOnce: true
  });

  const opacitySection1 = useAnimation();
  const opacitySection2 = useAnimation();
  const opacitySection3 = useAnimation();
  const opacitySection4 = useAnimation();
  const opacitySection5 = useAnimation();
  const inViewFadeIn = { transition: { duration: 0.5, ease: 'easeInOut', delay: 0.2, delayChildren: 0.5}, opacity: 1}
  const inViewFadeOut = { transition: { duration: 0.5, ease: 'easeInOut'}, opacity: 0 }

  useEffect(() => {
    if (section1View) {
      opacitySection1.start(inViewFadeIn);
    } 
    if (!section1View) {
      opacitySection1.start(inViewFadeOut);
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
    <div className="container snap-start snap-mandatory scroll-smooth mx-auto">
      <div className="lg:hidden menu-bg-blue-gradient fixed top-0 left-0 right-0 shadow-sm z-[20]">
        <header className="pt-[22px] pb-[22px] w-full max-w-[358px] md:max-w-[628px] px-4 mx-auto">
          <nav className="flex items-center justify-between">
            <span className="font-montserrat font-bold text-sm leading-[17px] tracking-[-0.02em] text-blue-gradient">VINÍCIUS RODRIGUES</span>
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

      <main className="mt-[132px] md:mt-[252px] lg:mt-[152px] max-w-[358px] md:max-w-[628px] lg:max-w-[1283px] px-4 mx-auto">
        <motion.section className="text-white lg:flex items-center justify-between" ref={section1Ref} initial={inViewFadeOut} animate={opacitySection1}>
          <div className='lg:max-w-[600px]'>
            <p className="text-blue-gradient font-montserrat font-bold text-xs md:text-base">Hi, my name is</p>
            <h1 className="mt-4 font-sans font-extrabold text-[32px] md:text-[58px] lg:text-[52px]">Vinicius Rodrigues</h1>
            <h2 className="mt-4 font-sans font-bold text-[20px] text-blue-gradient md:text-[38px] lg:text-[34px]">Creating solutions with code</h2>
            <p className="lg:max-w-[510px] mt-6 font-montserrat font-semibold text-xs text-gray-250 md:text-sm lg:text-xs">As a passionate technology enthusiast and <span className="text-blue-500">front-end</span> developer 
              student, I am dedicated to staying current with the latest 
              development trends and expanding my knowledge base through 
              continuous learning and experimentation with new technologies. 
              Currently, I am focused on <span className="text-blue-500">Next.js</span> and using my expertise to build 
              intuitive, effective code solutions.
            </p>
            <button className="button-properties py-3 px-4 lg:py-4 lg:px-6 mt-[78px] transition-colors hover:bg-blue-300 hover:text-blue-500 lg:mt-[72px]">
              Check out my projects
            </button>
          </div>
            
          <img src="/assets/hero.svg" alt="" className="mt-32 block w-[310.38px] static hero-image md:w-[520.45px] lg:w-[430px] lg:mt-0 xl:w-[480px]"/>
        </motion.section>

        <motion.section className="mt-[398px]" ref={section2Ref} initial={inViewFadeOut} animate={opacitySection2}>
          <h2 className="text-center font-montserrat font-bold text-[28px] leading-10 tracking-[-0.02em] text-blue-gradient md:text-[40px]">02. About</h2>
          <div className='lg:flex lg:gap-16 lg:items-center'>
            <div className="lg:max-w-[600px]">
              <p className="mt-[92px] md:mt-[152px] font-montserrat text-sm text-white leading-[20px]">
                Hi there! My name is Vinícius and I am passionate about creating 
                engaging web experiences. I have a background in System Analysis and Development 
                and have been studying Front End Development for the past two years. 
                My technical skills include technologies 
                such as  <span className="text-blue-500">React, Next.JS, and Typescript</span>.
              </p>
              <p className="mt-4 md:mt-[20px] font-montserrat text-sm tracking-[-0.02em] text-white leading-[20px]">
                I have experience working on personal projects, including:
              </p>
              <ol className="mt-4 ml-4 md:mt-[20px] font-montserrat text-sm tracking-[-0.02em] text-white leading-[20px] list-disc">
                <li className="mt-4">DopeShoe, a NextJS application that uses <span className="text-blue-500">Stripe, GraphQL (URQL),</span> Typescript, <span className="text-blue-500">Tailwind,</span> and <span className="text-blue-500">Hygraph</span></li>
                <li className="mt-4">Githubstats, a NextJS application that uses GraphQL <span className="text-blue-500">(Apollo Client)</span>, Typescript, and <span className="text-blue-500">ChakraUI</span> to search for and display statistics from a user's GitHub profile</li>
                <li className="mt-4">DevBlog, A ReactJS-based blog called DevBlog, using <span className="text-blue-500">firebase, Prismic CMS, and sass</span></li>
                <li className="mt-4">Monances A simple Finance App built with <span className="text-blue-500">HTML, CSS, and JavaScript</span></li>
              </ol>
              <p className="mt-4 md:mt-[20px] font-montserrat text-sm tracking-[-0.02em] text-white leading-[20px]">
                In addition to my web development experience, I am currently taking an 
                online course on Introduction to Computer Science (CS50). 
                I also have a basic knowledge of design tools like Figma and Photoshop 
                and programming languages like C, Python, and Java.
              </p>
              <p className="mt-4 md:mt-[20px] font-montserrat text-sm tracking-[-0.02em] text-white leading-[20px]">
                I am constantly learning and improving my skills in web development and am 
                dedicated to creating intuitive and user-friendly digital experiences.
              </p>
            </div>

            <div className="flex justify-center mt-14 md:mt-[92px] w-[283px] md:w-[390px] lg:w-[390px]  mx-auto">
              <img src="/assets/avatar.png" alt="Vinícius Rodrigues" className="block w-full"/>
            </div>
          </div>
        </motion.section>

        <motion.section className="mt-[398px]" ref={section3Ref} initial={inViewFadeOut} animate={opacitySection3}>
          <h2 className="text-center font-montserrat font-bold text-[28px] text-blue-gradient md:text-[40px]">03. TECHNOLOGIES</h2>
          <div className="mt-[92px] md:mt-[152px] flex flex-col items-center md:flex-row md:flex-wrap md:justify-between md:items-center">

            <div className="max-w-[214px]">
              <div className="flex items-center justify-center">
                <img src="/assets/react.svg" alt="" className=""/>
              </div>
              <strong className="mt-6 text-white text-[28px] text-center block">React.JS</strong>
              <span className="mt-4 block text-gray-600">Expert in React.js, creating professional projects.</span>
              <ol className="ml-4 mt-2 list-disc text-gray-600">
                <li>Context API</li>
                <li>Hooks</li>
                <li>Stat</li>
                <li>Props</li>
                <li>API</li>
              </ol>
            </div>
            
            <div className="max-w-[214px] mt-8 md:mt-0">
              <div className="flex items-center justify-center">
                <img src="/assets/next.svg" alt="" className=""/>
              </div>
              <strong className="mt-6 text-white text-[28px] text-center block">Next.JS</strong>
              <span className="mt-4 block text-gray-600">Expert in React.js, creating professional projects.</span>
              <ol className="ml-4 mt-2 list-disc text-gray-600">
                <li>Context API</li>
                <li>Hooks</li>
                <li>Stat</li>
                <li>Props</li>
                <li>API</li>
              </ol>
            </div>
            
            <div className="max-w-[214px] mt-8">
              <div className="flex items-center justify-center">
                <img src="/assets/typescript.svg" alt="" className=""/>
              </div>
              <strong className="mt-6 text-white text-[28px] text-center block">Typescript</strong>
              <span className="mt-4 block text-gray-600">Expert in React.js, creating professional projects.</span>
              <ol className="ml-4 mt-2 list-disc text-gray-600">
                <li>Context API</li>
                <li>Hooks</li>
                <li>Stat</li>
                <li>Props</li>
                <li>API</li>
              </ol>
            </div>
            
            <div className="max-w-[214px] mt-8">
              <div className="flex items-center justify-center">
                <img src="/assets/graphql.svg" alt="" className=""/>
              </div>
              <strong className="mt-6 text-white text-[28px] text-center block">GraphQl</strong>
              <span className="mt-4 block text-gray-600">Expert in React.js, creating professional projects.</span>
              <ol className="ml-4 mt-2 list-disc text-gray-600">
                <li>Context API</li>
                <li>Hooks</li>
                <li>Stat</li>
                <li>Props</li>
                <li>API</li>
              </ol>
            </div>

            <div className="max-w-[214px] mt-8">
              <div className="flex items-center justify-center">
                <img src="/assets/tailwind.svg" alt="" className=""/>
              </div>
              <strong className="mt-6 text-white text-[28px] text-center block">Tailwind</strong>
              <span className="mt-4 block text-gray-600">Expert in React.js, creating professional projects.</span>
              <ol className="ml-4 mt-2 list-disc text-gray-600">
                <li>Context API</li>
                <li>Hooks</li>
                <li>Stat</li>
                <li>Props</li>
                <li>API</li>
              </ol>
            </div>
            
            <div className="max-w-[214px] mt-8">
              <div className="flex items-center justify-center">
                <img src="/assets/sass.svg" alt="" className=""/>
              </div>
              <strong className="mt-6 text-white text-[28px] text-center block">Sass</strong>
              <span className="mt-4 block text-gray-600">Expert in React.js, creating professional projects.</span>
              <ol className="ml-4 mt-2 list-disc text-gray-600">
                <li>Context API</li>
                <li>Hooks</li>
                <li>Stat</li>
                <li>Props</li>
                <li>API</li>
              </ol>
            </div>
            
            <div className="max-w-[214px] mt-8">
              <div className="flex items-center justify-center">
                <img src="/assets/chakra.svg" alt="" className=""/>
              </div>
              <strong className="mt-6 text-white text-[28px] text-center block">Chakra UI</strong>
              <span className="mt-4 block text-gray-600">Expert in React.js, creating professional projects.</span>
              <ol className="ml-4 mt-2 list-disc text-gray-600">
                <li>Context API</li>
                <li>Hooks</li>
                <li>Stat</li>
                <li>Props</li>
                <li>API</li>
              </ol>
            </div>
            
            <div className="max-w-[214px] mt-8">
              <div className="flex items-center justify-center">
                <img src="/assets/css.svg" alt="" className=""/>
              </div>
              <strong className="mt-6 text-white text-[28px] text-center block">CSS3</strong>
              <span className="mt-4 block text-gray-600">Expert in React.js, creating professional projects.</span>
              <ol className="ml-4 mt-2 list-disc text-gray-600">
                <li>Context API</li>
                <li>Hooks</li>
                <li>Stat</li>
                <li>Props</li>
                <li>API</li>
              </ol>
            </div>

          </div>
        </motion.section>

        <motion.section className="mt-[398px] lg:hidden" ref={section4Ref} initial={inViewFadeOut} animate={opacitySection4}>
          <h2 className="text-center font-montserrat font-bold text-[28px] leading-10 tracking-[-0.02em] text-blue-gradient md:text-[40px]">04. PROJECTS</h2>
          <div className="mt-[92px] md:mt-[152px] flex flex-col gap-28">
            <div>
              <img src="/assets/dopeshoe.png" alt="" className="shadow-sm"/>
              <span className="block mt-11">Personal Project</span>
              <span className="mt-2 block font-roboto font-normal text-[22px] md:text-3xl text-blue-gradient md:mt-6">Dopeshoe</span>
              <p className="text-sm mt-4 md:text-base md:mt-6">
                DopeShoe is an e-commerce website built using NextJS, Stripe, 
                Hygraph, Graphql(URQL), Typescript and styled with 
                Tailwindcss. It allows users to buy shoes, view their shopping 
                cart, and see past orders. It includes features like responsive 
                layout and search bar with filters.
              </p>
              <div className="mt-4 md:mt-6">
                <span className="text-sm text-gray-600 font-medium md:text-base">NextJS, Stripe, Hygraph, Graphql(URQL), Typescript, Tailwindcss.</span>
              </div>
              <div className="flex items-center gap-4 mt-4 md:mt-6">
                <img src="/assets/github.svg" alt="" className="cursor-pointer md:w-[35px] transition-filter hover:brightness-150"/>
                <img src="/assets/link.svg" alt="" className="cursor-pointer md:w-[35px] transition-filter hover:brightness-150" />
              </div>
            </div>

            <div>
              <img src="/assets/githubstats.png" alt="" className="shadow-sm"/>
              <span className="block mt-11">Personal Project</span>
              <span className="mt-2 block font-roboto font-normal text-[22px] md:text-3xl text-blue-gradient md:mt-6">GithubStats</span>
              <p className="text-sm mt-4 md:text-base md:mt-6">
                Githubstats is a web app that allows users to search for Github users and organizations, and access their profile information such as repositories, starred repositories, followers and members of an organization. It is designed to provide a simple and efficient way to view a user's Github data.
              </p>
              <div className="mt-4 md:mt-6">
                <span className="text-sm text-gray-600 font-medium md:text-base">NextJS, Typescript, Chakra UI, GraphQL(Apollo Client), Codegen.</span>
              </div>
              <div className="flex items-center gap-4 mt-4 md:mt-6">
                <img src="/assets/github.svg" alt="" className="cursor-pointer md:w-[35px] transition-filter hover:brightness-150"/>
                <img src="/assets/link.svg" alt="" className="cursor-pointer md:w-[35px] transition-filter hover:brightness-150" />
              </div>
            </div>

            <div>
              <img src="/assets/devblog.png" alt="" className="shadow-sm"/>
              <span className="block mt-11">Personal Project</span>
              <span className="mt-2 block font-roboto font-normal text-[22px] md:text-3xl text-blue-gradient md:mt-6">DevBlog</span>
              <p className="text-sm mt-4 md:text-base md:mt-6">
                DEVBLOG is a web application that allows users to browse and engage with blog posts, while also providing an administrative capability for the management of content on the Prismic CMS platform. Additionally, the application provides user authentication capabilities through Firebase Auth.
              </p>
              <div className="mt-4 md:mt-6">
                <span className="text-sm text-gray-600 font-medium md:text-base">ReactJS, Firebase, Prismic CMS, Sass.</span>
              </div>
              <div className="flex items-center gap-4 mt-4 md:mt-6">
                <img src="/assets/github.svg" alt="" className="cursor-pointer md:w-[35px] transition-filter hover:brightness-150"/>
                <img src="/assets/link.svg" alt="" className="cursor-pointer md:w-[35px] transition-filter hover:brightness-150" />
              </div>
            </div>

            <div>
              <img src="/assets/monances.png" alt="" className="shadow-sm"/>
              <span className="block mt-11">Personal Project</span>
              <span className="mt-2 block font-roboto font-normal text-[22px] md:text-3xl text-blue-gradient md:mt-6">Monances</span>
              <p className="text-sm mt-4 md:text-base md:mt-6">
                Track your expenses and incomes, set and monitor custom budgets, view your balance with an interactive chart, and switch to dark mode for comfortable use.
              </p>
              <div className="mt-4 md:mt-6">
                <span className="text-sm text-gray-600 font-medium md:text-base">Html, Css, Javascript, ChartJS, sweetalert2, scrollrevealjs.</span>
              </div>
              <div className="flex items-center gap-4 mt-4 md:mt-6">
                <img src="/assets/github.svg" alt="" className="cursor-pointer md:w-[35px] transition-filter hover:brightness-150"/>
                <img src="/assets/link.svg" alt="" className="cursor-pointer md:w-[35px] transition-filter hover:brightness-150" />
              </div>
            </div>


          </div>
        </motion.section>

        <motion.section className="mt-[398px] hidden lg:block relative">
          <h2 className="text-center font-montserrat font-bold text-[28px] leading-10 tracking-[-0.02em] text-blue-gradient md:text-[40px]">04. PROJECTS</h2>

          <div className='mt-[250px] flex items-center'>
            <div className='w-[512px]'>
              <img src="/assets/dopeshoe.png" alt="" className="shadow-sm w-full"/>
            </div>
              <div className='absolute right-4'>
                  <span className="block text-end">Personal Project</span>
                  <span className="block text-end font-roboto font-normal text-[28px] text-blue-gradient mt-1">Dopeshoe</span>
                  <div className='projects-text-lg w-[580px] px-4 py-4 mt-4'>
                    <p className="text-base">
                      DopeShoe is an e-commerce website built using NextJS, Stripe, 
                      Hygraph, Graphql(URQL), Typescript and styled with 
                      Tailwindcss. It allows users to buy shoes, view their shopping 
                      cart, and see past orders. It includes features like responsive 
                      layout and search bar with filters.
                    </p>
                  </div>

                  <span className="text-gray-600 font-medium text-base mt-6 text-end block">NextJS, Stripe, Hygraph, Graphql(URQL), Typescript, Tailwindcss.</span>
                  
                  <div className="flex items-center justify-end gap-4 mt-4">
                    <img src="/assets/github.svg" alt="" className="cursor-pointer w-[25px] transition-filter hover:brightness-150"/>
                    <img src="/assets/link.svg" alt="" className="cursor-pointer w-[25px] transition-filter hover:brightness-150" />
                  </div>
              </div>
          </div>

          <div className='mt-[250px] flex items-center'>
            <div className='w-[512px]'>
              <img src="/assets/githubstats.png" alt="" className="shadow-sm w-full"/>
            </div>
              <div className='absolute right-4'>
                  <span className="block text-end">Personal Project</span>
                  <span className="block text-end font-roboto font-normal text-[28px] text-blue-gradient mt-1">GithubStats</span>
                  <div className='projects-text-lg w-[580px] px-4 py-4 mt-4'>
                    <p className="text-base">
                      Githubstats is a web app that allows users to search for Github users and organizations, and access their profile information such as repositories, starred repositories, followers and members of an organization. It is designed to provide a simple and efficient way to view a user's Github data.
                    </p>
                  </div>

                  <span className="text-gray-600 font-medium text-base mt-6 text-end block">NextJS, Typescript, Chakra UI, GraphQL(Apollo Client), Codegen.</span>
                  
                  <div className="flex items-center justify-end gap-4 mt-4">
                    <img src="/assets/github.svg" alt="" className="cursor-pointer w-[25px] transition-filter hover:brightness-150"/>
                    <img src="/assets/link.svg" alt="" className="cursor-pointer w-[25px] transition-filter hover:brightness-150" />
                  </div>
              </div>
          </div>

          <div className='mt-[250px] flex items-center'>
            <div className='w-[512px]'>
              <img src="/assets/devblog.png" alt="" className="shadow-sm w-full"/>
            </div>
              <div className='absolute right-4'>
                  <span className="block text-end">Personal Project</span>
                  <span className="block text-end font-roboto font-normal text-[28px] text-blue-gradient mt-1">DevBlog</span>
                  <div className='projects-text-lg w-[580px] px-4 py-4 mt-4'>
                    <p className="text-base">
                      DEVBLOG is a web application that allows users to browse and engage with blog posts, while also providing an administrative capability for the management of content on the Prismic CMS platform. Additionally, the application provides user authentication capabilities through Firebase Auth.
                    </p>
                  </div>

                  <span className="text-gray-600 font-medium text-base mt-6 text-end block">ReactJS, Firebase, Prismic CMS, Sass.</span>
                  
                  <div className="flex items-center justify-end gap-4 mt-4">
                    <img src="/assets/github.svg" alt="" className="cursor-pointer w-[25px] transition-filter hover:brightness-150"/>
                    <img src="/assets/link.svg" alt="" className="cursor-pointer w-[25px] transition-filter hover:brightness-150" />
                  </div>
              </div>
          </div>

          <div className='mt-[250px] flex items-center'>
            <div className='w-[512px]'>
              <img src="/assets/monances.png" alt="" className="shadow-sm w-full"/>
            </div>
              <div className='absolute right-4'>
                  <span className="block text-end">Personal Project</span>
                  <span className="block text-end font-roboto font-normal text-[28px] text-blue-gradient mt-1">Monances</span>
                  <div className='projects-text-lg w-[580px] px-4 py-4 mt-4'>
                    <p className="text-base drop-shadow-lg">
                      Track your expenses and incomes, set and monitor custom budgets, view your balance with an interactive chart, and switch to dark mode for comfortable use.
                    </p>
                  </div>

                  <span className="text-gray-600 font-medium text-base mt-6 text-end block">Html, Css, Javascript, ChartJS, sweetalert2, scrollrevealjs.</span>
                  
                  <div className="flex items-center justify-end gap-4 mt-4">
                    <img src="/assets/github.svg" alt="" className="cursor-pointer w-[25px] transition-filter hover:brightness-150"/>
                    <img src="/assets/link.svg" alt="" className="cursor-pointer w-[25px] transition-filter hover:brightness-150" />
                  </div>
              </div>
          </div>

        </motion.section>

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
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jairrodriguesmd@gmail.com" target="_blank" className="cursor-pointer button-properties py-3 px-16 mt-[78px] transition-colors hover:bg-blue-300 hover:text-blue-500">
                Say Hello
              </a>
            </div>
          </div>
        </motion.section>  
      </main>
    </div>
  )
}