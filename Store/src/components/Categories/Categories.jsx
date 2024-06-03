import Container from "@/components/Container/Container";
import CategoryServices from "@/syncs/CategorySync";
import CategoryCard from "./CategoryCard";

export default async function Categories() {
  const categories = await CategoryServices.getShowingCategory();

  return (
    <Container>
      <div className="space-y-6 py-10">
        <h1 className="text-center text-[22px] font-medium">Categories</h1>
        <div className="flex flex-wrap items-center justify-center gap-[20px]">
          {/* dummy array - category*/}
          {categories[0]?.children?.map((category, idx) => (
            <CategoryCard key={idx} category={category} />
          ))}
        </div>
      </div>
    </Container>
  );
}
