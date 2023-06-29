import { BsFillCircleFill } from "react-icons/bs";

export function PlanMyJourneyInfo() {
  return (
    <div className="mt-12 md:mt-16 lg:mt-4">
      <div className="flex items-center justify-between">
        <span className="block font-roboto font-medium text-[22px] md:text-3xl text-blue-gradient">
          PlanMyJourney
        </span>
      </div>
      <p className="text-xs text-gray-text font-medium mt-4 md:text-sm md:mt-6">
        PlanMyJourney is a Travel Planner website, expertly crafted with{" "}
        <span className="text-blue-500">
          Next.js, TypeScript, Tailwindcss, GraphQL (URQL), Firebase, and
          Leaflet
        </span>
        . Share and immerse yourself in inspiring trip plans curated by fellow
        adventurers.
      </p>
      <div className="mt-4 md:mt-6 lg:mt-4 flex items-center gap-2">
        <BsFillCircleFill size={8} className="text-blue-400" />
        <span className="text-xs text-gray-text font-medium md:text-sm">
          Next.js, TypeScript, Tailwindcss, GraphQL (URQL), Firebase, Leaflet
        </span>
      </div>
    </div>
  );
}
