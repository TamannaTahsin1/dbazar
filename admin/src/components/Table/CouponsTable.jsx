"use client";
import DataTable from "react-data-table-component";
import { PiPrinterLight } from "react-icons/pi";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import { LuView } from "react-icons/lu";
import ToggleButton from "@/components/Button/ToggleButton";
import { useState, useEffect } from "react";

const CouponsTable = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  const tableData = [
    {
      productName: "Oak Desk",
      code: "12345",
      discount: "25%",
      startDate: "05-05-23",
      endDate: "25-05-23",
      status: "Active",
    },
    {
      productName: "Pine Coffee Table",
      code: "67890",
      discount: "10%",
      startDate: "08-08-23",
      endDate: "28-08-23",
      status: "Active",
    },
    {
      productName: "Mahogany Dining Table",
      code: "24680",
      discount: "40%",
      startDate: "11-11-23",
      endDate: "01-12-23",
      status: "Expired",
    },
    {
      productName: "Cherry Wood Nightstand",
      code: "13579",
      discount: "20%",
      startDate: "09-09-23",
      endDate: "29-09-23",
      status: "Active",
    },
    {
      productName: "Birch Side Table",
      code: "97531",
      discount: "15%",
      startDate: "07-07-23",
      endDate: "27-07-23",
      status: "Expired",
    },
    {
      productName: "Maple End Table",
      code: "80246",
      discount: "30%",
      startDate: "03-03-23",
      endDate: "23-03-23",
      status: "Active",
    },
    {
      productName: "Walnut Console Table",
      code: "35791",
      discount: "35%",
      startDate: "02-02-23",
      endDate: "22-02-23",
      status: "Expired",
    },
  ];
  const columns = [
    {
      name: "",
      selector: () => (
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          className="size-5 rounded border-gray-300 bg-gray-100 text-blue-600  dark:border-gray-600 dark:bg-gray-700"
        />
      ),
      width: "60px",
    },
    {
      name: "Product Name",
      selector: (row) => row.productName,
      width: "180px",
    },
    {
      name: "Code",
      selector: (row) => row.code,
      width: "100px",
    },
    {
      name: "Discount",
      selector: (row) => row.discount,
      width: "100px",
    },
    {
      name: "Start Date",
      selector: (row) => row.startDate,
      width: "150px",
    },

    {
      name: "End Date",
      selector: (row) => row.endDate,
      width: "150px",
    },
    {
      name: "Status",
      selector: (row) => (
        <div
          className={` ${row.status === "Active" ? "bg-green-100 text-green-500" : row.status === "Expired" ? "bg-red-100 text-red-500" : "text-gray-500"} rounded-md px-3 py-1 `}
        >
          {row.status}
        </div>
      ),
    },
    {
      name: "Published",
      selector: () => <ToggleButton />,
    },
    {
      name: "Action",
      selector: () => (
        <div className="flex items-center gap-2 text-[20px] text-gray-600">
          <PiPrinterLight />
          <HiMagnifyingGlassPlus />
        </div>
      ),
      width: "80px",
    },
  ];

  const customStyles = {
    rows: {
      style: {
        minHeight: "72px",
        maxWidth: "1150px",
      },
    },
    headCells: {
      style: {
        paddingLeft: "16px", // override the cell padding for head cells
        paddingRight: "16px",
        backgroundColor: "#3B82F6",
        color: "white",
      },
    },
    head: {
      style: {
        maxWidth: "1150px",
      },
    },
    cells: {
      style: {
        paddingLeft: "16px", // override the cell padding for head cells
        paddingRight: "16px",
      },
    },
  };

  return (
    <div className="mx-auto max-w-[1100px] rounded-2xl shadow-[0_0_4px_rgba(0,0,0,0.1)]">
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
            <p className="text-sm text-white">Check</p>
            <p className="text-sm text-white">Product Name</p>
            <p className="text-sm text-white">Code</p>
            <p className="text-sm text-white">Discount</p>
            <p className="text-sm text-white">Start Date</p>
            <p className="text-sm text-white">End Date</p>
            <p className="text-sm text-white">Status</p>
            <p className="text-sm text-white">Published</p>
            <p className="text-sm text-white">Action</p>
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

export default CouponsTable;
