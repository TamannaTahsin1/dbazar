"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import image1 from "../../../public/Images/bImage1.jpg";
import image2 from "../../../public/Images/bImage2.jpg";
import image3 from "../../../public/Images/bImage3.jpg";

export default function BannerCarousel() {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliderImages = [image1, image2, image3];
  const nextSlider = useCallback(
    () =>
      setCurrentSlider((currentSlider) => {
        return currentSlider === sliderImages.length - 1
          ? 0
          : currentSlider + 1;
      }),
    [sliderImages.length],
  );

  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [nextSlider]);

  return (
    <div className="relative -z-10 h-[420px] w-full overflow-hidden">
      {/* dots */}
      <div className="absolute bottom-4 flex w-full  items-center justify-center gap-1 rounded-full">
        {sliderImages.map((_, inx) => (
          <button
            key={`banner_${inx}`}
            className={`rounded-full duration-300 ${
              currentSlider === inx ? "w-2 bg-primary" : "w-2 bg-slate-200"
            } h-2`}
          ></button>
        ))}
      </div>
      {/* Carousel container */}
      <div
        className="relative -z-20 flex transform-gpu duration-300 ease-linear"
        style={{ transform: `translateX(-${currentSlider * 100}%)` }}
      >
        {/* sliders */}
        {sliderImages.map((slide, inx) => (
          <Image
            key={`${inx}_bannerImage`}
            src={slide}
            className="h-[420px] min-w-full bg-black/20"
            alt={`Slider - ${inx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
