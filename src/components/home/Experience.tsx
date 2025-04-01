export function Experience() {
  const history = [
    {
      position: "Mid Frontend Reactjs Developer",
      company: "CoDev Philippines Inc.",
      time: "July 2022 - Present",
    },
    {
      position: "Front-end Engineer",
      company: "Cody Web Development Inc.",
      time: "March 2021 - July 2022",
    },
    {
      position: "Associate Software Engineer",
      company: "Sprobe Inc.",
      time: "January 2017 - July 2021",
    },
  ];
  return (
    <section className="container max-w-7xl px-4 sm:px-16 my-8 sm:my-[8rem] mx-auto">
      <div className="flex sm:flex-row flex-col items-center justify-between gap-4 sm:gap-20">
        <h2 className="font-heading text-4xl sm:text-7xl text-pink-300 max-w-2/5">
          Started
          <br />
          in 2017
        </h2>
        <div className="flex-1 self-start">
          <h3 className="font-heading text-lg text-lime-200">
            Specialization & Expertise
          </h3>
          <p className="text-xl sm:text-4xl">
            Skilled in crafting interactive, responsive, and pixel-perfect web
            applications with React.js and Next.js, optimized for performance
            and seamless user experience.
          </p>
        </div>
      </div>
      <ul className="font-sans my-8 sm:my-16">
        {history.map((work) => (
          <li
            key={work.company}
            className="border-b first:border-t border-white text-base sm:text-lg py-4 sm:py-8">
            <div className="flex sm:flex-row flex-col justify-between">
              <p>
                {work.position}, {work.company}
              </p>
              <p>{work.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
