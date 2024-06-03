import Image from "next/image";
import coverImg from "../../../public/Images/newCover.jpg";

export default function Cover({ coverHeading }) {
  return (
    <div className="relative -z-10">
      <Image
        className="h-full"
        placeholder="blur"
        src={coverImg}
        alt="Cover Image"
      />
      <div className="absolute inset-0 flex h-full w-full items-center justify-center">
        <h1 className="text-4xl font-semibold text-black">{coverHeading}</h1>
      </div>
    </div>
  );
}
