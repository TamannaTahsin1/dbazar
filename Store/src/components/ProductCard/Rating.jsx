import React from "react";
import { FaStar } from "react-icons/fa";

export default function Rating({ rating }) {
  return (
    <div className="flex justify-center">
      {[...Array(5)].map((star, idx) => {
        const ratingValue = idx + 1;
        return (
          <FaStar
            key={idx}
            size={20}
            className={` ${
              ratingValue <= Math.floor(rating)
                ? "text-[#efd863]"
                : "text-slate-300"
            }`}
          />
        );
      })}
    </div>
  );
}
