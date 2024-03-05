import Image from "next/image";
import React from "react";
import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import StarsItem from "../components/StarsItem";
import { useRouter } from "next/router";
import useLocale from "../hooks/useLocale";

const skillsData = [
  { item: "HTML/CSS (SCSS)", value: 5 },
  { item: "React(NextJS)", value: 5 },
  { item: "JavaScript", value: 5 },
  { item: "CSS(Bootstrap, TailwindCSS, styled-components)", value: 5 },
  { item: "TypeScript", value: 4 },
  { item: "NodeJS (Express)", value: 4 },
  { item: "MongoDB (mongoose)", value: 4 },
];

const SideBlock = () => {
  const { locale } = useRouter();

  const content = useLocale(locale, "sideBlock");

  return (
    <div className="w-full h-full bg-[#E6E6E6] relative pt-14 md:pt-7 px-4 pb-64 -z-20">
      <div className="bg-primary w-full h-48 absolute top-0 left-0 -z-10"></div>
      <h1 className="text-center text-white text-2xl font-bold mb-6">
        {content.name}
      </h1>
      <div className="relative w-52 h-52 rounded-[50%] overflow-hidden border-8 border-solid border-[#C8C8C8] mb-6 mx-auto">
        <Image src="/images/avatar.jpg" layout="fill" objectFit="cover" />
      </div>
      <div className="mb-6">
        <h3 className="text-primary text-xl border-b-2 border-solid border-[#C8C8C8] pb-2 mb-4">
          {content.detailsTitle}
        </h3>
        <p className="flex items-center gap-2 mb-3">
          <BsFillPersonFill color="#3a5b87" size={25} /> {content.name}
        </p>
        <p className="flex items-center gap-2 mb-3">
          <MdEmail color="#3a5b87" size={25} /> aykutnazifov1@gmail.com
        </p>
        <p className="flex items-center gap-2 mb-3">
          <BsFillTelephoneFill color="#3a5b87" size={25} /> 0894688960
        </p>
        <p className="flex gap-2">
          <AiFillHome color="#3a5b87" size={25} /> {content.address}
        </p>
      </div>
      <div className="mb-6">
        <h3 className="text-primary text-xl border-b-2 border-solid border-[#C8C8C8] pb-2 mb-4">
          {content.skillsTitle}
        </h3>
        {skillsData.map((skill, index) => (
          <StarsItem item={skill.item} value={skill.value} key={index} />
        ))}
      </div>
      <div>
        <h3 className="text-primary text-xl border-b-2 border-solid border-[#C8C8C8] pb-2 mb-4">
          {content.langTitle}
        </h3>
        {content.languages.map((skill, index) => (
          <StarsItem item={skill.title} value={skill.value} key={index} />
        ))}
      </div>
      <div className="bg-primary w-full h-24 absolute bottom-0 left-0 -z-10"></div>
    </div>
  );
};

export default SideBlock;
