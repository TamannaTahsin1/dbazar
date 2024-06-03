import { Button } from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import { IoBagHandle } from "react-icons/io5";

export default function OrderSummary() {
  return (
    <div className="sticky top-32 z-0 rounded-lg border p-5">
      <div>
        <h1 className="pb-5 text-center">Order Summary</h1>
        <div className="flex flex-col items-center rounded-lg bg-black/5 py-16 text-sm">
          <IoBagHandle size={40} className="text-black/30" />
          <p>No item added yet</p>
        </div>
        <div className="my-3 flex items-center gap-5">
          <Input type="search" className="bg-primary/10 " />
          <Button className="border border-primary bg-transparent text-primary hover:bg-primary hover:text-white">
            Apply
          </Button>
        </div>
        <div className="space-y-2">
          <p className="flex justify-between">
            Quantity: <span className="text-primary">00</span>
          </p>
          <p className="flex justify-between">
            Items Total: <span className="text-primary">$0.00</span>
          </p>
          <p className="flex justify-between">
            Shipping Cost: <span className="text-primary">$0.00</span>
          </p>
          <p className="flex justify-between">
            Discount: <span className="text-primary">$0.00</span>
          </p>

          <hr className="border-black" />
          <p className="flex justify-between text-lg">
            Total Cost : <span className="text-primary">$0.00</span>
          </p>
        </div>
      </div>
    </div>
  );
}
