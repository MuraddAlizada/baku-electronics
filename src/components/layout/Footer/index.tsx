import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";
import Container from "../Container";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-brandGray text-brandGrayText py-10 md:py-20 ">
      <Container>
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* Newsletter section */}
          <div className="md:w-[30%] flex flex-col gap-5 md:gap-20 ">
            <div>
              <h2 className="text-lg font-bold mb-3">
                Yeniliklərdən ilk sən xəbərdar ol!
              </h2>
              <div className="flex flex-row gap-2">
                <input
                  type="email"
                  placeholder="E-poçt"
                  className="px-4 py-2 border border-gray-300 rounded-xl flex-grow focus:outline-none"
                />
                <button className="bg-brandRed cursor-pointer text-white font-semibold px-6 py-2 rounded-xl  transition-colors whitespace-nowrap">
                  Abune ol
                </button>
              </div>
            </div>

            <div className="flex flex-row items-center gap-10">
              <div className="flex flex-col gap-3">
                <p className="text-lg font-semibold text-brandGrayText">
                  Bizi sosial mediada izləyin:
                </p>
                <div className="flex flex-row items-center gap-5 text-xl">
                  <FaFacebookF className="text-neutral-600 icon-dark-mode" />
                  <FaTelegramPlane className="text-neutral-600 icon-dark-mode" />
                  <FaLinkedinIn className="text-neutral-600 icon-dark-mode" />
                  <FaInstagram className="text-neutral-600 icon-dark-mode" />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FiPhoneCall className="text-3xl" />
                <span className="text-3xl font-semibold text-brandGrayText">
                  143
                </span>
              </div>
            </div>
          </div>

          {/* Links sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 my-auto mx-auto gap-6 md:w-[60%] text-center">
            {/* For buyers */}
            <div>
              <h4 className="font-bold mb-2 text-brandGrayText0">Alıcılara</h4>
              <ul className="space-y-1.5 text-base">
                <li className=" cursor-pointer">Nisyə alış</li>
                <li className=" cursor-pointer">Mağazalar</li>
                <li className=" cursor-pointer">Servis mərkəzləri</li>
                <li className=" cursor-pointer">Çatdırılma və ödəniş</li>
                <li className=" cursor-pointer">Arxayın al </li>
              </ul>
            </div>

            {/* Information */}
            <div>
              <h4 className="font-bold mb-2 text-brandGrayText">Məlumat</h4>
              <ul className="space-y-1.5 text-base ">
                <li className=" cursor-pointer">Kampaniyalar</li>
                <li className=" cursor-pointer">Müştəri kartı</li>
                <li className=" cursor-pointer">Brendlər</li>
                <li className=" cursor-pointer">Bloq və xəbərlər</li>
                <li className=" cursor-pointer">Zəmanət</li>
                <li>
                  <a href="/faq" className="cursor-pointer hover:underline">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* About */}
            <div>
              <h4 className="font-bold mb-2 text-brandGrayText0">Haqqımızda</h4>
              <ul className="space-y-1.5 text-base">
                <li className=" cursor-pointer">Haqqımızda</li>
                <li className=" cursor-pointer">Karyera portalı</li>
                <li className=" cursor-pointer">Korporativ satışlar</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex  flex-col md:flex-row mt-5 border-t border-neutral-300 w-full justify-between">
          <div className="pt-4  text-center text-base">
            <p>
              Copyright © 2025{" "}
              <span className="font-semibold">Baku Electronics</span> . Bütün
              hüquqlar qorunur.
            </p>
          </div>
          <div className="pt-4  text-center text-base">
            <p>Məxfilik siyasəti</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
