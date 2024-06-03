"use client";
import DataTable from "react-data-table-component";
import { PiPrinterLight } from "react-icons/pi";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import { LuView } from "react-icons/lu";
import ToggleButton from "@/components/Button/ToggleButton";
import { useState, useEffect } from "react";

const StaffTable = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  const tableData = [
    {
      name: "Alice",
      joiningDate: "5-20-22",
      email: "alice@example.com",
      contact: "1234567890",
      role: "Manager",
      Status: "Active",
    },
    {
      name: "John",
      joiningDate: "10-15-21",
      email: "john_doe@yahoo.com",
      contact: "9876543210",
      role: "Engineer",
      Status: "Expired",
    },
    {
      name: "Emily",
      joiningDate: "8-7-24",
      email: "emily@example.com",
      contact: "2468135790",
      role: "HR",
      Status: "Active",
    },
    {
      name: "Michael",
      joiningDate: "12-31-20",
      email: "mike@gmail.com",
      contact: "5555555555",
      role: "Developer",
      Status: "Active",
    },
    {
      name: "Sophia",
      joiningDate: "4-11-23",
      email: "sophia@example.com",
      contact: "1112223333",
      role: "Designer",
      Status: "Expired",
    },
    {
      name: "David",
      joiningDate: "6-8-22",
      email: "david@example.com",
      contact: "4444444444",
      role: "Analyst",
      Status: "Active",
    },
    {
      name: "Jennifer",
      joiningDate: "3-16-21",
      email: "jenny@yahoo.com",
      contact: "6666666666",
      role: "Marketing",
      Status: "Expired",
    },
  ];

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      width: "100px",
    },
    {
      name: "Joining Date",
      selector: (row) => row.joiningDate,
      width: "100px",
    },
    {
      name: "Email",
      selector: (row) => row.email,
      width: "200px",
    },
    {
      name: "Contact",
      selector: (row) => row.contact,
      width: "150px",
    },
    {
      name: "Role",
      selector: (row) => row.role,
      width: "120px",
    },
    {
      name: "Status",
      selector: (row) => (
        <div
          className={` ${row.Status === "Active" ? "bg-green-100 text-green-500" : row.Status === "Expired" ? "bg-red-100 text-red-500" : "text-gray-500"} rounded-md px-3 py-1 `}
        >
          {row.Status}
        </div>
      ),
    },
    {
      name: "View",
      selector: () => <LuView className="text-[20px] text-gray-500" />,
      width: "100px",
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
            <p className="text-sm text-white">Categories</p>
            <p className="text-sm text-white">Price</p>
            <p className="text-sm text-white">Sell PRice</p>
            <p className="text-sm text-white">STATUS</p>
            <p className="text-sm text-white">view</p>
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

export default StaffTable;
