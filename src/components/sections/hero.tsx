import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-brand-light scroll-mt-20 px-5 py-16 sm:px-8 sm:py-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_.85fr]">
        <div>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-brand-dark sm:text-5xl lg:text-6xl">
            Lessons and insights
            <br />
            <span className="text-brand-primary">from 8 years</span>
          </h1>
          <p className="mt-4 text-sm text-brand-grey">
            Where to grow your business as a photographer: site or social media?
          </p>
          <Button href="#service" className="mt-8">
            Register
          </Button>
        </div>
        <Image
          src="/images/home.png"
          alt="Nexcent platform illustration"
          width={391}
          height={407}
          className="mx-auto block" // Hapus class w-full, h-auto, max-w-md
          priority
        />
      </div>
      <div className="mt-10 flex justify-center gap-2">
        <span className="h-2 w-2 rounded-full bg-brand-primary" />
        <span className="h-2 w-2 rounded-full bg-brand-primary/30" />
        <span className="h-2 w-2 rounded-full bg-brand-primary/30" />
      </div>
    </section>
  );
}
