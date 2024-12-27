import { Hero as Content } from "@/content/hero";
import Title from "@/components/Title";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-[140px]">
      <Title lines={Content} />
    </div>
  );
};

export default Hero;
