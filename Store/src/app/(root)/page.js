import OrganicProduct from "@/components/OrganicProduct/OrganicProduct";
import Banner from "@/components/Banner/Banner";
import Categories from "@/components/Categories/Categories";
import PopularProduct from "@/components/PopularProduct/PopularProduct";
import DiscountProduct from "@/components/DiscountProduct/DiscountProduct";

export default function HomePage() {
  return (
    <div>
      <Banner />
      <OrganicProduct />
      <Categories />
      <PopularProduct />
      <DiscountProduct />
    </div>
  );
}
