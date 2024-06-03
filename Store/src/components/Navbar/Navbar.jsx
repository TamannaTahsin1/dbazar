"use client";
import { UserContext } from "@/context/UserContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useRef } from "react";
import { useFormStatus } from "react-dom";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosLogIn, IoIosSearch } from "react-icons/io";
import { MdDashboardCustomize } from "react-icons/md";
import { RiNotification2Line } from "react-icons/ri";
import { TbBorderCorners } from "react-icons/tb";
import logo from "../../../public/Images/d_bazar_logo.png";
import Cart from "../Cart/Cart";
import Header from "./Header";
import Cookies from "js-cookie";
import { IoLogOut } from "react-icons/io5";
import Input from "../Input/Input";

export default function Navbar() {
  const { pending } = useFormStatus();
  const formRef = useRef();
  const router = useRouter();
  const { state, dispatch } = useContext(UserContext);
  // console.log(state.userInfo);
  const user = state.userInfo;

  const something = (formData) => {
    let query = formData.get("query");
    router.push(`/products?query=${query}`);
  };

  return (
    <div className="sticky top-0 z-50">
      <div className="bg-primary">
        <div className="mx-auto max-w-[1500px] px-2 md:px-6 lg:px-12 lg:py-2">
          <div className="flex items-center justify-between p-2">
            <Link href="/">
              <Image src={logo} className="w-10 md:w-14 lg:w-16" alt="" />
            </Link>
            <div className="hidden lg:block">
              <form
                ref={formRef}
                action={something}
                className="flex items-center justify-center"
              >
                <input
                  type="text"
                  placeholder="Search for products"
                  name="query"
                  disabled={pending}
                  className="mr-2 w-[600px] rounded-lg bg-white p-2"
                />
                <IoIosSearch className="-ml-10 text-xl text-slate-400" />
              </form>
            </div>
            <div className="flex items-center justify-center gap-5 lg:gap-10">
              <button className="text-2xl text-white">
                <RiNotification2Line />
              </button>
              <Cart>
                <FiShoppingCart className="text-2xl text-white" />
              </Cart>
              <div className="group relative text-2xl text-white">
                <FaRegUser />
                {/* dropdown - options  */}
                <div
                  className={`invisible absolute right-0 top-8 z-50 rounded-xl border bg-white p-2 text-sm opacity-0 shadow-md duration-150 group-hover:visible group-hover:opacity-100`}
                >
                  <div className="space-y-3 text-gray-500">
                    {user ? (
                      <div>
                        <Link
                          href="/dashboard"
                          className="flex items-center gap-3 rounded-md p-2 text-black duration-200 hover:bg-primary hover:text-white"
                        >
                          <TbBorderCorners /> Dashboard
                        </Link>
                        <Link
                          href="/dashboard/myorders"
                          className="flex items-center gap-3 rounded-md p-2 text-black duration-200 hover:bg-primary  hover:text-white"
                        >
                          <MdDashboardCustomize /> My Orders
                        </Link>
                        <button
                          onClick={() => {
                            dispatch({ type: "USER_LOGOUT" });
                            Cookies.remove("userInfo");
                          }}
                          className="flex w-full items-center gap-3 rounded-md p-2 text-black duration-200 hover:bg-primary  hover:text-white"
                        >
                          <IoLogOut />
                          Logout
                        </button>
                      </div>
                    ) : (
                      <Link
                        href="/login"
                        className="flex items-center gap-3 rounded-md p-2 text-black duration-200 hover:bg-primary  hover:text-white"
                      >
                        <IoIosLogIn />
                        Login
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md">
        <Header></Header>
      </div>
    </div>
  );
}
