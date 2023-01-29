import { motion } from 'framer-motion';


export function TechnologiesSection({section3Ref, t1, t2, t3, t4, t5, t6, t7, t8, inViewYFadeOut, opacitySection3, inViewFadeOut}) {
  return (
    <motion.section
    id="technologies-section" 
    className="mt-[398px]"
    ref={section3Ref}
    initial={inViewFadeOut}
    animate={opacitySection3}
  >
    <h2 className="text-center font-montserrat font-bold text-[28px] text-blue-gradient md:text-[40px]">
      03. TECHNOLOGIES
    </h2>
    <div className="mt-[92px] md:mt-[152px] flex flex-col items-center md:flex-row md:flex-wrap md:justify-between md:items-center lg:items-baseline xl:gap-20 xl:items-baseline">
      <motion.div initial={inViewYFadeOut} animate={t1} className="max-w-[214px]">
        <div className="flex items-center justify-center">
          <img src="/assets/react.svg" alt="" className="" />
        </div>
        <strong className="mt-6 text-white text-[28px] lg:text-2xl xl:text-[28px] text-center block">
          React.JS
        </strong>
        <span className="mt-4 block text-gray-600 lg:text-sm xl:text-base">
          Expert in React.js, creating professional projects.
        </span>
        <ol className="ml-4 mt-2 list-disc text-gray-600 lg:text-sm xl:text-base marker:text-blue-400">
          <li>Context API</li>
          <li>JAM Stack</li>
          <li>Hooks</li>
          <li>State</li>
          <li>API's</li>
        </ol>
      </motion.div>

      <motion.div initial={inViewYFadeOut} animate={t2} className="max-w-[214px] mt-8 md:mt-0">
        <div className="flex items-center justify-center">
          <img src="/assets/next.svg" alt="" className="" />
        </div>
        <strong className="mt-6 text-white text-[28px] lg:text-2xl xl:text-[28px] text-center block">
          Next.JS
        </strong>
        <span className="mt-4 block text-gray-600 lg:text-sm xl:text-base">
          Creating fast, secure, and scalable web applications 
        </span>
        <ol className="ml-4 mt-2 list-disc text-gray-600 lg:text-sm xl:text-base marker:text-blue-400">
          <li>Server-side rendering</li>
          <li>Optimized performance</li>
          <li>Static Websites</li>
          <li>JAM Stack</li>
          <li>Auth</li>
        </ol>
      </motion.div>

      <motion.div initial={inViewYFadeOut} animate={t3} className="max-w-[214px] mt-8">
        <div className="flex items-center justify-center">
          <img src="/assets/typescript.svg" alt="" className="" />
        </div>
        <strong className="mt-6 text-white text-[28px] lg:text-2xl xl:text-[28px] text-center block">
          Typescript
        </strong>
        <span className="mt-4 block text-gray-600 lg:text-sm xl:text-base">
          TypeScript to Enhance the development process
        </span>
        <ol className="ml-4 mt-2 list-disc text-gray-600 lg:text-sm xl:text-base marker:text-blue-400">
          <li>Code maintainability</li>
          <li>Productivity</li>
          <li>Interfaces</li>
          <li>Types</li>
        </ol>
      </motion.div>

      <motion.div initial={inViewYFadeOut} animate={t4} className="max-w-[214px] mt-8">
        <div className="flex items-center justify-center">
          <img src="/assets/graphql.svg" alt="" className="" />
        </div>
        <strong className="mt-6 text-white text-[28px] lg:text-2xl xl:text-[28px] text-center block">
          GraphQl
        </strong>
        <span className="mt-4 block text-gray-600 lg:text-sm xl:text-base">
          Experience using GraphQL.
        </span>
        <ol className="ml-4 mt-2 list-disc text-gray-600 lg:text-sm xl:text-base marker:text-blue-400">
          <li>Apollo Client</li>
          <li>URQL</li>
          <li>Mutations</li>
          <li>Queries</li>
        </ol>
      </motion.div>

      <motion.div initial={inViewYFadeOut} animate={t5} className="max-w-[214px] mt-8">
        <div className="flex items-center justify-center">
          <img src="/assets/hygraph.svg" alt="" className="" />
        </div>
        <strong className="mt-6 text-white lg:text-2xl xl:text-[28px] text-[28px] text-center block">
          Headless CMS
        </strong>
        <span className="mt-4 block text-gray-600 lg:text-sm xl:text-base">
          Expert in Creating solutions using Headless CMS.
        </span>
        <ol className="ml-4 mt-2 list-disc text-gray-600 lg:text-sm xl:text-base marker:text-blue-400">
          <li>Hygraph</li>
          <li>Prismic CMS</li>
          <li>Serverless</li>
          <li>API</li>
        </ol>
      </motion.div>

      <motion.div initial={inViewYFadeOut} animate={t6} className="max-w-[214px] mt-8">
        <div className="flex items-center justify-center">
          <img src="/assets/tailwind.svg" alt="" className="" />
        </div>
        <strong className="mt-6 text-white lg:text-2xl xl:text-[28px] text-[28px] text-center block">
          Tailwind
        </strong>
        <span className="mt-4 block text-gray-600 lg:text-sm xl:text-base">
          Elevating UI Design with Tailwind CSS
        </span>
        <ol className="ml-4 mt-2 list-disc text-gray-600 lg:text-sm xl:text-base marker:text-blue-400">
          <li>Rapid development</li>
          <li>Responsive Websites</li>
          <li>Consistent design</li>
          <li>Productivity</li>
          <li>Mobile First</li>
        </ol>
      </motion.div>

      <motion.div initial={inViewYFadeOut} animate={t7} className="max-w-[214px] mt-8">
        <div className="flex items-center justify-center">
          <img src="/assets/chakra.svg" alt="" className="" />
        </div>
        <strong className="mt-6 text-white lg:text-2xl xl:text-[28px] text-[28px] text-center block">
          Chakra UI
        </strong>
        <span className="mt-4 block text-gray-600 lg:text-sm xl:text-base">
          Elegant and User-Friendly Websites with Chakra UI
        </span>
        <ol className="ml-4 mt-2 list-disc text-gray-600 lg:text-sm xl:text-base marker:text-blue-400">
          <li>Customizable Components</li>
          <li>Accessibility</li>
          <li>Productivity</li>
          <li>Theming</li>
          <li>Styles</li>
        </ol>
      </motion.div>

      <motion.div initial={inViewYFadeOut} animate={t8} className="max-w-[214px] mt-8">
        <div className="flex items-center justify-center">
          <img src="/assets/css.svg" alt="" className="" />
        </div>
        <strong className="mt-6 text-white text-[28px] lg:text-2xl xl:text-[28px] text-center block">
          CSS3
        </strong>
        <span className="mt-4 block text-gray-600">
          Skilled in stylizing websites using CSS 
        </span>
        <ol className="ml-4 mt-2 list-disc text-gray-600 lg:text-sm xl:text-base marker:text-blue-400">
          <li>Responsive Websites</li>
          <li>Mobile/Desktop First</li>
          <li>Flexbox Layout</li>
          <li>Grid Layout</li>
          <li>Animations</li>
        </ol>
      </motion.div>
    </div>
  </motion.section>
  )
}
