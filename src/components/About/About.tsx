type Props = {};
import Image from "next/image";
import bgLogo from "public/Images/logo.svg";
import AboutImg from "/public/Images/AboutImage.svg";

const About = (props: Props) => {
  return (
    <>
      <div
        className="max-w-7xl m-auto  min-h-[60vh] flex justify-between items-center p-4 flex-col md:flex-row-reverse my-12 gap-10"
        id="about"
      >
        <div className={`content  max-w-[430px]`}>
          <span className="bg-gradient-to-tr from-purple-500 font-medium text-2xl text-transparent to-teal-500 bg-clip-text">
            About
          </span>
          <h2 className="text-4xl text-white mt-3"> InnovateX</h2>
          <p className="text-gray-500 leading-8 text-lg mt-7">
            InnovateX is one of our massively successful flagship events that
            focuses on combining the strengths of finance, economics and
            technology to bring creative solutions combating the lack of
            knowledge in these fields towards an improved future that benefits
            all.
          </p>
        </div>
        <div className="image max-w-[500px]  flex justify-center text-center  bg-cover contrast-[1.1]">
          <Image
            src={bgLogo}
            alt=""
            className="absolute w-full h-full opacity-10 scale-125"
          />
          <Image src={AboutImg} alt="abt-img" className="z-10" />
        </div>
      </div>

      {/* //-------------------------------------------------------------- */}

      <div className="max-w-7xl m-auto  min-h-[60vh] flex justify-between items-center p-4 flex-col md:flex-row my-12 gap-10">
        <div className={`content  max-w-[430px]`}>
          <span className="bg-gradient-to-tr from-purple-500 font-medium text-2xl text-transparent to-teal-500 bg-clip-text">
            About
          </span>
          <h2 className="text-4xl text-white mt-3">Hack-a-Preneur</h2>
          <p className="text-gray-500 leading-8 text-lg mt-7">
            Hack-a-preneur acts as a powerful platform for college students to
            converge their ideas relating to entrepreneurship and coding to
            arrive at workable solutions mapped onto the practical mechanisation
            of our society. This 36-hour conquest returns this year with a bang
            to ensure which syntax gets in tandem with concepts of
            entrepreneurship as per the given problem statements.
          </p>
        </div>
        <div className="image max-w-[500px]  grid grid-cols-2 gap-4 grid-rows-2 justify-center text-center bg-logoBg bg-cover">
          <div>
            <Image
              src={AboutImg}
              alt="abt-img"
              className=" bg-gray-200 rounded-lg overflow-hidden"
            />
          </div>
          <div className="row-span-2 bg-gray-200 rounded-lg overflow-hidden ">
            <Image
              src={AboutImg}
              alt="abt-img"
              className="object-cover h-full"
            />
          </div>
          <div>
            <Image
              src={AboutImg}
              alt="abt-img"
              className=" bg-gray-200 rounded-lg overflow-hidden"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
