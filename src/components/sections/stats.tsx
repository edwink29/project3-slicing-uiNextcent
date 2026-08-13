import Image from "next/image";

const STATS: {
  icon: string;
  number: string;
  label: string;
}[] = [
  {
    icon: "/icons/statIconMember.svg",
    number: "2,245,341",
    label: "Members",
  },
  {
    icon: "/icons/CardIconHand.png",
    number: "46,328",
    label: "Clubs",
  },
  {
    icon: "/icons/statIconClic.svg",
    number: "828,867",
    label: "Event Bookings",
  },
  {
    icon: "/icons/statIconPayment.svg",
    number: "1,926,436",
    label: "Payments",
  },
];

export default function Stats() {
  return (
    <section className="bg-brand-light px-5 py-16 sm:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold leading-tight text-brand-dark">
            Helping a local
            <br />
            <span className="text-brand-primary">business reinvent itself</span>
          </h2>
          <p className="mt-2 text-sm text-brand-dark">
            We reached here with our hard work and dedication
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-7 gap-y-8 sm:gap-x-14">
          {STATS.map(({ icon, number, label }) => (
            <div key={label} className="flex items-center gap-3">
              <Image
                src={icon}
                alt={label}
                width={48}
                height={48}
                className="h-12 w-12 shrink-0"
              />
              <div>
                <p className="text-xl font-bold leading-none text-brand-dark">
                  {number}
                </p>
                <p className="mt-1 text-sm text-brand-grey">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
