import Image from "next/image";
import { BouncingCloud } from "../ui/BouncingCloud";
import { LinkButton } from "../ui/Link";

export function Intro() {
  const LINKS = [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/jollyanndolloso/",
    },
    {
      name: "github",
      url: "https://github.com/jollydolloso",
    },
  ];
  return (
    <section className="container max-w-7xl gap-y-16 sm:gap-y-0 px-4 sm:px-16 my-8 sm:my-[8rem] mx-auto flex flex-col sm:flex-row justify-between items-center">
      <div className="w-full sm:w-2/4 order-1 sm:order-none">
        <div className="animate-bounce">
          <BouncingCloud className="size-10 md:size-14 text-white" />
        </div>

        <p className="text-black text-xl sm:text-4xl">
          Hi! I&apos;m
          <span className="rainbow-text font-serif font-black px-2">
            Jolly Ann Dolloso
          </span>
          — A Front-end Developer based in Cebu, Philippines. Specializing in
          creating seamless, responsive, and visually stunning web applications.
        </p>
        <ul className="py-6">
          {LINKS.map((link) => (
            <li key={link.name}>
              <LinkButton
                href={link.url}
                className="uppercase text-base sm:text-lg">
                <>⮞ {link.name}</>
              </LinkButton>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full sm:w-1/3 flex justify-center">
        <Image
          src="/me.jpg"
          alt="Jolly Ann Dolloso Photo"
          width={600}
          height={600}
          className="rounded-2xl"
          priority
        />
      </div>
    </section>
  );
}
