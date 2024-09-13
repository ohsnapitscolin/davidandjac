import dynamic from "next/dynamic";
import localFont from "next/font/local";

// Dynamically import the Home component with SSR disabled
const Home = dynamic(() => import("@/components/Home"), { ssr: false });

const brunswick = localFont({
  src: "./fonts/BrunswickGrotesque-Regular.otf",
  variable: "--font-brunswick",
  weight: "100 900",
});
const alpina = localFont({
  src: "./fonts/GT-Alpina-Condensed-Regular.otf",
  variable: "--font-alpina",
  weight: "100 900",
});
const alpinaItalic = localFont({
  src: "./fonts/GT-Alpina-Condensed-Regular-Italic.otf",
  variable: "--font-alpina-italic",
  weight: "100 900",
});

export default function Page() {
  return (
    <div
      className={`${brunswick.variable} ${alpina.variable} ${alpinaItalic.variable} w-full h-full`}
    >
      <Home />
    </div>
  );
}
