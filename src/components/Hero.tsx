import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import { useEffect, useState } from "react";
// import { useEffect, useRef, useState } from "react";

import Button from "./Button";
// import { VideoPreview } from "./VideoPreview";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const [currentIndex] = useState<number>(1);
  // const [currentIndex, setCurrentIndex] = useState<number>(1);
  // const [hasClicked, setHasClicked] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadedVideos, setLoadedVideos] = useState<number>(0);

  const totalVideos: number = 1;
  // const nextVdRef = useRef<HTMLVideoElement | null>(null);

  const handleVideoLoad = (): void => {
    setLoadedVideos((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedVideos === totalVideos - 1) {
      setLoading(false);
    }
  }, [loadedVideos]);

  // const handleMiniVdClick = (): void => {
  //   setHasClicked(true);
  //   setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
  // };

  // useGSAP(
  //   () => {
  //     if (hasClicked && nextVdRef.current) {
  //       gsap.set("#next-video", { visibility: "visible" });
  //       gsap.to("#next-video", {
  //         transformOrigin: "center center",
  //         scale: 1,
  //         width: "100%",
  //         height: "100%",
  //         duration: 1,
  //         ease: "power1.inOut",
  //         //@ts-expect-error this is currect
  //         onStart: () => nextVdRef.current?.play(),
  //       });
  //       gsap.from("#current-video", {
  //         transformOrigin: "center center",
  //         scale: 0,
  //         duration: 1.5,
  //         ease: "power1.inOut",
  //       });
  //     }
  //   },
  //   {
  //     dependencies: [currentIndex],
  //     revertOnUpdate: true,
  //   }
  // );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  const getVideoSrc = (index: number): string => `videos/hero-${index}.mp4`;

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {loading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden ">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}

      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          {/* Center Clickable Video Loop - Commented Out */}
          {/* <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <VideoPreview>
              <div
                onClick={handleMiniVdClick}
                className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100 touch-manipulation"
              >
                <video
                  ref={nextVdRef}
                  src={getVideoSrc((currentIndex % totalVideos) + 1)}
                  loop
                  muted
                  id="current-video"
                  className="size-64 origin-center scale-150 object-cover object-center"
                  onLoadedData={handleVideoLoad}
                />
              </div>
            </VideoPreview>
          </div> */}

          {/* <video
            ref={nextVdRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoLoad}
          /> */} {/* video loop for future events and plans */}
          <video
            src={getVideoSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex
            )}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black/40 z-20"></div>
        </div>

        <h1 className="special-font text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-[8rem] font-black absolute right-5 bottom-5 z-40 text-blue-100" style={{ textTransform: 'none', fontVariant: 'normal', fontFeatureSettings: '"case" off' }}>
          Campus Crew
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-16 px-4 sm:mt-24 sm:px-10">
            <h1 className="special-font text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-[8rem] font-black text-blue-100" style={{ textTransform: 'none', fontVariant: 'normal', fontFeatureSettings: '"case" off' }}>
              HackerRank
            </h1>

            <p className="mb-4 max-w-56 sm:max-w-64 text-sm sm:text-base font-robert-regular text-blue-100">
              Ranked by <b>Skill</b> <br /> Powered by <b>Intelligence</b>.
            </p>

            <Button
              id="watch-trailer"
              title="Watch trailer"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-gradient-to-r from-green-500 to-lime-200 flex-center gap-1 text-sm sm:text-base"
            />
          </div>
        </div>
      </div>

      <h1 className="special-font text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-[8rem] font-black absolute bottom-5 right-5 text-black" style={{ textTransform: 'none', fontVariant: 'normal', fontFeatureSettings: '"case" off' }}>
        Campus C<b>rew</b>
      </h1>
    </div>
  );
};

export default Hero;
