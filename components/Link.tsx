import NextLink from "next/link";
import type { ReactNode } from "react";

type LinkProps = {
  href: string;
  children: ReactNode;
};

export default function Link({ href, children }: LinkProps) {
  return (
    <NextLink href={href} className={"text-link underline"}>
      {children}
    </NextLink>
  );
}
