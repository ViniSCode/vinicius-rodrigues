import { motion } from "framer-motion";
import { useState } from "react";
import { DevBlogInfo } from "./ProjectInfo/DevBlogInfo";
import { DopeShoeInfo } from "./ProjectInfo/DopeShoeInfo";
import { GithubStatsInfo } from "./ProjectInfo/GithubStatsInfo";
import { PlanMyJourneyInfo } from "./ProjectInfo/PlanMyJourneyInfo";
import { TalkSpotInfo } from "./ProjectInfo/TalksPotInfo";
import { ProjectPreview } from "./ProjectPreview";
import { ProjectTechnologies } from "./ProjectTechnologies";
import { WeatherAppInfo } from "./ProjectInfo/WeatherAppInfo";

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
                alt="DopeShoe"
                className="max-w-[90%] lg:max-w-full mx-auto lg:mx-0"
                whileHover={{ scale: 1.02 }}
              />
            </a>
            <motion.div
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
                alt="GithubStats"
                className="max-w-[90%] lg:max-w-full mx-auto lg:mx-0 xl:min-w-full"
                whileHover={{ scale: 1.02 }}
              />
            </a>
            <motion.div
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
                alt="TalkSpot"
                className="max-w-[90%] lg:max-w-full mx-auto lg:mx-0"
                whileHover={{ scale: 1.02 }}
              />
            </a>
            <motion.div
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
            className={`flex flex-col gap-28 ${!showMoreProjects ? "hidden" : "flex"
              }`}
          >
            <div className="block lg:flex lg:items-center xl:items-start">
              <a
                href="https://todays-weather-app.vercel.app/"
                rel="noreferrer"
                target="_blank"
                className="order-2 shadow-sm min-w-[90%] max-w-[90%] mx-auto md:min-w-[90%] relative z-20 lg:min-w-[450px] lg:h-fit xl:min-w-[600px] left-0 lg:left-[-30px]"
              >
                <motion.img
                  src="/assets/weather-app.png"
                  alt="Weather App"
                  className="max-w-[90%] lg:max-w-full mx-auto lg:mx-0"
                  whileHover={{ scale: 1.02 }}
                />
              </a>
              <motion.div
                className="bg-blue-890 border-4 border-blue-850 px-6 pb-4 md:px-10 md:py-10 pt-10 lg:py-8 lg:px-16 shadow-lg rounded-2xl lg:rounded-[30px] relative top-[-50px] lg:top-0 z-10 w-full"
              >
                <WeatherAppInfo />

                <div className="mt-10 hidden items-baseline justify-between md:flex">
                  <ProjectTechnologies
                    text="Dynamic Web Applications"
                    title="NextJS"
                    src="next.svg"
                  />
                  <ProjectTechnologies
                    text="Accessible Components"
                    title="Radix UI"
                    src="radix.svg"
                  />
                  <ProjectTechnologies
                    title="API"
                    text="OpenWeather API"
                    src="openweather.svg"
                  />
                  <ProjectTechnologies
                    text="Responsive and Modern Design"
                    title="Tailwind"
                    src="tailwind.svg"
                  />
                </div>

                <ProjectPreview
                  github="https://www.github.com/viniscode/weather-app"
                  preview="https://todays-weather-app.vercel.app/"
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
                  alt="DevBlog"
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

            <div className="block lg:flex lg:items-center xl:items-start">
              <a
                href="https://planmyjourney.vercel.app/"
                rel="noreferrer"
                target="_blank"
                className="order-2 shadow-sm min-w-[90%] max-w-[90%] mx-auto md:min-w-[90%] relative z-20 lg:min-w-[450px] lg:h-fit xl:min-w-[600px] left-0 lg:left-[-30px]"
              >
                <motion.img
                  src="/assets/planmyjourney.png"
                  alt="PlanMyJourney"
                  className="max-w-[90%] lg:max-w-full mx-auto lg:mx-0"
                  whileHover={{ scale: 1.02 }}
                />
              </a>
              <motion.div
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
                    text="Dynamic Maps"
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
                  alt="github"
                  className="cursor-pointer w-5 md:w-6 transition-filter hover:brightness-150"
                />
                <img
                  src="/assets/link.svg"
                  alt="preview"
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
