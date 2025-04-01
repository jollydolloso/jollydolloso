import Link from "next/link";
import { JSX } from "react";

interface Props {
  href: string;
  children: JSX.Element | JSX.Element[];
  className?: string;
}

export function LinkButton({ href, children, className }: Props) {
  return (
    <Link
      href={href}
      className={`underline transition-all duration-150 hover:text-pink-400 ${className}`}>
      {children}
    </Link>
  );
}
