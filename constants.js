export const COLOR_MAP = {
  orange: {
    text: "text-orange-text",
    bg: "bg-orange-bg",
    hoverText: "md:hover:text-orange-text",
    hoverBg: "md:hover:bg-orange-bg",
    groupHoverBg: "md:group-hover:bg-orange-bg",
  },
  blue: {
    text: "text-blue-text",
    bg: "bg-blue-bg",
    hoverText: "md:hover:text-blue-text",
    hoverBg: "md:hover:bg-blue-bg",
    groupHoverBg: "md:group-hover:bg-blue-bg",
  },
  red: {
    text: "text-red-text",
    bg: "bg-red-bg",
    hoverText: "md:hover:text-red-text",
    hoverBg: "md:hover:bg-red-bg",
    groupHoverBg: "md:group-hover:bg-red-bg",
  },
  green: {
    text: "text-green-text",
    bg: "bg-green-bg",
    hoverText: "md:hover:text-green-text",
    hoverBg: "md:hover:bg-green-bg",
    groupHoverBg: "md:group-hover:bg-green-bg",
  },
  tan: {
    text: "text-tan-text",
    bg: "bg-tan-bg",
    hoverText: "md:hover:text-tan-text",
    hoverBg: "md:hover:bg-tan-bg",
    groupHoverBg: "md:group-hover:bg-tan-bg",
  },
  brown: {
    text: "text-brown-text",
    bg: "bg-brown-bg",
    hoverText: "md:hover:text-brown-text",
    hoverBg: "md:hover:bg-brown-bg",
    groupHoverBg: "md:group-hover:bg-brown-bg",
  },
};

export const COLORS = Object.keys(COLOR_MAP);

export const getNextColor = (currentColor) => {
  const color = COLORS[Math.floor(Math.random() * COLORS.length)];
  if (color === currentColor) {
    return getNextColor(currentColor);
  } else {
    return color;
  }
};
