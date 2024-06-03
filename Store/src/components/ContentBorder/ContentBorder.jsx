"use client";
import { BsCartFill } from "react-icons/bs";
import { MdDone, MdPendingActions } from "react-icons/md";
import { RiPassPendingFill } from "react-icons/ri";
import { usePathname } from "next/navigation";

export default function ContentBorder({ data }) {
  const pathname = usePathname();
  return (
    <div>
      {pathname === "/dashboard" && (
        <div className="my-10 flex flex-wrap items-center  justify-between">
          <div className="flex items-center justify-between gap-8 border px-6 py-2">
            <div className="rounded-full bg-primary p-3 text-lg text-white">
              <BsCartFill />
            </div>
            <div className="space-y-1">
              <h1 className="">Total Order</h1>
              <p className="font-semibold">{data ? data?.orders?.length : 0}</p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-8 border px-6 py-2">
            <div className="rounded-full bg-primary p-3 text-lg text-white">
              <RiPassPendingFill />
            </div>
            <div className="space-y-1">
              <h1 className="">Orders pending</h1>
              <p className="font-semibold">{data ? data?.pending : 0}</p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-8 border px-6 py-2">
            <div className="rounded-full bg-primary p-3 text-lg text-white">
              <MdPendingActions />
            </div>
            <div className="space-y-1">
              <h1 className="">Orders Processing</h1>
              <p className="font-semibold">{data ? data?.processing : 0}</p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-8 border px-6 py-2">
            <div className="rounded-full bg-primary p-3 text-lg text-white">
              <MdDone />
            </div>
            <div className="space-y-1">
              <h1 className="">Orders Complete</h1>
              <p className="font-semibold">{data ? data?.delivered : 0}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
