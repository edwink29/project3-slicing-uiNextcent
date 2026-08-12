import Image from "next/image";
import { AssociationIcon, ClubsIcon, MembershipIcon } from "@/components/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import type { ComponentType } from "react";

// Static data lives outside the component so it isn't recreated every render.
const CLIENT_LOGOS = [
  "LogoClient1.png",
  "LogoClient2.png",
  "LogoClient3.png",
  "LogoClient4.png",
  "LogoClient5.png",
  "LogoClient6.png",
  "LogoClient7.png",
];

const CARDS: { Icon: ComponentType<{ className?: string }>; title: string }[] =
  [
    { Icon: MembershipIcon, title: "Membership Organisations" },
    { Icon: AssociationIcon, title: "National Associations" },
    { Icon: ClubsIcon, title: "Clubs And Groups" },
  ];

export default function Clients() {
  return (
    <section id="service" className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      {/* Client logos */}
      <div className="mb-16">
        <SectionHeading
          title="Our Clients"
          subtitle="We have been working with some Fortune 500+ clients"
        />
        <div className="mt-9 grid grid-cols-3 items-center justify-items-center gap-y-7 sm:grid-cols-7">
          {CLIENT_LOGOS.map((file) => (
            <Image
              key={file}
              src={`/icons/${file}`}
              alt="Client logo"
              width={88}
              height={80}
              className="h-9 w-auto object-contain"
            />
          ))}
        </div>
      </div>

      {/* Intro */}
      <SectionHeading
        className="mx-auto mb-10 max-w-xl"
        title={
          <>
            Manage your entire community
            <br />
            in a single system
          </>
        }
        subtitle="Who is Nexcent suitable for?"
      />

      {/* Cards */}
      <div className="grid gap-7 md:grid-cols-3">
        {CARDS.map(({ Icon, title }) => (
          <article
            key={title}
            className="rounded-lg bg-white px-8 py-7 text-center shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-tl-2xl rounded-br-2xl bg-emerald-50 text-brand-primary">
              <Icon className="h-10 w-10" />
            </div>
            <h3 className="mx-auto mt-4 max-w-xs text-xl font-bold leading-tight text-brand-dark">
              {title}
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-brand-grey">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
