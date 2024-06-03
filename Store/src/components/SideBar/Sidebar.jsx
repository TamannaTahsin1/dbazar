"use client";
import { IoMdSettings } from "react-icons/io";
import { IoLogOutSharp } from "react-icons/io5";
import { TbBorderCorners } from "react-icons/tb";
import { MdDashboardCustomize } from "react-icons/md";
import { GoNote } from "react-icons/go";
import Link from "next/link";
import { UserContext } from "@/context/UserContext";
import { useContext } from "react";
import Cookies from "js-cookie";

export default function Sidebar() {
  const { dispatch } = useContext(UserContext);
  return (
    <div className="w-max cursor-pointer space-y-5 rounded-xl px-4 py-3 shadow">
      <div className="w-full rounded-md border-2 border-primary px-5 py-[6px] text-primary hover:bg-primary hover:text-white">
        <Link href="/dashboard" className="flex items-center gap-2 text-start">
          <TbBorderCorners /> Dashboard
        </Link>
      </div>
      <div className="w-full rounded-md border-2 border-primary px-5 py-[6px] text-primary hover:bg-primary hover:text-white">
        <Link
          href="/dashboard/myorders"
          className="flex items-center gap-2 text-start"
        >
          <MdDashboardCustomize /> My Orders
        </Link>
      </div>
      <div className="w-full rounded-md border-2 border-primary px-5 py-[6px] text-primary hover:bg-primary hover:text-white">
        <Link
          href="/dashboard/updateprofile"
          className="flex items-center gap-2 text-start"
        >
          <IoMdSettings /> Update Profile
        </Link>
      </div>
      <div className="w-full rounded-md border-2 border-primary px-5 py-[6px] text-primary hover:bg-primary hover:text-white">
        <Link
          href="/dashboard/changepassword"
          className="flex items-center gap-2 text-start"
        >
          <GoNote /> Change Password
        </Link>
      </div>

      <div className="w-full rounded-md border-2 border-primary px-5 py-[6px] text-primary hover:bg-primary hover:text-white">
        <button
          onClick={() => {
            dispatch({ type: "USER_LOGOUT" });
            Cookies.remove("userInfo");
          }}
          className="flex items-center gap-2 text-start"
        >
          <IoLogOutSharp /> Log out
        </button>
      </div>
    </div>
  );
}
