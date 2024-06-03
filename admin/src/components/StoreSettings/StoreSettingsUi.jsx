import { Button } from "../Button/Button";
import Input from "../Input/Input";
import ToggleButton from "../Button/ToggleButton";

export default function StoreSettingsUi() {
  return (
    <div className="w-[100%] rounded-lg border ">
      <div className="w-full space-y-10  rounded-lg px-20 py-10">
        <ToggleButton title="Enable Cash On Delivery"></ToggleButton>
        <ToggleButton title="Enable Stripe Payment"></ToggleButton>
        <Input className="border-gray-400 " type="text" label="Stripe Key" />

        <Input className="border-gray-400 " type="text" label="Stripe Secret" />
        <ToggleButton title="Enable Google Login"></ToggleButton>
        <Input
          className="border-gray-400 "
          type="text"
          label="Google Client ID"
        />
        <ToggleButton title="Enable Google Analytics"></ToggleButton>
        <Input
          className="border-gray-400 "
          type="text"
          label="Google Analytics Key"
        />
        <ToggleButton title="Enable Tawk Chat"></ToggleButton>
        <Input
          className="border-gray-400 "
          type="text"
          label="Tawk Chat Property ID"
        />
        <Input
          className="border-gray-400 "
          type="text"
          label="Tawk Chat Widget ID"
        />
        <div className="flex justify-end">
          <Button className="bg-primary hover:bg-primary-700">Update</Button>
        </div>
      </div>
    </div>
  );
}
