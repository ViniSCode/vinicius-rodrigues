import { motion } from "framer-motion";

export function AboutSection({ section2Ref, p1FadeX, p2FadeX, p3FadeX, listFadeX, p4FadeX, imgFadeY, inViewYFadeOut, inViewXFadeOut, inViewFadeOut, opacitySection2}) {
  return (
    <motion.section className="mt-[398px]" ref={section2Ref} animate={opacitySection2} initial={inViewFadeOut}>
      <h2 className="text-center font-montserrat font-bold text-[28px] leading-10 tracking-[-0.02em] text-blue-gradient md:text-[40px]">
        02. About
      </h2>
      <div className="lg:flex lg:gap-16 lg:items-center xl:items-center">
        <div className="lg:max-w-[600px] xl:max-w-[792px]">
          <motion.p animate={p1FadeX} initial={inViewXFadeOut} className="mt-[92px] md:mt-[152px] font-montserrat text-sm text-white leading-[20px] xl:text-base xl:leading-[28px]">
            Hi there! My name is Vinícius and I am passionate about creating
            engaging web experiences. I have a background in System Analysis and
            Development and have been studying Front End Development for the
            past two years. My technical skills include technologies such as{" "}
            <span className="text-blue-500">
              React, Next.JS, and Typescript
            </span>
            .
          </motion.p>
          <motion.p animate={p2FadeX} initial={inViewXFadeOut}  className="mt-4 md:mt-[20px] font-montserrat text-sm tracking-[-0.02em] text-white leading-[20px] xl:text-base xl:leading-[28px]">
            I have experience working on personal projects, including:
          </motion.p>
          <motion.ol animate={listFadeX} initial={inViewXFadeOut}  className="mt-4 ml-4 md:mt-[20px] font-montserrat text-sm tracking-[-0.02em] text-white leading-[20px] list-disc xl:text-base xl:leading-[28px]">
            <li className="mt-4">
              DopeShoe, a NextJS application that uses{" "}
              <span className="text-blue-500">Stripe, GraphQL (URQL),</span>{" "}
              Typescript, <span className="text-blue-500">Tailwind,</span> and{" "}
              <span className="text-blue-500">Hygraph</span>
            </li>
            <li className="mt-4">
              Githubstats, a NextJS application that uses GraphQL{" "}
              <span className="text-blue-500">(Apollo Client)</span>,
              Typescript, and <span className="text-blue-500">ChakraUI</span> to
              search for and display statistics from a user's GitHub profile
            </li>
            <li className="mt-4">
              DevBlog, A ReactJS-based blog called DevBlog, using{" "}
              <span className="text-blue-500">
                firebase, Prismic CMS, and sass
              </span>
            </li>
            <li className="mt-4">
              Monances A simple Finance App built with{" "}
              <span className="text-blue-500">HTML, CSS, and JavaScript</span>
            </li>
          </motion.ol>
          <motion.p animate={p3FadeX} initial={inViewXFadeOut} className="mt-4 md:mt-[20px] font-montserrat text-sm tracking-[-0.02em] text-white leading-[20px] xl:text-base xl:leading-[28px]">
            In addition to my web development experience, I am currently taking
            an online course on Introduction to Computer Science (CS50). I also
            have a basic knowledge of design tools like Figma and Photoshop and
            programming languages like C, Python, and Java.
          </motion.p>
          <motion.p animate={p4FadeX} initial={inViewXFadeOut}  className="mt-4 md:mt-[20px] font-montserrat text-sm text-white leading-[20px] xl:text-base xl:leading-[28px]">
            I am constantly learning and improving my skills in web development
            and am dedicated to creating intuitive and user-friendly digital
            experiences.
          </motion.p>
        </div>

        <div className="flex justify-center mt-14 md:mt-[92px] w-[283px] md:w-[390px] lg:w-[350px] lg:mt-36 xl:w-[420px] xl:mt-36  mx-auto">
          <motion.img
            animate={imgFadeY} initial={inViewYFadeOut} 
            src="/assets/avatar.png"
            alt="Vinícius Rodrigues"
            className="block w-full"
          />
        </div>
      </div>
    </motion.section>
  );
}
