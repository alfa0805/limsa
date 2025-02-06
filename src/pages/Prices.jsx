import React from 'react'
import { useTranslation } from 'react-i18next';

function Prices() {
  const { t, i18n } = useTranslation();
      const changeLanguage = (lang) => {
        console.log(lang);
        i18n.changeLanguage(lang);
      };
  return (
    <div>
      <div className="py-[140px] flex items-center justify-self-center">
        <p className="w-[200px] text-[#8432e8] py-2 my-[50px] text-center mx-auto rounded-4xl border border-[#8432e8]">{t("header.services")}</p>
      </div>
    </div>
  )
}

export default Prices