import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="bg-[#f5f7fa] px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_.85fr]">
        <div>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#4d4d4d] sm:text-5xl lg:text-6xl">
            Lessons and insights
            <br />
            <span className="text-[#4caf4f]">from 8 years</span>
          </h1>
          <p className="mt-4 text-sm text-[#717171]">
            Where to grow your business as a photographer: site or social media?
          </p>
          <Link
            href="#service"
            className="mt-8 inline-block rounded bg-[#4caf4f] px-7 py-3 text-sm text-white transition hover:bg-[#388e3c]"
          >
            Register
          </Link>
        </div>
        <Image
          src="/home.png"
          alt="Nexcent platform illustration"
          width={520}
          height={420}
          className="mx-auto h-auto w-full max-w-md"
          priority
        />
      </div>
      <div className="mt-10 flex justify-center gap-2">
        <span className="h-2 w-2 rounded-full bg-[#4caf4f]" />
        <span className="h-2 w-2 rounded-full bg-[#b9e4bb]" />
        <span className="h-2 w-2 rounded-full bg-[#b9e4bb]" />
      </div>
    </section>
  );
}
