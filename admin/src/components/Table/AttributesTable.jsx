"use client";
import DataTable from "react-data-table-component";
import { PiPrinterLight } from "react-icons/pi";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import { LuView } from "react-icons/lu";
import ToggleButton from "@/components/Button/ToggleButton";
import { useState, useEffect } from "react";
import Image from "next/image";

const AttributesTable = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  const tableData = [
    {
      ID: "1234",
      productName: "Graphics Card",
      displayName: "NVIDIA GeForce RTX 3080",
      option: "radio",
    },
    {
      ID: "2345",
      productName: "Monitor",
      displayName: "ASUS ROG Swift PG279Q",
      option: "radio",
    },
    {
      ID: "3456",
      productName: "Laptop",
      displayName: "MacBook Pro 16-inch",
      option: "dropdown",
    },
    {
      ID: "4567",
      productName: "Smartphone",
      displayName: "iPhone 13 Pro Max",
      option: "radio",
    },
    {
      ID: "5678",
      productName: "Processor",
      displayName: "Ryzen 5 5600G",
      option: "dropdown",
    },
    {
      ID: "6789",
      productName: "Keyboard",
      displayName: "Logitech G Pro X",
      option: "radio",
    },
    {
      ID: "7890",
      productName: "Headphones",
      displayName: "Sony WH-1000XM4",
      option: "dropdown",
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
      width: "80px",
    },

    {
      name: "ID",
      selector: (row) => row.ID,
      width: "80px",
    },
    {
      name: "Product Name",
      selector: (row) => row.productName,
    },
    {
      name: "Display Name",
      selector: (row) => row.displayName,
      width: "250px",
    },
    {
      name: "Option",
      selector: (row) => row.option,
    },
    {
      name: "value",
      selector: () => <LuView className="text-[20px] text-gray-500" />,
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
            <p className="text-sm text-white">ID</p>
            <p className="text-sm text-white">Product Name</p>
            <p className="text-sm text-white">Display Name</p>
            <p className="text-sm text-white">Value</p>
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

export default AttributesTable;
