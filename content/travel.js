import JPDSP_Header_Travel from "@/assets/images/JPDSP_Header_Travel.png";

export const Travel = {
  color: "bg-blue-bg",
  image: JPDSP_Header_Travel,
  sections: [
    {
      items: [
        {
          title: [[{ style: "alpina", value: "by" }, { value: " Plane" }]],
          copy: [
            "The closest major airport is Albany, which is about a 45 minute drive to Hudson.",
            "The NYC airports – LaGuardia, JFK, and Newark – also have many flight options. You can take a train or car up from the city from any of these.",
          ],
        },
        {
          title: [[{ style: "alpina", value: "by" }, { value: " Train" }]],
          copy: [
            "From NYC, you can take the 2 hour regional Amtrak line up to the Hudson Amtrak station.",
            "From Albany, the Amtrak is a quick 20 minutes.",
          ],
        },
        {
          title: [[{ style: "alpina", value: "by" }, { value: " Car" }]],
          copy: "From NYC, Hudson is a little over a 2 hour drive. From Albany, a 45 minute drive.",
        },
      ],
    },
  ],
};
