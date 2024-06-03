import { MdDone, MdPendingActions } from "react-icons/md";
import { RiPassPendingFill } from "react-icons/ri";
import { BsCart } from "react-icons/bs";

const contentBoxItems = [
  {
    icon: <BsCart />,
    title: "Total Order",
    value: 557,
  },
  {
    icon: <RiPassPendingFill />,
    title: "Orders pending",
    value: 447,
  },
  {
    icon: <MdPendingActions />,
    title: "Orders Processing",
    value: 335,
  },
  {
    icon: <MdDone />,
    title: "Orders Complete",
    value: 637,
  },
];



export default function ContentBox() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-10 text-sm ">
      {contentBoxItems.map(({ icon, title, value }, i) => (
        <div
          key={i}
          className="flex items-center justify-between gap-4 rounded-md border px-4 py-2 "
        >
          <div className="rounded-full bg-primary p-2 text-xl text-white">
            {icon}
          </div>
          <div className="space-y-1">
            <h1>{title}</h1>
            <p className="font-semibold">{value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
