import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { FaLaptop, FaUserShield, FaShieldAlt, FaHeadset, FaServer, FaGlobe } from "react-icons/fa";
const features = [
  { icon: <FaLaptop size={40} />, title: "servic.subtitle1", text: "servic.text1", number: "01" },
  { icon: <FaUserShield size={40} />, title: "servic.subtitle2", text: "servic.text1", number: "02" },
  { icon: <FaShieldAlt size={40} />, title: "servic.subtitle3", text: "servic.text1", number: "03" },
  { icon: <FaHeadset size={40} />, title: "servic.subtitle4", text: "servic.text1", number: "04" },
  { icon: <FaServer size={40} />, title: "servic.subtitle5", text: "servic.text1", number: "05" },
  { icon: <FaGlobe size={40} />, title: "servic.subtitle6", text: "servic.text1", number: "06" }
];

function Services() {
  const { t, i18n } = useTranslation();
    const changeLanguage = (lang) => {
      console.log(lang);
      i18n.changeLanguage(lang);
    };
  return (
    <section className="bg-[#16161698] pt-20">
      <div className="container px-5 py-5">
          <p className="w-[200px] text-[#8432e8] py-2 my-[50px] text-center mx-auto rounded-4xl border border-[#8432e8]">{t("header.services")}</p>
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
  )
}

export default Services