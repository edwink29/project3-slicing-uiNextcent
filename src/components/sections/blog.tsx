import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";

const POSTS = [
  {
    image: "/images/imageBlog1.png",
    title: "Creating Streamlined Safeguarding Processes with OneRen",
  },
  {
    image: "/images/imageBlog2.png",
    title:
      "What are your safeguarding responsibilities and how can you manage them?",
  },
  {
    image: "/images/imageBlog3.png",
    title: "Revamping the Membership Model with Triathlon Australia",
  },
];

export default function Blog() {
  return (
    <section
      id="product"
      className="mx-auto max-w-6xl px-5 py-16 sm:px-8 scroll-mt-20"
    >
      <SectionHeading
        className="mx-auto max-w-2xl"
        title="Caring is the new marketing"
        subtitle={
          <>
            The Nexcent blog is the best place to read about the latest
            membership insights, trends and more. See who&apos;s joining the
            community, read about how our community are increasing their
            membership income and lot&apos;s more.
          </>
        }
      />
      <div className="mt-6 grid gap-7 md:grid-cols-3">
        {POSTS.map(({ image, title }) => (
          <article key={title} className="relative pb-12">
            <Image
              src={image}
              alt={title}
              width={400}
              height={286}
              priority
              className="h-64 w-full rounded-lg object-cover"
            />
            <div className="absolute bottom-0 left-5 right-5 rounded-lg bg-brand-light p-5 text-center shadow-lg">
              <h3 className="text-base font-semibold leading-snug text-brand-grey">
                {title}
              </h3>
              <a
                href="#"
                className="mt-4 inline-block text-sm font-semibold text-brand-primary"
              >
                Readmore →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
