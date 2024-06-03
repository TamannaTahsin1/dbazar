import Input from "@/components/Input/Input";
import RadioInput from "@/components/RadioInput/RadioInput";
import { FaCreditCard, FaMoneyBill, FaShippingFast } from "react-icons/fa";

export default function ShippingDetails() {
  return (
    <div className="mt-10">
      <h1 className="font-semibold">Shipping Details</h1>
      <Input
        type="text"
        label="Street Address"
        id="_street_address_checkout"
      ></Input>
      <div className="flex gap-10">
        <Input type="text" label="City" id="_city_checkout"></Input>
        <Input type="text" label="Country" id="_country_checkout"></Input>
        <Input type="number" label="Zip Code" id="_zip_code_checkout"></Input>
      </div>
      {/* shipping cost */}
      <h1 className="my-3">Shipping Cost</h1>
      <div className="flex gap-10">
        <RadioInput id="_ups_today_checkout" name="_ups">
          <FaShippingFast className="w-10" />
          <div>
            <h1 className="text-xs font-semibold">UPS</h1>
            <p className="text-xs">Delivery: Todays Cost: $50</p>
          </div>
        </RadioInput>
        <RadioInput id="_ups_7days_checkout" name="_ups">
          <FaShippingFast className="w-10" />
          <div>
            <h1 className="text-xs font-semibold">UPS</h1>
            <p className="text-xs">Delivery: Todays Cost: $20</p>
          </div>
        </RadioInput>
      </div>
      {/* shipping cost */}
      <h1 className="my-3">Payment method</h1>
      <div className="flex gap-10">
        <RadioInput id="_COD_checkout" name="_delivery" className="py-3">
          <FaMoneyBill className="w-10" />
          <h1 className="text-xs font-semibold">Cash On Delivery</h1>
        </RadioInput>
        <RadioInput id="_CC_checkout" name="_delivery" className="py-3">
          <FaCreditCard className="w-10" />
          <h1 className="text-xs font-semibold">Credit Card</h1>
        </RadioInput>
      </div>
    </div>
  );
}
