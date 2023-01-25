import { motion } from "framer-motion";
import { BsFillCircleFill } from 'react-icons/bs';

export function ProjectsSection({
  section4Ref,
  inViewFadeOut,
  opacitySection4,
  p1, p2, p3, p4, img1, img2, img3, img4,
  inViewXFadeOut, inViewYFadeOut
}) {
  return (
    <motion.div
      ref={section4Ref}
      initial={inViewFadeOut}
      animate={opacitySection4}
      id="#projects"
    >
      <motion.section className="mt-[398px] hidden lg:block relative">
        <h2 className="text-center font-montserrat font-bold text-[28px] leading-10 tracking-[-0.02em] text-blue-gradient md:text-[40px]">
          04. PROJECTS
        </h2>

        <div className="mt-[250px] flex items-center">
          <a href="https://dopeshoe.vercel.app/" target="_blank" rel="noreferrer">
            <motion.div  initial={inViewXFadeOut} animate={img1} whileHover={{scale: 1.03}} transition={{duration: 0.2}} className="w-[485px] xl:w-[668px] cursor-pointer">
              <img
                src="/assets/dopeshoe.png"
                alt=""
                className="shadow-sm w-full"
              />
            </motion.div>
          </a>
          <motion.div className="absolute right-4" initial={inViewYFadeOut} animate={p1}>
            <span className="block text-end">Personal Project</span>
            <span className="block text-end font-roboto font-normal text-[28px] text-blue-gradient mt-1">
              Dopeshoe
            </span>
            <div className="projects-text-lg w-[580px] xl:w-[624px] px-4 py-4 mt-4">
              <p className="text-base">
                DopeShoe is an e-commerce website built using NextJS, Stripe,
                Hygraph, Graphql(URQL), Typescript and styled with Tailwindcss.
                It allows users to buy shoes, view their shopping cart, and see
                past orders. It includes features like responsive layout and
                search bar with filters.
              </p>
            </div>

            <span className="text-gray-500 font-medium text-base mt-6 flex items-center gap-2 justify-end">
              <BsFillCircleFill size={8} className="text-blue-400" />
              NextJS, Stripe, Hygraph, Graphql(URQL), Typescript, Tailwindcss.
            </span>

            <div className="flex items-center justify-end gap-4 mt-4">
              <img
                src="/assets/github.svg"
                alt=""
                className="cursor-pointer w-[25px] transition-filter hover:brightness-150"
              />
              <a href="https://dopeshoe.vercel.app/" target="_blank" rel="noreferrer">
                <img
                  src="/assets/link.svg"
                  alt=""
                  className="cursor-pointer w-[25px] transition-filter hover:brightness-150"
                />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-[250px] flex items-center">
          <a href="https://githubstats-seven.vercel.app/" target="_blank" rel="noreferrer">
            <motion.div  initial={inViewXFadeOut} animate={img2} whileHover={{scale: 1.03}} transition={{duration: 0.2}} className="w-[485px] xl:w-[668px] cursor-pointer">
              <img
                src="/assets/githubstats.png"
                alt=""
                className="shadow-sm w-full"
              />
            </motion.div>
          </a>
          <motion.div initial={inViewYFadeOut} animate={p2} className="absolute right-4">
            <span className="block text-end">Personal Project</span>
            <span className="block text-end font-roboto font-normal text-[28px] text-blue-gradient mt-1">
              GithubStats
            </span>
            <div className="projects-text-lg w-[580px] xl:w-[624px] px-4 py-4 mt-4">
              <p className="text-base">
                Githubstats is a web app that allows users to search for Github
                users and organizations, and access their profile information
                such as repositories, starred repositories, followers and
                members of an organization. It is designed to provide a simple
                and efficient way to view a user's Github data.
              </p>
            </div>

            <span className="text-gray-500 font-medium text-base mt-6 flex items-center gap-2 justify-end">
              <BsFillCircleFill size={8} className="text-blue-400" />
              NextJS, Typescript, Chakra UI, GraphQL(Apollo Client), Codegen.
            </span>

            <div className="flex items-center justify-end gap-4 mt-4">
              <img
                src="/assets/github.svg"
                alt=""
                className="cursor-pointer w-[25px] transition-filter hover:brightness-150"
              />
              <a href="https://githubstats-seven.vercel.app/" target="_blank" rel="noreferrer">
                <img
                  src="/assets/link.svg"
                  alt=""
                  className="cursor-pointer w-[25px] transition-filter hover:brightness-150"
                />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-[250px] flex items-center">
          <a href="https://devblog-fe7e4.web.app/" target="_blank" rel="noreferrer">
            <motion.div  initial={inViewXFadeOut} animate={img3} whileHover={{scale: 1.03}} transition={{duration: 0.2}} className="w-[485px] xl:w-[668px] cursor-pointer">
              <img
                src="/assets/devblog.png"
                alt=""
                className="shadow-sm w-full"
              />
            </motion.div>
          </a>
          <motion.div initial={inViewYFadeOut} animate={p3} className="absolute right-4">
            <span className="block text-end">Personal Project</span>
            <span className="block text-end font-roboto font-normal text-[28px] text-blue-gradient mt-1">
              DevBlog
            </span>
            <div className="projects-text-lg w-[580px] xl:w-[624px] px-4 py-4 mt-4">
              <p className="text-base">
                DEVBLOG is a web application that allows users to browse and
                engage with blog posts, while also providing an administrative
                capability for the management of content on the Prismic CMS
                platform. Additionally, the application provides user
                authentication capabilities through Firebase Auth.
              </p>
            </div>

            <span className="text-gray-500 font-medium text-base mt-6 flex items-center gap-2 justify-end">
              <BsFillCircleFill size={8} className="text-blue-400" />
              ReactJS, Firebase, Prismic CMS, Sass.
            </span>

            <div className="flex items-center justify-end gap-4 mt-4">
              <img
                src="/assets/github.svg"
                alt=""
                className="cursor-pointer w-[25px] transition-filter hover:brightness-150"
              />
              <a href="https://devblog-fe7e4.web.app/" target="_blank" rel="noreferrer">
                <img
                  src="/assets/link.svg"
                  alt=""
                  className="cursor-pointer w-[25px] transition-filter hover:brightness-150"
                />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-[250px] flex items-center">
          <a href="https://monances.vercel.app/" target="_blank" rel="noreferrer">
            <motion.div  initial={inViewXFadeOut} animate={img4} whileHover={{scale: 1.03}} transition={{duration: 0.2}} className="w-[485px] xl:w-[668px] cursor-pointer">
              <img
                src="/assets/monances.png"
                alt=""
                className="shadow-sm w-full"
              />
            </motion.div>
          </a>
          <motion.div initial={inViewYFadeOut} animate={p4} className="absolute right-4">
            <span className="block text-end">Personal Project</span>
            <span className="block text-end font-roboto font-normal text-[28px] text-blue-gradient mt-1">
              Monances
            </span>
            <div className="projects-text-lg w-[580px] xl:w-[624px] px-4 py-4 mt-4">
              <p className="text-base drop-shadow-lg">
                Track your expenses and incomes, set and monitor custom budgets,
                view your balance with an interactive chart, and switch to dark
                mode for comfortable use.
              </p>
            </div>

            <span className="text-gray-500 font-medium text-base mt-6 flex items-center gap-2 justify-end">
              <BsFillCircleFill size={8} className="text-blue-400" />
              Html, Css, Javascript, ChartJS, sweetalert2, scrollrevealjs.
            </span>

            <div className="flex items-center justify-end gap-4 mt-4">
              <img
                src="/assets/github.svg"
                alt=""
                className="cursor-pointer w-[25px] transition-filter hover:brightness-150"
              />
              <a href="https://monances.vercel.app/" target="_blank" rel="noreferrer">
                <img
                  src="/assets/link.svg"
                  alt=""
                  className="cursor-pointer w-[25px] transition-filter hover:brightness-150"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="mt-[398px] lg:hidden"
        ref={section4Ref}
        initial={inViewFadeOut}
        animate={opacitySection4}
      >
        <h2 className="text-center font-montserrat font-bold text-[28px] leading-10 tracking-[-0.02em] text-blue-gradient md:text-[40px]">
          04. PROJECTS
        </h2>
        <div className="mt-[92px] md:mt-[152px] flex flex-col gap-28">
          <div>
            <a href="https://githubstats-seven.vercel.app/" rel="noreferrer" target="_blank">
              <motion.img src="/assets/dopeshoe.png" alt="" className="shadow-sm" animate={img1} initial={inViewXFadeOut}  whileHover={{scale: 1.05}}/>
            </a>
            <motion.div animate={p1} initial={inViewYFadeOut}>
              <span className="block mt-11">Personal Project</span>
              <span className="mt-2 block font-roboto font-normal text-[22px] md:text-3xl text-blue-gradient md:mt-6">
                Dopeshoe
              </span>
              <p className="text-sm mt-4 md:text-base md:mt-6">
                DopeShoe is an e-commerce website built using NextJS, Stripe,
                Hygraph, Graphql(URQL), Typescript and styled with Tailwindcss. It
                allows users to buy shoes, view their shopping cart, and see past
                orders. It includes features like responsive layout and search bar
                with filters.
              </p>
              <div className="mt-4 md:mt-6 flex items-center gap-2">
                <BsFillCircleFill size={8} className="text-blue-400" />
                <span className="text-sm text-gray-600 font-medium md:text-base">
                  NextJS, Stripe, Hygraph, Graphql(URQL), Typescript, Tailwindcss.
                </span>
              </div>
              <div className="flex items-center gap-4 mt-4 md:mt-6">
                <img
                  src="/assets/github.svg"
                  alt=""
                  className="cursor-pointer md:w-[35px] transition-filter hover:brightness-150"
                />
                <a href="https://dopeshoe.vercel.app/" rel="noreferrer" target="_blank">
                  <img
                    src="/assets/link.svg"
                    alt=""
                    className="cursor-pointer md:w-[35px] transition-filter hover:brightness-150"
                  />
                </a>
              </div>
            </motion.div>
          </div>

          <div>
            <a href="https://githubstats-seven.vercel.app/" rel="noreferrer" target="_blank">
              <motion.img src="/assets/githubstats.png" alt="" className="shadow-sm"  animate={img2} initial={inViewXFadeOut}  whileHover={{scale: 1.05}}/>
            </a>
            <motion.div animate={p2} initial={inViewYFadeOut}>
              <span className="block mt-11">Personal Project</span>
              <span className="mt-2 block font-roboto font-normal text-[22px] md:text-3xl text-blue-gradient md:mt-6">
                GithubStats
              </span>
              <p className="text-sm mt-4 md:text-base md:mt-6">
                Githubstats is a web app that allows users to search for Github
                users and organizations, and access their profile information such
                as repositories, starred repositories, followers and members of an
                organization. It is designed to provide a simple and efficient way
                to view a user's Github data.
              </p>
              <div className="mt-4 md:mt-6 flex items-center gap-2">
                <BsFillCircleFill size={8} className="text-blue-400" />
                <span className="text-sm text-gray-600 font-medium md:text-base">
                  NextJS, Typescript, Chakra UI, GraphQL(Apollo Client), Codegen.
                </span>
              </div>
              <div className="flex items-center gap-4 mt-4 md:mt-6">
                <img
                  src="/assets/github.svg"
                  alt=""
                  className="cursor-pointer md:w-[35px] transition-filter hover:brightness-150"
                />
                <a href="https://githubstats-seven.vercel.app/" rel="noreferrer" target="_blank">
                  <img
                    src="/assets/link.svg"
                    alt=""
                    className="cursor-pointer md:w-[35px] transition-filter hover:brightness-150"
                  />
                </a>
              </div>
            </motion.div>
          </div>

          <div>
            <a href="https://devblog-fe7e4.web.app/" rel="noreferrer" target="_blank">
              <motion.img src="/assets/devblog.png" alt="" className="shadow-sm"  animate={img3} initial={inViewXFadeOut}  whileHover={{scale: 1.05}}/>
            </a>
            <motion.div animate={p3} initial={inViewYFadeOut}>
              <span className="block mt-11">Personal Project</span>
              <span className="mt-2 block font-roboto font-normal text-[22px] md:text-3xl text-blue-gradient md:mt-6">
                DevBlog
              </span>
              <p className="text-sm mt-4 md:text-base md:mt-6">
                DEVBLOG is a web application that allows users to browse and
                engage with blog posts, while also providing an administrative
                capability for the management of content on the Prismic CMS
                platform. Additionally, the application provides user
                authentication capabilities through Firebase Auth.
              </p>
              <div className="mt-4 md:mt-6 flex items-center gap-2">
                <BsFillCircleFill size={8} className="text-blue-400" />
                <span className="text-sm text-gray-600 font-medium md:text-base">
                  ReactJS, Firebase, Prismic CMS, Sass.
                </span>
              </div>
              <div className="flex items-center gap-4 mt-4 md:mt-6">
                <img
                  src="/assets/github.svg"
                  alt=""
                  className="cursor-pointer md:w-[35px] transition-filter hover:brightness-150"
                />
                <a href="https://devblog-fe7e4.web.app/" target="_blank" rel="noreferrer">
                  <img
                    src="/assets/link.svg"
                    alt=""
                    className="cursor-pointer md:w-[35px] transition-filter hover:brightness-150"
                  />
                </a>
              </div>
            </motion.div>
          </div>

          <div>
            <a href="https://monances.vercel.app/" rel="noreferrer" target="_blank">
              <motion.img src="/assets/monances.png" alt="" className="shadow-sm"  animate={img4} initial={inViewXFadeOut}  whileHover={{scale: 1.05}}/>
            </a>
            <motion.div animate={p4} initial={inViewYFadeOut}>
              <span className="block mt-11">Personal Project</span>
              <span className="mt-2 block font-roboto font-normal text-[22px] md:text-3xl text-blue-gradient md:mt-6">
                Monances
              </span>
              <p className="text-sm mt-4 md:text-base md:mt-6">
                Track your expenses and incomes, set and monitor custom budgets,
                view your balance with an interactive chart, and switch to dark
                mode for comfortable use.
              </p>
              <div className="mt-4 md:mt-6 flex items-center gap-2">
                <BsFillCircleFill size={8} className="text-blue-400" />
                <span className="text-sm text-gray-600 font-medium md:text-base">
                  Html, Css, Javascript, ChartJS, sweetalert2, scrollrevealjs.
                </span>
              </div>
              <div className="flex items-center gap-4 mt-4 md:mt-6">
                <img
                  src="/assets/github.svg"
                  alt=""
                  className="cursor-pointer md:w-[35px] transition-filter hover:brightness-150"
                />
                <a href="https://monances.vercel.app/" target="_blank" rel="noreferrer">
                  <img
                    src="/assets/link.svg"
                    alt=""
                    className="cursor-pointer md:w-[35px] transition-filter hover:brightness-150"
                  />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
