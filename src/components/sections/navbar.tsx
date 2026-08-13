"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Service", href: "#service" },
  { label: "Feature", href: "#feature" },
  { label: "Product", href: "#product" },
  { label: "Testimonial", href: "#testimonial" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-brand-light backdrop-blur">
      <div className="mx-auto flex h-19 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="#home" aria-label="Nexcent home">
          <Image
            src="/icons/Logo-header.png"
            alt="Nexcent"
            width={154}
            height={32}
            className="h-7 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-brand-dark md:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="transition hover:text-brand-primary"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 text-sm font-medium md:flex">
          <Link href="#" className="px-3 py-2 text-brand-primary">
            Login
          </Link>
          <Button href="#" size="sm">
            Sign up
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="p-2 text-2xl md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="flex flex-col gap-4 border-t border-slate-100 bg-white px-6 py-5 text-sm font-medium md:hidden"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <Link key={label} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <div className="flex gap-3">
            <Link href="#" className="text-brand-primary">
              Login
            </Link>
            <Link href="#" className="text-brand-primary">
              Sign up
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
