"use client";
import Image from "next/image";
import { useState } from "react";
export default function Images({ image, title }) {
  const [cImg, setCImg] = useState(image[0]);

  return (
    <div className="mx-auto">
      <Image
        src={cImg}
        width={300}
        height={300}
        className="size-[300px] rounded-lg border"
        alt={title.en}
      />
      <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
        {image.length > 1 &&
          image.map((img, _index) => (
            <img
              key={img}
              onClick={() => setCImg(img)}
              className="rounded-lg border object-cover"
              width={300 / image.length - 8}
              height={300 / image.length}
              src={img}
              alt="member 1"
              loading="lazy"
            />
          ))}
      </div>
    </div>
  );
}
