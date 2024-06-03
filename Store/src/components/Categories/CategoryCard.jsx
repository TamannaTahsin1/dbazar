import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({ category }) {
  const { _id, name, icon } = category;
  return (
    <Link href={`/products?name=${name.en}&category=${_id}`}>
      <div className="custom-shadow flex w-[150px] flex-col items-center justify-center gap-5 rounded-lg px-3 py-4">
        <Image width={32} height={32} src={icon} alt={`${name.en}`} />
        <p className="text-xs">{name.en}</p>
      </div>
    </Link>
  );
}
