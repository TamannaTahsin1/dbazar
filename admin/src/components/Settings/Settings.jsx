import { Button } from "../Button/Button";
import Input from "../Input/Input";
import Select from "../Select/Select";

export default function SettingsUi() {
  const currency = ["Dollar", "Euro"];
  const date = ["DD/MM/YY", "DD/MM/YY", "DD/MM/YY"];
  const width = ["55mm", "80mm", "A4"];
  const times = [
    "Europe/London (GMT+12:00)",
    "New York (GMT+12:00)",
    "Africa/Asama (GMT+12:00)",
    "Europe/Jersey (GMT+12:00)",
  ];
  return (
    <div className="w-[100%] rounded-lg border ">
      <div className="w-full space-y-10  rounded-lg px-20 py-10">
        <Input
          className="border-gray-400 "
          type="text"
          label="Number of images per product"
        />
        <Select
          className="w-full border-gray-400"
          label="Default  Currency"
          options={currency}
          defaultValue="Select Currency"
        />
        <Select
          className="w-full border-gray-400"
          label="Default time zone"
          options={times}
          defaultValue="Select time zone"
        />
        <Select
          className="w-full border-gray-400"
          label="Default date format"
          options={date}
          defaultValue="Select date format"
        />
        <Select
          className="w-full border-gray-400"
          label="Receipt size (width) "
          options={width}
          defaultValue="Select receipt size"
        />
        <Input
          className="border-gray-400 "
          type="text"
          label="Receipt size (width) "
        />
        <Input className="border-gray-400 " type="text" label="Shop name" />
        <Input className="border-gray-400 " type="text" label="Company name" />
        <Input className="border-gray-400 " type="text" label="VAT Number" />
        <Input className="border-gray-400 " type="text" label="Address" />
        <Input className="border-gray-400 " type="text" label="Post code" />
        <Input className="border-gray-400 " type="text" label="Contact" />
        <Input className="border-gray-400 " type="text" label="E-mail " />
        <Input className="border-gray-400 " type="text" label="Website" />
        <div className="flex justify-end">
          <Button className="bg-primary hover:bg-primary-700">Update</Button>
        </div>
      </div>
    </div>
  );
}
