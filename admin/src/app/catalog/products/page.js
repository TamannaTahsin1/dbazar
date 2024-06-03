import ProductTable from "@/components/Table/ProductTable";
import Actions from "@/components/Actions/Actions";
import Container from "@/components/Container/Container";
const CategoryOptions = ["Apple", "banana", "chips"];
const PriceOptions = ["$50", "$100", "$200"];
export default function Products() {
  return (
    <Container>
      <h1 className="text-xl font-medium">Products</h1>
      <Actions
        CategoryOptions={CategoryOptions}
        PriceOptions={PriceOptions}
        searchPlaceholder="Search Product "
      />
      <div className="mt-10">
        <ProductTable />
      </div>
    </Container>
  );
}
