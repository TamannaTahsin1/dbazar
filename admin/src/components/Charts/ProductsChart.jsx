import ChartDetails from "./ChartDetails";

export default function ProductsChart() {
  const ProductsDetails = [
    {
      serial: "01",
      names: "Vegetables",
      ProgressNumber: "78",
    },
    {
      serial: "02",
      names: "T-Shirts",
      ProgressNumber: "67",
    },
    {
      serial: "03",
      names: "Watch",
      ProgressNumber: "73",
    },
    {
      serial: "04",
      names: "Furniture",
      ProgressNumber: "54",
    },
    {
      serial: "05",
      names: "Shoes",
      ProgressNumber: "45",
    },
  ];
  return (
    <div className="md:mt-10">
      <div className="h-80 w-[100%] space-y-6 rounded-xl border bg-white p-5 shadow-[0_0_4px_#ddd] lg:w-[500px]">
        <h1 className="text-sm font-medium">Best Selling Products</h1>
        <div className="flex items-center justify-between border-b-2 py-1 text-sm">
          <p>Name</p>
          <p>Popularity</p>
          <p>Sales</p>
        </div>
        {ProductsDetails?.map(({ serial, names, ProgressNumber }, i) => (
          <ChartDetails
            key={i}
            serial={serial}
            names={names}
            ProgressNumber={ProgressNumber}
          />
        ))}
      </div>
    </div>
  );
}
