"use client";

import Link from "next/link";

interface Props {
  href: string;
  className?: string;
  children: any;
}

export default function CustomLink({ href, className, children }: Props) {
  return (
    <Link
      href={href}
      className={className ? className : ''}
    >
      {children}
    </Link>
  );
}
