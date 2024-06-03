import { Button } from "./Button";
import Input from "../Input/Input";
import Select from "../Select/Select";
const status = ["Derived", "Processing", "Pending", "Cancel"];
const method = ["Card", "Cash"];
const limits = [
  "Last 7 days orders",
  "Last 10 days orders",
  "Last 15 days orders",
  "Last 20 days orders",
];
export default function OrdersButton({ searchPlaceholder }) {
  return (
    <div className="space-y-10">
      {/* upper actions */}
      <div className="flex flex-wrap items-center justify-center gap-5">
        <Input placeholder={searchPlaceholder} className="w-72" />
        <Select className="z-50 w-60" defaultValue="Status" options={status} />
        <Select className="w-60" defaultValue="Method" options={method} />
        <Select className="w-60" defaultValue="Limits" options={limits} />
        <Button className=" bg-primary">Download All Orders</Button>
      </div>
      {/* bottom actions  */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Input placeholder={searchPlaceholder} className="w-72" />
          <Input placeholder={searchPlaceholder} className="w-72" />
        </div>
        <div className="flex items-center gap-2">
          <Button className="bg-primary px-10">Filter</Button>
          <Button variant="outline" className="px-10">
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}
