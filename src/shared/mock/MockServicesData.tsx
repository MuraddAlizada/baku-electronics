import React from "react";
import { FaTruckFast } from "react-icons/fa6";
import { GrDeliver } from "react-icons/gr";
import { IoIosTimer } from "react-icons/io";
import { PiMoneyWavy } from "react-icons/pi";

export const mockServicesData = [
  {
    icon: <FaTruckFast />,
    title: "Iki saatda gözlənilən sifarişlər",
    description:
      "Bizimlə sifariş etdiyiniz məhsulunuz 2 saat ərzində gözlənilən sifarişlər qrupuna əlavə edilir.",
  },
  {
    icon: <PiMoneyWavy />,
    title: "Ödənişlər",
    description:
      "Bizimlə sifariş etdiyiniz məhsulunuz 2 saat ərzində gözlənilən sifarişlər qrupuna əlavə edilir.",
  },
  {
    icon: <GrDeliver />,
    title: "Gözlənilən sifarişlər",
    description:
      "Bizimlə sifariş etdiyiniz məhsulunuz 2 saat ərzində gözlənilən sifarişlər qrupuna əlavə edilir.",
  },
  {
    icon: <IoIosTimer />,
    title: "Sürətli göndəriliş",
    description:
      "Bizimlə sifariş etdiyiniz məhsulunuz 2 saat ərzində gözlənilən sifarişlər qrupuna əlavə edilir.",
  },
];
