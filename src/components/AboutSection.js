import { motion } from "framer-motion";
export function AboutSection({
  section2Ref,
  p1FadeX,
  p2FadeX,
  p3FadeX,
  listFadeX,
  p4FadeX,
  imgFadeY,
  inViewYFadeOut,
  inViewXFadeOut,
  inViewFadeOut,
  opacitySection2,
}) {
  return (
    <motion.section
      id="about-section"
      className="mt-[398px]"
      ref={section2Ref}
      animate={opacitySection2}
      initial={inViewFadeOut}
    >
      <h2 className="text-center font-montserrat font-bold text-[28px] leading-10 tracking-[-0.02em] text-blue-gradient md:text-[40px]">
        02. About
      </h2>
      <div className="mt-[92px] flex flex-col gap-14 lg:flex lg:flex-row lg:gap-16 lg:items-center xl:items-center bg-blue-890 border-4 border-blue-850 rounded-2xl md:rounded-3xl lg:rounded-[30px] p-8 md:p-16">
        <div className="flex justify-center w-full md:w-[300px] lg:min-w-[300px] xl:min-w-[400px]  mx-auto">
          <motion.img
            animate={imgFadeY}
            initial={inViewYFadeOut}
            src="/assets/avatar.png"
            alt="Vinícius Rodrigues"
            className="block w-full"
          />
        </div>
        <div className="lg:max-w-[600px] xl:max-w-[792px]">
          <h3 className="text-xl md:text-2xl uppercase text-start font-montserrat font-bold text-[28px] leading-10 tracking-[-0.02em] text-blue-gradient md:text-[40px]">
            Vinícius Rodrigues
          </h3>
          <motion.p
            animate={p1FadeX}
            initial={inViewXFadeOut}
            className="mt-8 md:mt-10 font-montserrat text-xs text-gray-text  font-medium leading-[20px] xl:text-base xl:leading-[28px]"
          >
            Hi there! My name is Vinícius and I am{" "}
            <span className="text-blue-500">
              passionate about creating engaging web experiences
            </span>
            . I have a background in{" "}
            <span className="text-blue-500">
              System Analysis and Development
            </span>{" "}
            and have been studying Front End Development for the past two years.
            My technical skills include technologies such as{" "}
            <span className="text-blue-500">
              React, Next.JS, and Typescript
            </span>
            .
          </motion.p>

          <motion.p
            animate={p3FadeX}
            initial={inViewXFadeOut}
            className="mt-4 md:mt-[20px] font-montserrat text-xs tracking-[-0.02em] font-medium text-gray-text leading-[20px] xl:text-base xl:leading-[28px]"
          >
            In addition to my web development experience, I have completed the
            online course on{" "}
            <span className="text-blue-500">
              Introduction to Computer Science (CS50)
            </span>
            . I also have a basic understanding of design tools like{" "}
            <span className="text-blue-500">Figma</span> and
            <span className="text-blue-500">Photoshop</span>, as well as
            programming languages such as{" "}
            <span className="text-blue-500">C, Python, and Java</span>.
          </motion.p>
          <motion.p
            animate={p4FadeX}
            initial={inViewXFadeOut}
            className="mt-4 md:mt-[20px] font-montserrat text-xs tracking-[-0.02em] font-medium text-gray-text leading-[20px] xl:text-base xl:leading-[28px]"
          >
            I am constantly learning and improving my skills in web development
            and am dedicated to creating intuitive and user-friendly digital
            experiences.
          </motion.p>
          <div className="mt-10 flex gap-4 items-center justify-between">
            <div className="min-w-fit flex items-center gap-4">
              <div className="min-w-fit">
                <a
                  href="https://github.com/ViniSCode/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="./assets/github.svg"
                    alt="github"
                    className="block w-7 md:w-10"
                  />
                </a>
              </div>
              <a
                href="https://www.linkedin.com/in/vinicius-rodrigues-5897831b8/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="./assets/linkedin.svg"
                  alt="github"
                  className="block w-7 md:w-10"
                />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=viniciuskauarodriguesdev@gmail.com"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src="./assets/mail.svg"
                  alt="github"
                  className="block w-7 md:w-10"
                />
              </a>
            </div>

            <div className="block w-full h-1 bg-blue-gradient"></div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
