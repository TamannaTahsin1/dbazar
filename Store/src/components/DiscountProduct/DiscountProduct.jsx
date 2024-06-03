import { Button } from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import ProductCard from "@/components/ProductCard/ProductCard";
import ProductServices from "@/syncs/ProductSync";
import Link from "next/link";
export default async function DiscountProduct() {
  const products = await ProductServices.getAllProducts({
    price: "date-added-asc",
    discount: "discount-asc",
  });

  return (
    <Container>
      <div className="space-y-6 py-10">
        <h1 className="text-center text-[22px] font-medium text-black/70">
          Latest Discount Product
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {/* dummy array  - category*/}
          {products?.products?.slice(0, 10).map((productData, idx) => (
            <ProductCard key={idx} productData={productData} />
          ))}
        </div>
        <div className="flex justify-center pt-10">
          <Link href="/products?price=date-added-asc&discount=discount-asc">
            <Button>Show More</Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
