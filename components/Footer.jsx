import Photo_06_Landscape from "@/assets/images/JPDSP_Photo_06_Landscape.webp";
import Photo_06_Portrait from "@/assets/images/JPDSP_Photo_06_Portrait.webp";
import Header_Seeya from "@/assets/images/JPDSP_Header_Seeya.png";
import Images from "@/components/Images";
import Section from "@/components/Section";

const Footer = () => {
  return (
    <div className={"relative"}>
      <Images
        images={[{ mobile: Photo_06_Portrait, desktop: Photo_06_Landscape }]}
      />
      <div className="absolute top-[-40px] w-full flex justify-center">
        <Section image={Header_Seeya} />
      </div>
    </div>
  );
};

export default Footer;
