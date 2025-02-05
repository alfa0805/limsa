import React, { useState } from 'react'
import Logo from "../assets/logo.png"
import { NavLink } from 'react-router-dom'
import { HiMenu } from 'react-icons/hi'
import { FiPhoneCall } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'

function Header() {
    const [modal, setModal] = useState(false)
    const menyu = () => {
      setModal(!modal)
      }
    const [scrolled, setIsSrolled] = useState(false)
      useState(() => {
        const handleScroll = () => {
          if (window.scrollY > 50){
            setIsSrolled(true)
          } else{
            setIsSrolled(false)
          }
        };
        window.addEventListener("scroll",handleScroll);
        return () => window.removeEventListener("scroll",handleScroll)
      })

      const {t,i18n} =useTranslation()
      const changeLanguage = (lang) => {
        console.log(lang);
        
        i18n.changeLanguage(lang)
      }
  return (
    <header className="bg-[#121212] z-50 relative  ">
       <div className={`fixed ${scrolled?"bg-[#121212]":"bg-none"} border-b border-gray-600 container w-full h-[80px] px-5 py-[10px] flex items-center justify-between `}>
            <div className="flex items-center gap-[50px]">
                <div className="w-[125px] h-[30px] ml-[10px]">
                    <img src={Logo} alt="logo" className="w-full h-full" />
                </div>
                <ul className="flex items-center gap-8 max-[900px]:hidden ">
                    <li className="text-white"><NavLink  className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")} to="/">{t("header.home")}</NavLink></li>
                    <li className="text-white"><NavLink  className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")} to="/services">{t("header.services")}</NavLink></li>
                    <li className="text-white"><NavLink  className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")} to="/work">{t("header.work")}</NavLink></li>
                    <li className="text-white"><NavLink  className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")} to="/prices">{t("header.prices")}</NavLink></li>
                </ul>
                <select value={i18n.language} name="" id="" onChange={(e)=>changeLanguage(e?.target.value)}
                className="text-white botder-[1px] border-black max-[900px]:hidden">
                  <option className="bg-[#121212] text-white hover:bg-[#8432e8]" value="uz">Uz</option>
                  <option className="bg-[#121212] text-white hover:bg-[#8432e8]" value="ru">Ru</option>
                  <option className="bg-[#121212] text-white hover:bg-[#8432e8]" value="en">En</option>
                </select>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="w-[160px] h-[35px] bg-[#8432e8] p-[3px] border-2 border-[#8432e8] rounded-xl hover:bg-[#121212] hover:text-[#8432e8] max-[900px]:hidden">
                <a href="tel:+998332587358" className="text-[16px] font-medium">+998 (33) 258 73 58</a>
              </div>
              <div className="w-[40px] h-[40px] bg-[#8432e8] p-[6px] border-2 border-[#8432e8] rounded-[20px] hover:bg-[#121212] hover:text-[#8432e8] min-[900px]:hidden">
                <a href="tel:+998332587358" className="text-[16px] font-medium"><FiPhoneCall className="text-[23px] hover:text-green-400" /></a>
              </div>
              <button onClick={menyu} className="ml-[10px] text-gray-100 text-[25px] font-bold min-[900px]:hidden"><HiMenu className="text-[#8432e8]"/></button>
            </div>
            </div>
        {
           modal?
          <div className="w-[200px] flex items-center  gap-[15px] flex-col absolute top-[80px] right-0">
            <ul className="flex items-center flex-col gap-8">
                    <li className="text-white"><NavLink  className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")} to="/">{t("header.home")}</NavLink></li>
                    <li className="text-white"><NavLink  className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")} to="/services">{t("header.services")}</NavLink></li>
                    <li className="text-white"><NavLink  className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")} to="/work">{t("header.work")}</NavLink></li>
                    <li className="text-white"><NavLink  className={({ isActive }) => (isActive ? "active nav-link" : "nav-link")} to="/prices">{t("header.prices")}</NavLink></li>
                </ul>
                <select value={i18n.language} name="" id="" onChange={(e)=>changeLanguage(e?.target.value)}
                className="text-white botder-[1px] border-black min-[900px]:hidden">
                  <option className="bg-[#121212] text-white hover:bg-[#8432e8]" value="uz">Uz</option>
                  <option className="bg-[#121212] text-white hover:bg-[#8432e8]" value="ru">Ru</option>
                  <option className="bg-[#121212] text-white hover:bg-[#8432e8]" value="en">En</option>
                </select>
          </div> : ""
          }
    </header>
  )
}

export default Header