import { LinkButton } from "../ui/Link";

export function Nav() {
  return (
    <nav className="font-sans">
      <LinkButton href="/about" className="uppercase text-base">
        <>About</>
      </LinkButton>
    </nav>
  );
}
