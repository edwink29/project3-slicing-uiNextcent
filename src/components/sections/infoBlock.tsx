// components/sections/info-block.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";

const COPY =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta.";

interface InfoBlockProps {
  image: string;
  alt: string;
  title: string;
  id?: string;
  imageWidth?: number;
  imageHeight?: number;
  priority?: boolean;
}

export default function InfoBlock({
  image,
  alt,
  title,
  id,
  imageWidth = 422,
  imageHeight = 433,
  priority = false,
}: InfoBlockProps) {
  return (
    <section id={id} className="scroll-mt-20 px-5 py-16 sm:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div>
          <Image
            src={image}
            alt={alt}
            width={imageWidth}
            height={imageHeight}
            priority={priority}
            className="mx-auto object-cover"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: imageWidth,
            }}
          />
        </div>
        <div>
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
