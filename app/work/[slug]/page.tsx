import { notFound } from "next/navigation";
import { getCaseStudy } from "@/data/caseStudies";
import CaseStudyContent from "@/components/CaseStudyContent";

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);

  if (!cs) notFound();

  return (
    <main className="min-h-screen bg-page-bg">
      {/* Back link */}
      <div className="max-w-6xl mx-auto px-6 lg:px-10 pt-10">
        <a
          href="/#work"
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-near-black transition-colors"
        >
          <span aria-hidden>←</span>
          <span>All work</span>
        </a>
      </div>

      {/* Cover */}
      <div className="max-w-[680px] mx-auto px-6 lg:px-0 pt-16 pb-20">
        <h1 className="font-serif text-[2.5rem] lg:text-[3rem] font-normal leading-[1.2] text-near-black">
          {cs.title}
        </h1>
        <p className="mt-6 text-lg text-muted leading-relaxed">{cs.subtitle}</p>

        {/* Metadata row */}
        <div className="mt-10 pt-8 border-t border-card-border flex flex-wrap gap-8 text-sm">
          <div>
            <p className="text-[11px] font-medium tracking-widest uppercase text-muted mb-1">
              Company
            </p>
            <p className="text-near-black">{cs.company}</p>
          </div>
          <div>
            <p className="text-[11px] font-medium tracking-widest uppercase text-muted mb-1">
              Role
            </p>
            <p className="text-near-black">{cs.role}</p>
          </div>
          <div>
            <p className="text-[11px] font-medium tracking-widest uppercase text-muted mb-1">
              Year
            </p>
            <p className="text-near-black">{cs.year}</p>
          </div>
        </div>
      </div>

      {/* Editorial content */}
      <CaseStudyContent content={cs.content} />
    </main>
  );
}
