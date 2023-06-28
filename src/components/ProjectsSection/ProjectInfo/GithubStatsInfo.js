import { BsFillCircleFill } from "react-icons/bs";

export function GithubStatsInfo() {
  return (
    <div className="mt-12 md:mt-16 lg:mt-4">
      <div className="flex items-center justify-between">
        <span className="block font-roboto font-medium text-[22px] md:text-3xl text-blue-gradient">
          GithubStats
        </span>
      </div>
      <p className="text-xs text-gray-text font-medium mt-4 md:text-sm md:mt-6">
        Githubstats is a web app that{" "}
        <span className="text-blue-500">
          allows users to search for Github users and organizations
        </span>
        , and access their profile information such as repositories, starred
        repositories, followers and members of an organization. It is designed
        to provide a simple and efficient way to view a user's Github data.
      </p>
      <div className="mt-4 md:mt-6 flex items-center gap-2">
        <BsFillCircleFill size={8} className="text-blue-400" />
        <span className="text-xs text-gray-text font-medium md:text-sm">
          NextJS, Typescript, Chakra UI, GraphQL(Apollo Client), Codegen.
        </span>
      </div>
    </div>
  );
}
