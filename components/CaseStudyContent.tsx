import { ContentBlock } from "@/data/caseStudies";

export default function CaseStudyContent({
  content,
}: {
  content: ContentBlock[];
}) {
  return (
    <div className="pb-32">
      {content.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <div
                key={i}
                className="max-w-[680px] mx-auto px-6 lg:px-0 mt-16 mb-5"
              >
                <h2 className="font-serif text-2xl font-normal text-near-black">
                  {block.text}
                </h2>
              </div>
            );

          case "paragraph":
            return (
              <div
                key={i}
                className="max-w-[680px] mx-auto px-6 lg:px-0 mb-5"
              >
                <p className="text-[17px] leading-[1.75] text-near-black">
                  {block.text}
                </p>
              </div>
            );

          case "pullquote":
            return (
              <div
                key={i}
                className="max-w-[680px] mx-auto px-6 lg:px-0 my-12"
              >
                <blockquote className="border-l-[3px] border-accent pl-6 font-serif text-[22px] italic leading-relaxed text-near-black">
                  {block.text}
                </blockquote>
              </div>
            );

          case "image":
            return (
              <div key={i} className="my-16 px-6 max-w-4xl mx-auto">
                <div
                  className={`w-full bg-placeholder rounded-xl ${
                    block.aspectRatio === "16/9"
                      ? "aspect-video"
                      : "aspect-[4/3]"
                  }`}
                />
                <p className="mt-3 text-sm text-muted text-center leading-snug">
                  {block.caption}
                </p>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
