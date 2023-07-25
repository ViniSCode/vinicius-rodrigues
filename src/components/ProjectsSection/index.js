import { motion } from "framer-motion";
import { useState } from "react";
import { DevBlogInfo } from "./ProjectInfo/DevBlogInfo";
import { DopeShoeInfo } from "./ProjectInfo/DopeShoeInfo";
import { GithubStatsInfo } from "./ProjectInfo/GithubStatsInfo";
import { PlanMyJourneyInfo } from "./ProjectInfo/PlanMyJourneyInfo";
import { TalkSpotInfo } from "./ProjectInfo/TalksPotInfo";
import { ProjectPreview } from "./ProjectPreview";
import { ProjectTechnologies } from "./ProjectTechnologies";

export function ProjectsSection({
  section4Ref,
  fadeInYVariant,
  section4View,
  fadeInVariant,
}) {
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  return (
    <motion.div
      id="projects-section"
      ref={section4Ref}
      variants={fadeInVariant}
      initial="hidden"
      animate={section4View ? "visible" : "hidden"}
      custom={0.2}
    >
      <motion.section className="mt-[398px]">
        <h2 className="text-center font-montserrat font-bold text-[28px] leading-10 tracking-[-0.02em] text-blue-gradient md:text-[40px]">
          04. PROJECTS
        </h2>
        <motion.div
          variants={fadeInYVariant}
          initial="hidden"
          animate={section4View ? "visible" : "hidden"}
          custom={0.4}
          className="mt-[92px] md:mt-[152px] flex flex-col gap-28"
        >
          <div className="block lg:flex lg:items-center xl:items-start">
            <a
              href="https://dopeshoe.vercel.app/"
              rel="noreferrer"
              target="_blank"
              className="shadow-sm min-w-[90%] max-w-[90%] mx-auto md:min-w-[90%] relative z-20 lg:min-w-[450px] lg:h-fit xl:min-w-[600px]"
            >
              <motion.img
                src="/assets/dopeshoe.png"
                alt=""
                // animate={img1}
                // initial={inViewXFadeOut}
                className="max-w-[90%] lg:max-w-full mx-auto lg:mx-0"
                whileHover={{ scale: 1.02 }}
              />
            </a>
            <motion.div
              // animate={p1}
              // initial={inViewYFadeOut}
              className="bg-blue-890 border-4 border-blue-850 px-6 pb-4 md:px-10 md:py-10 pt-10 lg:py-8 lg:px-16 shadow-lg rounded-2xl lg:rounded-[30px] relative top-[-50px] left-0 lg:left-[-30px] lg:top-0 z-10 w-full"
            >
              <DopeShoeInfo />

              <div className="mt-10 hidden items-baseline gap-4 justify-between md:flex">
                <ProjectTechnologies
                  text="Dynamic Web Applications"
                  title="NextJS"
                  src="next.svg"
                />
                <ProjectTechnologies
                  text="Type-Safe React Components"
                  title="Typescript"
                  src="typescript.svg"
                />
                <ProjectTechnologies
                  text="Data Fetching & Mutations"
                  title="GraphQL"
                  src="graphql.svg"
                />
                <ProjectTechnologies
                  text="Responsive and Modern Design"
                  title="Tailwind"
                  src="tailwind.svg"
                />
              </div>

              <ProjectPreview
                github="https://www.github.com/viniscode/dopeshoe"
                preview="https://dopeshoe.vercel.app/"
              />
            </motion.div>
          </div>

          <div className="block lg:flex lg:items-center xl:items-start xl:relative">
            <a
              href="https://githubstats-seven.vercel.app/"
              rel="noreferrer"
              target="_blank"
              className="order-2 shadow-sm min-w-[90%] max-w-[90%] mx-auto relative z-20 lg:min-w-[450px] h-fit left-0 lg:left-[-30px] xl:left-auto xl:right-0 xl:absolute xl:min-w-[600px]"
            >
              <motion.img
                src="/assets/githubstats.png"
                alt=""
                // animate={img1}
                className="max-w-[90%] lg:max-w-full mx-auto lg:mx-0 xl:min-w-full"
                // initial={inViewXFadeOut}
                whileHover={{ scale: 1.02 }}
              />
            </a>
            <motion.div
              // animate={p1}
              // initial={inViewYFadeOut}
              className="order-1 bg-blue-890 border-4 border-blue-850 px-6 pb-4 md:px-10 md:py-10 pt-10 lg:py-8 lg:px-16 shadow-lg rounded-2xl lg:rounded-[30px] relative top-[-50px] lg:top-0 z-10 w-full xl:min-w-full"
            >
              <GithubStatsInfo />

              <div className="mt-10 hidden items-baseline justify-between md:flex max-w-full xl:max-w-[540px]">
                <ProjectTechnologies
                  text="Dynamic Web Applications"
                  title="NextJS"
                  src="next.svg"
                />
                <ProjectTechnologies
                  text="Type-Safe React Components"
                  title="Typescript"
                  src="typescript.svg"
                />
                <ProjectTechnologies
                  text="Data Fetching & Mutations"
                  title="GraphQL"
                  src="graphql.svg"
                />
                <ProjectTechnologies
                  text="Responsive and Modern Design"
                  title="Chakra UI"
                  src="chakra.svg"
                />
              </div>

              <ProjectPreview
                github="https://www.github.com/viniscode/githubstats"
                preview="https://githubstats-seven.vercel.app/"
              />
            </motion.div>
          </div>

          <div className="block lg:flex lg:items-center xl:items-start">
            <a
              href="https://talkspot.vercel.app/"
              rel="noreferrer"
              target="_blank"
              className="shadow-sm min-w-[90%] max-w-[90%] mx-auto md:min-w-[90%] relative z-20 lg:min-w-[450px] lg:h-fit xl:min-w-[600px]"
            >
              <motion.img
                src="/assets/talkspot.png"
                alt=""
                // animate={img1}
                // initial={inViewXFadeOut}
                className="max-w-[90%] lg:max-w-full mx-auto lg:mx-0"
                whileHover={{ scale: 1.02 }}
              />
            </a>
            <motion.div
              // animate={p1}
              // initial={inViewYFadeOut}
              className="bg-blue-890 border-4 border-blue-850 px-6 pb-4 md:px-10 md:py-10 pt-10 lg:py-8 lg:px-16 shadow-lg rounded-2xl lg:rounded-[30px] relative top-[-50px] left-0 lg:left-[-30px] lg:top-0 z-10 w-full"
            >
              <TalkSpotInfo />

              <div className="mt-10 hidden items-baseline justify-between md:flex">
                <ProjectTechnologies
                  text="Dynamic Web Applications"
                  title="React"
                  src="react.svg"
                />
                <ProjectTechnologies
                  text="Real-Time Data, Authentication"
                  title="Firebase"
                  src="firebase.svg"
                />
                <ProjectTechnologies
                  text="Responsive and Modern Design"
                  title="Tailwind"
                  src="tailwind.svg"
                />
                <ProjectTechnologies
                  text="Animations and Transitions"
                  title="Framer"
                  src="framer.svg"
                />
              </div>

              <ProjectPreview
                github="https://www.github.com/viniscode/talkspot"
                preview="https://talkspot.vercel.app/"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex flex-col gap-28 ${
              !showMoreProjects ? "hidden" : "flex"
            }`}
          >
            <div className="block lg:flex lg:items-center xl:items-start">
              <a
                href="https://planmyjourney.vercel.app/"
                rel="noreferrer"
                target="_blank"
                className="order-2 shadow-sm min-w-[90%] max-w-[90%] mx-auto md:min-w-[90%] relative z-20 lg:min-w-[450px] lg:h-fit xl:min-w-[600px] left-0 lg:left-[-30px]"
              >
                <motion.img
                  src="/assets/planmyjourney.png"
                  alt=""
                  // animate={img1}
                  // initial={inViewXFadeOut}
                  className="max-w-[90%] lg:max-w-full mx-auto lg:mx-0"
                  whileHover={{ scale: 1.02 }}
                />
              </a>
              <motion.div
                // animate={p1}
                // initial={inViewYFadeOut}
                className="bg-blue-890 border-4 border-blue-850 px-6 pb-4 md:px-10 md:py-10 pt-10 lg:py-8 lg:px-16 shadow-lg rounded-2xl lg:rounded-[30px] relative top-[-50px] lg:top-0 z-10 w-full"
              >
                <PlanMyJourneyInfo />

                <div className="mt-10 hidden items-baseline justify-between md:flex">
                  <ProjectTechnologies
                    text="Dynamic Web Applications"
                    title="NextJS"
                    src="next.svg"
                  />
                  <ProjectTechnologies
                    text="Type-Safe React Components"
                    title="Typescript"
                    src="typescript.svg"
                  />
                  <ProjectTechnologies
                    text="Data Fetching & Mutations"
                    title="GraphQL"
                    src="graphql.svg"
                  />
                  <ProjectTechnologies
                    text="Responsive and Modern Design"
                    title="LeafLet"
                    src="leaflet.svg"
                  />
                </div>

                <ProjectPreview
                  github="https://www.github.com/viniscode/planmyjourney"
                  preview="https://planmyjourney.vercel.app/"
                />
              </motion.div>
            </div>

            <div className="block lg:flex lg:items-center xl:items-start">
              <a
                href="https://devblog-fe7e4.web.app/"
                rel="noreferrer"
                target="_blank"
                className="shadow-sm min-w-[90%] max-w-[90%] mx-auto md:min-w-[90%] relative z-20 lg:min-w-[450px] lg:h-fit xl:min-w-[600px]"
              >
                <motion.img
                  src="/assets/devblog.png"
                  alt=""
                  className="max-w-[90%] lg:max-w-full mx-auto lg:mx-0"
                  whileHover={{ scale: 1.02 }}
                />
              </a>
              <motion.div className="bg-blue-890 border-4 border-blue-850 px-6 pb-4 md:px-10 md:py-10 pt-10 lg:py-8 lg:px-16 shadow-lg rounded-2xl lg:rounded-[30px] relative top-[-50px] left-0 lg:left-[-30px] lg:top-0 z-10 w-full">
                <DevBlogInfo />

                <div className="mt-10 hidden items-baseline justify-between md:flex">
                  <ProjectTechnologies
                    text="Dynamic Web Applications"
                    title="React"
                    src="react.svg"
                  />
                  <ProjectTechnologies
                    text="Real-Time Data, Authentication"
                    title="Firebase"
                    src="firebase.svg"
                  />
                  <ProjectTechnologies
                    text="Responsive and Modern Design"
                    title="Sass"
                    src="sass.svg"
                  />
                  <ProjectTechnologies
                    text="Headless Content Management"
                    title="Prismic"
                    src="prismic.svg"
                  />
                </div>

                <ProjectPreview
                  github="https://www.github.com/viniscode/devblog"
                  preview="https://devblog-fe7e4.web.app/"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {!showMoreProjects ? (
          <div className="w-full flex justify-center mt-16 lg:mt-32">
            <motion.button
              onClick={() => setShowMoreProjects(true)}
              className="button-properties py-3 px-4 lg:py-4 lg:px-6 text-sky-400 font-medium cursor-pointer button-properties transition-colors hover:bg-blue-300 hover:text-sky-400"
            >
              More Projects
            </motion.button>
          </div>
        ) : (
          <div className="w-full flex justify-center  mt-16 lg:mt-32">
            <a
              href="https://www.github.com/viniscode"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 button-properties py-3 px-4 lg:py-4 lg:px-6 text-sky-400 font-medium cursor-pointer button-properties mt-[78px] transition-colors hover:bg-blue-300 hover:text-sky-400"
            >
              <span>All Projects</span>
              <a
                href="https://www.github.com/viniscode"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1"
              >
                <img
                  src="/assets/github.svg"
                  alt=""
                  className="cursor-pointer w-5 md:w-6 transition-filter hover:brightness-150"
                />
                <img
                  src="/assets/link.svg"
                  alt=""
                  className="cursor-pointer w-5 md:w-6 transition-filter hover:brightness-150"
                />
              </a>
            </a>
          </div>
        )}
      </motion.section>
    </motion.div>
  );
}

/* 
          <div>
            <a
              href="https://devblog-fe7e4.web.app/"
              rel="noreferrer"
              target="_blank"
            >
              <motion.img
                src="/assets/devblog.png"
                alt=""
                className="shadow-sm"
                animate={img3}
                initial={inViewXFadeOut}
                whileHover={{ scale: 1.05 }}
              />
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
                <a
                  href="https://www.github.com/viniscode/devblog/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/assets/github.svg"
                    alt=""
                    className="cursor-pointer md:w-[35px] transition-filter hover:brightness-150"
                  />
                </a>

                <a
                  href="https://devblog-fe7e4.web.app/"
                  target="_blank"
                  rel="noreferrer"
                >
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
            <a
              href="https://monances.vercel.app/"
              rel="noreferrer"
              target="_blank"
            >
              <motion.img
                src="/assets/monances.png"
                alt=""
                className="shadow-sm"
                animate={img4}
                initial={inViewXFadeOut}
                whileHover={{ scale: 1.05 }}
              />
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
                <a
                  href="https://www.github.com/viniscode/monances/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/assets/github.svg"
                    alt=""
                    className="cursor-pointer md:w-[35px] transition-filter hover:brightness-150"
                  />
                </a>

                <a
                  href="https://monances.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/assets/link.svg"
                    alt=""
                    className="cursor-pointer md:w-[35px] transition-filter hover:brightness-150"
                  />
                </a>
              </div>
            </motion.div>
          </div>
*/

/*
  OLD DESKTOP 

        <motion.section className="mt-[398px] hidden lg:block relative">
        <h2 className="text-center font-montserrat font-bold text-[28px] leading-10 tracking-[-0.02em] text-blue-gradient md:text-[40px]">
          04. PROJECTS
        </h2>

        <div className="mt-[250px] flex items-center">
          <a
            href="https://dopeshoe.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <motion.div
              initial={inViewXFadeOut}
              animate={img1}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="w-[485px] xl:w-[668px] cursor-pointer"
            >
              <img
                src="/assets/dopeshoe.png"
                alt=""
                className="shadow-sm w-full"
              />
            </motion.div>
          </a>
          <motion.div
            className="absolute right-4"
            initial={inViewYFadeOut}
            animate={p1}
          >
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
              <a
                href="https://www.github.com/viniscode/dopeshoe/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/assets/github.svg"
                  alt=""
                  className="cursor-pointer w-[25px] transition-filter hover:brightness-150"
                />
              </a>
              <a
                href="https://dopeshoe.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
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
          <a
            href="https://githubstats-seven.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <motion.div
              initial={inViewXFadeOut}
              animate={img2}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="w-[485px] xl:w-[668px] cursor-pointer"
            >
              <img
                src="/assets/githubstats.png"
                alt=""
                className="shadow-sm w-full"
              />
            </motion.div>
          </a>
          <motion.div
            initial={inViewYFadeOut}
            animate={p2}
            className="absolute right-4"
          >
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
              <a
                href="https://www.github.com/viniscode/githubstats/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/assets/github.svg"
                  alt=""
                  className="cursor-pointer w-[25px] transition-filter hover:brightness-150"
                />
              </a>
              <a
                href="https://githubstats-seven.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
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
          <a
            href="https://devblog-fe7e4.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            <motion.div
              initial={inViewXFadeOut}
              animate={img3}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="w-[485px] xl:w-[668px] cursor-pointer"
            >
              <img
                src="/assets/devblog.png"
                alt=""
                className="shadow-sm w-full"
              />
            </motion.div>
          </a>
          <motion.div
            initial={inViewYFadeOut}
            animate={p3}
            className="absolute right-4"
          >
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
              <a
                href="https://www.github.com/viniscode/devblog/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/assets/github.svg"
                  alt=""
                  className="cursor-pointer w-[25px] transition-filter hover:brightness-150"
                />
              </a>
              <a
                href="https://devblog-fe7e4.web.app/"
                target="_blank"
                rel="noreferrer"
              >
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
          <a
            href="https://monances.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <motion.div
              initial={inViewXFadeOut}
              animate={img4}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="w-[485px] xl:w-[668px] cursor-pointer"
            >
              <img
                src="/assets/monances.png"
                alt=""
                className="shadow-sm w-full"
              />
            </motion.div>
          </a>
          <motion.div
            initial={inViewYFadeOut}
            animate={p4}
            className="absolute right-4"
          >
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
              <a
                href="https://www.github.com/viniscode/monances/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/assets/github.svg"
                  alt=""
                  className="cursor-pointer w-[25px] transition-filter hover:brightness-150"
                />
              </a>
              <a
                href="https://monances.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
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


*/
