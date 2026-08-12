import { EventIcon, MembersIcon, NetworkIcon, PaymentIcon } from "./icons";
import type { ComponentType } from "react";

const stats: {
  Icon: ComponentType<{ className?: string }>;
  number: string;
  label: string;
}[] = [
  { Icon: MembersIcon, number: "2,245,341", label: "Members" },
  { Icon: NetworkIcon, number: "46,328", label: "Clubs" },
  { Icon: EventIcon, number: "828,867", label: "Event Bookings" },
  { Icon: PaymentIcon, number: "1,926,436", label: "Payments" },
];

export default function Stats() {
  return (
    <section className="bg-[#f5f7fa] px-5 py-16 sm:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold leading-tight text-[#4d4d4d]">
            Helping a local
            <br />
            <span className="text-[#4caf4f]">business reinvent itself</span>
          </h2>
          <p className="mt-2 text-sm text-[#18191f]">
            We reached here with our hard work and dedication
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-7 gap-y-8 sm:gap-x-14">
          {stats.map(({ Icon, number, label }) => (
            <div key={label} className="flex items-center gap-3">
              <Icon className="h-10 w-10 shrink-0 text-[#4caf4f]" />
              <div>
                <p className="text-xl font-bold leading-none text-[#4d4d4d]">
                  {number}
                </p>
                <p className="mt-1 text-sm text-[#717171]">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
