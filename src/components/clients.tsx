import Image from "next/image";
import { AssociationIcon, ClubsIcon, MembershipIcon } from "./icons";
import type { ComponentType } from "react";

const cards: { Icon: ComponentType<{ className?: string }>; title: string }[] =
  [
    { Icon: MembershipIcon, title: "Membership Organisations" },
    { Icon: AssociationIcon, title: "National Associations" },
    { Icon: ClubsIcon, title: "Clubs And Groups" },
  ];

export default function Services() {
  return (
    <section id="service" className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <div className="mb-16 text-center">
        <h2 className="text-2xl font-semibold text-[#4d4d4d]">Our Clients</h2>
        <p className="mt-2 text-sm text-[#717171]">
          We have been working with some Fortune 500+ clients
        </p>
        <div className="mt-9 grid grid-cols-3 items-center justify-items-center gap-y-7 sm:grid-cols-7">
          {[
            "Logo.png",
            "Logo-1.png",
            "Logo-2.png",
            "Logo-3.png",
            "Logo-4.png",
            "Logo-5.png",
            "Logo-6.png",
          ].map((logo) => (
            <Image
              key={logo}
              src={`/logo/${logo}`}
              alt="Client logo"
              width={88}
              height={80}
              className="h-9 w-auto object-contain"
            />
          ))}
        </div>
      </div>
      <div className="mx-auto mb-10 max-w-xl text-center">
        <h2 className="text-3xl font-semibold leading-tight text-[#4d4d4d]">
          Manage your entire community
          <br />
          in a single system
        </h2>
        <p className="mt-2 text-sm text-[#717171]">
          Who is Nexcent suitable for?
        </p>
      </div>
      <div className="grid gap-7 md:grid-cols-3">
        {cards.map(({ Icon, title }) => (
          <article
            key={title}
            className="rounded-lg bg-white px-8 py-7 text-center shadow-[0_2px_7px_rgba(171,190,209,.3)]"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-tl-2xl rounded-br-2xl bg-[#e8f5e9] text-[#4caf4f]">
              <Icon className="h-10 w-10" />
            </div>
            <h3 className="mx-auto mt-4 max-w-47.5 text-xl font-bold leading-tight text-[#4d4d4d]">
              {title}
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-[#717171]">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
