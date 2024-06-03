"use client";
import { Chart } from "react-google-charts";
import WeeklySalesSkeleton from "./WeeklySalesSkeleton";

export const data = [
  ["Week", "Sales"],
  ["10-03-2024", 1000],
  ["11-03-2024", 1170],
  ["12-03-2024", 660],
  ["13-03-2024", 1030],
  ["14-03-2024", 1170],
  ["15-03-2024", 660],
  ["16-03-2024", 1030],
];

export const options = {
  chart: {
    title: "Weekly Sales",
    backgroundColor: "red",
  },
  colors: "#3B82F6",
  legend: {
    position: "none",
  },
};

export default function WeeklySalesChart() {
  return (
    <Chart
      chartType="Bar"
      className="border bg-white p-5 shadow-[0_0_4px_#ddd]"
      width="100%"
      loader={<WeeklySalesSkeleton />}
      style={{
        maxWidth: "700px",
        borderRadius: "8px",
      }}
      height="400px"
      data={data}
      options={options}
    />
  );
}
