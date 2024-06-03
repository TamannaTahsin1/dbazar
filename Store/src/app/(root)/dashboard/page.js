import Table from "@/components/Table/Table";

export default function UserDashboard() {
  // const tableData = [
  //   {
  //     ID: "3456",
  //     OrderTime: "12-12-23",
  //     Method: "Cash",
  //     Status: "Delivered",
  //     Total: "324",
  //     Action: "Details",
  //   },
  //   {
  //     ID: "1234",
  //     OrderTime: "11-11-22",
  //     Method: "Card",
  //     Status: "Processing",
  //     Total: "532",
  //     Action: "Details",
  //   },
  //   {
  //     ID: "6789",
  //     OrderTime: "10-10-21",
  //     Method: "PayPal",
  //     Status: "Pending",
  //     Total: "745",
  //     Action: "Details",
  //   },
  //   {
  //     ID: "0123",
  //     OrderTime: "01-01-12",
  //     Method: "Card",
  //     Status: "Pending",
  //     Total: "543",
  //     Action: "Details",
  //   },
  // ];

  return (
    <div>
      <div className="w-[100%] overflow-x-auto rounded-lg">
        <Table />
      </div>
    </div>
  );
}
