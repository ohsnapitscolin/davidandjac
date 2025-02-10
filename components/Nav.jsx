import { useState } from "react";

const Nav = ({ active }) => {
  return (
    <>
      <div className="hidden md:block" style={{ backgroundColor: "inherit" }}>
        <DesktopNav active={active} />
      </div>
      <div className="block md:hidden" style={{ backgroundColor: "inherit" }}>
        <MobileNav active={active} />
      </div>
    </>
  );
};

const MobileNav = ({ active }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`z-10 fixed top-0 ${active ? "h-[52px]" : "h-0"} overflow-hidden transition-height w-full flex justify-center`}
        style={{ backgroundColor: "inherit" }}
      >
        <div className="w-full h-full flex justify-between items-center max-w-[1440px] px-5">
          <div>
            <a href="#" className="font-alpina-italic italic">
              David and Jacqueline
            </a>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="font-alpina-italic italic"
          >
            Menu
          </button>
        </div>
      </div>
      <div
        className={`z-20 bg-black-bg fixed top-0 h-screen w-full ${open ? "left-0" : "left-full"} transition-left`}
      >
        <div className="text-black-text h-full w-full flex items-center justify-center relative">
          <button
            onClick={() => setOpen(false)}
            className="absolute right-5 top-[14px] font-alpina-italic italic"
          >
            Close
          </button>
          <div className="flex flex-col gap-y-6 items-center font-brunswick uppercase text-xl">
            <a onClick={() => setOpen(false)} href="#schedule">
              Schedule
            </a>
            <a onClick={() => setOpen(false)} href="#accommodations">
              Accommodations
            </a>
            <a onClick={() => setOpen(false)} href="#travel">
              Travel
            </a>
            <a
              href="https://www.zola.com/registry/davidandjacqueline2025"
              rel="noopener noreferrer"
              target="__blank"
            >
              Registry
            </a>
            <a
                href="https://www.zola.com/wedding/davidandjacqueline2025/rsvp"
                rel="noopener noreferrer"
                target="__blank"
            >
              RSVP
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

const DesktopNav = ({ active }) => {
  return (
    <div
      className={`z-10 fixed top-0 ${active ? "h-[52px]" : "h-0"} overflow-hidden transition-height w-full flex justify-center`}
      style={{ backgroundColor: "inherit" }}
    >
      <div className="w-full h-full grid grid-cols-12 gap-[10px] w-full px-5">
        <div className="col-span-6 flex items-center">
          <a href="#" className="font-alpina-italic italic">
            David and Jacqueline
          </a>
        </div>
        <div className="flex gap-x-5 col-span-6 col-start-7 items-center">
          <a href="#schedule" className="font-alpina-italic italic">
            Schedule
          </a>
          <a href="#accommodations" className="font-alpina-italic italic">
            Accommodations
          </a>
          <a href="#travel" className="font-alpina-italic italic">
            Travel
          </a>
          <a
            href="https://www.zola.com/registry/davidandjacqueline2025"
            target="__blank"
            rel="noopener noreferrer"
            className="font-alpina-italic italic"
          >
            Registry
          </a>
          <a
              href="https://www.zola.com/wedding/davidandjacqueline2025/rsvp"
              target="__blank"
              rel="noopener noreferrer"
              className="font-alpina-italic italic"
          >
            RSVP
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
