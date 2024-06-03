import ProductsChart from "@/components/Charts/ProductsChart";
import WeeklySalesChart from "@/components/Charts/WeeklySalesChart";
import Statistics from "@/components/Statistics/Statistics";
import Container from "@/components/Container/Container";
import HomeTable from "@/components/Table/HomeTable";

export default function Dashboard() {
  return (
    <>
      <Statistics />
      <Container>
        <div className="my-10 flex flex-wrap items-start justify-between gap-20">
          <WeeklySalesChart />
          <ProductsChart />
        </div>
      </Container>
      <HomeTable />
    </>
  );
}
