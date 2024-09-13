import { useEffect, useState } from "react";
import { COLOR_MAP, getNextColor } from "@/constants";
import MonogramIcon from "@/assets/monogram.svg";

const Monogram = ({ className, color, onClick }) => {
  const [nextColor, setNextColor] = useState();
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    setEnabled(false);

    setNextColor(getNextColor(color));

    setTimeout(() => {
      setEnabled(true);
    }, 1000);
  }, [color]);

  const { bg } = COLOR_MAP[color];
  const { groupHoverBg } = COLOR_MAP[nextColor] || {};

  return (
    <button
      className={`relative group ${className}`}
      onClick={() => onClick(nextColor)}
      disabled={!enabled}
    >
      <div
        className={`absolute rounded-full top-3 left-3 ${bg} h-[62px] w-[124px] ${enabled && `group-hover:top-0 group-hover:left-0 group-hover:h-full group-hover:w-full ${groupHoverBg}`}`}
        style={{
          transition: "all 300ms cubic-bezier(0.5, 0, 0, 1)",
        }}
      />
      <MonogramIcon style={{ mixBlendMode: "overlay" }} />
    </button>
  );
};

export default Monogram;
