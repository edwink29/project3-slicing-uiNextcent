import Image from "next/image";
import { SocialIcon } from "@/components/icons";

const COMPANY_LINKS = [
  "About us",
  "Blog",
  "Contact us",
  "Pricing",
  "Testimonials",
];

const SUPPORT_LINKS = [
  "Help center",
  "Terms of service",
  "Legal",
  "Privacy policy",
  "Status",
];

const SOCIAL_TYPES = ["instagram", "dribbble", "twitter", "youtube"] as const;

export default function Footer() {
  return (
    <footer id="faq" className="bg-brand-ink px-5 py-14 text-white sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_.7fr_.7fr_1fr]">
        <div>
          <Image
            src="/icons/Logo-header.png"
            alt="Nexcent"
            width={154}
            height={32}
            className="h-7 w-auto brightness-0 invert"
          />
          <p className="mt-8 text-xs leading-6 text-slate-300">
            Copyright © 2020 Nexcent ltd.
            <br />
            All rights reserved
          </p>
          <div className="mt-8 flex gap-3 text-white">
            {SOCIAL_TYPES.map((type) => (
              <a
                key={type}
                href="#"
                aria-label={type}
                className="rounded-full bg-white/10 p-2 transition hover:bg-white/20"
              >
                <SocialIcon type={type} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterColumn title="Company" items={COMPANY_LINKS} />
        <FooterColumn title="Support" items={SUPPORT_LINKS} />

        <div>
          <h3 className="font-semibold">Stay up to date</h3>
          <form className="mt-5 flex items-center rounded-lg bg-white/10 pr-3">
            <input
              aria-label="Email address"
              type="email"
              placeholder="Your email address"
              className="min-w-0 flex-1 bg-transparent px-3 py-3 text-xs outline-none placeholder:text-slate-300"
            />
            <button aria-label="Send email" type="submit">
              ➤
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-semibold">{title}</h3>
      <ul className="mt-5 space-y-3 text-xs text-slate-300">
        {items.map((item) => (
          <li key={item}>
            <a href="#" className="hover:text-white">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
