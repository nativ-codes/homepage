import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";

import Logo from "../ui/logo";
import Menu from "../ui/menu";

import useResponsiveTimeline from "../../utils/use-responsive-timeline";
import { getHeaderTimeline } from "../../utils/timelines";

function Header({}) {
  useResponsiveTimeline({
    screenTimelineFn: getHeaderTimeline,
  });

  return (
    <section
      className="bg-dark h-screen w-screen header-section text-white flex justify-center"
      id="home"
    >
      <div className="absolute">
        <Menu theme="white" />
      </div>
      <Logo isPrimary />
      <div className="absolute px-2 font-bold text-base bottom-8">
        Web & Mobile App Development
      </div>
    </section>
  );
}

export default Header;
