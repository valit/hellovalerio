export interface ParagraphSection {
  type: "paragraph";
  text: string;
  pullquote?: string;
}

export interface ImageSection {
  type: "image";
  src?: string;
  aspectRatio?: "16/9" | "4/3";
  caption?: string;
}

export interface VideoSection {
  type: "video";
  src: string;
  aspectRatio?: "16/9" | "4/3";
  caption?: string;
}

export interface RuleSection {
  type: "rule";
}

export type Section = ParagraphSection | ImageSection | VideoSection | RuleSection;

export interface CaseStudy {
  slug: string;
  title: string;
  company: string;
  role: string;
  year: string;
  tags: string[];
  sections: Section[];
}

export interface CardData {
  title: string;
  hook?: string;
  company: string;
  tags?: string[];
  slug?: string;
  image?: string;
  imageAlt?: string;
  logo?: string;
}

const measurementEcosystem: CaseStudy = {
  slug: "measurement",
  title: "Creating a more coherent measurement ecosystem",
  company: "Google",
  role: "UX Lead",
  year: "2022–2024",
  tags: ["Measurement", "Complex systems", "Frameworks"],
  sections: [
    // Intro
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
    { type: "rule" },
    // Section 1
    {
      type: "paragraph",
      text: "When I joined the project, conversion setup was consistently reported as one of the hardest tasks for advertisers to complete successfully within Google Ads, as well as one of the largest generators of support tickets.",
    },
    {
      type: "paragraph",
      text: "The experience was made up of a number of flows that had evolved organically over time across web, app, phone, and offline tracking, with each following its own logic and mental models. Advertisers were first asked what type of conversion action they wanted to create — web, app, phone, import — even though this choice reflected the way Google had designed its internal systems rather than the way advertisers thought about their business.",
    },
    {
      type: "video",
      src: "/case-02-measurement-1.mp4",
      aspectRatio: "16/9",
      caption: "What appeared to be a single setup flow was actually a collection of independent systems stitched together over time.",
    },
    // Section 2
    {
      type: "paragraph",
      text: "One of the first areas I focused on was web conversions, both because it was the most common use case and because it revealed many of the broader structural problems within the system. Advertisers were expected to navigate complex setup paths with little contextual understanding from the product itself. The experience treated measurement as a generic implementation exercise rather than something grounded in the realities of a specific business.",
      pullquote: "Advertisers could express goals such as purchases, leads, or sign-ups, while the system translated those goals into relevant measurement approaches.",
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
      type: "video",
      src: "/case-02-measurement-2.mp4",
      aspectRatio: "16/9",
      caption: "Rather than asking advertisers what to configure, the system used their website to infer what was worth measuring.",
    },
    // Section 3
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
      text: "Instead of asking advertisers, \"What conversion actions do you want to create?\", the system began by asking: \"What outcomes are important for your business to measure?\"",
    },
    {
      type: "paragraph",
      text: "This shifted measurement setup from an implementation task to a business decision. Advertisers could express goals such as purchases, leads, or sign-ups, while the system translated those goals into relevant measurement approaches.",
    },
    {
      type: "video",
      src: "/case-02-measurement-3.mp4",
      aspectRatio: "16/9",
      caption: "Advertisers started with the outcome they cared about; the system handled the complexity of how to measure it.",
    },
    // Section 4
    {
      type: "paragraph",
      text: "To support this model, I expanded the setup flow beyond individual measurement technologies and reframed it around the platforms advertisers used to engage with their customers: websites, apps, physical stores, and other business surfaces. This created the context needed for the system to provide more relevant guidance across any applicable platform.",
    },
    {
      type: "paragraph",
      text: "An advertiser without an app, for example, would never be asked to configure app measurement or navigate workflows unrelated to their business. Setup became contextual, adaptive, and more closely aligned with the way advertisers already understood their own operations.",
    },
    {
      type: "video",
      src: "/case-02-measurement-4.mp4",
      aspectRatio: "16/9",
      caption: "Measurement became organized around customer touchpoints rather than measurement technologies.",
    },
    // Section 5
    {
      type: "paragraph",
      text: "Importantly, I did not redesign the underlying infrastructure that powered conversion measurement. I redesigned the organizing model that guided advertisers through the decisions required to build the right measurement setup.",
    },
    {
      type: "paragraph",
      text: "This shift in mental model became the foundation for a broader effort to bring greater consistency to how Google's advertising products approached measurement setup.",
    },
    {
      type: "paragraph",
      text: "Google Analytics was one of the first and most significant areas of focus. Because advertisers regularly moved between Analytics and Google Ads, inconsistencies between the two products had become a major source of confusion. Despite their close relationship, each product had evolved its own terminology, setup patterns, and mental models over many years under separate teams.",
    },
    {
      type: "image",
      src: "/case-02-measurement-5.png",
      aspectRatio: "16/9",
      caption: "The framework became the foundation for a more consistent measurement experience across Google Ads and Google Analytics.",
    },
    // Closing
    {
      type: "paragraph",
      text: "I led a unification effort focused on creating a more coherent experience across the ecosystem, aligning the way measurement concepts were structured, communicated, and introduced across both products.",
    },
    {
      type: "paragraph",
      text: "The result was a more contextual and coherent approach to measurement setup — one that aligned more closely with the way advertisers understood their business, while creating a stronger and more scalable foundation across Google's advertising ecosystem.",
    },
  ],
};

const googleAdsCampaign: CaseStudy = {
  slug: "campaigns",
  title: "Built to bend: untangling campaign creation in Google Ads",
  company: "Google",
  role: "UX Lead",
  year: "2020–2022",
  tags: ["Frameworks", "Monetization", "Configuration"],
  sections: [
    {
      type: "paragraph",
      text: "Campaign creation in Google Ads serves an extraordinarily wide range of advertisers — from small businesses running their first ad to sophisticated marketing teams managing thousands of campaigns. The challenge was designing a flow that could flex to meet all of them.",
    },
    {
      type: "paragraph",
      text: "Over years of incremental feature additions, the campaign creation flow had accumulated layers of complexity that made it difficult for new advertisers to succeed while also frustrating experienced ones who needed more control.",
    },
    {
      type: "paragraph",
      text: "The core tension was between simplicity and power. Guided flows helped beginners but frustrated experts. Advanced controls helped power users but overwhelmed beginners. Previous attempts at solving this had resulted in parallel flows that were expensive to maintain and created their own consistency problems.",
    },
    {
      type: "image",
      aspectRatio: "16/9",
      caption: "The existing campaign creation flow, showing accumulated complexity over time",
    },
    {
      type: "paragraph",
      text: "Rather than designing separate beginner and expert flows, I explored a single adaptive framework that could expand and contract based on the advertiser's context and declared goals.",
      pullquote: "The best interface for a beginner and the best interface for an expert are not as different as they seem — both want clarity about what matters most right now.",
    },
    {
      type: "paragraph",
      text: "The redesign introduced a goal-first entry point that shaped the entire flow, progressive disclosure that revealed advanced options when they became relevant, and inline guidance that explained concepts at the moment of decision rather than in separate help content.",
    },
    {
      type: "paragraph",
      text: "The new framework reduced the number of steps required for common campaign types while giving power users clearer access to advanced configuration. It also created a more maintainable structure that the team could extend as new campaign types and features were added.",
    },
  ],
};

const skyServiceRecovery: CaseStudy = {
  slug: "service-app",
  title: "The good after the bad: designing service recovery",
  company: "Sky",
  role: "Senior UX Designer",
  year: "2016–2018",
  tags: ["Customer support", "Self-service", "Mobile"],
  sections: [
    {
      type: "paragraph",
      text: "When a customer's TV service goes down or their bill is wrong, the experience of getting that fixed matters enormously — sometimes more than the original problem. Sky had strong brand equity but service recovery experiences that often left customers more frustrated than before they called.",
    },
    {
      type: "paragraph",
      text: "I led the redesign of Sky's mobile service recovery experience, with the goal of helping customers resolve common issues without calling, while feeling genuinely cared for when they did.",
    },
    {
      type: "paragraph",
      text: "Research revealed that customers' frustration wasn't primarily with the service failure itself — it was with the feeling of being passed around, asked to repeat themselves, and not trusted. The emotional journey of recovery mattered as much as the practical outcome.",
      pullquote: "A service failure handled well can create stronger loyalty than a service that never failed at all.",
    },
    {
      type: "image",
      aspectRatio: "4/3",
      caption: "Service recovery journey mapping, showing emotional peaks and valleys across channels",
    },
    {
      type: "paragraph",
      text: "The redesigned mobile experience significantly increased the proportion of customers who resolved issues without calling, while customer satisfaction scores for self-service recovery improved markedly across all tracked metrics.",
    },
  ],
};

const skyContentDiscovery: CaseStudy = {
  slug: "content-discovery",
  title: "What's on tonight: the invisible architecture of content discovery",
  company: "Sky",
  role: "Senior UX Designer",
  year: "2018–2020",
  tags: ["Discovery", "Content systems"],
  sections: [
    {
      type: "paragraph",
      text: "Content discovery is one of the most consequential — and most invisible — design challenges in broadcast media. When it works, people find great things to watch and never think about how. When it fails, they spend twenty minutes scrolling and give up.",
    },
    {
      type: "paragraph",
      text: "I led a cross-platform redesign of Sky's content discovery experience, spanning the TV remote, mobile app, and web, with the goal of making the right content feel easier to find across all contexts.",
    },
    {
      type: "paragraph",
      text: "The instinct in content discovery design is to show more — more tiles, more categories, more personalisation. But research consistently showed that more options led to more paralysis. The problem wasn't a shortage of good content; it was a shortage of confident decisions.",
      pullquote: "The best discovery experience feels less like browsing a catalogue and more like a recommendation from someone who knows you.",
    },
    {
      type: "image",
      aspectRatio: "16/9",
      caption: "Cross-device content discovery flow, showing how discovery intent varies by context",
    },
    {
      type: "paragraph",
      text: "The redesigned experience increased content starts from the discovery surface and reduced the average time-to-play across all devices, while customer satisfaction with the 'finding content' experience improved significantly.",
    },
  ],
};

export const caseStudies: CaseStudy[] = [
  measurementEcosystem,
  googleAdsCampaign,
  skyServiceRecovery,
  skyContentDiscovery,
];

export const cardData: CardData[] = [
  {
    title: "Built to bend: untangling campaign creation in Google Ads",
    company: "Google",
    tags: ["Frameworks", "Monetization", "Configuration"],
    slug: "campaigns",
    image: "/case-01-google-ads-campaign.jpg",
    logo: "/logo-google.png",
  },
  {
    title: "Creating a more coherent measurement ecosystem",
    company: "Google",
    tags: ["Measurement", "Complex systems", "Frameworks"],
    slug: "measurement",
    image: "/case-02-google-ads-measurement.jpg",
    imageAlt: "Google Ads measurement setup interface showing business outcome categories on an iPad",
    logo: "/logo-google.png",
  },
  {
    title: "The good after the bad: designing service recovery",
    company: "Sky",
    tags: ["Customer support", "Self-service", "Mobile"],
    slug: "service-app",
    image: "/case-03-sky-service-recovery.jpeg",
    logo: "/logo-sky.png",
  },
  {
    title: "What's on tonight: The invisible architecture of content discovery",
    company: "Sky",
    tags: ["Discovery", "Content systems"],
    slug: "content-discovery",
    image: "/case-04-sky-content-discovery.jpg",
    logo: "/logo-sky.png",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
