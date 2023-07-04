import { BsFillCircleFill } from "react-icons/bs";

export function TalkSpotInfo() {
  return (
    <div className="mt-12 md:mt-16 lg:mt-4">
      <div className="flex items-center justify-between">
        <span className="block font-roboto font-medium text-[22px] md:text-3xl text-blue-gradient">
          TalkSpot
        </span>
      </div>
      <p className="text-xs text-gray-text font-medium mt-4 md:text-sm md:mt-6">
        TalkSpot is an instant messaging web app built using{" "}
        <span className="text-blue-500">React, Firebase, Framer Motion</span>{" "}
        and styled with <span className="text-blue-500">Tailwindcss</span>. It
        allows users to create a room and share it with others to have secure
        and private conversations.
      </p>
      <div className="mt-4 md:mt-6 lg:mt-4 flex items-center gap-2">
        <BsFillCircleFill size={8} className="text-blue-400" />
        <span className="text-xs text-gray-text font-medium md:text-sm">
          React.js, Firebase, Firebase Auth, Tailwindcss, Framer motion
        </span>
      </div>
    </div>
  );
}
