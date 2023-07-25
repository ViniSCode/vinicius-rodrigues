export function ContactSection(section5Ref, inViewFadeOut, opacitySection5) {
  return (
    <motion.section
      className="mt-[398px] pb-56"
      ref={section5Ref}
      initial={inViewFadeOut}
      animate={opacitySection5}
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
          <img
            src="/assets/github.svg"
            alt=""
            className="w-[33px] cursor-pointer"
          />
          <img src="/assets/mail.svg" alt="" className="cursor-pointer" />
          <img src="/assets/linkedin.svg" alt="" className="cursor-pointer" />
        </div>
        <div className="mt-20 flex justify-center">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=jairrodriguesmd@gmail.com"
            rel="noreferrer"
            target="_blank"
            className="cursor-pointer button-properties py-3 px-16 mt-[78px] transition-colors hover:bg-blue-300 hover:text-blue-500"
          >
            Say Hello
          </a>
        </div>
      </div>
    </motion.section>
  );
}
