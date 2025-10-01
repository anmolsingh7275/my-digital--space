const PROJECTS = [
  {
    image: "werfg",
    title: "PortFolio",
    desc: "erghty54w",
    technologies: [23, "34rt", 213],
  },
  {
    image: "werfg",
    title: "PortFolio",
    desc: "erghty54w",
    technologies: [23, "34rt", 213],
  },
  {
    image: "werfg",
    title: "PortFolio",
    desc: "erghty54w",
    technologies: [23, "34rt", 213],
  },
  {
    image: "werfg",
    title: "PortFolio",
    desc: "erghty54w",
    technologies: [23, "34rt", 213],
  },
  {
    image: "werfg",
    title: "PortFolio",
    desc: "erghty54w",
    technologies: [23, "34rt", 213],
  },
];

export default function Project() {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div>
        {PROJECTS.map((project, index) => {
          return (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <div className="w-full lg:w-1/4">
                <img
                  src={project.image}
                  width={250}
                  height={250}
                  alt={project.title}
                  className="mb-6 rounded"
                />
              </div>

              <div className="w-full max-w-xl lg:w-3/4">
                <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
                <p className="mb-4 text-stone-400">{project.desc}</p>

                {project.technologies.map((obj, index) => {
                  return (
                    <span
                      className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                      key={index}
                    >
                      {obj}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
