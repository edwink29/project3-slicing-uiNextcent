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
import InfoBlock from "@/components/sections/infoBlock";

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
        imageWidth={422}
        imageHeight={433}
      />
      <Stats />
      <InfoBlock
        id="feature"
        image="/images/imageContent2.png"
        alt="Nexcent site footer design illustration"
        title="How to design your site footer like we did"
        imageWidth={441}
        imageHeight={433}
      />
      <Testimonial />
      <Blog />
      <section className="bg-brand-light px-5 py-16 text-center sm:px-8">
        <SectionHeading
          className="mx-auto max-w-3xl font"
          titleClassName="text-[64px] leading-[76px] text-gray-800"
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
