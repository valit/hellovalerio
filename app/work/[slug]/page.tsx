import fs from "fs";
import path from "path";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Nav from "@/components/Nav";
import CaseStudyContent from "@/components/CaseStudyContent";
import { mdxComponents } from "@/components/mdx/mdxComponents";
import type { MediaItem } from "@/components/mdx/MediaRegistry";

// ─── Helpers ──────────────────────────────────────────────────────────────────

// Slugs that have profile-specific variants (campaigns0/1, measurement0/1)
const PROFILED_SLUGS = ["campaigns", "measurement"];

async function getMdxFilePath(slug: string) {
  const dir = path.join(process.cwd(), "content", "case-studies");
  if (PROFILED_SLUGS.includes(slug)) {
    const cookieStore = await cookies();
    const profile = cookieStore.get("portfolio-auth")?.value ?? "0";
    const suffix = profile === "1" ? "1" : "0";
    return path.join(dir, `${slug}${suffix}.mdx`);
  }
  return path.join(dir, `${slug}.mdx`);
}

/**
 * Extract ordered media items from raw MDX source so the lightbox can
 * navigate through them in document order without client-side registration.
 */
function extractMediaItems(content: string): MediaItem[] {
  // Match both <Media> and <InlineImage> tags in document order so the
  // lightbox index is consistent with what each component finds via findIndex.
  const regex = /<(?:Media|InlineImage)\b[^>]*\bsrc="([^"]+)"(?:[^>]*\bcaption="([^"]*)")?[^>]*\/?>/g;
  const items: MediaItem[] = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    items.push({ src: match[1], caption: match[2] || undefined });
  }
  return items;
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cookieStore = await cookies();
  const profile = cookieStore.get("portfolio-auth")?.value ?? "0";
  const showConfidentialityNotice = PROFILED_SLUGS.includes(slug) && profile === "1";
  const filePath = await getMdxFilePath(slug);

  if (!fs.existsSync(filePath)) notFound();

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data: fm, content } = matter(raw);
  const mediaItems = extractMediaItems(content);

  return (
    <>
      <Nav />
      <CaseStudyContent
        title={fm.title}
        company={fm.company}
        role={fm.role}
        year={fm.year}
        tags={fm.tags ?? []}
        mediaItems={mediaItems}
        showConfidentialityNotice={showConfidentialityNotice}
      >
        <MDXRemote source={content} components={mdxComponents} />
      </CaseStudyContent>
      <footer className="site-footer" style={{ padding: "0 0 28px" }}>
        <div className="container">
          <hr style={{ border: "none", borderTop: "1px solid #8a97a0", margin: "48px 0" }} />
          © 2026 Valerio Italiano
        </div>
      </footer>
    </>
  );
}
