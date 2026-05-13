import { CardData } from "@/data/caseStudies";

export default function CaseStudyCard({ card }: { card: CardData }) {
  const isClickable = !!card.slug;

  const inner = (
    <div
      className={`group relative bg-card-bg border border-card-border rounded-xl overflow-hidden transition-all duration-300 ${
        isClickable
          ? "hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] hover:-translate-y-0.5 cursor-pointer"
          : "opacity-70"
      }`}
    >
      {/* Cover image area */}
      <div className="w-full aspect-[4/3] bg-placeholder" />

      <div className="p-6">
        {/* Company */}
        {card.company && (
          <p className="text-[11px] font-sans font-medium tracking-widest text-muted uppercase mb-3">
            {card.company}
          </p>
        )}

        {/* Title */}
        <h3
          className={`font-serif text-xl leading-snug text-near-black ${
            card.comingSoon ? "text-muted" : ""
          }`}
        >
          {card.title}
        </h3>

        {/* Hook */}
        {card.hook && (
          <p className="mt-2 text-sm italic text-muted leading-relaxed">
            {card.hook}
          </p>
        )}

        {/* Arrow indicator */}
        {isClickable && (
          <div className="mt-4 flex items-center gap-1 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <span>Read case study</span>
            <span aria-hidden>→</span>
          </div>
        )}
      </div>
    </div>
  );

  if (isClickable) {
    return <a href={`/work/${card.slug}`}>{inner}</a>;
  }

  return <div>{inner}</div>;
}
