import Actions from "@/components/Actions/Actions";
import Container from "@/components/Container/Container";
import ToggleButton from "@/components/Button/ToggleButton";
import CategoriesTable from "@/components/Table/CategoriesTable";
const CategoryOptions = ["Apple", "banana", "chips"];
const PriceOptions = ["$50", "$100", "$200"];

export default function page() {
  return (
    <Container>
      <h1 className="text-xl font-medium">Categories</h1>
      <Actions
        CategoryOptions={CategoryOptions}
        PriceOptions={PriceOptions}
        searchPlaceholder="Search Product"
      />
      <div className="my-10 flex justify-end">
        <ToggleButton />
      </div>
      <CategoriesTable />
    </Container>
  );
}
