import type { Metadata } from "next";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Résumé — Valerio Italiano",
  description: "UX lead with 20 years of experience bridging business strategy and user needs.",
};

export default function ResumePage() {
  return (
    <>
      <Nav />
      <main style={{ maxWidth: "720px", margin: "0 auto", padding: "64px 28px 120px" }}>

        <div style={{ marginBottom: "40px" }}>
          <a
            href="/resume.pdf"
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
          UX lead with 20 years of experience bridging business strategy and user needs. I create product frameworks, prototypes, and design systems that scale globally and deliver measurable impact for both users and brands.
        </p>

        {/* ── Experience ── */}
        <h2 style={h2Style}>Professional Experience</h2>

        <Role
          title="Staff UX Designer"
          org="Google"
          period="2021–2025"
          projects="Unified Measurement Experience, Conversion Setup Simplification"
          summary="Defined the product vision and unified design framework for Google Ads' measurement setup, aligning Google Analytics and Google Marketing Platform to deliver cohesive advertiser workflows and measurable adoption gains."
          bullets={[
            "Defined product vision for the redesign of the entire measurement setup experience, working cross-functionally to unify over a dozen flows and delivering one framework driving a 7.89% uplift in goal activation.",
            "Streamlined web conversion setup in Google Ads, enabling advertisers to configure web conversions directly in the UI with no code changes.",
          ]}
        />

        <Role
          title="Senior UX Designer"
          org="Google"
          period="2015–2020"
          projects="Campaign Creation Frameworks, Setup Flows for Search, Display and Performance Max Campaigns, Creative Management"
          summary="Shaped the campaign creation and creative management experiences in Google Ads, building frameworks and shared components that scaled across campaign types and streamlined creative asset workflows."
          bullets={[
            "Designed the setup experience for flagship campaigns, like Google Search campaigns (driving a +6% improvement in campaign completion and an +8.32% increase in total spend) as well as then-new Performance Max campaigns.",
            "Designed the framework used for all Google Ads campaign flows.",
            "Led the design of in-product experiences for managing multimedia ad formats, delivering consistent experiences across campaign types.",
            `Created shared "Media Picker" component used to select 300,000 assets/day across all campaign and ad types.`,
            "Designed a scalable ad preview framework supporting dozens of ad types across Google Ads driving consistency across the ecosystem.",
          ]}
        />

        <Role
          title="UX Designer"
          org="UK Home Office / GDS"
          period="2014–2015"
          projects="Online Crime Reporting, Border Security (classified)"
          summary="Worked with the ministerial department responsible for immigration, policing, counter-terrorism, and border security during the UK government's digital transformation initiative to bring all major public services online."
          bullets={[
            "Designed and conducted research for an online crime reporting system.",
            "Launched a live pilot in partnership with two UK police forces.",
            "Contributed to the development of security systems deployed at the UK border.",
          ]}
        />

        <Role
          title="Senior UX Designer"
          org="British Sky Broadcasting"
          period="2011–2014"
          projects="Account Management App, TV Content Discovery, Online Store, Home Move Online"
          summary="Worked for Britain's largest commercial broadcaster and provider of satellite, broadband and telephony services on a range of projects across the online store and products area, customer account management and TV content discovery."
          bullets={[
            "Led UX design for the Sky Service app launch, addressing high-volume customer service requests and reducing call center load through self-serve flows. Reached #1 free app on App Store in 2014.",
            "Designed the Find & Watch section on Sky.com, helping millions of subscribers discover current and upcoming TV and film content.",
            "Contributed to key projects across Sky's online store, optimising sign-up and service transfer flows to drive broadband and TV subscriptions.",
          ]}
        />

        <Role
          title="UX Consultant"
          org="Freelance"
          period="2010–2011"
          projects="Taxi Comparison Service, Social Network Concept, Private Club Members' Portal"
          summary="Worked independently and in collaboration with agencies to deliver end-to-end design solutions for a range of clients and sectors."
          bullets={[
            "Partnered directly with clients and agency teams to define and deliver digital services.",
            "Led workshops to gather requirements, align stakeholders, and shape design direction.",
            "Created service concepts from idea to launch, collaborating with cross-functional teams.",
            "Delivered user flows, wireframes, and high-fidelity visual designs across platforms.",
          ]}
        />

        <Role
          title="Interaction Designer"
          org="eFinancialCareers.com / Dice.com"
          period="2004–2008"
          summary="Led the UX design across the entire eFinancialCareers platform, shaping end-to-end experiences for both jobseekers and recruiters."
          bullets={[
            "Responsible for all interaction design across a global network of career sites.",
            "Delivered user-centered solutions to support job discovery, application flows, and recruiter tools.",
            "Awarded Best Online Service in 2005 by Recruiter Magazine.",
          ]}
        />

        {/* ── Qualifications ── */}
        <h2 style={{ ...h2Style, marginTop: "56px" }}>Qualifications</h2>
        <ul style={listStyle}>
          <li style={liStyle}>M.S. Human-Centered Systems — City University, London</li>
          <li style={liStyle}>H.N.D. Dipl. Graphic Design — Middlesex University, London</li>
          <li style={liStyle}>B.A. Modern Languages — University of Westminster, London</li>
        </ul>

        {/* ── Software ── */}
        <h2 style={{ ...h2Style, marginTop: "48px" }}>Software</h2>
        <ul style={listStyle}>
          <li style={liStyle}><strong>Design:</strong> expert user of Figma, Sketch, Axure, Adobe Illustrator, Photoshop, and InDesign</li>
          <li style={liStyle}><strong>Technical:</strong> working knowledge of HTML, CSS, and Next.js; experience directing and iterating on production web builds using AI-assisted development tools</li>
        </ul>

        {/* ── Languages ── */}
        <h2 style={{ ...h2Style, marginTop: "48px" }}>Languages</h2>
        <ul style={listStyle}>
          <li style={liStyle}>French and Italian (fluent)</li>
          <li style={liStyle}>German (proficient)</li>
          <li style={liStyle}>Dutch (learning)</li>
          <li style={liStyle}>ASL (learning)</li>
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
        <p style={{ ...meta, fontStyle: "italic", marginBottom: "12px" }}>
          Projects: {projects}
        </p>
      )}
      {summary && <p style={{ ...body, marginBottom: "12px" }}>{summary}</p>}
      <ul style={listStyle}>
        {bullets.map((b, i) => (
          <li key={i} style={liStyle}>{b}</li>
        ))}
      </ul>
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
  color: "#8a97a0",
  margin: 0,
};

const listStyle: React.CSSProperties = {
  margin: "0",
  paddingLeft: "20px",
};

const liStyle: React.CSSProperties = {
  fontFamily: sans,
  fontSize: "15px",
  lineHeight: 1.7,
  color: "#2f3a44",
  marginBottom: "6px",
};

const linkStyle: React.CSSProperties = {
  color: "#e07856",
  textDecoration: "none",
};
