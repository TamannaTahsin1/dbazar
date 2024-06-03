import { BsPeople } from "react-icons/bs";
import { IoPricetagsOutline } from "react-icons/io5";
import { PiNotebookLight } from "react-icons/pi";
import { SlHandbag } from "react-icons/sl";
import ContentBox from "../ContentBox/ContentBox";
import TodaysSalesCard from "./TodaysSalesCard";

const todaySales = [
  {
    icon: <PiNotebookLight />,
    number: "$1.8k",
    title: "Total sales",
    details: "+8% from yesterday",
  },
  {
    icon: <SlHandbag />,
    number: "340",
    title: "Total Orders",
    details: "+4% from yesterday",
  },
  {
    icon: <IoPricetagsOutline />,
    number: "$1.2k",
    title: "Cash: $600",
  },
  {
    icon: <BsPeople />,
    number: "25",
    title: "New Customer",
  },
];

export default function TodaysSales() {
  return (
    <div>
      <div className="mb-4">
        <h1 className="text-xl font-semibold">Today’s Sales</h1>
        <p className="text-xs text-gray-400">Sales Summary</p>
      </div>
      <div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-20">
          {todaySales?.map(({ icon, number, title, details }, i) => (
            <TodaysSalesCard
              key={i}
              icon={icon}
              number={number}
              title={title}
              details={details}
            />
          ))}
        </div>
        <div className="mt-10">
          <ContentBox />
        </div>
      </div>
    </div>
  );
}
