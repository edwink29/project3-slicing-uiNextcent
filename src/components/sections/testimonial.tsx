import Image from "next/image";

const PARTNER_LOGOS = [
  "LogoClient1-color.png",
  "LogoClient2.png",
  "LogoClient3.png",
  "LogoClient4.png",
  "LogoClient5.png",
  "LogoClient6.png",
];

export default function Testimonial() {
  return (
    <section
      id="testimonial"
      className="bg-brand-light px-5 py-12 sm:px-8 scroll-mt-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[326px_1fr]">
        <Image
          src="/images/image 9.png"
          alt="Tesla logo"
          width={326}
          height={326}
          className="mx-auto h-[326px] w-[326px] rounded-lg object-cover"
        />
        <div>
          <p className="text-sm leading-relaxed text-brand-grey">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <h3 className="mt-4 font-semibold text-brand-primary">Tim Smith</h3>
          <p className="mt-1 text-sm text-brand-grey">
            British Dragon Boat Racing Association
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-4">
            {PARTNER_LOGOS.map((logo) => (
              <Image
                key={logo}
                src={`/icons/${logo}`}
                alt="Partner logo"
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
              />
            ))}
            <a href="#" className="text-sm font-semibold text-brand-primary">
              Meet all customers →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
