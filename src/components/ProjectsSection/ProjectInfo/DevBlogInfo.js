import { BsFillCircleFill } from "react-icons/bs";

export function DevBlogInfo() {
  return (
    <div className="mt-12 md:mt-16 lg:mt-4">
      <div className="flex items-center justify-between">
        <span className="block font-roboto font-medium text-[22px] md:text-3xl text-blue-gradient">
          DevBlog
        </span>
      </div>
      <p className="text-xs text-gray-text font-medium mt-4 md:text-sm md:mt-6">
        DevBlog is a web application that allows users to
        <span className="text-blue-500">
          {" "}
          browse and engage with blog posts
        </span>
        , while also providing an
        <span className="text-blue-500"> administrative capability </span>for
        the management of content on the{" "}
        <span className="text-blue-500"> Prismic CMS</span> platform.
        Additionally, the application provides user authentication capabilities
        through <span className="text-blue-500">Firebase Auth.</span>
      </p>
      <div className="mt-4 md:mt-6 lg:mt-4 flex items-center gap-2">
        <BsFillCircleFill size={8} className="text-blue-400" />
        <span className="text-xs text-gray-text font-medium md:text-sm">
          ReactJS, Firebase, Prismic CMS, Sass, Framer motion
        </span>
      </div>
    </div>
  );
}
