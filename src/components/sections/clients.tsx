import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";

const CLIENT_LOGOS = [
  "LogoClient1.png",
  "LogoClient2.png",
  "LogoClient3.png",
  "LogoClient4.png",
  "LogoClient5.png",
  "LogoClient6.png",
  "LogoClient7.png",
];

const CARDS = [
  {
    icon: "/icons/CardIconPeople.svg",
    title: "Membership Organisations",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    icon: "/icons/CardIconWork.svg",
    title: "National Associations",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    icon: "/icons/CardIconHand.svg",
    title: "Clubs And Groups",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
  },
];

export default function Clients() {
  return (
    <section
      id="service"
      className="mx-auto max-w-7xl px-5 py-16 sm:px-8 scroll-mt-20"
    >
      <div className="mb-16">
        <SectionHeading
          title="Our Clients"
          subtitle="We have been working with some Fortune 500+ clients"
        />
        <div className="mt-9 grid grid-cols-3 items-center justify-items-center gap-x-8 gap-y-14 sm:grid-cols-7 sm:gap-x-20">
          {CLIENT_LOGOS.map((file) => (
            <Image
              key={file}
              src={`/icons/${file}`}
              alt="Client logo"
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
            />
          ))}
        </div>
      </div>

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

      <div className="grid gap-7 md:grid-cols-3 justify-items-center">
        {CARDS.map(({ icon, title, description }) => (
          <article
            key={title}
            className="flex flex-col items-center justify-center w-full max-w-74.75 h-65 rounded-lg bg-white px-6 py-6 text-center shadow-sm transition-shadow hover:shadow-md border border-gray-100"
          >
            <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-tl-2xl rounded-br-2xl bg-emerald-100/50">
              <Image
                src={icon}
                alt={title}
                width={48}
                height={48}
                className="absolute -left-4 -top-2 h-12 w-12 object-contain"
              />
            </div>
            <h3 className="mx-auto mt-4 max-w-40 text-xl font-bold leading-tight text-brand-dark">
              {title}
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-brand-grey">
              {description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
