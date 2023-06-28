export function ProjectPreview({ github, preview }) {
  return (
    <div className="mt-8 md:mt-16 flex items-center justify-between gap-5 lg:hidden">
      <div className="flex items-center gap-4 min-w-fit">
        <a href={github} target="_blank" rel="noreferrer">
          <img
            src="/assets/github.svg"
            alt=""
            className="cursor-pointer w-7 md:w-[35px] transition-filter hover:brightness-150"
          />
        </a>
        <a href={preview} rel="noreferrer" target="_blank">
          <img
            src="/assets/link.svg"
            alt=""
            className="cursor-pointer w-7 md:w-[35px] transition-filter hover:brightness-150"
          />
        </a>
      </div>

      <div className="block w-full h-[3px] md:h-1 bg-blue-gradient"></div>
    </div>
  );
}
