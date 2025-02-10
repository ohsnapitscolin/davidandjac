import Title from "@/components/Title";
import Circle from "@/components/Circle";
import Image from "next/image";
import { useMemo } from "react";

const Section = ({ sections, forward, afterward, image }) => {
  return (
    <div
      className={`w-full flex justify-center px-[10px] md:px-[110px] lg:px-0 pt-10 lg:pt-0 pb-[100px] lg:pb-[120px]`}
    >
      <div className={"grid grid-cols-12 gap-[10px] w-full max-w-[1440px]"}>
        <SectionImage image={image} center={!sections} />
        {sections && (
          <div className="col-span-full lg:col-start-7 lg:col-span-5 gap-[10px] lg:pt-[120px]">
            {!!forward && (
              <>
                <p className="text-lg text-center lg:text-left font-alpina-italic italic">
                  {forward}
                </p>
                <Divider />
              </>
            )}
            {sections.map((section, i) => (
              <div key={i}>
                {section.subhead && (
                  <span className="block text-lg font-alpina-italic italic mb-5">
                    {section.subhead}
                  </span>
                )}

                {section.items.map((item, i) => (
                  <Item
                    key={i}
                    item={item}
                    last={section.items.length - 1 === i}
                  />
                ))}
                {i < sections.length - 1 && <Divider />}
              </div>
            ))}
            {!!afterward && (
              <>
                <Divider />
                <div className="flex flex-col gap-3">
                  {afterward.map((line, i) => (
                    <p
                      key={i}
                      className="text-center lg:text-left text-lg font-alpina-italic italic"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const Item = ({ item, last }) => {
  return (
    <div className={last ? "mb-0" : "mb-12"}>
      <Title lines={item.title} />
      <Copy copy={item.copy} />

      {(item.subtext || item.links) && (
        <div className="flex flex-wrap items-center gap-3 mt-2 whitespace-nowrap">
          <Subtext subtext={item.subtext} separator={!!item.links?.length} />
          <Links links={item.links} />
        </div>
      )}
    </div>
  );
};

const SectionImage = ({ image, center }) => {
  return (
    <div
      className={`col-span-full relative ${!center ? "lg:col-start-2" : "lg:col-start-5"} lg:col-span-4 px-[30px] md:px-[100px] lg:px-10 lg:pt-20 mb-10 lg:mb-0`}
    >
      <div className={`${!center && "lg:sticky"} lg:top-5 left-0`}>
        <Image src={image} alt="" />
      </div>
    </div>
  );
};

const Divider = () => (
  <div className="w-full flex justify-center lg:justify-start py-10">
    <Circle size={12} />
  </div>
);

const Copy = ({ copy }) => {
  const lines = useMemo(() => (Array.isArray(copy) ? copy : [copy]), [copy]);

  return (
    <div>
      {lines.map((line, index) => (
        <p
          dangerouslySetInnerHTML={{ __html: line }}
          key={index}
          className="whitespace-pre-wrap font-alpina mt-2"
        />
      ))}
    </div>
  );
};

const Links = ({ links }) => {
  if (!links && !links.length) return null;
  return (
    <div className="flex gap-3">
      {links.map((l, i) => (
        <div key={i}>
          <a
            className="font-alpina-italic italic text-sm"
            href={l.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {l.value}
          </a>
          <div
            className="w-full h-[1px]"
            style={{ backgroundColor: "currentColor", opacity: 0.3 }}
          />
        </div>
      ))}
    </div>
  );
};

const Subtext = ({ subtext, separator }) => {
  if (!subtext) return;
  const { value, style } = subtext;

  return (
    <>
      {style === "full" ? (
        <span
          className="rounded px-2 flex items-center py-[2px] whitespace-nowrap"
          style={{ backgroundColor: "currentcolor" }}
        >
          <span
            className="text-sm font-alpina-italic italic"
            style={{ color: "var(--bg-color)" }}
          >
            {value}
          </span>
        </span>
      ) : (
        <span className="font-alpina-italic italic text-sm">{value}</span>
      )}
      {separator && <Circle size={3} />}
    </>
  );
};

export default Section;
