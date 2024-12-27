import "@/styles/globals.css";
import { LayoutContextProvider } from "@/context/LayoutContext";

export default function App({ Component, pageProps }) {
  return (
    <LayoutContextProvider>
      <Component {...pageProps} />
    </LayoutContextProvider>
  );
}
