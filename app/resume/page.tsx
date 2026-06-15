import type { Metadata } from "next";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Résumé — Valerio Italiano",
  description: "UX lead with 20 years of experience across consumer and enterprise products.",
};

export default function ResumePage() {
  return (
    <>
      <Nav />
      <main style={{ maxWidth: "720px", margin: "0 auto", padding: "64px 28px 120px" }}>

        <div style={{ marginBottom: "40px" }}>
          <a
            href="/Valerio_Italiano_resume.pdf"
            style={{
              fontFamily: "var(--font-hind), system-ui, sans-serif",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#e07856",
              textDecoration: "none",
            }}
          >
            Download PDF ↓
          </a>
        </div>

        <h1 style={{
          fontFamily: "var(--font-inria), Georgia, serif",
          fontWeight: 300,
          fontSize: "clamp(28px, 5vw, 40px)",
          lineHeight: 1.15,
          color: "#2f3a44",
          margin: "0 0 16px",
        }}>
          Valerio Italiano — UX Designer
        </h1>

        <p style={{ ...body, marginBottom: "56px" }}>
          UX lead with 20 years of experience across consumer and enterprise products. Specializing in creating product frameworks that bring clarity and consistency to complex systems.
        </p>

        {/* ── Experience ── */}
        <h2 style={h2Style}>Professional Experience</h2>

        <Role
          title="Staff UX Designer"
          org="Google"
          period="2021–2025"
          projects="Unified Measurement Experience, Conversion Setup Simplification"
          summary="Defined the vision and design framework for measurement across Google Ads, creating a more coherent and consistent experience aligned with advertisers' goals, workflows, and mental models."
          bullets={[
            "Defined and drove the vision for a redesigned measurement setup experience, reframing measurement around how advertisers think rather than how systems are structured.",
            "Defined a unified measurement model that aligned experiences across Google Ads, Google Analytics, and the wider Google Marketing Platform around a common set of concepts and workflows.",
            "Simplified web conversion setup, enabling advertisers to configure web conversions directly within Google Ads with reduced technical dependencies.",
          ]}
        />

        <Role
          title="Senior UX Designer"
          org="Google"
          period="2015–2021"
          projects="Campaign Creation Frameworks, Setup Flows for Search, Display and Performance Max Campaigns, Creative Management"
          summary="Led the design of foundational experiences across Google Ads, creating shared frameworks for campaign creation, creative management, and advertiser workflows."
          bullets={[
            "Defined a unified campaign creation model adopted across Google Ads, replacing fragmented product-specific workflows with a consistent foundation for campaign setup.",
            "Led the design of flagship campaign experiences, including Google Search and Performance Max, applying the new model to simplify campaign creation and improve campaign readiness.",
            "Created a shared media management experience that became the foundation for creative asset selection across Google Ads.",
            "Defined a scalable ad preview framework supporting dozens of ad formats and campaign types across Google Ads.",
          ]}
        />

        <Role
          title="UX Designer"
          org="UK Home Office / GDS"
          period="2014–2015"
          projects="Online Crime Reporting, Border Security (classified)"
          summary="Contributed to the UK government's digital transformation programme, designing public-sector services in policing, border security, and citizen-facing reporting systems."
          bullets={[
            "Led research and design for a new online crime reporting service.",
            "Launched a live pilot in partnership with two UK police forces, taking the service from concept to real-world deployment.",
            "Contributed to the development of security systems deployed at the UK border.",
          ]}
        />

        <Role
          title="Senior UX Designer"
          org="British Sky Broadcasting"
          period="2011–2014"
          projects="Account Management App, TV Content Discovery, Online Store, Home Move Online"
          summary="Led the design of digital products that helped transform how customers discovered content, managed their services, and engaged with Sky beyond the television screen."
          bullets={[
            "Reimagined customer support as a connected service journey, combining digital and human support within a single mobile experience.",
            "Connected support content, account tools, and service actions into contextual journeys that helped customers move seamlessly from understanding a problem to resolving it.",
            "Created a shared content discovery framework that unified Sky's digital properties.",
            "Explored early concepts in personalized discovery, recommendation systems, and natural-language search.",
          ]}
        />

        <Role
          title="UX Consultant"
          org="Freelance"
          period="2010–2011"
          summary="Partnered with clients and agencies to design digital products and services across a range of industries, leading projects from discovery and concept development through launch."
          bullets={[]}
        />

        <Role
          title="Interaction Designer"
          org="eFinancialCareers.com / Dice.com"
          period="2004–2008"
          summary="Led UX design across eFinancialCareers' global recruitment platform, shaping experiences for both jobseekers and recruiters across a network of international career sites. Contributed to a platform recognized as Best Online Service by Recruiter Magazine."
          bullets={[]}
        />

        {/* ── Qualifications ── */}
        <h2 style={{ ...h2Style, marginTop: "56px" }}>Qualifications</h2>
        <ul style={listStyle}>
          <Li>MS Human-Centered Systems — City University, London</Li>
          <Li>HND Graphic Design — Middlesex University, London</Li>
          <Li>BA Modern Languages — University of Westminster, London</Li>
        </ul>

        {/* ── Skills ── */}
        <h2 style={{ ...h2Style, marginTop: "48px" }}>Skills</h2>
        <ul style={listStyle}>
          <Li>Product Strategy</Li>
          <Li>Information Architecture</Li>
          <Li>Interaction Design</Li>
          <Li>Design Systems</Li>
          <Li>User Research</Li>
          <Li>Prototyping</Li>
          <Li>AI-assisted product development</Li>
        </ul>

        {/* ── Tools ── */}
        <h2 style={{ ...h2Style, marginTop: "48px" }}>Tools</h2>
        <p style={body}>Figma, Axure, Sketch, Adobe Creative Suite</p>

        {/* ── Languages ── */}
        <h2 style={{ ...h2Style, marginTop: "48px" }}>Languages</h2>
        <ul style={listStyle}>
          <Li>French and Italian (fluent)</Li>
          <Li>German (proficient)</Li>
          <Li>Dutch (learning)</Li>
          <Li>ASL (learning)</Li>
        </ul>

      </main>
    </>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

function Role({
  title,
  org,
  period,
  projects,
  summary,
  bullets,
}: {
  title: string;
  org: string;
  period: string;
  projects?: string;
  summary?: string;
  bullets: string[];
}) {
  return (
    <section style={{ marginBottom: "48px" }}>
      <h3 style={{
        fontFamily: "var(--font-inria), Georgia, serif",
        fontWeight: 700,
        fontSize: "18px",
        color: "#2f3a44",
        margin: "0 0 2px",
      }}>
        {title} — {org}
      </h3>
      <p style={{ ...meta, marginBottom: projects ? "4px" : "12px" }}>{period}</p>
      {projects && (
        <p style={{ ...meta, marginBottom: "12px" }}>
          Projects: {projects}
        </p>
      )}
      {summary && <p style={{ ...body, marginBottom: bullets.length ? "12px" : "0" }}>{summary}</p>}
      {bullets.length > 0 && (
        <ul style={listStyle}>
          {bullets.map((b, i) => (
            <Li key={i}>{b}</Li>
          ))}
        </ul>
      )}
    </section>
  );
}

// ── Shared styles ─────────────────────────────────────────────────────────────

const sans = "var(--font-hind), 'Hind Vadodara', system-ui, sans-serif";
const serif = "var(--font-inria), Georgia, serif";

const h2Style: React.CSSProperties = {
  fontFamily: serif,
  fontWeight: 700,
  fontSize: "22px",
  color: "#2f3a44",
  margin: "0 0 24px",
  paddingBottom: "10px",
  borderBottom: "1px solid #d4dade",
};

const body: React.CSSProperties = {
  fontFamily: sans,
  fontSize: "15px",
  lineHeight: 1.7,
  color: "#2f3a44",
  margin: "0 0 8px",
};

const meta: React.CSSProperties = {
  fontFamily: sans,
  fontSize: "13px",
  color: "#6b7a83",
  margin: 0,
};

const listStyle: React.CSSProperties = {
  margin: "0",
  paddingLeft: "0",
  listStyle: "none",
};

const liStyle: React.CSSProperties = {
  fontFamily: sans,
  fontSize: "15px",
  lineHeight: 1.7,
  color: "#2f3a44",
  marginBottom: "6px",
  display: "flex",
  alignItems: "flex-start",
  gap: "8px",
};

function Li({ children }: { children: React.ReactNode }) {
  return (
    <li style={liStyle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        style={{ width: "16px", height: "16px", flexShrink: 0, marginTop: "4px", color: "#e68483" }}
      >
        <path
          fillRule="evenodd"
          d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
          clipRule="evenodd"
        />
      </svg>
      <span>{children}</span>
    </li>
  );
}
