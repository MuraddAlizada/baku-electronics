import Head from "next/head";
import Container from "@/src/components/layout/Container";
import Header from "@/src/components/layout/Header";
import NavBar from "@/src/components/layout/NavBar";
import Footer from "@/src/components/layout/Footer";
import Breadcrumb from "@/src/components/shared/Breadcrumb";
import { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Çatdırılma necə həyata keçirilir?",
    answer:
      "Bakı daxilində çatdırılma 1-2 iş günü ərzində, regionlara isə 3-5 iş günü ərzində həyata keçirilir. Çatdırılma haqqı sifarişin məbləğindən asılı olaraq müəyyən edilir.",
  },
  {
    question: "Ödəniş hansı üsullarla edilə bilər?",
    answer:
      "Nağd ödəniş, kartla ödəniş, bank köçürməsi və hissə-hissə ödəniş imkanları mövcuddur. Bütün ödənişlər təhlükəsizdir.",
  },
  {
    question: "Məhsulu geri qaytara bilərəmmi?",
    answer:
      "Bəli, məhsul alındıqdan sonra 14 gün ərzində geri qaytara bilərsiniz. Məhsul orijinal vəziyyətdə, qablaşdırması ilə birlikdə olmalıdır.",
  },
  {
    question: "Zəmanət müddəti nə qədərdir?",
    answer:
      "Məhsulların zəmanət müddəti istehsalçıdan asılı olaraq 12-24 ay arasında dəyişir. Zəmanət kartı məhsulla birlikdə verilir.",
  },
  {
    question: "Hissə-hissə ödəniş necə işləyir?",
    answer:
      "Hissə-hissə ödəniş 3, 6, 12 və ya 24 ay müddətinə müxtəlif banklarla əməkdaşlıq əsasında təmin edilir. Ətraflı məlumat üçün bizimlə əlaqə saxlayın.",
  },
  {
    question: "Onlayn sifarişi necə ləğv edə bilərəm?",
    answer:
      "Sifarişiniz hələ göndərilməyibsə, onu ləğv edə bilərsiniz. Bunun üçün bizimlə əlaqə saxlayın və sifariş nömrənizi bildirin.",
  },
  {
    question: "Məhsulun stokda olub-olmadığını necə öyrənə bilərəm?",
    answer:
      "Məhsul səhifəsində stok statusu göstərilir. Əgər məhsul stokda yoxdursa, sizə bildiriş göndərə bilərik.",
  },
  {
    question: "Kampaniyalar haqqında məlumatı haradan əldə edə bilərəm?",
    answer:
      "Kampaniyalar haqqında məlumatı ana səhifədəki 'Kampaniyalar' bölməsindən və ya e-poçt bildirişlərimizdən əldə edə bilərsiniz.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>Tez-tez verilən suallar - Baku Electronics</title>
      </Head>
      <main>
        <Container>
          <Header />
          <NavBar />
          <Breadcrumb
            items={[
              { label: "Ana səhifə", href: "/" },
              { label: "FAQ" },
            ]}
          />

          <div className="my-8 md:my-16">
            <h1 className="text-3xl md:text-4xl font-bold text-brandGrayText mb-8">
              Tez-tez verilən suallar
            </h1>

            <div className="space-y-4">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className="bg-brandGray rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 flex items-center justify-between text-left hover:bg-brandGraySecondary transition"
                  >
                    <span className="text-lg font-semibold text-brandGrayText">
                      {item.question}
                    </span>
                    {openIndex === index ? (
                      <IoChevronUp size={24} className="text-brandGrayText flex-shrink-0" />
                    ) : (
                      <IoChevronDown size={24} className="text-brandGrayText flex-shrink-0" />
                    )}
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-6">
                      <p className="text-brandGrayText opacity-70 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 bg-brandGray p-8 rounded-2xl text-center">
              <h2 className="text-2xl font-bold text-brandGrayText mb-4">
                Sualınız cavablanmadı?
              </h2>
              <p className="text-brandGrayText opacity-70 mb-6">
                Bizimlə əlaqə saxlayın, sizə kömək etməkdən məmnuniyyət duyarıq.
              </p>
              <a
                href="tel:+994123456789"
                className="inline-block bg-brandBtn text-white px-8 py-3 rounded-full hover:brightness-110 transition"
              >
                Əlaqə saxla
              </a>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}


