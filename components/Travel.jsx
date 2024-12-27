import { Travel as Content } from "@/content/travel";
import Section from "@/components/Section";

const Travel = () => {
  return (
    <div id="travel">
      <Section {...Content}  />
    </div>
  );
};

export default Travel;
