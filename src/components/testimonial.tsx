import Image from "next/image";

export default function Testimonial() {
  const logos = [
    "Logo.png",
    "Logo-1.png",
    "Logo-2.png",
    "Logo-3.png",
    "Logo-4.png",
    "Logo-5.png",
  ];
  return (
    <section id="testimonial" className="bg-[#f5f7fa] px-5 py-12 sm:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[270px_1fr]">
        <Image
          src="/image 9.png"
          alt="Tesla logo"
          width={260}
          height={260}
          className="mx-auto rounded-lg shadow-sm"
        />
        <div>
          <p className="text-sm leading-relaxed text-[#717171]">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit.
          </p>
          <h3 className="mt-4 font-semibold text-[#4caf4f]">Tim Smith</h3>
          <p className="mt-1 text-sm text-[#89939e]">
            British Dragon Boat Racing Association
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-4">
            {logos.map((logo) => (
              <Image
                key={logo}
                src={`/logo/${logo}`}
                alt="Partner"
                width={36}
                height={28}
                className="h-6 w-auto"
              />
            ))}
            <a href="#" className="text-sm font-semibold text-[#4caf4f]">
              Meet all customers →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
