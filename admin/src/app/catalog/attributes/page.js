import Actions from "@/components/Actions/Actions";
import Container from "@/components/Container/Container";
import AttributesTable from "@/components/Table/AttributesTable";

const CategoryOptions = ["Apple", "banana", "chips"];
const PriceOptions = ["$50", "$100", "$200"];
export default function page() {
  return (
    <Container>
      <h1 className="text-xl font-medium">Attributes</h1>
      <Actions
        CategoryOptions={CategoryOptions}
        PriceOptions={PriceOptions}
        searchPlaceholder="Search Product"
      />
      <div className="mt-10">
        <AttributesTable />
      </div>
    </Container>
  );
}
