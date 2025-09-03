import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

interface BentoTiltProps {
  children: React.ReactNode;
  className?: string;
}

interface BentoCardProps {
  src: string;
  title: React.ReactNode;
  description?: string;
  isapplynow?: boolean;
}

interface CursorPosition {
  x: number;
  y: number;
}

export const BentoTilt: React.FC<BentoTiltProps> = ({
  children,
  className = "",
}) => {
  const [transformStyle, setTransformStyle] = useState<string>("");
  const itemRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard: React.FC<BentoCardProps> = ({
  src,
  title,
  description,
  isapplynow,
}) => {
  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({
    x: 0,
    y: 0,
  });
  const [hoverOpacity, setHoverOpacity] = useState<number>(0);
  const hoverButtonRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  // Determine video classes based on the source
  const getVideoClasses = () => {
    if (src.includes('feature-2')) {
      return "absolute inset-0 w-auto h-full min-w-full min-h-full object-cover scale-[2]";
    }
    if (src.includes('feature-3')) {
      return "absolute inset-0 w-full h-auto min-w-full min-h-full object-cover scale-[2]";
    }
    if (src.includes('feature-4')) {
      return "absolute inset-0 w-full h-auto min-w-full min-h-full object-cover scale-[2]";
    }
    return "absolute inset-0 w-full h-full object-cover scale-[2]";
  };

  return (
    <div className="relative size-full">
      {src.endsWith('.gif') ? (
        <img
          src={src}
          alt="Feature"
          className={getVideoClasses()}
        />
      ) : (
        <video
          src={src}
          loop
          muted
          autoPlay
          className={getVideoClasses()}
        />
      )}
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-white">
        <div>
          <h1 className="bento-title special-font text-white font-bold drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)] stroke-black stroke-2">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base text-white font-semibold drop-shadow-[1px_1px_3px_rgba(0,0,0,0.9)]">{description}</p>
          )}
        </div>

        {isapplynow && (
  <div
    ref={hoverButtonRef}
    onMouseMove={handleMouseMove}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-[#05C770]"
  >
    <div
      className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
      style={{
        opacity: hoverOpacity,
        background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #05C77088, #00000026)`,
      }}
    />
    <TiLocationArrow className="relative z-20" />
    <p className="relative z-20">Apply Now</p>
  </div>
)}

      </div>
    </div>
  );
};

const Features: React.FC = () => (
  <section className="relative bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-16 sm:py-24 md:py-32">
    

      </div>

      {/* <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
  <BentoCard
    src="videos/feature-1.mp4"
    title={
      <>
        <b>Hacker Rank</b> Campus Crew
      </>
    }
    description="We are the first official HackerRank Student Chapter in India, fostering a
  community of innovators, coders, and problem-solvers. Our mission is to
  empower students with technical skills, collaborative opportunities, and
  real-world exposure to prepare for the challenges of tomorrow."
    
  />
</BentoTilt> */}


      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="videos/feature-2.gif"
            title={
              <>
                Tech<b>n</b>ical
              </>
            }
            description="Dedicated to advancing technical skills in coding, AI, and hardware through innovation and collaboration."
            isapplynow
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1">
          <BentoCard
            src="videos/feature-3.gif"
            title={
              <>
                c<b>rea</b>tive
              </>
            }
            description="Where imagination meets design, producing visuals, content, and media that inspire, engage, and connect audiences."
            isapplynow
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 md:col-span-1">
          <BentoCard
            src="videos/feature-4.gif"
            title={
              <>
                c<b>orpor</b>ate
              </>
            }
            description="Building partnerships, managing events, and ensuring smooth operations through leadership, strategy, and collaboration."
            isapplynow
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <div className="flex size-full flex-col justify-between bg-[#05C770] p-5">
            <h1 className="bento-title special-font max-w-64 text-black">
              r<b>ecruit</b>ments o<b>pe</b>n.
            </h1>

            <TiLocationArrow className="m-5 scale-[5] self-end" />
          </div>
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <iframe
            src="public/videos/RECRUITMENTS OPEN - HRCC.mp4"
            title="HRCC SRM Video"
            className="size-full object-cover object-center"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;
