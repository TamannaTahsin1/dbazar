import { Button } from "../Button/Button";
import Input from "../Input/Input";
import Select from "../Select/Select";

export default function LowerActions({
  searchPlaceholder,
  CategoryOptions,
  PriceOptions,
}) {
  return (
    <div className="mt-5 flex items-center justify-end gap-5">
      <Input placeholder={searchPlaceholder} className="w-72" />
      <Select
        className="w-60 "
        defaultValue="Categories"
        options={CategoryOptions}
      />
      <Select className="w-60" defaultValue="Price" options={PriceOptions} />
      <Button className="bg-primary px-10">Filter</Button>
      <Button variant="outline" className="px-10">
        Reset
      </Button>
    </div>
  );
}
