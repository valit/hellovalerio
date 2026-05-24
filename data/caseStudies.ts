export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "image"; fullBleed: boolean; aspectRatio: "16/9" | "4/3"; caption: string }
  | { type: "pullquote"; text: string };

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  hook: string;
  company: string;
  role: string;
  year: string;
  content: ContentBlock[];
}

export interface CardData {
  title: string;
  hook?: string;
  company: string;
  tags?: string[];
  slug?: string;
}

const measurementEcosystem: CaseStudy = {
  slug: "measurement-ecosystem",
  title: "Designing a more coherent measurement ecosystem",
  subtitle:
    "Redesigning how advertisers understand and configure conversion tracking across Google's advertising ecosystem",
  hook: "Redesigning how advertisers understand and configure conversion tracking",
  company: "Google Ads",
  role: "UX Lead",
  year: "2022–2024",
  content: [
    { type: "heading", text: "Overview" },
    {
      type: "paragraph",
      text: "Conversion measurement is the system that allows advertisers to understand whether their campaigns are driving meaningful business outcomes such as purchases, sign-ups, or app installs. While these signals support reporting and performance analysis, they also power the automated bidding and optimization systems that increasingly determine how campaigns perform across Google Ads.",
    },
    {
      type: "paragraph",
      text: "Over time, however, the setup experience had evolved into a fragmented ecosystem of workflows, measurement technologies, and implementation models that made it increasingly difficult for advertisers to configure and trust their measurement systems.",
    },
    {
      type: "paragraph",
      text: "I led a redesign effort focused on reorganizing conversion setup around advertisers' business goals rather than Google's underlying measurement infrastructure, creating a more contextual and coherent framework across Google's advertising ecosystem.",
    },
    { type: "heading", text: "The problem" },
    {
      type: "paragraph",
      text: "When I joined the project, conversion setup was consistently reported as one of the hardest tasks for advertisers to complete successfully within Google Ads, as well as one of the largest generators of support tickets.",
    },
    {
      type: "paragraph",
      text: "The experience was made up of a number of flows that had evolved organically over time across web, app, phone, and offline tracking, with each following its own logic and mental models. Advertisers were first asked what type of conversion action they wanted to create — web, app, phone, import — even though this choice reflected the way Google had designed its internal systems rather than the way advertisers thought about their business.",
    },
    {
      type: "image",
      fullBleed: true,
      aspectRatio: "16/9",
      caption:
        "The original conversion setup entry point, organised around Google's internal measurement taxonomy",
    },
    { type: "heading", text: "Finding the thread" },
    {
      type: "paragraph",
      text: "One of the first areas I focused on was web conversions, both because it was the most common use case and because it revealed many of the broader structural problems within the system. Advertisers were expected to navigate complex setup paths with little contextual understanding from the product itself. The experience treated measurement as a generic implementation exercise rather than something grounded in the realities of a specific business.",
    },
    {
      type: "paragraph",
      text: "I began exploring a more contextual approach centered around the advertiser's own website. Instead of leading with conversion types and implementation details, the system used the advertiser's site to better understand their business, any existing measurement setup, and the kinds of outcomes they were likely trying to track.",
    },
    {
      type: "paragraph",
      text: "This made the setup experience far more contextual. Instead of presenting advertisers with generic implementation flows, the system could adapt guidance and recommendations based on the realities of each business and its existing measurement setup.",
    },
    {
      type: "image",
      fullBleed: true,
      aspectRatio: "16/9",
      caption: "Early explorations of a website-centred setup approach",
    },
    { type: "heading", text: "Reframing the question" },
    {
      type: "paragraph",
      text: "The experience was refined through multiple rounds of usability studies, and the response to the redesign helped establish a broader realization across the organization: the problem wasn't simply that conversion setup was technically complex. The deeper issue was that the entire experience had been designed around measurement infrastructure rather than around advertisers' business goals.",
    },
    {
      type: "paragraph",
      text: "As the work expanded beyond web conversions, I began redesigning the setup experience around a different starting idea.",
    },
    {
      type: "paragraph",
      text: 'Instead of asking advertisers, "What conversion actions do you want to create?", the system began by asking: "What outcomes are important for your business to measure?"',
    },
    {
      type: "pullquote",
      text: "This shifted measurement setup from an implementation task to a business decision.",
    },
    {
      type: "paragraph",
      text: "Advertisers could express goals such as purchases, leads, or sign-ups, while the system translated those goals into relevant measurement approaches.",
    },
    { type: "heading", text: "A platform-centred model" },
    {
      type: "paragraph",
      text: "To support this model, I expanded the setup flow beyond individual measurement technologies and reframed it around the platforms advertisers used to engage with their customers: websites, apps, physical stores, and other business surfaces. This created the context needed for the system to provide more relevant guidance across any applicable platform.",
    },
    {
      type: "paragraph",
      text: "An advertiser without an app, for example, would never be asked to configure app measurement or navigate workflows unrelated to their business. Setup became contextual, adaptive, and more closely aligned with the way advertisers already understood their own operations.",
    },
    {
      type: "image",
      fullBleed: true,
      aspectRatio: "4/3",
      caption:
        "The platform-centred model: setup organised around business surfaces rather than measurement technologies",
    },
    {
      type: "paragraph",
      text: "Importantly, I did not redesign the underlying infrastructure that powered conversion measurement. I redesigned the organizing model that guided advertisers through the decisions required to build the right measurement setup.",
    },
    { type: "heading", text: "Scaling across the ecosystem" },
    {
      type: "paragraph",
      text: "This shift in mental model became the foundation for a broader effort to bring greater consistency to how Google's advertising products approached measurement setup.",
    },
    {
      type: "paragraph",
      text: "Google Analytics was one of the first and most significant areas of focus. Because advertisers regularly moved between Analytics and Google Ads, inconsistencies between the two products had become a major source of confusion. Despite their close relationship, each product had evolved its own terminology, setup patterns, and mental models over many years under separate teams.",
    },
    {
      type: "paragraph",
      text: "I led a unification effort focused on creating a more coherent experience across the ecosystem, aligning the way measurement concepts were structured, communicated, and introduced across both products.",
    },
    {
      type: "image",
      fullBleed: true,
      aspectRatio: "16/9",
      caption:
        "Aligning measurement concepts across Google Ads and Google Analytics",
    },
    { type: "heading", text: "Outcome" },
    {
      type: "paragraph",
      text: "The result was a more contextual and coherent approach to measurement setup — one that aligned more closely with the way advertisers understood their business, while creating a stronger and more scalable foundation across Google's advertising ecosystem.",
    },
  ],
};

export const caseStudies: CaseStudy[] = [measurementEcosystem];

export const cardData: CardData[] = [
  {
    title: "Built to bend: untangling campaign creation in Google Ads",
    company: "Google",
    tags: ["Frameworks", "Monetization", "Configuration"],
  },
  {
    title: "Creating a more coherent measurement ecosystem",
    company: "Google",
    tags: ["Measurement", "Complex systems", "Frameworks"],
    slug: "measurement-ecosystem",
  },
  {
    title: "The good after the bad: designing service recovery",
    company: "Sky",
    tags: ["Customer support", "Self-service", "Mobile"],
  },
  {
    title: "What's on tonight: The invisible architecture of content discovery",
    company: "Sky",
    tags: ["Discovery", "Content systems"],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
