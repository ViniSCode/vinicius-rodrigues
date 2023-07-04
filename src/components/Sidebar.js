import { motion } from "framer-motion";
import { useState } from "react";

export function Sidebar() {
  const scrollToHome = () => {
    setIsOpen(false);
    const element = document.getElementById("home-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    setIsOpen(false);
    const element = document.getElementById("about-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTechnologies = () => {
    setIsOpen(false);
    const element = document.getElementById("technologies-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    setIsOpen(false);
    const element = document.getElementById("projects-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    setIsOpen(false);
    const element = document.getElementById("contact-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const sidebarVariants = {
    open: {
      y: "0%",
      transition: {
        type: "linear",
        stiffness: 300,
        damping: 20,
      },
    },
    closed: {
      y: "100%",
      transition: {
        type: "linear",
        stiffness: 300,
        damping: 20,
      },
    },
  };
  const menu = {
    open: {
      x: "0%",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    closed: {
      x: "100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <>
      <motion.div
        className={`mx-auto cursor-pointer  max-w-[358px] md:max-w-[628px] absolute -top-[8px] right-0 z-40`}
        animate={isOpen ? "closed" : "open"}
        variants={menu}
      >
        <img
          src="/assets/menu.svg"
          alt="open menu"
          className="block"
          onClick={() => setIsOpen(true)}
          animate={isOpen ? "open" : "closed"}
        />
      </motion.div>
      <motion.div
        className="mx-auto cursor-pointer max-w-[358px] md:max-w-[628px] absolute -top-[8px] right-0 z-40"
        animate={!isOpen ? "closed" : "open"}
        variants={menu}
      >
        <img
          src="/assets/close.svg"
          className="block"
          alt="close menu"
          onClick={() => setIsOpen(false)}
        />
      </motion.div>
      <motion.nav
        className="sidebar flex items-center justify-center"
        variants={sidebarVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        <ul className="sidebar__nav flex flex-col items-center gap-10">
          <li>
            <span
              href="#"
              onClick={scrollToHome}
              className="text-blue-gradient transition-filter hover:brightness-150 font-bold cursor-pointer"
            >
              01.HOME
            </span>
          </li>
          <li>
            <span
              href="#"
              onClick={scrollToAbout}
              className="text-blue-gradient transition-filter hover:brightness-150 font-bold cursor-pointer"
            >
              02.ABOUT
            </span>
          </li>
          <li>
            <span
              href="#"
              onClick={scrollToTechnologies}
              className="text-blue-gradient transition-filter hover:brightness-150 font-bold cursor-pointer"
            >
              03.TECHNOLOGIES
            </span>
          </li>
          <li>
            <span
              href="#"
              onClick={scrollToProjects}
              className="text-blue-gradient transition-filter hover:brightness-150 font-bold cursor-pointer"
            >
              03.PROJECTS
            </span>
          </li>
          <li>
            <span
              href="#"
              onClick={scrollToContact}
              className="text-blue-gradient transition-filter hover:brightness-150 font-bold cursor-pointer"
            >
              04.CONTACT
            </span>
          </li>
        </ul>
      </motion.nav>
    </>
  );
}
