import Image from "next/image";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { Button } from "../Button/Button";

export default function ProductCard({ productData }) {
  const { slug, image, prices, title } = productData;

  return (
    <div className="custom-shadow w-52 space-y-4 rounded-lg p-4">
      <div className="flex justify-center">
        <Image
          className="h-[130px] w-full rounded-lg object-fill"
          src={
            image[0]
              ? image[0]
              : "https://i.postimg.cc/ZYdvP6qP/Chinese-Broccoli-Gai-Lan-2lb.jpg"
          }
          alt="Product Image"
          width={150}
          height={130}
        />
      </div>
      <h4 className="truncate pr-4 text-xs font-medium">{title.en}</h4>
      <div className="pr flex items-center justify-between">
        <div className="flex items-end gap-1">
          <h2 className="text-xl font-semibold">$ {prices?.originalPrice}</h2>
          <h2 className={`text-xs  text-[#999999] line-through ${"hidden"}`}>
            {"discountPrice"}
          </h2>
        </div>
        <div className="rounded-md bg-slate-500 p-1 hover:bg-primary">
          <IoCartOutline color="white" className="size-6" />
        </div>
      </div>
      {/* <Rating rating={4} /> */}
      <Link href={`/products/${slug}`} className="block">
        <Button variant={"outline"} className="w-full rounded-md px-4 py-2">
          View Details
        </Button>
      </Link>
    </div>
  );
}
