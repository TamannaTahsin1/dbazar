"use client";
import DataTable from "react-data-table-component";
import { PiPrinterLight } from "react-icons/pi";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import { useEffect, useState } from "react";
import TableSelect from "@/components/Table/TableSelect";

const HomeTable = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  const [tableData, setTableData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://d-bazar-api.vercel.app/api/orders",
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setTableData(data.orders);
        setDomLoaded(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
      name: "INVOICE NO.",
      selector: (row) => row._id,
      width: "220px",
    },
    {
      name: "Order Time",
      selector: (row) => row.createdAt,
      width: "200px",
    },
    {
      name: "Customer Name",
      selector: (row) => row.user_info.name,
      width: "150px",
    },
    {
      name: "Method",
      selector: (row) => row.paymentMethod,
      width: "80px",
    },
    {
      name: "Amount",
      selector: (row) => row.total,
      width: "90px",
    },
    {
      name: "Status",
      selector: (row) => (
        <div
          className={` ${row.status === "Delivered" ? "bg-green-100 text-green-500" : row.status === "Canceled" ? "bg-red-100 text-red-500" : row.status === "Processing" ? "bg-blue-100 text-blue-500" : row.status === "Pending" ? "bg-amber-100 text-amber-500" : "bg-black"} rounded-md px-3 py-1 `}
        >
          {row.status}
        </div>
      ),
      width: "120px",
    },
    {
      name: "Action",
      selector: () => (
        <TableSelect
          defaultValue="Choose One"
          options={["Delivered", "Processing", "Pending", "Canceled"]}
        />
      ),
    },
    {
      name: "INVOICE",
      selector: () => (
        <div className="flex items-center gap-2 text-[20px] text-gray-600">
          <PiPrinterLight />
          <HiMagnifyingGlassPlus />
        </div>
      ),
      width: "100px",
    },
  ];
  const customStyles = {
    rows: {
      style: {
        minHeight: "72px",
        maxWidth: "1200px",
      },
    },
    headCells: {
      style: {
        paddingLeft: "16px",
        paddingRight: "16px",
        backgroundColor: "#3B82F6",
        color: "white",
      },
    },
    head: {
      style: {
        maxWidth: "1200px",
      },
    },
    cells: {
      style: {
        paddingLeft: "16px",
        paddingRight: "16px",
      },
    },
  };
  return (
    <div className="mx-auto max-w-[1200px] rounded-2xl shadow-[0_0_4px_rgba(0,0,0,0.1)]">
      {domLoaded ? (
        <DataTable
          data={tableData}
          columns={columns}
          pagination
          customStyles={customStyles}
          paginationRowsPerPageOptions={[5, 10, 20, 50]}
        />
      ) : (
        <div className="mx-auto h-[700px] w-full max-w-[1100px] animate-pulse space-y-6 rounded-md bg-white p-6 shadow-xl">
          <div className="mb-3 flex h-[35px] w-full items-center justify-around rounded-xl bg-gray-300">
            <p className="text-sm text-white">INVOICE NO.</p>
            <p className="text-sm text-white">ORDER TIME</p>
            <p className="text-sm text-white">CUSTOMER NAME</p>
            <p className="text-sm text-white">METHOD</p>
            <p className="text-sm text-white">AMOUNT</p>
            <p className="text-sm text-white">STATUS</p>
            <p className="text-sm text-white">ACTION</p>
            <p className="text-sm text-white">INVOICE</p>
          </div>
          <div className="mb-3 h-[20px] w-full rounded-full bg-gray-300"></div>
          <div className="h-[20px] w-full rounded-full bg-gray-300"></div>
          <div className="h-[20px] w-full rounded-full bg-gray-300"></div>
          <div className="h-[20px] w-full rounded-full bg-gray-300"></div>
          <div className="h-[20px] w-full rounded-full bg-gray-300"></div>
          <div className="h-[20px] w-full rounded-full bg-gray-300"></div>
          <div className="h-[20px] w-full rounded-full bg-gray-300"></div>
          <div className="mb-3 h-[20px] w-full rounded-full bg-gray-300"></div>
          <div className="h-[20px] w-full rounded-full bg-gray-300"></div>
          <div className="h-[20px] w-full rounded-full bg-gray-300"></div>
          <div className="h-[20px] w-full rounded-full bg-gray-300"></div>
          <div className="h-[20px] w-full rounded-full bg-gray-300"></div>
          <div className="h-[20px] w-full rounded-full bg-gray-300"></div>
          <div className="h-[20px] w-full rounded-full bg-gray-300"></div>
        </div>
      )}
    </div>
  );
};

export default HomeTable;
