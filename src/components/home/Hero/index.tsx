import React, { useRef, useEffect, useState } from "react";
import { HeroProps } from "@/src/types";
import Image from "next/image";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

const Hero: React.FC<HeroProps> = ({ data }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const slideCount = data.length;

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideCount);
    }, 3500);
    return () => clearInterval(timer);
  }, [slideCount]);

  useEffect(() => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const slideWidth = isMobile
      ? container.clientWidth
      : container.clientWidth * 0.7 + 20;
    container.scrollTo({ left: current * slideWidth, behavior: "smooth" });
  }, [current, isMobile]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slideCount) % slideCount);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slideCount);
  };

  const onDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    const container = sliderRef.current!;
    isDragging.current = true;
    container.classList.add("cursor-grabbing");
    startX.current =
      "touches" in e
        ? e.touches[0].pageX - container.offsetLeft
        : (e as React.MouseEvent).pageX - container.offsetLeft;
    scrollLeft.current = container.scrollLeft;
  };

  const onDragEnd = () => {
    const container = sliderRef.current!;
    isDragging.current = false;
    container.classList.remove("cursor-grabbing");
  };

  const onDragging = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const container = sliderRef.current!;
    const x =
      "touches" in e
        ? e.touches[0].pageX - container.offsetLeft
        : (e as React.MouseEvent).pageX - container.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    container.scrollLeft = scrollLeft.current - walk;
  };

  if (!data || data.length === 0) {
    return <div>No hero items available</div>;
  }

  return (
    <div className="relative w-full">
      <div
        ref={sliderRef}
        className="slider w-full overflow-x-scroll scroll-smooth snap-x snap-mandatory flex h-[264px] md:h-[540px] gap-[20px] cursor-grab"
        onMouseDown={onDragStart}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
        onMouseMove={onDragging}
        onTouchStart={onDragStart}
        onTouchEnd={onDragEnd}
        onTouchMove={onDragging}
      >
        {data.map((item, idx) => (
          <div
            key={idx}
            className={`snap-start flex-none ${
              isMobile ? "w-full" : "w-[70%]"
            } h-full relative`}
          >
            <a
              href={item.button_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full"
            >
              <Image
                width={800}
                height={520}
                src={item.image}
                alt={`Promotion ${idx + 1}`}
                className="w-full h-full object-cover rounded-[34px]"
              />
            </a>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 md:left-[-26px] transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-brandRed rounded-lg md:rounded-2xl p-2 md:p-3 shadow-md"
        aria-label="Previous slide"
      >
        <HiOutlineArrowLeft  className="size-3.5 md:size-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 md:right-[-26px] transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-brandRed rounded-lg md:rounded-2xl p-2 md:p-3 shadow-md"
        aria-label="Next slide"
      >
        <HiOutlineArrowRight className="size-3.5 md:size-6" />
      </button>
    </div>
  );
};

export default Hero;
