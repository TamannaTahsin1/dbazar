import { Button } from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import Image from "next/image";

export default function page() {
  return (
    <Container>
      <h1 className="text-xl font-medium">Products Details</h1>
      <div className="flex items-center gap-10">
        <Image src="/view.png" width="276" height="280" alt="product" />
        <div className="space-y-2 text-sm">
          <p className="text-gray-500">
            status : <span className="text-red-500">This Product Hidden</span>
          </p>
          <h2 className="text-3xl font-semibold">T-shirt</h2>
          <p className="text-gray-500">SKU: DD</p>
          <h2 className="text-3xl font-semibold">$70</h2>
          <p>
            <span className="rounded-lg bg-green-500/30 px-3 py-px text-green-600">
              In Stock
            </span>{" "}
            QUANTITY: 20
          </p>
          <p>Category : Test</p>
          <Button>Edit Product</Button>
        </div>
      </div>
    </Container>
  );
}
