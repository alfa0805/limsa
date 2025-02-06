import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Homee from "../assets/home.png";
import Homee1 from "../assets/faq__img1.png";
import Homee2 from "../assets/faq__img2.png";
import { SlArrowRight, SlArrowDown } from "react-icons/sl";
import Marquee from "react-fast-marquee";

import Work1 from "../assets/work1.jpg"
import Work2 from "../assets/work2.jpg"
import Work3 from "../assets/itTime-DBMVSCL4.png"
import Work4 from "../assets/homekit-DQ2XClzR.jpg"
import Work5 from "../assets/loyalWebsite-BlOw_Q7N.jpg"
import Work6 from "../assets/noits-_qO1VZLh.jpg"
import Work7 from "../assets/propartnyor-CgoDPuRp.jpg"
import Work8 from "../assets/zamonTour-W0hbPX7f.jpg"
import Work9 from "../assets/work2.jpg"

import { FaLaptop, FaUserShield, FaShieldAlt, FaHeadset, FaServer, FaGlobe } from "react-icons/fa";

const features = [
  { icon: <FaLaptop size={40} />, title: "servic.subtitle1", text: "servic.text1", number: "01" },
  { icon: <FaUserShield size={40} />, title: "servic.subtitle2", text: "servic.text1", number: "02" },
  { icon: <FaShieldAlt size={40} />, title: "servic.subtitle3", text: "servic.text1", number: "03" },
  { icon: <FaHeadset size={40} />, title: "servic.subtitle4", text: "servic.text1", number: "04" },
  { icon: <FaServer size={40} />, title: "servic.subtitle5", text: "servic.text1", number: "05" },
  { icon: <FaGlobe size={40} />, title: "servic.subtitle6", text: "servic.text1", number: "06" }
];

function Home() {


  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    console.log(lang);
    i18n.changeLanguage(lang);
  };
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { question: "faq.subtitle1", answer: "faq.text1" },
    { question: "faq.subtitle2", answer: "faq.text2" },
    { question: "faq.subtitle3", answer: "faq.text3" },
  ];

  // work------

  const works = [
    { id: 1, img: Work1, title: "work.subtitle1", text: "work.text1" },
    { id: 2, img: Work2, title: "work.subtitle2", text: "work.text2" },
    { id: 3, img: Work3, title: "work.subtitle3", text: "work.text3" },
    { id: 4, img: Work4, title: "work.subtitle4", text: "work.text4" },
    { id: 5, img: Work5, title: "work.subtitle5", text: "work.text5" },
    { id: 6, img: Work6, title: "work.subtitle6", text: "work.text6" },
    { id: 7, img: Work7, title: "work.subtitle7", text: "work.text7" },
    { id: 8, img: Work8, title: "work.subtitle8", text: "work.text8" },
    { id: 9, img: Work9, title: "work.subtitle2", text: "work.text2" },
  ];


  return (
    <div className="w-full h-full">
      <div className="container flex items-center justify-between  px-5 py-20 max-[700px]:flex-col
        bg-gradient-to-br pt-[150px] from-[#1f063d] via-[#121212] to-[#121212] w-full"
      >
        <div className="w-[40%] max-[700px]:w-full">
          <h2 className="text-gray-100 text-3xl font-bold max-[700px]:text-center">{t("home.title")}</h2>
          <p className="text-gray-300 text-lg font-medium pt-[40px] pb-[30px] max-[700px]:text-center">{t("home.text")}</p>
          <a href="#order" className="w-full">
            <div className="w-[100px] max-[700px]:mx-auto">
              <a href="#order" className="">
                <button className="w-[100px] h-[40px] bg-[#8432e8] text-md text-white font-medium border-2 border-[#8432e8] rounded-2xl hover:bg-transparent transition-all duration-500 hover:text-[#8432e8]">
                  {t("home.btn")}
                </button>
              </a>
            </div>
          </a>
        </div>
        {/* ----------------- */}
        <div className="w-[60%] h-full max-[700px]:pt-[50px] max-[700px]:w-[90%]">
          <img src={Homee} alt="phone" className="w-full h-full" />
        </div>
      </div>

      {/* ------------faq--------- */}
      <section className="bg-[#16161698]">
        <div className="container px-5 py-[90px] flex items-start justify-between max-[800px]:flex-col">
          <div className="w-[49%] h-[39vw]  flex items-start gap-5 max-[800px]:mb-5 max-[800px]:w-[80%] max-[500px]:w-full">
            <div className="w-[330px] h-[32vw]">
              <img src={Homee1} alt="img" className="w-full h-full" />
            </div>
            <div className="w-[320px] h-[35vw] mt-[40px]">
              <img src={Homee2} alt="img" className="w-full h-full" />
            </div>
          </div>

          {/* ----Accordion----- */}
          <div className="w-[40%] p-6 pt-5 bg-transparent text-white rounded-lg max-[800px]:w-full">
            <h2 className="text-3xl font-bold mb-8 max-[500px]:text-2xl">{t("faq.title")}</h2>
            {faqs.map((faq, index) => (
              <div key={index} className="border border-[#423f3f] rounded-xl mb-3">
                <button
                  className="w-full flex justify-between items-center p-5 text-lg font-medium text-start"
                    onClick={() => toggleAccordion(index)}>
                      {t(faq.question)}
                    {openIndex === index ? <SlArrowDown className="w-5 h-5" /> : <SlArrowRight className="w-5 h-5" />}
                </button>

                <div className={`overflow-hidden transition-all ${openIndex === index ? "max-h-40 p-4" : "max-h-0 p-0"} text-gray-300`}>
                  {t(faq.answer)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* -------------marquee--------- */}
        <section className="px-5 py-[60px] bg-[#16161698]">
          <Marquee speed={250}  direction="right">
            <div className="w-full flex items-center">
              <div className="mr-[80px]">
                <p className="text-gray-300 text-[25px] font-bold">{t("marque.text1")}</p>
              </div>
              <div className="mr-[80px]">
                <p className="text-gray-300 text-[25px] font-bold">/</p>
              </div>
              <div className="mr-[80px]">
                <p className="text-gray-300 text-[25px] font-bold">{t("marque.text2")}</p>
              </div>
              <div className="mr-[80px]">
                <p className="text-gray-300 text-[25px] font-bold">/</p>
              </div>
              <div className="mr-[80px]">
                <p className="text-gray-300 text-[25px] font-bold">{t("marque.text3")}</p>
              </div>
              <div className="mr-[80px]">
                <p className="text-gray-300 text-[25px] font-bold">/</p>
              </div>
              <div className="mr-[80px]">
                <p className="text-gray-300 text-[25px] font-bold">{t("marque.text4")}</p>
              </div>
              <div className="mr-[80px]">
                <p className="text-gray-300 text-[25px] font-bold">/</p>
              </div>
            </div>
          </Marquee>
        </section>
      {/* ------------work---------- */}
        <section className="bg-[#16161698] py-10">
          <div className="container px-5">
            <h2 className="text-white text-center text-[36px] font-bold">
              {t("work.title")}
            </h2>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[30px]">
              {works.map((work) => (
                <div key={work.id} className="border-b border-[#413e3e]">
                  <a href={`https://www.${t(work.title)}/`} target="_blank" rel="noopener noreferrer" aria-label={`${t(work.title)}`}>
                    <h3 className="w-full px-5 py-5 text-white text-[18px] font-medium">
                      {t(work.title)}
                    </h3>
                    <div className="w-full h-[190px] transition-transform duration-400 hover:scale-[1.1] rounded-[4px]">
                      <img src={work.img} alt={work.title} className="w-full h-full rounded-[4px]" />
                    </div>
                    <p className="px-5 pt-[20px] pb-[40px] text-[15px] text-[#d8d5d5]">
                      {t(work.text)}
                    </p>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      {/* ---------------services--------- */}
      <section className="bg-[#16161698]">
      <div className="container px-5 py-5">
        <h2 className="text-center text-white text-4xl font-bold pb-5">{t("servic.title1")}</h2>
        <h2 className="text-center text-[#8432e8] text-4xl font-bold">{t("servic.title2")}</h2>
        <div className="w-full pt-[30px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[20px]">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#000000] p-7 rounded-lg text-white flex gap-[30px]">
              <div className="flex flex-col justify-between h-[130px]">
                <div className="text-white">{feature.icon}</div>
                <span className="text-gray-100 text-2xl font-semibold">{feature.number}</span>
              </div>
              <div className="">
                <h3 className="text-xl font-bold">{t(feature.title)}</h3>
                <p className="text-[#87848a] text-sm pt-5">{t(feature.text)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
    </div>
  );
}

export default Home;
