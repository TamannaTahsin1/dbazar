import Container from "@/components/Container/Container";
import { Button } from "@/components/Button/Button";
import Link from "next/link";
export default function OrganicProduct() {
  return (
    <Container>
      <div className="mx-3 my-6 flex flex-col items-center justify-between gap-2 rounded-2xl bg-primary/20 px-5 py-4 sm:my-8 sm:px-6 md:flex-row md:px-8 lg:my-10 lg:px-10 lg:py-6">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-xl font-medium text-primary sm:text-2xl lg:text-3xl">
            100% Natural Quality Organic Product
          </h3>
          <p className="text-sm text-[#212121]/60 md:text-base">
            See Our latest discounted products from here and get a special
            discount
          </p>
        </div>
        <div>
          <Link href="/products?discount=discount-asc">
            <Button>Shop Now</Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
