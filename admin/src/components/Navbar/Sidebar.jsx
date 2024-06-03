"use client";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { FaRegAddressCard } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiGlobeHemisphereWest } from "react-icons/pi";
import { RiFlowChart } from "react-icons/ri";
import { TbSettingsCog, TbShoppingBagPlus } from "react-icons/tb";
import { FaWifi } from "react-icons/fa6";
import adminLogo from "../../../public/adminLogo.png";
import { RiMenuFoldLine } from "react-icons/ri";
import Dropdown from "@/components/Navbar/Dropdown";
import Link from "next/link";
import { IoPartlySunnyOutline } from "react-icons/io5";
import { BsCloudMoon } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { BsGear } from "react-icons/bs";
import { IoLogOutOutline } from "react-icons/io5";

const Sidebar = ({ children }) => {
  // state - dark mode
  const [isDark, setIsDark] = useState(false);

  // state - userModal
  const [userModal, setUserModal] = useState(false);

  const routeArray = [
    {
      route: "Dashboard",
      icon: <LuLayoutDashboard />,
    },
    {
      route: "Catalog",
      icon: <RiFlowChart />,
      subRoute: ["Products", "Categories", "Attributes", "Coupons"],
    },
    {
      route: "Customers",
      icon: <HiOutlineUserGroup />,
    },
    {
      route: "Orders",
      icon: <TbShoppingBagPlus />,
    },
    {
      route: "Staff",
      icon: <FaRegAddressCard />,
    },
    {
      route: "Settings",
      icon: <TbSettingsCog />,
    },
    {
      route: "International",
      icon: <PiGlobeHemisphereWest />,
      subRoute: ["Currencies"],
    },
    {
      route: "Online",
      icon: <FaWifi />,
      subRoute: ["View Store", "Store Customization", "Store Settings"],
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  }, []);

  const dropDownMenuRef = useRef();

  useEffect(() => {
    const closeDropDown = (e) => {
      if (
        dropDownMenuRef.current &&
        !dropDownMenuRef.current.contains(e.target) &&
        window.innerWidth <= 768
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", closeDropDown);
  }, []);
  return (
    <div>
      <div className="sticky top-0 z-30 flex h-[85px] w-full  items-center justify-between border-b border-gray-100  bg-white pl-6">
        <Image
          className="w-[60px]"
          src={adminLogo}
          placeholder="blur"
          alt="admin logo"
        />
        <div className="flex items-center gap-8 pr-6">
          {/* day night - toggle  */}
          <div
            onClick={() => {
              setIsDark(!isDark);
            }}
          >
            {isDark ? (
              <BsCloudMoon className="text-[30px] text-[#3B82F6]" />
            ) : (
              <IoPartlySunnyOutline className="text-[30px] text-[#3B82F6]" />
            )}
          </div>
          {/* bell icon  */}
          <div className="relative">
            <BsBell className="text-[30px] text-[#3B82F6]" />
            <div className="absolute -left-1 -top-2 flex size-5 items-center justify-center rounded-full bg-red-500 text-sm font-medium text-white">
              5
            </div>
          </div>
          <div
            onClick={() => setUserModal(!userModal)}
            className="relative rounded-full border-[2px] border-[#3B82F6] p-2"
          >
            <CiUser className="text-[25px] text-[#3B82F6]" />
            {/* user Modal  */}
            <div
              className={`absolute -left-[200px] min-h-[100px] min-w-[250px] rounded-lg bg-white  shadow-md duration-[200ms] ${userModal ? "visible top-14 opacity-100" : "invisible top-12 opacity-0"}`}
            >
              <Link
                href="/"
                className="flex items-center gap-4 px-4 py-2 font-medium text-gray-500 duration-300 hover:bg-[#3B82F6]/10 hover:text-[#3B82F6]"
              >
                <LuLayoutDashboard className="text-[20px]" />
                <h1 className="text-[18px]">Dashboard</h1>
              </Link>
              <Link
                href="/"
                className="flex items-center gap-4 px-4 py-2 font-medium text-gray-500 duration-300 hover:bg-[#3B82F6]/10 hover:text-[#3B82F6]"
              >
                <BsGear className="text-[20px]" />
                <h1 className="text-[18px]">Edit Profile</h1>
              </Link>
              <Link
                href="/"
                className="flex items-center gap-4 px-4 py-2 font-medium text-gray-500 duration-300 hover:bg-[#3B82F6]/10 hover:text-[#3B82F6]"
              >
                <IoLogOutOutline className="text-[20px]" />
                <h1 className="text-[18px]">Logout</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* sidebar - part  */}
        <div
          ref={dropDownMenuRef}
          className={`fixed top-[85px] z-30 h-full md:sticky md:h-[calc(100vh-85px)] ${isOpen ? "visible left-0 w-[250px] opacity-100 md:w-[310px]" : "invisible -left-4 opacity-0 md:visible md:block md:w-[70px] md:overflow-hidden md:opacity-100"} overflow-y-auto border-r border-gray-200/70 bg-white px-6 py-6 duration-300`}
        >
          {routeArray?.map((route, idx) => (
            <div key={idx}>
              {/* if subRoute exist  */}
              {route?.subRoute ? (
                <Dropdown
                  setIsOpen={setIsOpen}
                  isOpen={isOpen}
                  route={route}
                ></Dropdown>
              ) : (
                //  else
                <Link
                  href={`/${route?.route === "Dashboard" ? "" : route?.route.replace(/\s+/g, "").toLowerCase()}`}
                  className="group flex items-center gap-4 py-3"
                >
                  <span className="text-[20px] text-gray-600 group-hover:text-[#3B82F6]">
                    {route?.icon}
                  </span>
                  {
                    <h4
                      key={idx}
                      className={`${isOpen ? "" : "invisible opacity-0"} font-medium capitalize text-[14x] text-gray-600 duration-300 group-hover:text-[#3B82F6]`}
                    >
                      {route?.route}
                    </h4>
                  }
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="size-full min-h-screen bg-gray-50">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className={`sticky top-[85px] z-20 flex size-[50px] items-center justify-center rounded-br-3xl border-r border-gray-200 bg-white shadow duration-300`}
          >
            <RiMenuFoldLine
              className={`text-[25px] text-gray-600 duration-300 ${isOpen ? "" : "rotate-180"} `}
            />
          </div>

          {/* outlet - part  */}
          <div className=" p-2 md:p-6">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
