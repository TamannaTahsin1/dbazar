import OrderSummary from "@/components/OrderSummary/OrderSummary";
import PersonalDetails from "@/components/PersonalDetails/PersonalDetails";
import ShippingDetails from "@/components/ShippingDetails/ShippingDetails";
import Container from "@/components/Container/Container";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function Checkout() {
  return (
    <div className="relative">
      <Container>
        <div className="mt-10 flex gap-10">
          <div className="flex-1">
            <PersonalDetails />
            <ShippingDetails />
            <div className="mt-5 flex gap-10">
              <button className="flex w-full items-center justify-center gap-2 rounded-md px-2 py-2 shadow-[0_0_4px_#ddd] duration-150 hover:bg-primary hover:text-white">
                <BsArrowLeft size={20} /> Continue Shipping
              </button>
              <button className="flex w-full items-center justify-center gap-2 rounded-md bg-primary px-2 py-2 text-white shadow-[0_0_4px_#ddd] duration-150">
                Confirm Order <BsArrowRight size={20} />
              </button>
            </div>
          </div>
          <div className="w-[40%]">
            <OrderSummary />
          </div>
        </div>
      </Container>
    </div>
  );
}
