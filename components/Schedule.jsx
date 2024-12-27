import { Schedule as Content } from "@/content/schedule";
import Section from "@/components/Section";

const Schedule = () => {
  return (
    <div id="schedule">
      <Section {...Content} />
    </div>
  );
};

export default Schedule;
