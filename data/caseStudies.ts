export interface CardData {
  title: string;
  company: string;
  tags?: string[];
  slug?: string;
  image?: string;
  imageAlt?: string;
  logo?: string;
}

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
