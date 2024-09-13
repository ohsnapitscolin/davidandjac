export const COLOR_MAP = {
  orange: {
    text: "text-orange-text",
    bg: "bg-orange-bg",
    hoverText: "hover:text-orange-text",
    hoverBg: "hover:bg-orange-bg",
  },
  blue: {
    text: "text-blue-text",
    bg: "bg-blue-bg",
    hoverText: "hover:text-blue-text",
    hoverBg: "hover:bg-blue-bg",
  },
  red: {
    text: "text-red-text",
    bg: "bg-red-bg",
    hoverText: "hover:text-red-text",
    hoverBg: "hover:bg-red-bg",
  },
  green: {
    text: "text-green-text",
    bg: "bg-green-bg",
    hoverText: "hover:text-green-text",
    hoverBg: "hover:bg-green-bg",
  },
  tan: {
    text: "text-tan-text",
    bg: "bg-tan-bg",
    hoverText: "hover:text-tan-text",
    hoverBg: "hover:bg-tan-bg",
  },
  brown: {
    text: "text-brown-text",
    bg: "bg-brown-bg",
    hoverText: "hover:text-brown-text",
    hoverBg: "hover:bg-brown-bg",
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
