import CouponCard from "@/components/CouponCard/CouponCard";
import CouponServices from "@/syncs/CouponSync";

export default async function OfferPage() {
  const data = await CouponServices.getAllCoupons();

  return (
    <div className="my-[100px]">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 lg:grid-cols-2">
        {data.map(({ couponCode, minimumAmount, discountType }, i) => {
          return (
            <CouponCard
              key={i}
              couponCode={couponCode}
              minimumAmount={minimumAmount}
              percent={discountType.value}
            />
          );
        })}
      </div>
    </div>
  );
}
