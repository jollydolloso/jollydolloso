import Image from "next/image";
import { LinkedinIcon } from "@/components/ui/icons/LinkedinIcon";
import { GithubIcon } from "@/components/ui/icons/GithubIcon";
import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div className="w-24 sm:w-fit mx-auto animate-bounce">
        <Image
          src="/Joriling.png"
          alt="Jolly Chibi"
          width={200}
          height={200}
          priority
        />
      </div>
      <div className="border-t border-white" />
      <div className="container max-w-7xl px-4 sm:px-16 my-8 sm:my-[8rem] mx-auto space-y-8 font-sans">
        <div className="flex flex-col gap-y-4 sm:flex-row justify-between items-center">
          <p className="font-heading text-pink-300 text-2xl sm:text-3xl font-bold self-start">
            Let&apos;s build something <br />
            great together! 🚀
          </p>
          <div className="self-start">
            <p className="font-sans text-base">Cebu, Philippines</p>
            <p>
              <span className="text-gray-700">Email: </span>
              <strong>jolly14.dolloso@gmail.com</strong>
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-y-4 justify-between items-start">
          <div className="text-lime-200">
            <p> &copy; Jolly Ann {new Date().getFullYear()}</p>
            <p>Front-end Engineer</p>
          </div>
          <div className="flex gap-x-8">
            <Link
              href="https://www.linkedin.com/in/jollyanndolloso/"
              target="_blank"
              className="text-gray-700 hover:text-blue-600 transition-all duration-175 text-xs w-10 h-10">
              <LinkedinIcon className="size-5 md:size-5 " />
            </Link>
            <Link
              href="https://github.com/jollydolloso/"
              target="_blank"
              className="text-gray-700 hover:text-black transition-all duration-175  text-xs w-10 h-10">
              <GithubIcon className="size-10 md:size-10 " />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
