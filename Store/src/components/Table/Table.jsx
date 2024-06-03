"use client";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const CustomersTable = () => {
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
      name: "ID",
      selector: (row) => row._id,
      width: "230px",
    },
    {
      name: "Order Time",
      selector: (row) => row.createdAt,
      width: "230px",
    },
    {
      name: "Method",
      selector: (row) => row.paymentMethod,
    },
    {
      name: "Status",
      selector: (row) => (
        <p
          className={`rounded-xl px-2 py-1 ${row.status === "Delivered" ? "bg-green-100 text-green-600" : row.status === "Pending" ? "bg-yellow-100 text-yellow-700" : row.status === "Processing" ? "bg-cyan-100 text-cyan-700" : row.status === "Canceled" ? "bg-red-100 text-red-700" : "bg-gray-300 text-black"}`}
        >
          {row?.status}
        </p>
      ),
      width: "120px",
    },
    {
      name: "Total",
      selector: (row) => <p>${row?.total}</p>,
    },
    {
      name: "Action",
      selector: (row) => <p>Details</p>,
    },
  ];

  const customStyles = {
    rows: {
      style: {
        minHeight: "72px",
        maxWidth: "1300px",
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
        maxWidth: "1300px",
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
    <div className="mx-auto max-w-[1300px] rounded-2xl shadow-[0_0_4px_rgba(0,0,0,0.1)]">
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
            <p className="text-sm text-white">ID</p>
            <p className="text-sm text-white">Joining Date</p>
            <p className="text-sm text-white">Name</p>
            <p className="text-sm text-white">Email</p>
            <p className="text-sm text-white">Number</p>
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

export default CustomersTable;
