import { Accommodations as Content } from "@/content/accommodations";
import Section from "@/components/Section";

const Accommodations = () => {
  return (
    <div id="accommodations">
      <Section {...Content} />
    </div>
  );
};

export default Accommodations;
