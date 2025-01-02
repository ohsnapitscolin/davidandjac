import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Images = ({ images, to }) => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      if (!to) return;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: `top+=20% center`,
          end: `bottom-=20% center`,
          scrub: true,
          markers: false,
        },
      });
      tl.to(document.body, { ...to, duration: 1 });
    },
    { scope: containerRef },
  );

  return (
    <div className="py-[10px] w-full" ref={containerRef}>
      {images.length > 1 ? (
        <DoubleImage images={images} />
      ) : (
        <SingleImage images={images} />
      )}
    </div>
  );
};

const SingleImage = ({ images }) => {
  const { mobile, desktop } = images[0];
  return (
    <>
      <Image
        priority={true}
        placeholder="blur"
        className="w-full hidden md:block"
        src={desktop}
        alt=""
      />
      <Image
        priority={true}
        placeholder="blur"
        className="w-full block md:hidden"
        src={mobile}
        alt=""
      />
    </>
  );
};

const DoubleImage = ({ images }) => {
  return (
    <div className="w-full grid grid-cols-2 gap-[10px]">
      <Image
        priority={true}
        placeholder="blur"
        className="col-span-full md:col-span-1 w-full"
        src={images[0]}
        alt=""
      />
      <Image
        priority={true}
        placeholder="blur"
        className="col-span-full md:col-span-1 w-full"
        src={images[1]}
        alt=""
      />
    </div>
  );
};

export default Images;
