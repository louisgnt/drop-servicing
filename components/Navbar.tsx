"use client";

import { Send } from "lucide-react";
import Link from "next/link";
import Section from "./Section";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { navLink } from "@/lib/placeholder-data";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky z-50 w-full max-w-3xl px-4 mx-auto mt-2 top-4">
      <Section>
        <div className="flex items-center justify-between px-4 py-2 rounded-full bg-white/80 backdrop-blur-lg md:border md:shadow-sm">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-gray-800 hover:opacity-80">
            Tosh
          </Link>

          <nav className="items-center hidden gap-1 px-2 md:flex">
            {navLink.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "relative rounded-full px-3 py-1.5 text-sm font-medium transition-colors hover:bg-black/5",
                  pathname === href &&
                    "text-blue-400 after:absolute after:bottom-0 after:left-0 after:right-0 after:mx-auto after:h-1 after:w-1 after:rounded-full after:bg-blue-400 after:content-['']",
                  pathname !== href && "text-gray-600"
                )}>
                {label}
              </Link>
            ))}
          </nav>

          <Button
            variant="default"
            size="sm"
            className="text-white bg-blue-400 rounded-full hover:bg-blue-400/90">
            Contact us
            <Send />
          </Button>
        </div>
      </Section>
    </header>
  );
}
