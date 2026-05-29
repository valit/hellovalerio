import { notFound } from "next/navigation";
import { getCaseStudy } from "@/data/caseStudies";
import Nav from "@/components/Nav";

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
      <main>
        <div className="container">
          <a href="/#case-studies" className="cs-back">
            <span aria-hidden>←</span>
            <span>All work</span>
          </a>
        </div>

        <div className="container">
          <div className="cs-hero">
            <h1>{cs.title}</h1>
            {cs.tags && cs.tags.length > 0 && (
              <div className="cs-tags">
                {cs.tags.map((tag) => (
                  <span key={tag} className="cs-tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "32px",
                paddingTop: "32px",
                borderTop: "1px solid #d4d8de",
                fontFamily: "var(--font-sans)",
                fontSize: "13px",
              }}
            >
              {[
                { label: "Company", value: cs.company },
                { label: "Role", value: cs.role },
                { label: "Year", value: cs.year },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#8a97a0",
                      margin: "0 0 4px",
                    }}
                  >
                    {label}
                  </p>
                  <p style={{ color: "#2f3a44", margin: 0 }}>{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container">
          <div className="cs-body">
            {cs.content.map((block, i) => {
              switch (block.type) {
                case "heading":
                  return <h2 key={i}>{block.text}</h2>;
                case "paragraph":
                  return <p key={i}>{block.text}</p>;
                case "pullquote":
                  return <blockquote key={i}>{block.text}</blockquote>;
                case "image":
                  return (
                    <div key={i} style={{ margin: "40px 0" }}>
                      <div
                        style={{
                          width: "100%",
                          aspectRatio: block.aspectRatio === "16/9" ? "16 / 9" : "4 / 3",
                          background: "#d8dde2",
                          borderRadius: "14px",
                        }}
                      />
                      <p
                        style={{
                          marginTop: "12px",
                          fontSize: "13px",
                          color: "#8a97a0",
                          fontFamily: "var(--font-sans)",
                          textAlign: "center",
                        }}
                      >
                        {block.caption}
                      </p>
                    </div>
                  );
                default:
                  return null;
              }
            })}
          </div>
        </div>
      </main>

      <footer className="site-footer">
        <div className="container">© 2026 Valerio Italiano</div>
      </footer>
    </>
  );
}
