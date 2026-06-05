import Intro from "./Intro";
import P from "./P";
import Hr from "./Hr";
import PullQuote from "./PullQuote";
import Media from "./Media";

// Passed to MDXRemote as the components prop.
// Keys that match HTML tag names (p, hr) override the default element.
// PascalCase keys match custom JSX components used in .mdx files.
export const mdxComponents = {
  p: P,
  hr: Hr,
  Intro,
  PullQuote,
  Media,
};
