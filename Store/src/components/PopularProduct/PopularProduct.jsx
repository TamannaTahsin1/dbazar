import { Button } from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import ProductCard from "@/components/ProductCard/ProductCard";
import ProductServices from "@/syncs/ProductSync";
import Link from "next/link";
export default async function PopularProduct() {
  const products = await ProductServices.getAllProducts({ popular: true });
  // console.log(products);

  return (
    <Container>
      <div className="space-y-6 py-10">
        <h1 className="text-center text-[22px] font-medium text-black/70">
          Popular Products
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {/* dummy array  - category*/}
          {products?.products?.slice(0, 15).map((productData, idx) => (
            <ProductCard key={`product_${idx}`} productData={productData} />
          ))}
        </div>
        <div className="flex justify-center pt-10">
          <Link href="/products?popular=true">
            <Button>Show More</Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
