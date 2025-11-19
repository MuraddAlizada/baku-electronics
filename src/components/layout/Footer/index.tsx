import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";
import Container from "../Container";
import { FiPhoneCall } from "react-icons/fi";
import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Burada API çağırışı edilə bilər
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

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
              <form onSubmit={handleSubscribe} className="flex flex-row gap-2">
                <input
                  type="email"
                  placeholder="E-poçt"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl flex-grow focus:outline-none focus:ring-2 focus:ring-brandBtn bg-background text-brandGrayText"
                />
                <button 
                  type="submit"
                  className="bg-brandRed cursor-pointer text-white font-semibold px-6 py-2 rounded-xl transition-colors whitespace-nowrap hover:brightness-110"
                >
                  {subscribed ? "✓ Abunə oldunuz" : "Abunə ol"}
                </button>
              </form>
            </div>

            <div className="flex flex-row items-center gap-10">
              <div className="flex flex-col gap-3">
                <p className="text-lg font-semibold text-brandGrayText">
                  Bizi sosial mediada izləyin:
                </p>
                <div className="flex flex-row items-center gap-5 text-xl">
                  <a
                    href="https://facebook.com/bakuelectronics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brandGrayText opacity-70 icon-dark-mode hover:text-brandBtn hover:opacity-100 transition-colors"
                    aria-label="Facebook"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://t.me/bakuelectronics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brandGrayText opacity-70 icon-dark-mode hover:text-brandBtn hover:opacity-100 transition-colors"
                    aria-label="Telegram"
                  >
                    <FaTelegramPlane />
                  </a>
                  <a
                    href="https://linkedin.com/company/bakuelectronics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brandGrayText opacity-70 icon-dark-mode hover:text-brandBtn hover:opacity-100 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://instagram.com/bakuelectronics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brandGrayText opacity-70 icon-dark-mode hover:text-brandBtn hover:opacity-100 transition-colors"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
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
                <li>
                  <Link href="/taksit-alis" className="cursor-pointer hover:underline">
                    Taksit alış
                  </Link>
                </li>
                <li>
                  <Link href="/magazalar" className="cursor-pointer hover:underline">
                    Mağazalar
                  </Link>
                </li>
                <li>
                  <Link href="/servis-merkezleri" className="cursor-pointer hover:underline">
                    Servis mərkəzləri
                  </Link>
                </li>
                <li>
                  <Link href="/catdirilma-odenis" className="cursor-pointer hover:underline">
                    Çatdırılma və ödəniş
                  </Link>
                </li>
                <li>
                  <Link href="/arxayin-al" className="cursor-pointer hover:underline">
                    Arxayın al
                  </Link>
                </li>
              </ul>
            </div>

            {/* Information */}
            <div>
              <h4 className="font-bold mb-2 text-brandGrayText">Məlumat</h4>
              <ul className="space-y-1.5 text-base ">
                <li>
                  <Link href="/kampaniyalar" className="cursor-pointer hover:underline">
                    Kampaniyalar
                  </Link>
                </li>
                <li>
                  <Link href="/musteri-karti" className="cursor-pointer hover:underline">
                    Müştəri kartı
                  </Link>
                </li>
                <li>
                  <Link href="/brendler" className="cursor-pointer hover:underline">
                    Brendlər
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="cursor-pointer hover:underline">
                    Bloq və xəbərlər
                  </Link>
                </li>
                <li>
                  <Link href="/zemanet" className="cursor-pointer hover:underline">
                    Zəmanət
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="cursor-pointer hover:underline">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* About */}
            <div>
              <h4 className="font-bold mb-2 text-brandGrayText0">Haqqımızda</h4>
              <ul className="space-y-1.5 text-base">
                <li>
                  <Link href="/haqqimizda" className="cursor-pointer hover:underline">
                    Haqqımızda
                  </Link>
                </li>
                <li>
                  <Link href="/karyera" className="cursor-pointer hover:underline">
                    Karyera portalı
                  </Link>
                </li>
                <li>
                  <Link href="/korporativ-satislar" className="cursor-pointer hover:underline">
                    Korporativ satışlar
                  </Link>
                </li>
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
            <Link href="/mexfilik-siyaseti" className="hover:underline">
              Məxfilik siyasəti
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
