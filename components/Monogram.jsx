import { useEffect, useState } from "react";
import { COLOR_MAP, getNextColor } from "@/constants";

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
      className={`relative p-3 group ${className}`}
      onClick={() => onClick(nextColor)}
      disabled={!enabled}
    >
      <div
        className={`transition-all md:duration-300 md:ease-monogram-bezier absolute rounded-full top-3 left-3 ${bg} h-[62px] w-[124px] ${enabled && `md:group-hover:top-0 md:group-hover:left-0 md:group-hover:h-full md:group-hover:w-full ${groupHoverBg}`}`}
      />
      <img
        className="mt-[2px]"
        alt={""}
        width={124}
        height={62}
        src={"/monogram.png"}
        style={{ mixBlendMode: "overlay" }}
      />
    </button>
  );
};

export default Monogram;
