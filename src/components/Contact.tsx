import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

interface ImageClipBoxProps {
  src: string;
  clipClass: string;
}

const ImageClipBox: React.FC<ImageClipBoxProps> = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} alt="" /> {/* Added alt attribute for accessibility */}
  </div>
);

const Contact: React.FC = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/contact-1.png"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="/img/contact-2.webp"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/swordman-partial.png"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="/img/swordsman.png"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Join Hacker Rank Campus Crew
          </p>

          <AnimatedTitle
  title="j<b>o</b>in the <br /> re<b>v</b>olution of <br /> t<b>e</b>ch "
  containerClass="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
/>


          <Button
            id="contact-us-btn" // Added id prop as required by Button component
            title="contact us"
            containerClass="mt-10 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
