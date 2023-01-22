import { motion } from 'framer-motion';


export function TechnologiesSection({section3Ref, inViewFadeOut, opacitySection3}) {
  return (
    <motion.section
    className="mt-[398px]"
    ref={section3Ref}
    initial={inViewFadeOut}
    animate={opacitySection3}
  >
    <h2 className="text-center font-montserrat font-bold text-[28px] text-blue-gradient md:text-[40px]">
      03. TECHNOLOGIES
    </h2>
    <div className="mt-[92px] md:mt-[152px] flex flex-col items-center md:flex-row md:flex-wrap md:justify-between md:items-center xl:gap-20">
      <div className="max-w-[214px]">
        <div className="flex items-center justify-center">
          <img src="/assets/react.svg" alt="" className="" />
        </div>
        <strong className="mt-6 text-white text-[28px] text-center block">
          React.JS
        </strong>
        <span className="mt-4 block text-gray-600">
          Expert in React.js, creating professional projects.
        </span>
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
          <img src="/assets/next.svg" alt="" className="" />
        </div>
        <strong className="mt-6 text-white text-[28px] text-center block">
          Next.JS
        </strong>
        <span className="mt-4 block text-gray-600">
          Expert in React.js, creating professional projects.
        </span>
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
          <img src="/assets/typescript.svg" alt="" className="" />
        </div>
        <strong className="mt-6 text-white text-[28px] text-center block">
          Typescript
        </strong>
        <span className="mt-4 block text-gray-600">
          Expert in React.js, creating professional projects.
        </span>
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
          <img src="/assets/graphql.svg" alt="" className="" />
        </div>
        <strong className="mt-6 text-white text-[28px] text-center block">
          GraphQl
        </strong>
        <span className="mt-4 block text-gray-600">
          Expert in React.js, creating professional projects.
        </span>
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
          <img src="/assets/tailwind.svg" alt="" className="" />
        </div>
        <strong className="mt-6 text-white text-[28px] text-center block">
          Tailwind
        </strong>
        <span className="mt-4 block text-gray-600">
          Expert in React.js, creating professional projects.
        </span>
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
          <img src="/assets/sass.svg" alt="" className="" />
        </div>
        <strong className="mt-6 text-white text-[28px] text-center block">
          Sass
        </strong>
        <span className="mt-4 block text-gray-600">
          Expert in React.js, creating professional projects.
        </span>
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
          <img src="/assets/chakra.svg" alt="" className="" />
        </div>
        <strong className="mt-6 text-white text-[28px] text-center block">
          Chakra UI
        </strong>
        <span className="mt-4 block text-gray-600">
          Expert in React.js, creating professional projects.
        </span>
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
          <img src="/assets/css.svg" alt="" className="" />
        </div>
        <strong className="mt-6 text-white text-[28px] text-center block">
          CSS3
        </strong>
        <span className="mt-4 block text-gray-600">
          Expert in React.js, creating professional projects.
        </span>
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
  )
}
