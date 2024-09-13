import Monogram from "@/components/Monogram";
import { useEffect, useState } from "react";
import { COLOR_MAP, getNextColor } from "@/constants";

export default function Home() {
  const [color, setColor] = useState();

  useEffect(() => {
    if (!color) return;
    const { bg } = COLOR_MAP[color];
    document.body.classList.add(bg);

    return () => {
      document.body.classList.remove(bg);
    };
  }, [color]);

  useEffect(() => {
    setColor(getNextColor());
  }, []);

  if (!color) return;

  const alpinaClasses = `font-alpina-italic italic lowercase`;
  const { text, bg } = COLOR_MAP[color];
  console.log(`Home ${JSON.stringify({ color, text, bg })}`);

  return (
    <div
      className={`relative w-full min-h-full ${bg} flex flex-col items-center justify-center transition-colors py-10`}
    >
      <div
        className={`shrink-0 relative pb-32 ${text} text-center text-2xl lg:text-3xl uppercase flex flex-col font-brunswick`}
      >
        <div className={"h-32"}>
          <Monogram color={color} onClick={setColor} />
        </div>

        <span>
          Jacqueline Pifer <span className={alpinaClasses}>and</span>
        </span>
        <span>DAVID SHATAN-PARDO</span>
        <span>
          <span className={alpinaClasses}>are</span> GETTING MARRIED
        </span>
        <br />
        <span>JOIN US THE WEEKEND</span>
        <span>
          <span className={alpinaClasses}>of</span> JUNE 14
          <span className={alpinaClasses}>th</span> 2025
        </span>
        <span>
          <span className={alpinaClasses}>in</span> BEAUTIFUL HUDSON, NY
        </span>
        <br />
        <span>
          DETAILS <span className={alpinaClasses}>to</span> come
        </span>
      </div>
      <div className={`${text} font-alpina absolute bottom-10  text-center`}>
        If you’re not able to make it, please let us know
        <br />
        as soon as possible to help us with planning!
      </div>
    </div>
  );
}
