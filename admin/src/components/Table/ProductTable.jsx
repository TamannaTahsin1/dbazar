"use client";
import DataTable from "react-data-table-component";
import { PiPrinterLight } from "react-icons/pi";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import { LuView } from "react-icons/lu";
import ToggleButton from "@/components/Button/ToggleButton";
import { useState, useEffect } from "react";

const ProductTable = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  const tableData = [
    {
      productName: "Wooden Table",
      categories: "Furniture",
      price: "$500",
      sellPrice: "$480",
      stock: 15,
      Status: "Sold Out",
      Action: "Details",
    },
    {
      productName: "Office Chair",
      categories: "Furniture",
      price: "$200",
      sellPrice: "$190",
      stock: 20,
      Status: "Selling",
      Action: "Details",
    },
    {
      productName: "Sofa Set",
      categories: "Furniture",
      price: "$1000",
      sellPrice: "$950",
      stock: 8,
      Status: "Selling",
      Action: "Details",
    },
    {
      productName: "Dining Table",
      categories: "Furniture",
      price: "$700",
      sellPrice: "$650",
      stock: 12,
      Status: "Selling",
      Action: "Details",
    },
    {
      productName: "Bed Frame",
      categories: "Furniture",
      price: "$800",
      sellPrice: "$750",
      stock: 10,
      Status: "Selling",
      Action: "Details",
    },
    {
      productName: "Bookshelf",
      categories: "Furniture",
      price: "$300",
      sellPrice: "$280",
      stock: 18,
      Status: "Sold Out",
      Action: "Details",
    },
    {
      productName: "T-Shirt",
      categories: "Clothe",
      price: "$1200",
      sellPrice: "$1150",
      stock: 6,
      Status: "Selling",
      Action: "Details",
    },
    {
      productName: "Nike",
      categories: "Shoe",
      price: "$50",
      sellPrice: "$45",
      stock: 25,
      Status: "Selling",
      Action: "Details",
    },
    {
      productName: "Armchair",
      categories: "Furniture",
      price: "$400",
      sellPrice: "$380",
      stock: 14,
      Status: "Sold Out",
      Action: "Details",
    },
    {
      productName: "Coffee Table",
      categories: "Furniture",
      price: "$250",
      sellPrice: "$240",
      stock: 22,
      Status: "Selling",
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
      width: "60px",
    },
    {
      name: "Product Name",
      selector: (row) => row.productName,
      width: "150px",
    },
    {
      name: "Categories",
      selector: (row) => row.categories,
    },
    {
      name: "Price",
      selector: (row) => row.price,
    },
    {
      name: "Sell Price",
      selector: (row) => row.sellPrice,
    },
    {
      name: "Stock",
      selector: (row) => row.stock,
      width: "80px",
    },
    {
      name: "Status",
      selector: (row) => (
        <div
          className={` ${row.Status === "Selling" ? "bg-green-100 text-green-500" : row.Status === "Sold Out" ? "bg-red-100 text-red-500" : "text-gray-500"} rounded-md px-3 py-1 `}
        >
          {row.Status}
        </div>
      ),
    },
    {
      name: "View",
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

export default ProductTable;
