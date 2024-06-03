import Actions from "@/components/Actions/Actions";
import Container from "@/components/Container/Container";
import CouponsTable from "@/components/Table/CouponsTable";
const CategoryOptions = ["Apple", "banana", "chips"];
const PriceOptions = ["$50", "$100", "$200"];
export default function page() {
  return (
    <Container>
      <h1 className="text-xl font-medium">Coupons</h1>
      <Actions
        CategoryOptions={CategoryOptions}
        PriceOptions={PriceOptions}
        searchPlaceholder="Search Product"
      />
      <div className="mt-10">
        <CouponsTable />
      </div>
    </Container>
  );
}
