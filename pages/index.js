import Monogram from "@/components/Monogram";
import { useEffect, useState } from "react";
import { COLOR_MAP, getRandomColor } from "@/constants";
import localFont from "next/font/local";
import Head from "next/head";

const brunswick = localFont({
  src: "./fonts/BrunswickGrotesque-Regular.otf",
  variable: "--font-brunswick",
  weight: "100 900",
});
const alpina = localFont({
  src: "./fonts/GT-Alpina-Standard-Regular.otf",
  variable: "--font-alpina",
  weight: "100 900",
});
const alpinaItalic = localFont({
  src: "./fonts/GT-Alpina-Standard-Regular-Italic.otf",
  variable: "--font-alpina-italic",
  weight: "100 900",
});

export default function Home({ initialColor }) {
  const [color, setColor] = useState(initialColor);

  useEffect(() => {
    if (!color) return;
    const { bg } = COLOR_MAP[color];
    document.body.classList.add("transition-colors", bg);

    return () => {
      document.body.classList.remove(bg);
    };
  }, [color]);

  const alpinaClasses = `font-alpina-italic italic lowercase`;
  const { text, bg } = COLOR_MAP[color];

  return (
    <>
      <Head>
        <title>David & Jacqueline</title>
        <meta property="og:title" content="David & Jacqueline" key="title" />
        <meta
          property="og:image"
          content="https://davidandjac.netlify.app/seo.png"
        />
      </Head>
      <div
        className={`${brunswick.variable} ${alpina.variable} ${alpinaItalic.variable} relative w-full min-h-full ${bg} flex flex-col items-center justify-center transition-colors py-10`}
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
          <span>David Shatan-Pardo</span>
          <span>
            <span className={alpinaClasses}>are</span> getting married
          </span>
          <br />
          <span>Join us the weekend</span>
          <span>
            <span className={alpinaClasses}>of</span> June 14
            <span className={alpinaClasses}>th</span> 2025
          </span>
          <span>
            <span className={alpinaClasses}>in</span> beautiful Hudson, NY
          </span>
          <br />
          <span>
            Details <span className={alpinaClasses}>to</span> come
          </span>
        </div>
        <div className={`${text} font-alpina absolute bottom-10  text-center`}>
          If you’re not able to make it, please let us know
          <br />
          as soon as possible to help us with planning!
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      initialColor: getRandomColor(),
    },
  };
}
