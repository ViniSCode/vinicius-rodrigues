import { BsFillCircleFill } from "react-icons/bs";

export function WeatherAppInfo () {
    return (
<div className="mt-12 md:mt-16 lg:mt-4">
  <div className="flex items-center justify-between">
    <span className="block font-roboto font-medium text-[22px] md:text-3xl text-blue-gradient">
      Weather App
    </span>
  </div>
  <p className="text-xs text-gray-text font-medium mt-4 md:text-sm md:mt-6">
    Stay informed about current conditions and upcoming weather changes. Detailed weather info including temperature, humidity, precipitation, wind speed, and more. 
  </p>
  <div className="mt-4 md:mt-6 lg:mt-4 flex items-center gap-2">
    <BsFillCircleFill size={8} className="text-blue-400" />
    <span className="text-xs text-gray-text font-medium md:text-sm">
      Next.js, OpenWeatherMap API, ApexCharts, TailwindCSS, RadixUI, framer-motion
    </span>
  </div>
</div>


    )
    ;
}