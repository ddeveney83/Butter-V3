// Owner requested temporary imagery for visual review. Not approved brand/client assets.
export const placeholderImages = {
  ribbon: {
    src: "/assets/placeholders/ribbon-concept.png",
    description: "Yellow paper ribbon concept",
  },
  laptop: {
    src: "/assets/placeholders/laptop-concept.png",
    description: "Fictional learning interface on a laptop",
  },
  workshop: {
    src: "/assets/placeholders/workshop-concept.png",
    description: "Illustrative workshop table and hands",
  },
  headphones: {
    src: "/assets/placeholders/headphones-concept.png",
    description: "Headphones and notebook still life",
  },
} as const;
export type PlaceholderImage = keyof typeof placeholderImages;
