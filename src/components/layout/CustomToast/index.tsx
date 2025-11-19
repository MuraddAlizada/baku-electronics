// components/CustomToast.tsx
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { CustomToastProps } from "@/src/types";

export default function CustomToast({
  show,
  onClose,
  product,
  message = "Məhsul səbətə əlavə olundu",
  linkText = "Səbəti göstər",
  linkHref = "/",
}: CustomToastProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 5000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show || !product) return null;

  return (
    <div className="fixed top-4 left-0 right-0 flex justify-center z-50">
      <div
        className={`bg-background shadow-lg rounded-md h-[120px] flex items-center mx-4 border border-gray-200 dark:border-gray-700 w-full max-w-2xl ${
          show ? "animate-slide-down" : "animate-slide-up"
        }`}
        onAnimationEnd={() => {
          if (!show) onClose();
        }}
      >
        <div className="h-full w-[120px] relative">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover object-bottom rounded-l-md"
          />
        </div>

        <div className="flex-1 p-6 flex flex-col justify-center">
          <p className="text-sm md:text-lg mb-2 text-brandGrayText">{message}</p>
          <Link
            href={linkHref}
            className="text-xs md:text-sm text-brandToggle underline underline-offset-4 cursor-pointer hover:opacity-80 transition"
          >
            {linkText}
          </Link>
        </div>

        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-1 rounded-full cursor-pointer"
          aria-label="Close notification"
        >
          <IoClose className="text-brandGrayText opacity-70 text-xl" />
        </button>
      </div>
    </div>
  );
}
