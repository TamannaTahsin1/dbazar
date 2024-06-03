"use client";
import { useState } from "react";

export default function CouponCard({ couponCode, minimumAmount, percent }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
      navigator.clipboard.writeText(couponCode);
    }, 300);
  };

  return (
    <div className="custom-shadow flex h-fit w-full items-center justify-between gap-3 rounded-lg px-4 py-3">
      <div className="flex w-3/5 flex-col justify-center space-y-2 text-sm sm:text-base">
        <p>
          <span className="text-base text-primary sm:text-lg">{percent}</span>{" "}
          Off
        </p>
        <p>
          <span className="rounded-sm bg-primary/80 px-1 py-px text-white">
            121
          </span>
          :
          <span className="rounded-sm bg-primary/80 px-1 py-px text-white">
            43
          </span>
          :
          <span className="rounded-sm bg-primary/80 px-1 py-px text-white">
            23
          </span>
          :
          <span className="rounded-sm bg-primary/80 px-1 py-px text-white">
            34
          </span>
        </p>
        <p className="text-[10px] leading-[12px] text-rose-700">
          *This coupon code will apply on when you shopping more than $
          {minimumAmount}
        </p>
      </div>
      <div className="w-2/5 space-y-2">
        <p>coupon</p>
        <p className="rounded-md border border-dashed border-primary bg-primary/20 text-center text-primary">
          {couponCode}
        </p>
        <button
          onClick={handleCopy}
          disabled={isCopied}
          className="copy-button z-50 me-2 w-full rounded-md bg-primary text-center text-white"
        >
          {isCopied ? <>copied! </> : <>copy</>}
        </button>
      </div>
    </div>
  );
}
