import Image from "next/image";
import Blog from "@/components/blog";
import Services from "@/components/clients";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Stats from "@/components/stats";
import Testimonial from "@/components/testimonial";

const copy =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta.";

function InfoBlock({
  image,
  title,
  flip = false,
}: {
  image: string;
  title: string;
  flip?: boolean;
}) {
  return (
    <section id={flip ? "feature" : ""} className="px-5 py-16 sm:px-8">
      <div
        className={`mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 ${flip ? "" : ""}`}
      >
        <div className={flip ? "md:order-2" : ""}>
          <Image
            src={image}
            alt="Nexcent feature illustration"
            width={480}
            height={360}
            className="mx-auto h-auto w-full max-w-sm"
          />
        </div>
        <div className={flip ? "md:order-1" : ""}>
          <h2 className="max-w-md text-3xl font-semibold leading-tight text-[#4d4d4d]">
            {title}
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#717171]">
            {copy} Nullam mattis tristique iaculis. Nullam pulvinar sit amet
            risus pretium auctor.
          </p>
          <a
            href="#"
            className="mt-7 inline-block rounded bg-[#4caf4f] px-6 py-3 text-sm text-white"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#263238]">
      <Navbar />
      <Hero />
      <Services />
      <InfoBlock
        image="/content.png"
        title="The unseen of spending three years at Pixelgrade"
      />
      <Stats />
      <InfoBlock
        image="/content2.png"
        title="How to design your site footer like we did"
        flip
      />
      <Testimonial />
      <Blog />
      <section className="bg-[#f5f7fa] px-5 py-16 text-center sm:px-8">
        <h2 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight text-[#263238] sm:text-5xl">
          Pellentesque suscipit
          <br />
          fringilla libero eu.
        </h2>
        <a
          href="#"
          className="mt-8 inline-block rounded bg-[#4caf4f] px-7 py-3 text-sm text-white"
        >
          Get a Demo →
        </a>
      </section>
      <Footer />
    </main>
  );
}
