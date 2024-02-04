import { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap/dist/gsap";

import Menu from "../ui/menu";

import useResponsiveTimeline from "../../utils/use-responsive-timeline";
import {
  getWorkLargeScreenTimeline,
  getWorkLeftSmallScreenTimeline,
  getWorkRightSmallScreenTimeline,
} from "../../utils/timelines";

const googlePlayListra =
  "https://play.google.com/store/apps/details?id=com.listra";
const appStoreListra =
  "https://apps.apple.com/ro/app/listra-shopping-list-notes/id6445855837";

function Work({}) {
  useResponsiveTimeline({
    largeScreenTimelineFn: getWorkLargeScreenTimeline,
    smallScreenTimelineFn: [
      getWorkLeftSmallScreenTimeline,
      getWorkRightSmallScreenTimeline,
    ],
  });

  return (
    <section
      className="work-section flex lg:h-screen flex-col lg:flex-row"
      id="work"
    >
      <div className="work-section-left bg-white relative flex justify-center items-center h-screen w-full lg:w-2/4">
        <div className="font-[LemonMilk] text-dark text-5xl tracking-wider">
          WORK
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <Menu theme="dark" />
        </div>
      </div>
      <div className="work-section-right relative bg-white p-[56px] lg:p-[96px] w-full h-screen lg:w-2/4">
        <div
          className="absolute inset-0 flex items-center justify-center flex-col"
          id="sprite-listra"
        >
          <h1 className="text-dark text-2xl font-bold tracking-wider mb-8">
            Listra: Shopping list & notes
          </h1>
          <div id="work-listra" className="align-center" />
        </div>
        <div
          className="absolute inset-0 opacity-0 flex items-center justify-center flex-col"
          id="download-listra"
        >
          <Image
            width="180"
            height="180"
            alt="Listra logo"
            src="/assets/images/projects/listra/listra-logo.png"
          />
          <div className="flex flex-row mt-10">
            <a
              rel="noreferrer"
              target="_blank"
              href={appStoreListra}
              className="cursor-pointer mr-4"
            >
              <Image
                width="150"
                height="44"
                alt="App store logo"
                src="/assets/images/projects/app-store.png"
              />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href={googlePlayListra}
              className="cursor-pointer"
            >
              <Image
                width="150"
                height="44"
                alt="Google play logo"
                src="/assets/images/projects/google-play.png"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;

// https://codeshack.io/images-sprite-sheet-generator/
