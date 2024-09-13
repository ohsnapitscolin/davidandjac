import { useEffect, useState } from "react";
import { COLOR_MAP, getNextColor } from "@/constants";
import MonogramIcon from "@/assets/monogram.svg";

const Monogram = ({ className, color, onClick }) => {
  const [nextColor, setNextColor] = useState();
  const [enabled, setEnabled] = useState();

  useEffect(() => {
    setEnabled(false);

    setNextColor(getNextColor(color));

    setTimeout(() => {
      setEnabled(true);
    }, 1000);
  }, [color]);

  const { text, bg } = COLOR_MAP[color];
  const { hoverText, hoverBg } = COLOR_MAP[nextColor] || {};

  console.log(`MONOGRAM ${color}`);

  return (
    <button
      className={`text-base rounded-full p-1 font-alpina hover:transition-colors ${text} ${bg} ${enabled && `${hoverText} ${hoverBg}`} ${className}`}
      onClick={() => onClick(nextColor)}
      disabled={!enabled}
    >
      <MonogramIcon style={{ mixBlendMode: "overlay" }} />
    </button>
  );
};

export default Monogram;
