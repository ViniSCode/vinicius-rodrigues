import { BsFillCircleFill } from "react-icons/bs";

export function DopeShoeInfo() {
  return (
    <div className="mt-12 md:mt-16 lg:mt-4">
      <div className="flex items-center justify-between">
        <span className="block font-roboto font-medium text-[22px] md:text-3xl text-blue-gradient">
          Dopeshoe
        </span>
      </div>
      <p className="text-xs text-gray-text font-medium mt-4 md:text-sm md:mt-6">
        DopeShoe is an e-commerce website built using{" "}
        <span className="text-blue-500">
          NextJS, Stripe, Hygraph, Graphql(URQL), Typescript
        </span>{" "}
        and styled with
        <span className="text-blue-500">Tailwindcss</span>. It allows users to
        buy shoes, view their shopping cart, and see past orders. It includes
        features like responsive layout and search bar with filters.
      </p>
      <div className="mt-4 md:mt-6 lg:mt-4 flex items-center gap-2">
        <BsFillCircleFill size={8} className="text-blue-400" />
        <span className="text-xs text-gray-text font-medium md:text-sm">
          NextJS, Stripe, Hygraph, Graphql(URQL), Typescript, Tailwindcss.
        </span>
      </div>
    </div>
  );
}
