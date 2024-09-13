export const COLOR_MAP = {
  orange: {
    text: "text-orange-text",
    bg: "bg-orange-bg",
    hoverText: "md:hover:text-orange-text",
    hoverBg: "md:hover:bg-orange-bg",
  },
  blue: {
    text: "text-blue-text",
    bg: "bg-blue-bg",
    hoverText: "md:hover:text-blue-text",
    hoverBg: "md:hover:bg-blue-bg",
  },
  red: {
    text: "text-red-text",
    bg: "bg-red-bg",
    hoverText: "md:hover:text-red-text",
    hoverBg: "md:hover:bg-red-bg",
  },
  green: {
    text: "text-green-text",
    bg: "bg-green-bg",
    hoverText: "md:hover:text-green-text",
    hoverBg: "md:hover:bg-green-bg",
  },
  tan: {
    text: "text-tan-text",
    bg: "bg-tan-bg",
    hoverText: "md:hover:text-tan-text",
    hoverBg: "md:hover:bg-tan-bg",
  },
  brown: {
    text: "text-brown-text",
    bg: "bg-brown-bg",
    hoverText: "md:hover:text-brown-text",
    hoverBg: "md:hover:zbg-brown-bg",
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
