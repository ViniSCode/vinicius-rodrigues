export function ProjectTechnologies({ title, text, src }) {
  return (
    <div>
      <div>
        <img src={`./assets/${src}`} alt="next.js icon" className="w-9" />
      </div>
      <div className="mt-5 max-w-[110px]">
        <strong className="block font-medium text-lg">{title}</strong>
        <p className="mt-2 text-xs text-gray-text font-medium">{text}</p>
      </div>
    </div>
  );
}
