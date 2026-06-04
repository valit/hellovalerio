import { notFound } from "next/navigation";
import { getCaseStudy } from "@/data/caseStudies";
import Nav from "@/components/Nav";
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
    <>
      <Nav />
      <CaseStudyContent cs={cs} />
      <footer className="site-footer" style={{ padding: "0 0 28px" }}>
        <div className="container">
          <hr style={{ border: "none", borderTop: "1px solid #8a97a0", margin: "48px 0" }} />
          © 2026 Valerio Italiano
        </div>
      </footer>
    </>
  );
}
