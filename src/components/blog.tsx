import Image from "next/image";

const posts = [
  ["/image1.png", "Creating Streamlined Safeguarding Processes with OneRen"],
  [
    "/image2.png",
    "What are your safeguarding responsibilities and how can you manage them?",
  ],
  ["/image3.png", "Revamping the Membership Model with Triathlon Australia"],
];

export default function Blog() {
  return (
    <section id="product" className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold text-[#4d4d4d]">
          Caring is the new marketing
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-[#717171]">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who&apos;s joining the community, read
          about how our community are increasing their membership income and
          lot&apos;s more.
        </p>
      </div>
      <div className="mt-6 grid gap-7 md:grid-cols-3">
        {posts.map(([image, title]) => (
          <article key={title} className="relative pb-12">
            <Image
              src={image}
              alt="Article cover"
              width={400}
              height={286}
              className="h-64 w-full rounded-lg object-cover"
            />
            <div className="absolute bottom-0 left-5 right-5 rounded-lg bg-[#f5f7fa] p-5 text-center shadow-lg">
              <h3 className="text-base font-semibold leading-snug text-[#717171]">
                {title}
              </h3>
              <a
                href="#"
                className="mt-4 inline-block text-sm font-semibold text-[#4caf4f]"
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
