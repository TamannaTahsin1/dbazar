import Container from "@/components/Container/Container";
import ProductCard from "@/components/ProductCard/ProductCard";
import ProductServices from "@/syncs/ProductSync";
import Image from "next/image";
import not from "../../../../public/Images/searching.svg";

export default async function page({ searchParams }) {
  const products = await ProductServices.getAllProducts({
    price: searchParams.price ? searchParams.price : "published",
    query: searchParams.query,
    category: searchParams.category,
    discount: searchParams.discount,
    popular: searchParams.popular,
  });
  // console.log(searchParams);
  return (
    <Container>
      <div className="py-10">
        <h1 className="rounded-lg bg-primary/40 py-2 text-center text-[22px] font-medium text-black/70">
          {searchParams.popular
            ? "Popular"
            : searchParams.discount
              ? "Discount"
              : searchParams.name
                ? searchParams.name
                : "All"}{" "}
          Products
        </h1>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {products?.products && products?.products?.length ? (
          products.products.map((productData, idx) => (
            <ProductCard key={idx} productData={productData} />
          ))
        ) : (
          <div>
            <div className="text-center">
              {searchParams.query
                ? `Nothing found for ${searchParams.query}`
                : "Nothing found"}
            </div>
            <div className="mt-4">
              <Image src={not} width="400" height="400" alt="not-found" />
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}
