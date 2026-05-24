import { CardData } from "@/data/caseStudies";

export default function CaseStudyCard({ card }: { card: CardData }) {
  const isClickable = !!card.slug;

  const inner = (
    <div
      className={`group relative bg-card-bg border border-card-border rounded-xl overflow-hidden transition-all duration-300 ${
        isClickable
          ? "hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] hover:-translate-y-0.5 cursor-pointer"
          : ""
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
        <h3 className="font-serif text-[1.1rem] leading-snug text-near-black">
          {card.title}
        </h3>

        {/* Tags */}
        {card.tags && card.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {card.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-sans text-muted border border-card-border rounded px-2 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Arrow indicator — only on clickable cards */}
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
