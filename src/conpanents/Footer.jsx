import React from 'react'
import { useTranslation } from 'react-i18next';
import { FaClock, FaLinkedinIn,} from "react-icons/fa";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { IoMdShare } from 'react-icons/io';
import { MdOutlinePhoneInTalk } from 'react-icons/md';
import { PiMapPinBold } from 'react-icons/pi';
import Logo from "../assets/footer__logo.png"

function Footer() {
      const { t, i18n } = useTranslation();
      const changeLanguage = (lang) => {
          console.log(lang);
          i18n.changeLanguage(lang);
      };
  return (
    <footer className="bg-[#16161698]">
        <div className="container h-full px-5 py-5 lg:py-16">
            <h2 className="text-[46px] max-[560px]:text-4xl max-[440px]:text-3xl text-white font-bold">{t("footer.title")}</h2>
            <div className="grid grid-cols-1  lg:grid-cols-2 items-center py-5">
              <div className="bg-transparent text-white p-6 grid grid-cols-1 min-[550px]:grid-cols-2 gap-[25px]">
                {/* Address */}
                <div className="flex items-center gap-3 pb-5">
                  <PiMapPinBold size={29} className="text-[#827d7d] cursor-pointer" />
                  <div>
                    <h3 className="text-[#fff] cursor-pointer text-lg font-bold">{t("footer.subtitle1")}</h3>
                    <p className="text-[#827d7d] cursor-pointer text-md pt-3">{t("footer.text1")}</p>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="flex items-center gap-3">
                  <MdOutlinePhoneInTalk size={29} className="text-[#827d7d] cursor-pointer"/>
                  <div>
                    <h3 className="text-[#fff] cursor-pointer text-lg font-bold">{t("footer.subtitle2")}</h3>
                    <p className="text-[#827d7d] cursor-pointer text-md pt-3">{t("footer.text2")}</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-center gap-3">
                  <FaClock size={24} className="text-[#827d7d] cursor-pointer"/>
                  <div>
                    <h3 className="text-[#fff] cursor-pointer text-lg font-bold">{t("footer.subtitle3")}</h3>
                    <p className="text-[#827d7d] cursor-pointer text-md pt-3">{t("footer.text3")}</p>
                  </div>
                </div>

                {/* Social Networks */}
                <div className="flex items-center gap-3">
                  <IoMdShare size={29} className="text-[#827d7d] cursor-pointer"/>
                  <div>
                    <h3 className="cursor-pointer text-[#fff] text-lg font-bold">{t("footer.subtitle4")}</h3>
                    <div className="flex gap-3 mt-1">
                      <a href="#" className=""><FaLinkedinIn size={24} className="text-[#827d7d]"/></a>
                      <a href="" className=""><FaInstagram size={24} className="text-[#827d7d]"/></a>
                      <a href="" className=""><FaTelegramPlane size={24} className="text-[#827d7d]"/></a>
                    </div>
                  </div>
                </div>
              </div>
                {/* ifame------- */}
              <div className="h-[250px] rounded-xl">
              <iframe className="w-full h-full rounded-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.65547130854!2d69.28311021090116!3d41.33810459893217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b5f1f5cfd49%3A0x110bc2a5ed9856b7!2sLIMSA!5e0!3m2!1sru!2s!4v1730879135357!5m2!1sru!2s" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Map"></iframe>
              </div>
            </div>
        </div>
        <div className="container h-full bg-[#121111] px-5 py-5 md:flex items-center justify-between">
            <a href="#" className="">
              <div className="w-[150px] h-[40px] mb-3 md:pb-0">
                <img src={Logo} alt="" className="w-full h-full"/>
              </div>
            </a>
            <p className="text-md text-[#e6e2e2]">{t("footer.subtext")}</p>
        </div>
    </footer>
  )
}

export default Footer