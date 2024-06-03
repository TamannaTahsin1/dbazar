"use client";
import DataTable from "react-data-table-component";
import { PiPrinterLight } from "react-icons/pi";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import { LuView } from "react-icons/lu";
import ToggleButton from "@/components/Button/ToggleButton";
import { useState, useEffect } from "react";
import Image from "next/image";
import tshirt from "../../../public/t-shirt.png";

const CategoriesTable = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  const tableData = [
    {
      productName: "T-Shirt",
      description: "Clothe",
      Action: "Details",
    },
    {
      productName: "Nike",
      description: "Shoe",
      Action: "Details",
    },
    {
      productName: "Armchair",
      description: "Furniture",
      Action: "Details",
    },
    {
      productName: "Coffee Table",
      description: "Furniture",
      Action: "Details",
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
    },
    {
      name: "Icon",
      selector: (row) => (
        <Image className="size-14 rounded-lg" src={tshirt} alt="product" />
      ),
    },
    {
      name: "Product Name",
      selector: (row) => row.productName,
    },
    {
      name: "Description",
      selector: (row) => row.description,
    },
    {
      name: "view",
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

export default CategoriesTable;
