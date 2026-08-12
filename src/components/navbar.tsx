"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = ["Home", "Service", "Feature", "Product", "Testimonial", "FAQ"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-19 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="#home" aria-label="Nexcent home">
          <Image
            src="/Logo.png"
            alt="Nexcent"
            width={154}
            height={32}
            className="h-7 w-auto"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-[#18191f] md:flex">
          {links.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="transition hover:text-[#4caf4f]"
            >
              {item}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 text-sm font-medium md:flex">
          <Link href="#" className="px-3 py-2 text-[#4caf4f]">
            Login
          </Link>
          <Link
            href="#"
            className="rounded bg-[#4caf4f] px-5 py-2.5 text-white transition hover:bg-[#388e3c]"
          >
            Sign up
          </Link>
        </div>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="p-2 text-2xl md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? "×" : "☰"}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 border-t border-slate-100 bg-white px-6 py-5 text-sm font-medium md:hidden">
          {links.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              {item}
            </Link>
          ))}
          <div className="flex gap-3">
            <Link href="#" className="text-[#4caf4f]">
              Login
            </Link>
            <Link href="#" className="text-[#4caf4f]">
              Sign up
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
