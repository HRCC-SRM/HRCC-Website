import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-6 sm:mb-8 mt-20 sm:mt-36 flex flex-col items-center gap-3 sm:gap-5 px-4">
        <p className="font-general text-xs sm:text-sm uppercase md:text-[10px]">
          Welcome to HRCC
        </p>

        <AnimatedTitle
  title="Qu<b>e</b>st t<b>o</b>gether <br /> B<b>u</b>ild t<b>h</b>e futur<b>e</b>"
  containerClass="mt-3 sm:mt-5 !text-black text-center text-4xl sm:text-6xl md:text-7xl"
/>

        <div className="about-subtext">
          <p>The journey starts here—your skills, now part of a greater mission</p>
          <p className="text-gray-500">
            Together we code, innovate, and build the future—step into a circle of creators and visionaries.
          </p>
        </div>
      </div>

      <div className="h-[50vh] sm:h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.png"
            alt="About"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
