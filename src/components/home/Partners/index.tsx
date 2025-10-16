import React, { useEffect, useRef } from "react";
import { partners } from "@/src/shared/mock/partners";
import Image from "next/image";

const doubledPartners = [...partners, ...partners];

export default function Partners() {
  const containerRef = useRef<HTMLDivElement>(null);
  const speedRef = useRef(0.5);
  const targetSpeedRef = useRef(0.5);

  useEffect(() => {
    let frameId: number;
    const step = () => {
      speedRef.current += (targetSpeedRef.current - speedRef.current) * 0.1;
      const el = containerRef.current;
      if (el) {
        el.scrollLeft += speedRef.current;
        const resetPoint = el.scrollWidth / 2;
        if (el.scrollLeft >= resetPoint) {
          el.scrollLeft -= resetPoint;
        }
      }
      frameId = requestAnimationFrame(step);
    };
    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="overflow-hidden py-12">
      <div
        ref={containerRef}
        onMouseEnter={() => {
          targetSpeedRef.current = 0;
        }}
        onMouseLeave={() => {
          targetSpeedRef.current = 0.5;
        }}
        className="flex items-center whitespace-nowrap space-x-8 overflow-x-auto no-scrollbar"
      >
        {doubledPartners.map((p, i) => (
          <a
            key={i}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="focus:outline-none "
          >
            <div
              className="
                px-4 py-2 
                bg-white rounded-xl 
                transition-shadow duration-300
                border border-gray-200 
                dark:bg-brandGray dark:border-brandGraySecondary
             
              "
            >
              <Image
                width={120}
                height={64}
                src={p.logo}
                alt={p.name}
                className="
                 h-10 md:h-16 max-w-[120px] object-contain
                  filter grayscale hover:grayscale-0 
                  transition duration-300 ease-in-out
                  icon-dark-mode
                "
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
