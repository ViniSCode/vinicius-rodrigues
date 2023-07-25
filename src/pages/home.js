import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AboutSection } from "../components/AboutSection";
import { HeroSection } from "../components/HeroSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { Sidebar } from "../components/Sidebar";
import { TechnologiesSection } from "../components/TechnologiesSection";

export default function Home() {
  const { ref: section1Ref, inView: section1View } = useInView({
    triggerOnce: true,
  });
  const { ref: section2Ref, inView: section2View } = useInView({
    triggerOnce: true,
  });
  const { ref: section3Ref, inView: section3View } = useInView({
    triggerOnce: true,
  });
  const { ref: section4Ref, inView: section4View } = useInView({
    triggerOnce: true,
  });
  const { ref: section5Ref, inView: section5View } = useInView({
    triggerOnce: true,
  });

  const fadeInXVariant = {
    hidden: { opacity: 0, x: "-100px" },
    visible: (i) => {
      const delay = 0.1 + i * 0.2;
      return {
        opacity: 1,
        x: 0,
        transition: {
          delay,
          duration: 0.5,
        },
      };
    },
  };

  const fadeInYVariant = {
    hidden: { opacity: 0, y: "100px" },
    visible: (i) => {
      const delay = 0.1 + i * 0.2;
      return {
        opacity: 1,
        y: 0,
        transition: {
          delay,
          duration: 0.5,
        },
      };
    },
  };

  const fadeInVariant = {
    hidden: { opacity: 0 },
    visible: (i) => {
      const delay = 0.1 + i * 0.2;
      return {
        opacity: 1,
        transition: {
          delay,
          duration: 0.5,
        },
      };
    },
  };

  // refactor this scroll functions to scrollTo("home-section")

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      id="home-section"
      className="container snap-start snap-mandatory scroll-smooth mx-auto"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ delay: 0.1 }}
    >
      <div className="lg:hidden menu-bg-blue-gradient fixed top-0 left-0 right-0 shadow-sm z-[20]">
        <header className="pt-[22px] pb-[22px] w-full max-w-[358px] md:max-w-[628px] px-4 mx-auto">
          <nav className="flex items-center justify-between relative">
            <motion.span className="font-montserrat font-bold text-sm leading-[17px] tracking-[-0.02em] text-blue-gradient">
              VINÍCIUS RODRIGUES
            </motion.span>
            <Sidebar />
          </nav>
        </header>
      </div>
      <div className="hidden lg:block lg:max-w-[1283px] mx-auto mt-8 px-4">
        <nav className="flex items-center justify-between">
          <span className="navLink-text-blue-gradient font-montserrat font-bold text-sm leading-[17px] tracking-[-0.02em] text-blue-gradient">
            VINÍCIUS RODRIGUES
          </span>
          <ul className="flex items-center gap-8 font-montserrat font-bold leading-5 tracking-[-0.02em] lg:text-xs xl:text-sm">
            <li>
              <button
                onClick={() => scrollTo("home-section")}
                className="navLink-text-blue-gradient transition-filter hover:brightness-150 cursor-pointer"
              >
                01.HOME
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollTo("about-section")}
                className="navLink-text-blue-gradient transition-filter hover:brightness-150 cursor-pointer"
              >
                02.ABOUT
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollTo("technologies-section")}
                className="navLink-text-blue-gradient transition-filter hover:brightness-150 cursor-pointer"
              >
                03.TECHNOLOGIES
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollTo("projects-section")}
                className="navLink-text-blue-gradient transition-filter hover:brightness-150 cursor-pointer"
              >
                03.PROJECTS
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollTo("contact-section")}
                className="navLink-text-blue-gradient transition-filter hover:brightness-150 cursor-pointer"
              >
                04.CONTACT
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <main className="mt-[132px] md:mt-[252px] lg:mt-[102px] xl:mt-[198px] max-w-[358px] md:max-w-[628px] lg:max-w-[1283px] px-4 mx-auto">
        <HeroSection
          section1View={section1View}
          section1Ref={section1Ref}
          fadeInXVariant={fadeInXVariant}
          fadeInYVariant={fadeInYVariant}
        />

        <AboutSection
          section2Ref={section2Ref}
          fadeInXVariant={fadeInXVariant}
          fadeInYVariant={fadeInYVariant}
          section2View={section2View}
          fadeInVariant={fadeInVariant}
        />

        <TechnologiesSection
          section3Ref={section3Ref}
          fadeInYVariant={fadeInYVariant}
          section3View={section3View}
          fadeInVariant={fadeInVariant}
        />

        <ProjectsSection
          section4Ref={section4Ref}
          fadeInYVariant={fadeInYVariant}
          section4View={section4View}
          fadeInVariant={fadeInVariant}
        />

        <motion.section
          id="contact-section"
          className="mt-[398px] pb-56"
          ref={section5Ref}
          variants={fadeInVariant}
          initial="hidden"
          animate={section5View ? "visible" : "hidden"}
          custom={0.2}
        >
          <h2 className="text-center font-montserrat font-bold text-[28px] leading-10 tracking-[-0.02em] text-blue-gradient md:text-[40px]">
            05. CONTACT
          </h2>
          <div className="mt-[92px] md:mt-[152px]">
            <h3 className="text-center font-montserrat font-bold text-[23px] text-blue-gradient">
              Get in touch
            </h3>
            <div className="mt-7 w-[200px] bg-blue-gradient h-[1px] mx-auto"></div>
            <div className="flex gap-7 justify-center mt-14">
              <a
                href="https://www.github.com/viniscode/"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src="/assets/github.svg"
                  alt=""
                  className="w-[33px] cursor-pointer"
                />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=viniciuskauarodriguesdev@gmail.com"
                rel="noreferrer"
                target="_blank"
              >
                <img src="/assets/mail.svg" alt="" className="cursor-pointer" />
              </a>
              <a
                href="https://www.linkedin.com/in/vinicius-rodrigues-5897831b8/"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src="/assets/linkedin.svg"
                  alt=""
                  className="cursor-pointer"
                />
              </a>
            </div>
            <div className="mt-20 flex justify-center">
              <a
                href="https://docs.google.com/document/d/1gyE3E3h1nIJsyZufCv43wzwLEs8EKXGtXMcwkRY-S0c/edit?usp=sharing"
                rel="noreferrer"
                target="_blank"
                className="text-sky-400 font-medium cursor-pointer button-properties py-3 px-16 mt-[78px] transition-colors hover:bg-blue-300 hover:text-sky-400"
              >
                RESUMÉ
              </a>
            </div>
          </div>
        </motion.section>
      </main>
    </motion.div>
  );
}
