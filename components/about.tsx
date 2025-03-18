"use client";
import Image from "next/image";
import profile from "@/public/profile-pic.jpeg";
import { useActiveSectionContext } from "@/context/active-section-context";

const About = () => {
  const { sectionRefs } = useActiveSectionContext();

  return (
    <div
      className="flex flex-col md:flex-row dark:text-white text-[#212529] pt-36 items-stretch"
      ref={(el) => (sectionRefs.current["ABOUT"] = el)}
      id="about"
    >
      {/* Left Side: Text Content with Vertical Line */}
      <div className="md:w-1/2 md:text-left flex flex-col justify-center">
        <h4 className="text-base font-thin uppercase mb-8 text-yellow tracking-[3px]">
          - Bio
        </h4>
        <h1 className="text-4xl md:text-6xl font-bold leading-snug mt-2 font-larken tracking-[3px]">
          Anand Polamarasetti
        </h1>
        <p className="text-base font-semibold dark:text-white text-[#212529] mt-10 leading-8 font-larken border-l-4 border-yellow pl-6">
          Anand Polamarasetti is an IT professional with nearly 20 years of
          experience in a wide variety of cutting-edge technologies and various
          business domains. Since 2014 he has been helping various commercial
          and federal clients across the USA with his expertise in the areas of
          Cloud Architecture, Development, IT Infrastructure, Data Pipelines
          Engineering, Data Analytics, Artificial Intelligence and Machine
          Learning. From an IT perspective he believes in delivering simple
          solutions to complex problems. Outside of work his passions include
          policy making, charity and he enjoys traveling across the country.
        </p>
      </div>

      {/* Right Side: Image */}
      <div className="md:w-1/2 flex justify-center items-stretch mt-10">
        <div className="relative w-full max-w-[529px] h-full">
          <Image
            src={"/Anand-600x600.jpg"}
            alt="Anand Polamarasetti"
            layout="responsive"
            width={529}
            height={500}
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
