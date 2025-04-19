import { CustomMDX } from "app/components/mdx";
import { getCv } from "app/cv/utils";
import { notFound } from "next/navigation";

export const metadata = {
  title: "CV",
  description: "My CV",
};

export default function Page() {
  let cv = getCv().find((file) => file.slug === "cv");

  if (!cv) {
    notFound();
  }

  return (
    <section>
      <h1 className="font-light text-5xl mb-8">
        Antonie Huang
      </h1>
      <article className="prose">
        <CustomMDX source={cv.content} />
      </article>
    </section>
  );
}
