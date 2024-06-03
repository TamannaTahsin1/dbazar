"use client";
import DataTable from "react-data-table-component";
import { PiPrinterLight } from "react-icons/pi";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import { useEffect, useState } from "react";
import TableSelect from "@/components/Table/TableSelect";

const HomeTable = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const tableData = [
    {
      ID: "5678",
      OrderTime: "Jan 5 2024 - 2:14 pm",
      CustomerName: "John Doe",
      Method: "Cash",
      Status: "Completed",
      Amount: "$289",
      Action: "Details",
    },
    {
      ID: "9012",
      OrderTime: "Feb 22 2024 - 10:45 am",
      CustomerName: "Jane Smith",
      Method: "PayPal",
      Status: "Pending",
      Amount: "$765",
      Action: "Details",
    },
    {
      ID: "3456",
      OrderTime: "Mar 10 2024 - 3:32 pm",
      CustomerName: "Michael Johnson",
      Method: "Card",
      Status: "Canceled",
      Amount: "$423",
      Action: "Details",
    },
    {
      ID: "7890",
      OrderTime: "Apr 3 2024 - 8:19 am",
      CustomerName: "Emily Davis",
      Method: "Cash",
      Status: "Processing",
      Amount: "$621",
      Action: "Details",
    },
    {
      ID: "2345",
      OrderTime: "May 15 2024 - 5:57 pm",
      CustomerName: "David Wilson",
      Method: "Card",
      Status: "Completed",
      Amount: "$932",
      Action: "Details",
    },
    {
      ID: "6789",
      OrderTime: "Jun 8 2024 - 11:23 am",
      CustomerName: "Sarah Brown",
      Method: "PayPal",
      Status: "Processing",
      Amount: "$147",
      Action: "Details",
    },
    {
      ID: "0123",
      OrderTime: "Jul 20 2024 - 6:08 pm",
      CustomerName: "Chris Taylor",
      Method: "Card",
      Status: "Pending",
      Amount: "$845",
      Action: "Details",
    },
    {
      ID: "4567",
      OrderTime: "Aug 11 2024 - 9:55 am",
      CustomerName: "Amanda Clark",
      Method: "Cash",
      Status: "Processing",
      Amount: "$376",
      Action: "Details",
    },
    {
      ID: "8901",
      OrderTime: "Sep 29 2024 - 4:41 pm",
      CustomerName: "James Martinez",
      Method: "PayPal",
      Status: "Completed",
      Amount: "$582",
      Action: "Details",
    },
  ];
  const columns = [
    {
      name: "INVOICE NO.",
      selector: (row) => row.ID,
      width: "120px",
    },
    {
      name: "Order Time",
      selector: (row) => row.OrderTime,
      width: "200px",
    },
    {
      name: "Customer Name",
      selector: (row) => row.CustomerName,
      width: "150px",
    },
    {
      name: "Method",
      selector: (row) => row.Method,
      width: "120px",
    },
    {
      name: "Amount",
      selector: (row) => row.Amount,
      width: "80px",
    },
    {
      name: "Status",
      selector: (row) => (
        <div
          className={` ${row.Status === "Completed" ? "bg-green-100 text-green-500" : row.Status === "Canceled" ? "bg-red-100 text-red-500" : row.Status === "Processing" ? "bg-blue-100 text-blue-500" : row.Status === "Pending" ? "bg-amber-100 text-amber-500" : "bg-black"} rounded-md px-3 py-1 `}
        >
          {row.Status}
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
        paddingLeft: "16px",
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
        paddingLeft: "16px",
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
