import React from "react";
import { useRouter } from "next/router";
import useLocale from "../hooks/useLocale";

const MainBlock = () => {
  const { locale } = useRouter();

  const content = useLocale(locale, "mainBlock");

  return (
    <div className=" h-full pt-7 px-4">
      <div className="mb-6">
        <h2 className="text-primary text-xl border-b-2 border-solid border-[#C8C8C8] pb-2 mb-4">
          {content.aboutTitle}
        </h2>
        <p>{content.aboutText}</p>
      </div>
      <div className="mb-6">
        <h2 className="text-primary text-xl border-b-2 border-solid border-[#C8C8C8] pb-2 mb-4">
          {content.educationTitle}
        </h2>
        {content.educations.map((education, index) => (
          <div className="flex justify-between mb-4" key={index}>
            <div>
              <p className="font-bold text-lg">{education.type}</p>
              <p className="text-primary text-lg">{education.name}</p>
              <p>{education.specialty}</p>
            </div>
            <div>
              <span className="text-primary font-medium">{education.date}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mb-6">
        <h2 className="text-primary text-xl border-b-2 border-solid border-[#C8C8C8] pb-2 mb-4">
          {content.employmentTitle}
        </h2>
        {content.employment.map((emp, index) => (
          <div className="flex justify-between mb-4" key={index}>
            <div className="max-w-[70%]">
              <p className="font-bold text-lg">{emp.type}</p>
              <p className="text-primary text-lg">{emp.name}</p>
              <p>{emp.specialty}</p>
            </div>
            <div>
              <span className="text-primary font-medium">{emp.date}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mb-6">
        <h2 className="text-primary text-xl border-b-2 border-solid border-[#C8C8C8] pb-2 mb-4">
          {content.sertificateTitle}
        </h2>
        <div className="mb-4">
          <p className="font-bold text-lg">Responsive Web Design Certificate</p>
          <a
            href="https://www.freecodecamp.org/certification/etihad3/responsive-web-design"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary hover:underline transition-all duration-100 ease-in break-all"
          >
            https://www.freecodecamp.org/certification/etihad3/responsive-web-design
          </a>
        </div>
        <div>
          <p className="font-bold text-lg">
            JavaScript Algorithms and Data Structures
          </p>
          <a
            href="https://www.freecodecamp.org/certification/etihad3/javascript-algorithms-and-data-structures"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary hover:underline transition-all duration-100 ease-in break-all"
          >
            https://www.freecodecamp.org/certification/etihad3/javascript-algorithms-and-data-structures
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-primary text-xl border-b-2 border-solid border-[#C8C8C8] pb-2 mb-4">
          {content.profileTitle}
        </h2>
        <div className="mb-4">
          <p className="font-bold text-lg">{content.github}</p>
          <a
            href="https://github.com/aykutNazifov"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary hover:underline transition-all duration-100 ease-in"
          >
            https://github.com/aykutNazifov
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainBlock;
