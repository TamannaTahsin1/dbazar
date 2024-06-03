import Container from "@/components/Container/Container";
import CouponCard from "@/components/CouponCard/CouponCard";
import BannerCarousel from "./BannerCarousel";

async function getCoupon() {
  const res = await fetch("https://d-bazar-api.vercel.app/api/coupon");

  return res.json();
}

export default async function Banner() {
  const coupon = await getCoupon();
  return (
    <Container>
      <div className="flex flex-col gap-3 md:flex-row">
        <div className="w-full">
          <BannerCarousel />
        </div>
      </div>
    </Container>
  );
}
