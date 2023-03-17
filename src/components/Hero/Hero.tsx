type Props = {};
import { Bungee_Inline, Orbitron } from "@next/font/google";
import Image from "next/image";
import { BsDiscord } from "react-icons/bs";
import HeroImg from "/public/Images/HeroImage.svg";
const orbitron = Orbitron({ subsets: ["latin"] });
const bungee = Bungee_Inline({ subsets: ["latin"], weight: "400" });

const Hero = (props: Props) => {
  return (
    <div className="max-w-7xl m-auto  min-h-[60vh] flex justify-between items-center p-4 flex-col sm:flex-row my-12 gap-10">
      <div
        className={`content ${orbitron.className} text-[58px] leading-[58px] md:text-[60px] md:leading-[60px] lg:text-[82px] text-7xl lg:leading-[82px] font-extrabold text-teal-500 `}
      >
        <div className="innerContent flex flex-col items-start ">
          Welcome <br />
          To <br />
          <span className="text-white">
            {" "}
            Hack-a- <br /> preneur
          </span>
          <button
            className="font-sans flex items-center justify-center gap-2 bg-[#5c35d156] w-full text-white text-lg font-medium
           rounded-full px-3 py-1 mt-8 hover:shadow-md hover:shadow-[#9179da56] active:shadow-none"
          >
            <BsDiscord />
            Join Discord{" "}
          </button>
        </div>
      </div>
      <div className="image   flex justify-center text-center bg-logoBg bg-cover">
        <Image src={HeroImg} alt="hero_image" />
      </div>
    </div>
  );
};

export default Hero;
