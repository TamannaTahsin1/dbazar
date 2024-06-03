"use client";
import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { PiPrinterLight } from "react-icons/pi";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import { FaEuroSign, FaBangladeshiTakaSign } from "react-icons/fa6";
import { FaPoundSign, FaDollarSign } from "react-icons/fa";
import ToggleButton from "../Button/ToggleButton";
export default function CurrencyTable() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  const tableData = [
    {
      name: "Dollar",
      isoCode: <FaDollarSign />,
    },
    {
      name: "Euro",
      isoCode: <FaEuroSign />,
    },
    {
      name: "Pound",
      isoCode: <FaPoundSign />,
    },
    {
      name: "Taka",
      isoCode: <FaBangladeshiTakaSign />,
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
      name: " Name",
      selector: (row) => row.name,
    },
    {
      name: "ISO Code",
      selector: (row) => row.isoCode,
      width: "250px",
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
          customStyles={customStyles}
        />
      ) : (
        <div className="mx-auto h-[700px] w-full max-w-[1100px] animate-pulse space-y-6 rounded-md bg-white p-6 shadow-xl">
          <div className="mb-3 flex h-[35px] w-full items-center justify-around rounded-xl bg-gray-300">
            <p className="text-sm text-white">Check</p>
            <p className="text-sm text-white"> Name</p>
            <p className="text-sm text-white">ISO Code</p>
            <p className="text-sm text-white">Enable</p>
            <p className="text-sm text-white">Action</p>
          </div>
          <div className="mb-3 h-[20px] w-full rounded-full bg-gray-300"></div>
          <div className="h-[20px] w-full rounded-full bg-gray-300"></div>
          <div className="h-[20px] w-full rounded-full bg-gray-300"></div>
          <div className="h-[20px] w-full rounded-full bg-gray-300"></div>
        </div>
      )}
    </div>
  );
}
