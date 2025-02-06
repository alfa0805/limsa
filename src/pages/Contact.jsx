import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

function Contact() {

    const { t, i18n } = useTranslation();
      const changeLanguage = (lang) => {
        console.log(lang);
        i18n.changeLanguage(lang);
      };

      const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: "",
      });
    
      const [loading, setLoading] = useState(false);
      const [success, setSuccess] = useState(false);
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        const BOT_TOKEN = "7519624691:AAGw5kc72DDVM3fE1iv4t_vwfXvJqzo8mQM"; // Bot tokenni shu yerga yoz
        const CHAT_ID = "1957552716"; // Chat ID ni shu yerga yoz
    
        const message = `📝 *Yangi xabar:*\n👤 *Ism:* ${formData.name}\n📞 *Telefon:* +998${formData.phone}\n💬 *Xabar:* ${formData.message}`;
    
        try {
          const response = await fetch(
            `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ chat_id: CHAT_ID, text: message, parse_mode: "Markdown" }),
            }
          );
    
          if (response.ok) {
            setSuccess(true);
            setFormData({ name: "", phone: "", message: "" });
            setTimeout(() => setSuccess(false), 3000);
          } else {
            console.error("Xatolik yuz berdi!");
          }
        } catch (error) {
          console.error("Telegramga ulanib bo‘lmadi!", error);
        }
    
        setLoading(false);
      };
  return (
    <section className="contact w-full h-[50vw]">
          <div className="container px-5 grid grid-cols-1 md:grid-cols-2 gap-[60px] pt-[170px]">
              <div className="w-full">
                <h3 className="text-white text-4xl font-bold">{t("contact.title")}</h3>
                <p className="text-[#6d129b] text-lg font-normal py-7">{t("contact.text")}</p>
                <h3 className="text-white text-xl font-bold pb-5">{t("contact.subtitle")}</h3>
                <div className="">
                  <a href="" className="text-[#554f4f] text-lg">{t("contact.home")}</a>
                </div>
                <div className="">
                  <a href="" className="text-[#554f4f] text-lg">{t("contact.services")}</a>
                </div>
              </div>
              {/* form-contact */}
              <div className="w-full   flex items-center justify-center">
                <div className=" rounded-lg w-full shadow-lg">
                  <h2 className="text-white text-4xl font-bold md:text-2xl  mb-[40px]">{t("contact.title1")}</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-[#292929] text-white rounded-2xl outline-none"
                    />
                    <div className="flex items-center bg-[#292929] text-white rounded-2xl">
                      <span className="px-3 text-gray-400">+998</span>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="901234567"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-transparent outline-none"
                      />
                    </div>
                    <textarea
                      name="message"
                      placeholder="Your message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-[#292929] text-white rounded-2xl outline-none h-28"
                    ></textarea>
                    <button
                      type="submit"
                      className={`w-[120px] p-2 text-white font-bold rounded-xl transition-all ${
                        loading ? "bg-gray-600 cursor-not-allowed" : "bg-purple-600 hover:bg-transparent border-2 border-purple-600"
                      }`}
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send"}
                    </button>
                    {success && <p className="text-green-400 text-center mt-2">✅ Message sent successfully!</p>}
                  </form>
                </div>
              </div>
          </div>
      </section>
  )
}

export default Contact