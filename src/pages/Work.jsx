import React, { useState } from 'react';
import Work1 from "../assets/work1.jpg"
import Work2 from "../assets/work2.jpg"
import Work3 from "../assets/itTime-DBMVSCL4.png"
import Work4 from "../assets/homekit-DQ2XClzR.jpg"
import Work5 from "../assets/loyalWebsite-BlOw_Q7N.jpg"
import Work6 from "../assets/noits-_qO1VZLh.jpg"
import Work7 from "../assets/propartnyor-CgoDPuRp.jpg"
import Work8 from "../assets/zamonTour-W0hbPX7f.jpg"
import Work9 from "../assets/work2.jpg"
import { useTranslation } from 'react-i18next'

function Work() {
  const { t, i18n } = useTranslation();
    const changeLanguage = (lang) => {
      console.log(lang);
      i18n.changeLanguage(lang);
    }
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
  <section className="bg-[#16161698] py-10 pt-20 ">
    <div className="container px-5">
      <p className="w-[200px] text-[#8432e8] py-2 my-[50px] text-center mx-auto rounded-4xl border border-[#8432e8]">{t("header.work")}</p>
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
  )
}

export default Work