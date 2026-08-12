import Image from "next/image";
import Blog from "@/components/sections/blog";
import Clients from "@/components/sections/clients";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import Navbar from "@/components/sections/navbar";
import Stats from "@/components/sections/stats";
import Testimonial from "@/components/sections/testimonial";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

const COPY =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta.";

function InfoBlock({
  image,
  alt,
  title,
  id,
  flip = false,
}: {
  image: string;
  alt: string;
  title: string;
  id?: string;
  flip?: boolean;
}) {
  return (
    <section id={id} className="px-5 py-16 sm:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div className={flip ? "md:order-2" : ""}>
          <Image
            src={image}
            alt={alt}
            width={480}
            height={360}
            className="mx-auto h-auto w-full max-w-sm"
          />
        </div>
        <div className={flip ? "md:order-1" : ""}>
          <h2 className="max-w-md text-3xl font-semibold leading-tight text-brand-dark">
            {title}
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-brand-grey">
            {COPY} Nullam mattis tristique iaculis. Nullam pulvinar sit amet
            risus pretium auctor.
          </p>
          <Button href="#" className="mt-7">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-brand-ink">
      <Navbar />
      <Hero />
      <Clients />
      <InfoBlock
        image="/images/imageContent1.png"
        alt="Nexcent community management illustration"
        title="The unseen of spending three years at Pixelgrade"
      />
      <Stats />
      <InfoBlock
        id="feature"
        image="/images/imageContent2.png"
        alt="Nexcent site footer design illustration"
        title="How to design your site footer like we did"
        flip
      />
      <Testimonial />
      <Blog />
      <section className="bg-brand-light px-5 py-16 text-center sm:px-8">
        <SectionHeading
          className="mx-auto max-w-3xl"
          title={
            <>
              Pellentesque suscipit
              <br />
              fringilla libero eu.
            </>
          }
        />
        <Button href="#" className="mt-8">
          Get a Demo →
        </Button>
      </section>
      <Footer />
    </main>
  );
}
