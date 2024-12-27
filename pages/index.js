import React from "react";
import localFont from "next/font/local";
import Head from "next/head";
import Hero from "@/components/Hero";
import Schedule from "@/components/Schedule";
import Accommodations from "@/components/Accommodations";
import Travel from "@/components/Travel";
import Images from "@/components/Images";
import Nav from "@/components/Nav";
import { useInView } from "react-intersection-observer";

import Photo_01_Landscape from "@/assets/images/JPDSP_Photo_01_Landscape.webp";
import Photo_01_Portrait from "@/assets/images/JPDSP_Photo_01_Portrait.webp";
import Photo_02 from "@/assets/images/JPDSP_Photo_02.webp";
import Photo_03 from "@/assets/images/JPDSP_Photo_03.webp";
import Photo_04 from "@/assets/images/JPDSP_Photo_04.webp";
import Photo_05 from "@/assets/images/JPDSP_Photo_05.webp";
import Footer from "@/components/Footer";

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

const Colors = [
  {
    "--bg-color": "#F0E0B5",
    color: "#191919",
  },
  {
    "--bg-color": "#FBA127",
    color: "#513608",
  },
  {
    "--bg-color": "#605A26",
    color: "#D7E09B",
  },
  {
    "--bg-color": "#6F80B2",
    color: "#191919",
  },
];

export default function Home() {
  const { ref, inView } = useInView({
    threshold: 0,
  });

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
        className={`${brunswick.variable} ${alpina.variable} ${alpinaItalic.variable} relative`}
        style={{ backgroundColor: "inherit" }}
      >
        <Nav active={inView} />
        <div className="flex flex-col items-center justify-center transition-colors px-[10px] w-full">
          <Hero />
          <Images
            images={[
              { mobile: Photo_01_Portrait, desktop: Photo_01_Landscape },
            ]}
            from={Colors[0]}
            to={Colors[1]}
          />
          <div className="w-full" ref={ref}>
            <Schedule />
            <Images
              images={[Photo_02, Photo_03]}
              from={Colors[1]}
              to={Colors[2]}
            />
            <Accommodations />
            <Images
              images={[Photo_04, Photo_05]}
              from={Colors[2]}
              to={Colors[3]}
            />
            <Travel />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
