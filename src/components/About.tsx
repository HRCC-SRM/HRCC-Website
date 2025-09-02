import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    // Set initial state for images
    gsap.set(".about-image-1", { opacity: 1 });
    gsap.set(".about-image-2", { opacity: 0 });

    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#pin-container",
        start: "center center",
        end: "+=200%",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    // Animate the mask expansion
    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });

    // Separate timeline for smooth image crossfade
    gsap.timeline({
      scrollTrigger: {
        trigger: "#pin-container",
        start: "center center",
        end: "+=100%",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(".about-image-1", { opacity: 1 - progress, ease: "power1.inOut" });
          gsap.to(".about-image-2", { opacity: progress, ease: "power1.inOut" });
        },
      },
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-4 sm:mb-8 mt-12 sm:mt-20 md:mt-36 flex flex-col items-center gap-2 sm:gap-3 md:gap-5 px-3 sm:px-4">
        <p className="font-general text-xs sm:text-sm uppercase md:text-[10px]">
          Welcome to HRCC
        </p>

        <AnimatedTitle
  title="Qu<b>e</b>st t<b>o</b>gether <br /> B<b>u</b>ild t<b>h</b>e futur<b>e</b>"
  containerClass="mt-2 sm:mt-3 md:mt-5 !text-black text-center text-2xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight"
/>

        <div className="about-subtext text-center max-w-xs sm:max-w-md md:max-w-lg">
          <p className="text-sm sm:text-base">The journey starts here—your skills, now part of a greater mission</p>
          <p className="text-gray-500 text-xs sm:text-sm md:text-base">
            Together we code, innovate, and build the future—step into a circle of creators and visionaries.
          </p>
        </div>
      </div>

      <div id="pin-container" className="relative z-10 h-dvh w-screen">
        <div className="h-full w-full flex items-center justify-center overflow-hidden" id="clip">
          <div className="mask-clip-path about-image">
            <img
              src="img/about-2.jpg"
              alt="About"
              className="about-image-1 absolute left-0 top-0 size-full object-contain sm:object-cover object-center"
            />
            <img
              src="img/about.jpg"
              alt="About"
              className="about-image-2 absolute left-0 top-0 size-full object-contain sm:object-cover object-center opacity-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
