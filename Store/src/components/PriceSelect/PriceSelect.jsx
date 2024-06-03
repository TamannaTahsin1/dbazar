import Container from "@/components/Container/Container";
import ProductCard from "@/components/ProductCard/ProductCard";
import ProductServices from "@/syncs/ProductSync";
import { useEffect, useState } from "react";

export default async function Products({ searchParams }) {
  const [selectedPrice, setSelectedPrice] = useState(""); // State for selected price filter (optional, if state management is needed)
  const [products, setProducts] = useState([]); // State to store products (optional, improve performance for frequent filtering)

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value); // Update state (optional, if state management is needed)
  };

  //   useEffect(() => {
  //     const fetchProducts = async () => {
  //       const updatedSearchParams = {
  //         ...searchParams, // Spread existing search parameters
  //         price: selectedPrice || searchParams.price, // Add or update price filter
  //       };
  //       const fetchedProducts =
  //         await ProductServices.getAllProducts(updatedSearchParams);
  //       setProducts(fetchedProducts.products); // Update products state (optional, for performance)
  //     };

  //     fetchProducts(); // Fetch products initially based on initial searchParams
  //   }, [searchParams, selectedPrice]); // Update data when searchParams or selectedPrice changes

  // ... rest of your component

  return (
    <Container>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
        {products.length ? (
          products.map((productData, idx) => (
            <ProductCard key={idx} productData={productData} />
          ))
        ) : (
          <div>
            nothing found for {searchParams.query || searchParams.category}
          </div>
        )}
      </div>
    </Container>
  );
}
