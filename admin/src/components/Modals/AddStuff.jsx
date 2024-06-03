"use client";
import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { IoIosAddCircleOutline } from "react-icons/io";
import Input from "../Input/Input";
import FileUpload from "../Input/FileUpload";
import Select from "../Select/Select";
const options = ["CEO", "Admin", "Accountant", "Manager"];
const AddStuff = () => {
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [openModal]);
  return (
    <div>
      {/* Pay Button */}
      <Button
        className="bg-primary hover:bg-primary-600"
        onClick={() => setOpenModal(true)}
      >
        <IoIosAddCircleOutline />
        Add Staff
      </Button>
      <div
        onClick={() => setOpenModal(false)}
        className={`fixed inset-0 z-10  h-full w-full bg-gray-600/10 ${openModal ? "opacity-1 visible" : "invisible opacity-0"}`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`fixed left-auto right-0 top-[85px] flex w-full max-w-4xl justify-center overflow-x-hidden overflow-y-scroll bg-white drop-shadow-md ${openModal ? "opacity-1 visible translate-y-0 duration-300" : "invisible translate-y-32 opacity-0 duration-200"}`}
          style={{ height: "calc(100vh - 85px)" }}
        >
          <div className="w-full px-4 py-8 sm:px-6 lg:px-8">
            <div className="w-full space-y-3">
              <Select
                className="w-full"
                label="Staff Role"
                options={options}
                defaultValue="Select Role"
              />
              <Input
                type="text"
                label="Staff Name"
                id="_addStaff_name"
                placeholder="Staff Name"
              />
              <Input
                type="email"
                label="Email"
                id="_addStaff_email"
                placeholder="Email"
              />
              <FileUpload />
              <Input
                type="password"
                label="Password"
                id="_addStaff_password"
                placeholder="Password"
              />
              <Input
                type="text"
                label="Contact"
                id="_addStaff_contact"
                placeholder="Contact"
              />
              <Input
                type="text"
                label="Joining Date"
                id="_addStaff_joiningDate"
                placeholder="Joining Date"
              />
            </div>

            <div className="flex items-center justify-between gap-3 py-5">
              <Button
                onClick={() => {
                  setOpenModal(false);
                }}
                className="w-full bg-red-600"
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                  setOpenModal(false);
                }}
                className="w-full bg-primary"
              >
                Add Staff
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStuff;
